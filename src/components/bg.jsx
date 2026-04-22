import { useEffect, useState } from "react";

export default function Bg() {
  const [pos, setPos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const move = (e) => {
      setPos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="absolute inset-0 bg-black"
      style={{
        background: `radial-gradient(circle at ${pos.x}% ${pos.y}%, #3c096c, transparent 40%)`,
      }}
    />
  );
}