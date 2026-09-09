"use client";

import React, { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export interface BlinkingSquaresProps {
  width?: string;
  height?: string;
  className?: string;
  children?: React.ReactNode;
  direction?: "right" | "left" | "top" | "bottom";
  gridSize?: number;
  squareColor?: string;
  backgroundColor?: string;
  falloff?: number;
  fadeStart?: number;
  fadeEnd?: number;
  squareSize?: number;
  minBrightness?: number;
  twinkleSpeed?: number;
  twinkleStrength?: number;
  intensity?: number;
  opacity?: number;
  dpr?: number;
  transparentBackground?: boolean;
}

const vertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`;

const fragmentShader = `
precision highp float;

varying vec2 vUv;

uniform vec2  uRes;
uniform float uTime;
uniform float uGrid;
uniform vec2  uDir;
uniform float uFalloff;
uniform float uFadeStart;
uniform float uFadeEnd;
uniform float uSquareSize;
uniform float uMinBright;
uniform float uTwinkleSpeed;
uniform float uTwinkleStrength;
uniform float uIntensity;
uniform float uAlpha;
uniform vec3  uSquare;
uniform vec3  uBg;
uniform float uTransparentBg;

float hash21(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

void main() {
  float aspect = uRes.x / max(uRes.y, 1.0);
  vec2 cellsXY = vec2(uGrid * aspect, uGrid);
  if (aspect < 1.0) cellsXY = vec2(uGrid, uGrid / max(aspect, 0.0001));

  vec2 gridUv = vUv * cellsXY;
  vec2 cellId = floor(gridUv);
  vec2 cellUv = fract(gridUv) - 0.5;

  vec2 cellCenter = (cellId + 0.5) / cellsXY;
  vec2 centered = cellCenter * 2.0 - 1.0;
  float t = clamp(dot(centered, uDir) * 0.5 + 0.5, 0.0, 1.0);

  float fs = clamp(uFadeStart, 0.0, 0.999);
  float fe = clamp(uFadeEnd, fs + 0.001, 1.0);
  float remap = clamp((t - fs) / (fe - fs), 0.0, 1.0);
  float density = pow(remap, max(uFalloff, 0.0001));

  float gate = hash21(cellId + 11.7);
  float bRnd = hash21(cellId + 47.3);
  float pRnd = hash21(cellId + 91.1);

  float lit = step(gate, density);

  float half_ = clamp(uSquareSize, 0.05, 0.98) * 0.5;
  float inside = step(abs(cellUv.x), half_) * step(abs(cellUv.y), half_);

  float baseBright = mix(clamp(uMinBright, 0.0, 1.0), 1.0, bRnd);

  float phase = pRnd * 6.2831853;
  float speed = uTwinkleSpeed * (0.6 + 0.8 * bRnd);
  float pulse = 0.5 + 0.5 * sin(uTime * speed + phase);
  float twinkle = mix(1.0 - uTwinkleStrength, 1.0, pulse);

  float mask = inside * lit * baseBright * twinkle * uIntensity;

  if (uTransparentBg > 0.5) {
    float alpha = clamp(mask, 0.0, 1.0) * uAlpha;
    gl_FragColor = vec4(uSquare, alpha);
  } else {
    vec3 col = mix(uBg, uSquare, clamp(mask, 0.0, 1.0));
    gl_FragColor = vec4(col, uAlpha);
  }
}
`;

function hexToRgb(hex: string): [number, number, number] {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? [
        parseInt(result[1], 16) / 255,
        parseInt(result[2], 16) / 255,
        parseInt(result[3], 16) / 255,
      ]
    : [0, 0, 0];
}

function getDirectionVector(
  direction: "right" | "left" | "top" | "bottom"
): [number, number] {
  switch (direction) {
    case "left":
      return [-1, 0];
    case "top":
      return [0, 1];
    case "bottom":
      return [0, -1];
    default:
      return [1, 0];
  }
}

const BlinkingSquares: React.FC<BlinkingSquaresProps> = ({
  width = "100%",
  height = "100%",
  className,
  children,
  direction = "right",
  gridSize = 52,
  squareColor = "#BB29FF",
  backgroundColor,
  falloff = 1.25,
  fadeStart = 0.65,
  fadeEnd = 1,
  squareSize = 0.57,
  minBrightness = 0.55,
  twinkleSpeed = 1.4,
  twinkleStrength = 0.94,
  intensity = 1,
  opacity = 1,
  dpr = 1.5,
  transparentBackground = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const materialRef = useRef<THREE.ShaderMaterial | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  const { resolvedTheme } = useTheme();

  const effectiveBgColor = useMemo(() => {
    if (backgroundColor) return backgroundColor;
    return resolvedTheme === "dark" ? "#000000" : "#ffffff";
  }, [backgroundColor, resolvedTheme]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 300;
    const height = container.clientHeight || 300;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const renderer = new THREE.WebGLRenderer({
      antialias: false,
      alpha: true,
      powerPreference: "high-performance",
    });

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, dpr));
    renderer.setClearColor(0x000000, transparentBackground ? 0 : 1);

    const domElement = renderer.domElement;
    domElement.style.position = "absolute";
    domElement.style.inset = "0";
    domElement.style.width = "100%";
    domElement.style.height = "100%";
    domElement.style.pointerEvents = "none";
    container.appendChild(domElement);
    rendererRef.current = renderer;

    const [dirX, dirY] = getDirectionVector(direction);
    const squareRgb = hexToRgb(squareColor);
    const bgRgb = hexToRgb(effectiveBgColor);

    const uniforms = {
      uTime: { value: 0 },
      uRes: { value: new THREE.Vector2(width, height) },
      uGrid: { value: Math.max(4, Math.min(400, gridSize)) },
      uDir: { value: new THREE.Vector2(dirX, dirY) },
      uFalloff: { value: falloff },
      uFadeStart: { value: fadeStart },
      uFadeEnd: { value: fadeEnd },
      uSquareSize: { value: squareSize },
      uMinBright: { value: minBrightness },
      uTwinkleSpeed: { value: twinkleSpeed },
      uTwinkleStrength: { value: twinkleStrength },
      uIntensity: { value: intensity },
      uAlpha: { value: opacity },
      uSquare: { value: new THREE.Vector3(...squareRgb) },
      uBg: { value: new THREE.Vector3(...bgRgb) },
      uTransparentBg: { value: transparentBackground ? 1.0 : 0.0 },
    };

    const geometry = new THREE.PlaneGeometry(2, 2);
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      transparent: true,
      depthWrite: false,
    });
    materialRef.current = material;

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const clock = new THREE.Clock();

    const animate = () => {
      if (materialRef.current) {
        materialRef.current.uniforms.uTime.value = clock.getElapsedTime();
      }
      renderer.render(scene, camera);
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    animate();

    const resizeObserver = new ResizeObserver(() => {
      if (!container || !rendererRef.current || !materialRef.current) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      if (newWidth === 0 || newHeight === 0) return;

      rendererRef.current.setSize(newWidth, newHeight);
      materialRef.current.uniforms.uRes.value.set(newWidth, newHeight);
    });
    resizeObserver.observe(container);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      resizeObserver.disconnect();
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      if (container.contains(domElement)) {
        container.removeChild(domElement);
      }
    };
  }, [dpr, transparentBackground]);

  // Update dynamic uniforms on prop changes without tearing down the WebGL context
  useEffect(() => {
    if (!materialRef.current) return;
    const uniforms = materialRef.current.uniforms;

    const [dirX, dirY] = getDirectionVector(direction);
    uniforms.uDir.value.set(dirX, dirY);
    uniforms.uGrid.value = Math.max(4, Math.min(400, gridSize));
    uniforms.uFalloff.value = falloff;
    uniforms.uFadeStart.value = fadeStart;
    uniforms.uFadeEnd.value = fadeEnd;
    uniforms.uSquareSize.value = squareSize;
    uniforms.uMinBright.value = minBrightness;
    uniforms.uTwinkleSpeed.value = twinkleSpeed;
    uniforms.uTwinkleStrength.value = twinkleStrength;
    uniforms.uIntensity.value = intensity;
    uniforms.uAlpha.value = opacity;
    uniforms.uTransparentBg.value = transparentBackground ? 1.0 : 0.0;

    const squareRgb = hexToRgb(squareColor);
    uniforms.uSquare.value.set(...squareRgb);

    const bgRgb = hexToRgb(effectiveBgColor);
    uniforms.uBg.value.set(...bgRgb);
  }, [
    direction,
    gridSize,
    falloff,
    fadeStart,
    fadeEnd,
    squareSize,
    minBrightness,
    twinkleSpeed,
    twinkleStrength,
    intensity,
    opacity,
    squareColor,
    effectiveBgColor,
    transparentBackground,
  ]);

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", className)}
      style={{ width, height }}
    >
      {children && <div className="relative z-10 w-full h-full">{children}</div>}
    </div>
  );
};

BlinkingSquares.displayName = "BlinkingSquares";

export { BlinkingSquares };
export default BlinkingSquares;
