import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

type Variant = "coupe" | "wagon" | "truck";

const MODEL_FOR: Record<Variant, string> = {
  coupe: "/models/sedan-sports.glb",
  wagon: "/models/suv.glb",
  truck: "/models/hatchback-sports.glb",
};

type Props = {
  variant?: Variant;
  modelUrl?: string;
  yaw?: number;
  pitch?: number;
  className?: string;
  ariaLabel?: string;
};

const sharedLoader = new GLTFLoader();

export default function WireframeCar({
  variant = "coupe",
  modelUrl,
  yaw = -0.6,
  pitch = 0.18,
  className,
  ariaLabel = "wireframe car",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const url = modelUrl ?? MODEL_FOR[variant];

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.style.display = "block";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(24, 1, 0.1, 100);

    const cssColor = getComputedStyle(container).color || "#ffffff";
    const lineMat = new THREE.LineBasicMaterial({ color: new THREE.Color(cssColor) });

    const root = new THREE.Group();
    scene.add(root);

    let disposed = false;
    let modelMaxDim = 4;

    const resizeAndRender = () => {
      const W = container.clientWidth || 1;
      const H = container.clientHeight || 1;
      renderer.setSize(W, H, false);
      camera.aspect = W / H;
      camera.updateProjectionMatrix();
      // Camera distance keyed to model size so the car fills the frame
      const fovRad = (camera.fov * Math.PI) / 180;
      const halfH = modelMaxDim * 0.46;
      const halfW = modelMaxDim * 0.95;
      const fitDist = Math.max(halfH / Math.tan(fovRad / 2), halfW / (Math.tan(fovRad / 2) * camera.aspect));
      camera.position.set(0, 0, fitDist * 1.05);
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
    };

    sharedLoader.load(
      url,
      (gltf) => {
        if (disposed) return;
        const model = gltf.scene;
        model.updateMatrixWorld(true);

        const box = new THREE.Box3().setFromObject(model);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());
        modelMaxDim = Math.max(size.x, size.y, size.z);
        const fitScale = 4 / modelMaxDim;
        modelMaxDim = 4;

        const wireframeRoot = new THREE.Group();
        model.traverse((obj) => {
          const mesh = obj as THREE.Mesh;
          if (!mesh.isMesh || !mesh.geometry) return;
          const edges = new THREE.EdgesGeometry(mesh.geometry, 8);
          const seg = new THREE.LineSegments(edges, lineMat);
          mesh.updateWorldMatrix(true, false);
          seg.applyMatrix4(mesh.matrixWorld);
          wireframeRoot.add(seg);
        });
        wireframeRoot.position.sub(center.multiplyScalar(fitScale));
        wireframeRoot.scale.setScalar(fitScale);

        const tilted = new THREE.Group();
        tilted.add(wireframeRoot);
        tilted.rotation.y = yaw;
        tilted.rotation.x = pitch;
        root.add(tilted);

        resizeAndRender();
      },
      undefined,
      (err) => console.error("[WireframeCar] load error", url, err),
    );

    const ro = new ResizeObserver(() => resizeAndRender());
    ro.observe(container);

    return () => {
      disposed = true;
      ro.disconnect();
      lineMat.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [variant, modelUrl, yaw, pitch]);

  return (
    <div
      ref={ref}
      role="img"
      aria-label={ariaLabel}
      className={className}
      style={{ width: "100%", height: "100%" }}
    />
  );
}
