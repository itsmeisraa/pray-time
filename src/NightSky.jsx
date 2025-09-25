import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function NightSky() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div style={{ position: "absolute", inset: 0, zIndex: -1 }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "#000000" },
          fpsLimit: 60,
          particles: {
            number: { value: 100, density: { enable: true, area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: {
              value: 1,
              random: true,
              animation: { enable: true, speed: 1, minimumValue: 0.3 },
            },
            size: { value: { min: 1, max: 3 } },
            move: { enable: true, speed: 0.2, random: true },
          },
        }}
      />

      {/* Mosque image */}
      <img
        src="/mosque.png"   // must be in "public/mosque.png"
        alt="mosque"
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  );
}
