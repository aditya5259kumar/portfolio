import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Bg() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const theme = useSelector((store) => store.theme.theme);

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
        background: `radial-gradient(
        circle at ${pos.x}% ${pos.y}%,
        var(${theme === "light" ? "--purple-200" : "--purple-800"}),
        transparent 40%
      )`,
      }}
    />
  );
}
