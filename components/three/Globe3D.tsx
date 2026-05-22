"use client";

import React, { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Line, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

// Spherical projection math
function latLngToVector3(lat: number, lng: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);

  const x = -(radius * Math.sin(phi) * Math.sin(theta));
  const y = radius * Math.cos(phi);
  const z = radius * Math.sin(phi) * Math.cos(theta);

  return new THREE.Vector3(x, y, z);
}

// Data structures for coordinates
const MANGALORE = { lat: 12.9141, lng: 74.8560, name: "Mangalore (HQ)" };
const DESTINATIONS = [
  { lat: 37.7749, lng: -122.4194, name: "San Francisco" },
  { lat: 51.5074, lng: -0.1278, name: "London" },
  { lat: 1.3521, lng: 103.8198, name: "Singapore" },
  { lat: 35.6762, lng: 139.6503, name: "Tokyo" },
  { lat: -33.8688, lng: 151.2093, name: "Sydney" },
];

const GLOBE_RADIUS = 2;

// Renders the glowing Earth globe, points, cities, and connection arcs
function Earth() {
  const groupRef = useRef<THREE.Group>(null);
  const { mouse } = useThree();

  // Rotate globe and add subtle mouse lag tilt
  useFrame((state) => {
    if (groupRef.current) {
      // Rotation
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      
      // Mouse interaction tilt
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        mouse.y * 0.15,
        0.05
      );
      groupRef.current.rotation.z = THREE.MathUtils.lerp(
        groupRef.current.rotation.z,
        -mouse.x * 0.1,
        0.05
      );
    }
  });

  // 1. Generate beautiful dot-grid lands on the sphere (Procedural Landmasses)
  // Let's create a coordinate filter to mock continent shapes
  const dotPoints = useMemo(() => {
    const tempPoints = [];
    const count = 3000;
    
    for (let i = 0; i < count; i++) {
      // Fibonacci sphere mapping
      const y = 1 - (i / (count - 1)) * 2;
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = 0.51 * i; // Golden ratio spacing
      
      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;
      
      // Convert to Lat/Lng to determine if it is on mock land
      const lat = Math.asin(y) * (180 / Math.PI);
      const lng = Math.atan2(x, z) * (180 / Math.PI);
      
      // Simple custom mathematical noise filter to create continents (e.g. Asia, Americas, Europe, Africa)
      // Check if point lands on custom dry land filters
      let isLand = false;
      
      // North America
      if (lat > 15 && lat < 70 && lng > -170 && lng < -50) isLand = true;
      // South America
      if (lat > -55 && lat < 12 && lng > -85 && lng < -35) isLand = true;
      // Africa & Europe
      if (lat > -35 && lat < 75 && lng > -15 && lng < 50) isLand = true;
      // Asia
      if (lat > 5 && lat < 75 && lng > 50 && lng < 150) isLand = true;
      // Australia
      if (lat > -45 && lat < -10 && lng > 110 && lng < 155) isLand = true;
      // India/Mangalore area highlight
      if (lat > 8 && lat < 30 && lng > 68 && lng < 90) isLand = true;

      // Add a slight randomization noise
      if (Math.random() > 0.85) isLand = !isLand;

      if (isLand) {
        tempPoints.push(x * GLOBE_RADIUS, y * GLOBE_RADIUS, z * GLOBE_RADIUS);
      }
    }
    return new Float32Array(tempPoints);
  }, []);

  // 2. Map coordinates of cities
  const cities = useMemo(() => {
    const mainNode = latLngToVector3(MANGALORE.lat, MANGALORE.lng, GLOBE_RADIUS);
    const destNodes = DESTINATIONS.map((d) => ({
      pos: latLngToVector3(d.lat, d.lng, GLOBE_RADIUS),
      name: d.name,
    }));
    return { mainNode, destNodes };
  }, []);

  // 3. Generate Curved Bezier Lines for connection arcs
  const arcs = useMemo(() => {
    return cities.destNodes.map((dest) => {
      const pStart = cities.mainNode;
      const pEnd = dest.pos;

      // Calculate midpoint pulled outwards
      const mid = new THREE.Vector3().addVectors(pStart, pEnd).multiplyScalar(0.5);
      const dist = pStart.distanceTo(pEnd);
      // Height proportional to distance
      const height = GLOBE_RADIUS + dist * 0.35;
      mid.normalize().multiplyScalar(height);

      // Create curve
      const curve = new THREE.QuadraticBezierCurve3(pStart, pEnd, mid);
      // Sample 40 points along curve
      return curve.getPoints(45);
    });
  }, [cities]);

  return (
    <group ref={groupRef}>
      {/* Central sphere body with glowing wireframe styling */}
      <mesh>
        <sphereGeometry args={[GLOBE_RADIUS - 0.02, 32, 32]} />
        <meshBasicMaterial
          color="#071126"
          transparent
          opacity={0.8}
        />
      </mesh>


      {/* 3D Dot Matrix Landmasses */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[dotPoints, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#3b82f6"
          size={0.028}
          sizeAttenuation={true}
          transparent
          opacity={0.7}
        />
      </points>

      {/* Base HQ Marker (Mangalore) */}
      <mesh position={cities.mainNode}>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshBasicMaterial color="#60a5fa" />
      </mesh>

      {/* Destination Markers */}
      {cities.destNodes.map((dest, i) => (
        <group key={i}>
          <mesh position={dest.pos}>
            <sphereGeometry args={[0.04, 12, 12]} />
            <meshBasicMaterial color="#06b6d4" />
          </mesh>

        </group>
      ))}

    </group>
  );
}

// Particle Stars floating around Earth
function SpaceParticles() {
  const particlesCount = 250;
  const positions = useMemo(() => {
    const arr = [];
    for (let i = 0; i < particlesCount; i++) {
      const radius = 3.5 + Math.random() * 2.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      arr.push(x, y, z);
    }
    return new Float32Array(arr);
  }, []);

  return (
    <Points positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#a5f3fc"
        size={0.03}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.65}
      />
    </Points>
  );
}

export default function Globe3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.05 } // trigger when at least 5% is visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full relative cursor-grab active:cursor-grabbing">
      {/* Background ambient radial light */}
      <div className="absolute inset-0 bg-radial-gradient from-blue-500/5 to-transparent pointer-events-none rounded-full blur-[100px]" />
      
      <Canvas
        camera={{ position: [0, 0, 6.2], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, 1.5]}
        frameloop={isVisible ? "always" : "never"}
      >
        <ambientLight intensity={1.5} />
        <pointLight position={[10, 10, 10]} intensity={2.5} color="#3b82f6" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#6366f1" />
        
        <Earth />
        <SpaceParticles />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.8}
          dampingFactor={0.05}
          enableDamping={true}
          autoRotate={false}
        />
      </Canvas>
    </div>
  );
}
