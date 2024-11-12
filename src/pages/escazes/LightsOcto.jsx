import React from 'react';

const LightsOcto = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight 
        castShadow 
        position={[10, 10, 0]} 
        intensity={1} 
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
    </>
  );
};

export default LightsOcto;
