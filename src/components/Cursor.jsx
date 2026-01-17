import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef(null);
  const linesRef = useRef(null);
  const hoverRingRef = useRef(null);

  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  const scale = useRef(1);
  const scaleTarget = useRef(1);

  const rotation = useRef(0);
  const rotationTarget = useRef(0);
  
  // NEW: Dedicated independent rotation for the ring
  const ringRotation = useRef(0);

  const linesOpacity = useRef(1);
  const linesOpacityTarget = useRef(1);

  const linesScale = useRef(1);
  const linesScaleTarget = useRef(1);

  const ringOpacity = useRef(0); 
  const ringOpacityTarget = useRef(0);

  useEffect(() => {
    const move = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", move);

    const animate = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.15;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.15;

      scale.current += (scaleTarget.current - scale.current) * 0.12;
      rotation.current += (rotationTarget.current - rotation.current) * 0.12;

      ringRotation.current += (rotationTarget.current - ringRotation.current) * 0.02;

      linesOpacity.current += (linesOpacityTarget.current - linesOpacity.current) * 0.15;
      linesScale.current += (linesScaleTarget.current - linesScale.current) * 0.15;
      ringOpacity.current += (ringOpacityTarget.current - ringOpacity.current) * 0.15;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `
          translate(${pos.current.x - 16}px, ${pos.current.y - 16}px)
          scale(${scale.current})
          rotate(${rotation.current}deg)
        `;
      }

      if (linesRef.current) {
        linesRef.current.style.opacity = linesOpacity.current;
        linesRef.current.style.transform = `scale(${linesScale.current})`;
      }

      if (hoverRingRef.current) {
        hoverRingRef.current.style.opacity = ringOpacity.current;
        hoverRingRef.current.style.transform = `rotate(${ringRotation.current}deg)`;
      }

      requestAnimationFrame(animate);
    };

    animate();
    return () => window.removeEventListener("mousemove", move);
  }, []);

  useEffect(() => {
    const enter = () => {
      scaleTarget.current = 1.5;
      rotationTarget.current = 45; 
      linesOpacityTarget.current = 0;
      linesScaleTarget.current = 0.3;
      ringOpacityTarget.current = 1;
    };

    const leave = () => {
      scaleTarget.current = 1;
      rotationTarget.current = 0;
      linesOpacityTarget.current = 1;
      linesScaleTarget.current = 1;
      ringOpacityTarget.current = 0;
    };

    const targets = document.querySelectorAll("a, button");
    targets.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="hidden md:block fixed top-0 left-0 w-8 h-8 bg-white rounded-full pointer-events-none z-[10001] mix-blend-difference"
    >
      <div className="relative w-8 h-8">
        <div
          ref={hoverRingRef}
          className="absolute inset-[-6px] rounded-full border border-dashed border-white opacity-0"
          style={{ transformOrigin: "center" }}
        />
        <div ref={linesRef} className="absolute inset-0" style={{ transformOrigin: "center" }}>
          <span className="absolute top-1 left-1/2 w-[2px] h-[6px] bg-blue-500 -translate-x-1/2" />
          <span className="absolute bottom-1 left-1/2 w-[2px] h-[6px] bg-blue-500 -translate-x-1/2" />
          <span className="absolute left-1 top-1/2 h-[2px] w-[6px] bg-blue-500 -translate-y-1/2" />
          <span className="absolute right-1 top-1/2 h-[2px] w-[6px] bg-blue-500 -translate-y-1/2" />
        </div>
        <span className="absolute top-1/2 left-1/2 w-[3px] h-[3px] bg-blue-500 rounded-full -translate-x-1/2 -translate-y-1/2" />
      </div>
    </div>
  );
}