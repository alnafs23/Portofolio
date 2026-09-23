"use client";
import { useEffect, useRef, useState } from "react";

/**
 * Efek kursor interaktif global: bulatan glow lembut yang mengikuti kursor
 * dengan sedikit "lag" (lerp), lalu membesar & berubah warna saat hover
 * di atas elemen interaktif (link, tombol, dsb).
 *
 * Otomatis nonaktif di perangkat sentuh (mobile/tablet) karena tidak relevan.
 */
export default function CursorGlow() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const canHover = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    ).matches;
    setEnabled(canHover);
    if (!canHover) return;

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { x: pos.x, y: pos.y };
    let rafId: number;

    const handleMove = (e: MouseEvent) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`;
      }

      const target = e.target as HTMLElement;
      setHovering(
        Boolean(target.closest("a, button, [role='button'], input, textarea")),
      );
    };

    const animateRing = () => {
      ring.x += (pos.x - ring.x) * 0.15;
      ring.y += (pos.y - ring.y) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0) translate(-50%, -50%)`;
      }
      rafId = requestAnimationFrame(animateRing);
    };

    window.addEventListener("mousemove", handleMove);
    rafId = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      {/* Cincin luar — mengikuti dengan lag halus, membesar saat hover */}
      <div
        ref={ringRef}
        aria-hidden
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full border border-cyan-400/40 transition-[width,height,border-color] duration-200 ease-out"
        style={{
          width: hovering ? 48 : 28,
          height: hovering ? 48 : 28,
          backgroundColor: hovering ? "rgba(34,211,238,0.08)" : "transparent",
        }}
      />
      {/* Titik dalam — mengikuti kursor secara instan */}
      <div
        ref={dotRef}
        aria-hidden
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full bg-cyan-400 transition-[width,height,opacity] duration-200 ease-out"
        style={{
          width: hovering ? 4 : 6,
          height: hovering ? 4 : 6,
          opacity: hovering ? 0.6 : 0.9,
          boxShadow: "0 0 12px 2px rgba(34,211,238,0.6)",
        }}
      />
    </>
  );
}
