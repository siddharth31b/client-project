"use client";

import React, { useEffect, useRef, useState, useSyncExternalStore } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { useTheme } from "next-themes";

const emptySubscribe = () => () => {};

export interface ArcData {
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  color?: string | string[];
  altitude?: number;
  stroke?: number;
  dashLength?: number;
  dashGap?: number;
  dashInitialGap?: number;
}

export interface MarkerData {
  lat: number;
  lng: number;
  size?: number;
  color?: string;
  label?: string;
}

export interface GlobeProps {
  width?: number | "auto";
  height?: number | "auto";
  autoRotateSpeed?: number;
  enableZoom?: boolean;
  interactive?: boolean;
  arcCount?: number;
  arcAnimationDuration?: number;
  cameraAltitude?: number;
  className?: string;
  arcs?: ArcData[];
  markers?: MarkerData[];
  onReady?: () => void;
  onGlobeClick?: (coords: { lat: number; lng: number }, event: MouseEvent) => void;
}

const PINK_MAGENTA_ARCS: ArcData[] = [
  // 1. Europe to India: London -> Mumbai (sweeping elegant curve across Middle East)
  { startLat: 51.5074, startLng: -0.1278, endLat: 19.076, endLng: 72.8777, color: ["#f472b6", "#ec4899"], altitude: 0.18, stroke: 0.18, dashInitialGap: 0.0 },
  // 2. Middle East to India: Dubai -> Mumbai
  { startLat: 25.2048, startLng: 55.2708, endLat: 19.076, endLng: 72.8777, color: ["#f472b6", "#ec4899"], altitude: 0.12, stroke: 0.18, dashInitialGap: 0.5 },
  // 3. India to Southeast Asia: New Delhi -> Singapore
  { startLat: 28.6139, startLng: 77.209, endLat: 1.3521, endLng: 103.8198, color: ["#ec4899", "#f472b6"], altitude: 0.15, stroke: 0.18, dashInitialGap: 1.0 },
  // 4. India to East Asia: New Delhi -> Tokyo
  { startLat: 28.6139, startLng: 77.209, endLat: 35.6762, endLng: 139.6503, color: ["#f472b6", "#ec4899"], altitude: 0.20, stroke: 0.18, dashInitialGap: 0.3 },
  // 5. Southeast Asia to East Asia: Singapore -> Tokyo
  { startLat: 1.3521, startLng: 103.8198, endLat: 35.6762, endLng: 139.6503, color: ["#ec4899", "#e879f9"], altitude: 0.16, stroke: 0.18, dashInitialGap: 0.8 },
  // 6. Western Europe to Middle East: Paris -> Dubai
  { startLat: 48.8566, startLng: 2.3522, endLat: 25.2048, endLng: 55.2708, color: ["#f472b6", "#ec4899"], altitude: 0.17, stroke: 0.18, dashInitialGap: 1.3 },
  // 7. Middle East to East Asia: Dubai -> Tokyo
  { startLat: 25.2048, startLng: 55.2708, endLat: 35.6762, endLng: 139.6503, color: ["#f472b6", "#ec4899"], altitude: 0.20, stroke: 0.18, dashInitialGap: 0.4 },
  // 8. India to Europe: Mumbai -> Frankfurt
  { startLat: 19.076, startLng: 72.8777, endLat: 50.1109, endLng: 8.6821, color: ["#f472b6", "#ec4899"], altitude: 0.19, stroke: 0.18, dashInitialGap: 0.9 },
  // 9. East Africa to India: Nairobi -> Chennai
  { startLat: -1.2921, startLng: 36.8219, endLat: 13.0827, endLng: 80.2707, color: ["#ec4899", "#f472b6"], altitude: 0.15, stroke: 0.18, dashInitialGap: 0.2 },
  // 10. Western Limb Loop: Nairobi -> London
  { startLat: -1.2921, startLng: 36.8219, endLat: 51.5074, endLng: -0.1278, color: ["#f472b6", "#e879f9"], altitude: 0.20, stroke: 0.18, dashInitialGap: 0.7 },
  // 11. Australia to Southeast Asia: Sydney -> Singapore
  { startLat: -33.8688, startLng: 151.2093, endLat: 1.3521, endLng: 103.8198, color: ["#f472b6", "#e879f9"], altitude: 0.19, stroke: 0.18, dashInitialGap: 1.2 },
  // 12. Southern Indian Ocean loop: Cape Town -> Perth
  { startLat: -33.9249, startLng: 18.4241, endLat: -31.9505, endLng: 115.8605, color: ["#ec4899", "#f472b6"], altitude: 0.21, stroke: 0.18, dashInitialGap: 0.6 },
  // 13. East Asia to Australia: Tokyo -> Sydney
  { startLat: 35.6762, startLng: 139.6503, endLat: -33.8688, endLng: 151.2093, color: ["#f472b6", "#ec4899"], altitude: 0.20, stroke: 0.18, dashInitialGap: 1.1 },
  // 14. Arabian Peninsula to India: Riyadh -> Mumbai
  { startLat: 24.7136, startLng: 46.6753, endLat: 19.076, endLng: 72.8777, color: ["#ec4899", "#f472b6"], altitude: 0.13, stroke: 0.18, dashInitialGap: 0.1 },
  // 15. India to Southern Africa: Chennai -> Johannesburg
  { startLat: 13.0827, startLng: 80.2707, endLat: -26.2041, endLng: 28.0473, color: ["#ec4899", "#f472b6"], altitude: 0.18, stroke: 0.18, dashInitialGap: 0.8 },
  // 16. Mediterranean loop: Rome -> Dubai
  { startLat: 41.9028, startLng: 12.4964, endLat: 25.2048, endLng: 55.2708, color: ["#f472b6", "#ec4899"], altitude: 0.16, stroke: 0.18, dashInitialGap: 1.4 },
];

