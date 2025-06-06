
import { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Text, Float } from '@react-three/drei';
import * as THREE from 'three';

// Helper component for an object that follows the mouse
const MouseFollowObject = ({ position, color = '#64ffda', scale = 1 }) => {
  const ref = useRef<THREE.Mesh>(null!);
  const { viewport, camera, mouse } = useThree();
  const vec = new THREE.Vector3();
  
  useFrame(() => {
    if (ref.current) {
      // Convert mouse position to 3D space
      vec.set(mouse.x * viewport.width / 2, mouse.y * viewport.height / 2, 0);
      vec.unproject(camera);
      const dist = camera.position.z;
      vec.setLength(dist);
      vec.add(camera.position);
      
      // Smooth follow
      ref.current.position.x = THREE.MathUtils.lerp(ref.current.position.x, vec.x, 0.1);
      ref.current.position.y = THREE.MathUtils.lerp(ref.current.position.y, vec.y, 0.1);
    }
  });

  return (
    <mesh ref={ref} position={position as any} scale={scale}>
      <octahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color={color} wireframe opacity={0.6} transparent />
    </mesh>
  );
};

// Floating text element
const FloatingText = ({ text, position, size = 0.5, color = '#64ffda', rotation = [0, 0, 0] }) => {
  return (
    <Float speed={4} rotationIntensity={0.5} floatIntensity={2}>
      <Text
        position={position}
        rotation={rotation as any}
        fontSize={size}
        color={color}
        maxWidth={5}
        textAlign="center"
      >
        {text}
      </Text>
    </Float>
  );
};

// Floating technology icons
const TechStack = ({ position = [0, 0, 0], items }) => {
  const groupRef = useRef<THREE.Group>(null!);
  
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.15;
    }
  });

  return (
    <group ref={groupRef} position={position as any}>
      {items.map((item, index) => {
        const angle = (index / items.length) * Math.PI * 2;
        const radius = 4;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const y = Math.sin(index) * 0.5;
        
        return (
          <FloatingText 
            key={index} 
            text={item} 
            position={[x, y, z]} 
            rotation={[0, -angle, 0]} 
            size={0.4}
          />
        );
      })}
    </group>
  );
};

// Main threejs scene component
const ThreeDScene = () => {
  const techStack = [
    "JavaScript", "React", "Node.js", "MongoDB", 
    "Express", "HTML5", "CSS3", "Java", 
    "Firebase", "Spring Boot", "SQL"
  ];

  return (
    <div className="w-full h-[60vh] md:h-[80vh]">
      <Canvas shadows dpr={[0.5, 1]} camera={{ position: [0, 0, 10], fov: 45 }}>
        <ambientLight intensity={0.3} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={0.8} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.3} />
        
        <MouseFollowObject position={[0, 0, 0]} />
        
        <TechStack position={[0, 0, 0]} items={techStack} />
        
        <FloatingText text="FULL STACK DEVELOPER" position={[0, 2, 0]} size={0.6} />
        <FloatingText text="N. Sanjai" position={[0, 0.5, 0]} size={1.2} color="white" />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          minPolarAngle={Math.PI / 2.5} 
          maxPolarAngle={Math.PI / 1.5}
          rotateSpeed={0.3}
        />
      </Canvas>
    </div>
  );
};

export default ThreeDScene;
