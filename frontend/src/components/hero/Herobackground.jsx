// import React from 'react'
// import hero_video from '../../assets/hero background.mp4'
// import ParticleCanvas from '../others/ParticleCanvas'

// function Herobackground() {
//   return (
//     <div className="w-full h-full absolute top-0 left-0 -z-10 overflow-hidden">
//       <video
//         src={hero_video}
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="w-full h-full object-cover"
//       />
//       {/* Particles above video but below overlay */}
//       <div className="absolute inset-0">
//         <ParticleCanvas />
//       </div>
//     </div>
//   )
// }

// export default Herobackground

import React, { useEffect, useState } from 'react';
import hero_video from '../../assets/hero background.mp4';
import ParticleCanvas from '../others/ParticleCanvas';

function Herobackground() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768); // mobile breakpoint
  }, []);

  return (
    <div className="w-full h-full absolute top-0 left-0 -z-10 overflow-hidden">
      {/* Video only on desktop */}
      {!isMobile && (
        <video
          src={hero_video}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      )}

      {/* Fallback image on mobile for smooth scroll */}
      {isMobile && (
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/hero background fallback.jpg')" }}
        />
      )}

      {/* Particles */}
      <div className="absolute inset-0">
        <ParticleCanvas fps={isMobile ? 15 : 60} /> {/* lower FPS on mobile */}
      </div>
    </div>
  );
}

export default Herobackground;