const DARK_ARCS: ArcData[] = PINK_MAGENTA_ARCS;
const LIGHT_ARCS: ArcData[] = PINK_MAGENTA_ARCS;

// Marker dots matching the exact small size of the continent dots on the globe
const DEFAULT_MARKERS: MarkerData[] = [
  { lat: 28.6139, lng: 77.209, size: 0.11, color: "#ec4899", label: "New Delhi" },
  { lat: 19.076, lng: 72.8777, size: 0.11, color: "#ec4899", label: "Mumbai" },
  { lat: 13.0827, lng: 80.2707, size: 0.11, color: "#ec4899", label: "Chennai" },
  { lat: 25.2048, lng: 55.2708, size: 0.11, color: "#ec4899", label: "Dubai" },
  { lat: 24.7136, lng: 46.6753, size: 0.11, color: "#ec4899", label: "Riyadh" },
  { lat: 1.3521, lng: 103.8198, size: 0.11, color: "#ec4899", label: "Singapore" },
  { lat: 35.6762, lng: 139.6503, size: 0.11, color: "#ec4899", label: "Tokyo" },
  { lat: 51.5074, lng: -0.1278, size: 0.11, color: "#ec4899", label: "London" },
  { lat: 48.8566, lng: 2.3522, size: 0.11, color: "#ec4899", label: "Paris" },
  { lat: 50.1109, lng: 8.6821, size: 0.11, color: "#ec4899", label: "Frankfurt" },
  { lat: 41.9028, lng: 12.4964, size: 0.11, color: "#ec4899", label: "Rome" },
  { lat: -1.2921, lng: 36.8219, size: 0.11, color: "#ec4899", label: "Nairobi" },
  { lat: -33.8688, lng: 151.2093, size: 0.11, color: "#ec4899", label: "Sydney" },
  { lat: -31.9505, lng: 115.8605, size: 0.11, color: "#ec4899", label: "Perth" },
  { lat: -33.9249, lng: 18.4241, size: 0.11, color: "#ec4899", label: "Cape Town" },
  { lat: -26.2041, lng: 28.0473, size: 0.11, color: "#ec4899", label: "Johannesburg" },
];

