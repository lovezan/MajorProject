"use client";

import { useEffect } from "react";

const SpiderWebAnimation = () => {
  useEffect(() => {
    const canvas = document.getElementById("spider-web") as HTMLCanvasElement;
    const ctx = canvas?.getContext("2d");
    const cursor = document.getElementById("cursor") as HTMLDivElement;

    if (!canvas || !ctx || !cursor) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createWeb();
    };

    let mouse = { x: -100, y: -100 };
    let nodes: Node[] = [];

    class Node {
      x: number;
      y: number;
      originalX: number;
      originalY: number;
      size: number;
      hover: boolean;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.originalX = x;
        this.originalY = y;
        this.size = 2;
        this.hover = false;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.hover ? "#ff0000" : "#ffffff"; // Yellow on hover, white otherwise
        ctx.fill();
      }
    }

    const createWeb = () => {
      nodes = [];
      const rows = 15;
      const cols = 15;
      const spacingX = canvas.width / cols;
      const spacingY = canvas.height / rows;

      for (let i = 0; i <= rows; i++) {
        for (let j = 0; j <= cols; j++) {
          nodes.push(new Node(j * spacingX, i * spacingY));
        }
      }
    };

    const drawLines = () => {
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 200) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(255, 200, 200, ${1 - distance / 200})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
    };

    const animateWeb = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      nodes.forEach((node) => {
        const dx = node.originalX - mouse.x;
        const dy = node.originalY - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 150) {
          node.x = node.originalX - dx * 0.5;
          node.y = node.originalY - dy * 0.5;
          node.hover = true; // Mark node as hovered
        } else {
          node.x += (node.originalX - node.x) * 0.2;
          node.y += (node.originalY - node.y) * 0.2;
          node.hover = false; // Reset hover state
        }

        node.draw();
      });

      drawLines();
      requestAnimationFrame(animateWeb);
    };

    document.addEventListener("mousemove", (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
      cursor.style.transform = `translate(${mouse.x}px, ${mouse.y}px)`;
    });

    window.addEventListener("resize", resizeCanvas);

    resizeCanvas();
    animateWeb();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full z-0">
      <canvas
        id="spider-web"
        className="absolute top-0 left-0 w-full h-full opacity-20"
      ></canvas>
      <div id="cursor"></div>
    </div>
  );
};

export default SpiderWebAnimation;