export function Globe({
  width = "auto",
  height = "auto",
  autoRotateSpeed = 0.4,
  enableZoom = false,
  interactive = true,
  arcCount = 16,
  arcAnimationDuration = 2200,
  cameraAltitude = 3.6,
  className = "",
  arcs,
  markers = DEFAULT_MARKERS,
  onReady,
  onGlobeClick,
}: GlobeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const globeInstanceRef = useRef<any>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const lightsRef = useRef<{ ambient: THREE.AmbientLight; d1: THREE.DirectionalLight; d2: THREE.DirectionalLight } | null>(null);
  const countriesDataRef = useRef<any>(null);

  const [isLoaded, setIsLoaded] = useState(false);
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  // Function to apply theme-specific materials, colors, and lighting
  const applyTheme = (darkMode: boolean) => {
    const globe = globeInstanceRef.current;
    const lights = lightsRef.current;
    if (!globe) return;

    if (darkMode) {
      // Dark Theme: Obsidian pitch-black sphere matching reference image 2
      const mat = globe.globeMaterial() as THREE.MeshPhongMaterial;
      if (mat) {
        mat.color = new THREE.Color(0x07080b);
        mat.emissive = new THREE.Color(0x030406);
        mat.emissiveIntensity = 0.15;
        mat.shininess = 12;
        mat.needsUpdate = true;
      }

      // Subtle deep atmospheric edge without blinding cyan glare
      globe
        .atmosphereColor("#1e1b4b")
        .atmosphereAltitude(0.1)
        .showAtmosphere(true);

      // Continent Dotted Matrix in Dark mode: Luminous silver-white dots
      globe
        .hexPolygonColor((feat: any) => {
          const id = feat.properties?.MAPCOLOR13 || 1;
          if (id % 4 === 0) return "rgba(248, 250, 252, 0.95)";
          if (id % 4 === 1) return "rgba(226, 232, 240, 0.88)";
          if (id % 4 === 2) return "rgba(203, 213, 225, 0.82)";
          return "rgba(241, 245, 249, 0.9)";
        })
        .hexPolygonAltitude(0.007);

      // Arcs in Dark mode: Delicate luminous pink/magenta hairline with animated traveling dashes
      const activeArcs = (arcs || DARK_ARCS).slice(0, arcCount);
      globe
        .arcColor((d: any) => d.color || ["#f472b6", "#ec4899"])
        .arcStroke(0.18)
        .arcDashLength((d: any) => d.dashLength ?? 0.45)
        .arcDashGap((d: any) => d.dashGap ?? 1.6)
        .arcDashInitialGap((d: any) => d.dashInitialGap ?? 0)
        .arcDashAnimateTime(arcAnimationDuration || 2400)
        .arcsData(activeArcs);

      // Markers points in Dark mode: Micro-points matching continent dot size
      globe
        .pointColor((d: any) => d.color || "#f472b6")
        .pointRadius((d: any) => d.size ?? 0.11);

      // Lighting in Dark mode
      if (lights) {
        lights.ambient.intensity = 1.1;
        lights.ambient.color.setHex(0xffffff);
        lights.d1.intensity = 2.4;
        lights.d1.color.setHex(0xffffff);
        lights.d2.intensity = 1.2;
        lights.d2.color.setHex(0x818cf8);
      }
    } else {
      // Light Theme: Porcelain pearl-white sphere matching reference image 1
      const mat = globe.globeMaterial() as THREE.MeshPhongMaterial;
      if (mat) {
        mat.color = new THREE.Color(0xf6f8fa);
        mat.emissive = new THREE.Color(0xecf0f4);
        mat.emissiveIntensity = 0.22;
        mat.shininess = 20;
        mat.needsUpdate = true;
      }

      // No harsh halo or cyan ring in light mode - clean physical sphere edge
      globe.showAtmosphere(false);

      // Continent Dotted Matrix in Light mode: Crisp slate/charcoal dots
      globe
        .hexPolygonColor((feat: any) => {
          const id = feat.properties?.MAPCOLOR13 || 1;
          if (id % 3 === 0) return "rgba(51, 65, 85, 0.9)";
          if (id % 3 === 1) return "rgba(71, 85, 105, 0.85)";
          return "rgba(100, 116, 139, 0.82)";
        })
        .hexPolygonAltitude(0.007);

      // Arcs in Light mode: Delicate vibrant pink/magenta hairline with animated traveling dashes
      const activeArcs = (arcs || LIGHT_ARCS).slice(0, arcCount);
      globe
        .arcColor((d: any) => d.color || ["#f472b6", "#ec4899"])
        .arcStroke(0.18)
        .arcDashLength((d: any) => d.dashLength ?? 0.45)
        .arcDashGap((d: any) => d.dashGap ?? 1.6)
        .arcDashInitialGap((d: any) => d.dashInitialGap ?? 0)
        .arcDashAnimateTime(arcAnimationDuration || 2400)
        .arcsData(activeArcs);

      // Markers points in Light mode: Micro-dots matching continent dot size
      globe
        .pointColor(() => "#ec4899")
        .pointRadius((d: any) => d.size ?? 0.11);

      // Lighting in Light mode: Crisp bright illumination
      if (lights) {
        lights.ambient.intensity = 1.6;
        lights.ambient.color.setHex(0xffffff);
        lights.d1.intensity = 2.0;
        lights.d1.color.setHex(0xffffff);
        lights.d2.intensity = 0.8;
        lights.d2.color.setHex(0xe2e8f0);
      }
    }
  };

  // Re-apply theme when resolvedTheme changes
  useEffect(() => {
    applyTheme(isDark);
  }, [isDark]);

  useEffect(() => {
    let isMounted = true;
    let animationId: number;
    let renderer: THREE.WebGLRenderer | null = null;
    let controls: OrbitControls | null = null;
    let resizeObserver: ResizeObserver | null = null;

    async function initGlobe() {
      if (!canvasRef.current || !containerRef.current) return;

      // Dynamically import ThreeGlobe on the client side only to satisfy Next.js SSR
      const { default: ThreeGlobe } = await import("three-globe");
      if (!isMounted || !canvasRef.current || !containerRef.current) return;

      const container = containerRef.current;
      const initialWidth = width === "auto" ? container.clientWidth || 500 : width;
      const initialHeight = height === "auto" ? container.clientHeight || 500 : height;

      // 1. Scene setup
      const scene = new THREE.Scene();
      sceneRef.current = scene;

      // 2. Camera setup - camera altitude tuned for zero clipping with atmosphere breathing room
      const camera = new THREE.PerspectiveCamera(45, initialWidth / initialHeight, 1, 1000);
      camera.position.set(0, 0, 100 * cameraAltitude);

      // 3. Renderer setup
      renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current,
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(initialWidth, initialHeight);

      // 4. Lighting setup
      const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
      scene.add(ambientLight);

      const dLight1 = new THREE.DirectionalLight(0xffffff, 2.2);
      dLight1.position.set(-300, 400, 400);
      scene.add(dLight1);

      const dLight2 = new THREE.DirectionalLight(0x818cf8, 1.2);
      dLight2.position.set(400, -200, 300);
      scene.add(dLight2);

      lightsRef.current = { ambient: ambientLight, d1: dLight1, d2: dLight2 };

      // 5. ThreeGlobe instance
      const globe = new ThreeGlobe();
      globeInstanceRef.current = globe;

      // Arcs setup: Delicate continuous pink/magenta flight paths with animated traveling dashes
      globe
        .arcColor((d: any) => d.color || ["#f472b6", "#ec4899"])
        .arcAltitude((d: any) => d.altitude ?? 0.16)
        .arcStroke((d: any) => d.stroke ?? 0.18)
        .arcDashLength((d: any) => d.dashLength ?? 0.45)
        .arcDashGap((d: any) => d.dashGap ?? 1.6)
        .arcDashInitialGap((d: any) => d.dashInitialGap ?? 0)
        .arcDashAnimateTime(arcAnimationDuration || 2400);

      // Markers points: Micro-points matching the continent dot size
      const markerPoints = markers.map((m) => ({
        lat: m.lat,
        lng: m.lng,
        size: m.size ?? 0.11,
        color: m.color || "#ec4899",
      }));
      globe
        .pointsData(markerPoints)
        .pointLat((d: any) => d.lat)
        .pointLng((d: any) => d.lng)
        .pointColor((d: any) => d.color)
        .pointRadius((d: any) => d.size ?? 0.11)
        .pointAltitude(0.009);

      // 6. Fetch high-precision Natural Earth GeoJSON for crystal-clear map geometry
      try {
        const res = await fetch("/countries.geojson");
        const countries = await res.json();
        if (isMounted && countries?.features) {
          countriesDataRef.current = countries;

          const nonAntarctic = countries.features.filter((d: any) => d.properties?.ISO_A2 !== "AQ");

          // Render uniform Dotted Matrix point cloud for continents matching reference images
          globe
            .hexPolygonsData(nonAntarctic)
            .hexPolygonResolution(3)
            .hexPolygonMargin(0.58)
            .hexPolygonUseDots(true)
            .hexPolygonDotResolution(12)
            .hexPolygonAltitude(0.007);
        }
      } catch (err) {
        console.warn("Could not load /countries.geojson, using fallback points:", err);
      }

      // Apply current theme settings
      applyTheme(isDark);

      scene.add(globe);

      // 7. Orbit Controls
      controls = new OrbitControls(camera, renderer.domElement);
      controls.enableZoom = enableZoom;
      controls.autoRotate = autoRotateSpeed > 0;
      controls.autoRotateSpeed = autoRotateSpeed;
      controls.enablePan = false;
      controls.enableDamping = true;
      controls.dampingFactor = 0.06;
      controls.minDistance = 200;
      controls.maxDistance = 500;

      if (!interactive) {
        controls.enabled = false;
      }

      // Initial orientation: position camera directly facing India & Indian Ocean (lat 18°N, lng 78°E) matching reference images
      const targetCoords = globe.getCoords(18, 78);
      const cLen = Math.sqrt(targetCoords.x ** 2 + targetCoords.y ** 2 + targetCoords.z ** 2);
      const camDist = 100 * cameraAltitude;
      camera.position.set(
        (targetCoords.x / cLen) * camDist,
        (targetCoords.y / cLen) * camDist,
        (targetCoords.z / cLen) * camDist
      );
      camera.lookAt(0, 0, 0);
      controls.target.set(0, 0, 0);
      controls.update();

      // 8. Click listener
      if (onGlobeClick) {
        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();

        const handleClick = (e: MouseEvent) => {
          if (!canvasRef.current) return;
          const rect = canvasRef.current.getBoundingClientRect();
          mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
          mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

          raycaster.setFromCamera(mouse, camera);
          const intersects = raycaster.intersectObjects([globe], true);
          if (intersects.length > 0) {
            const point = intersects[0].point;
            const r = Math.sqrt(point.x * point.x + point.y * point.y + point.z * point.z);
            const lat = 90 - (Math.acos(point.y / r) * 180) / Math.PI;
            const lng = ((270 + (Math.atan2(point.x, point.z) * 180) / Math.PI) % 360) - 180;
            onGlobeClick({ lat, lng }, e);
          }
        };

        canvasRef.current.addEventListener("click", handleClick);
      }

      // 9. Animation render loop
      const animate = () => {
        if (!isMounted) return;
        animationId = requestAnimationFrame(animate);
        controls?.update();
        renderer?.render(scene, camera);
      };
      animate();

      // 10. Resize handler
      resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          const w = width === "auto" ? entry.contentRect.width : width;
          const h = height === "auto" ? entry.contentRect.height : height;
          if (w > 0 && h > 0 && renderer && camera) {
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
            renderer.setSize(w, h);
          }
        }
      });
      resizeObserver.observe(container);

      setIsLoaded(true);
      onReady?.();
    }

    initGlobe();

    return () => {
      isMounted = false;
      if (animationId) cancelAnimationFrame(animationId);
      controls?.dispose();
      resizeObserver?.disconnect();
      if (renderer) {
        renderer.dispose();
      }
    };
  }, [
    width,
    height,
    autoRotateSpeed,
    enableZoom,
    interactive,
    arcCount,
    arcAnimationDuration,
    cameraAltitude,
    arcs,
    markers,
    onReady,
    onGlobeClick,
  ]);

  return (
    <div
      ref={containerRef}
      className={`relative flex items-center justify-center select-none transition-all duration-500 ${className}`}
      style={{
        width: width === "auto" ? "100%" : `${width}px`,
        height: height === "auto" ? "100%" : `${height}px`,
      }}
    >
      <canvas
        ref={canvasRef}
        suppressHydrationWarning
        className={`h-full w-full cursor-grab active:cursor-grabbing outline-none transition-all duration-500 ${
          mounted && !isDark ? "drop-shadow-[0_25px_45px_rgba(0,0,0,0.14)]" : ""
        }`}
        aria-label="Interactive 3D Globe with crystal-clear country map and animated arcs"
        role="img"
      />
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="size-24 animate-pulse rounded-full bg-primary/10 border border-primary/20 blur-sm" />
        </div>
      )}
    </div>
  );
}

export default Globe;
