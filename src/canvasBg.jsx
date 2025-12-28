import { useRef, useEffect } from "react";
import {
  Pi,
  HALF_PI,
  TAU,
  rand,
  roundFn,
  cosFn,
  sinFn,
  fadeInOut,
} from "./utils.js";
// Constants
const pipeCount = 30;
const pipePropCount = 8;
const pipePropsLength = pipeCount * pipePropCount;
const turnCount = 8;
const turnAmount = (360 / turnCount) * (Pi / 180);
const turnChanceRange = 58;
const baseSpeed = 0.5;
const rangeSpeed = 1;
const baseTTL = 100;
const rangeTTL = 300;
const baseWidth = 2;
const rangeWidth = 4;
const baseHue = 180;
const rangeHue = 60;
const backgroundColor = "black"; // same as original render

export default function PipeCanvas() {
  const containerRef = useRef(null);
  const canvasARef = useRef(null);
  const canvasBRef = useRef(null);
  const pipePropsRef = useRef(null);
  const tickRef = useRef(0);
  const centerRef = useRef([0, 0]);

  // ----- Pipe Initialization -----
  const initPipe = (i) => {
    const x = rand(canvasARef.current.width);
    const y = centerRef.current[1];
    const direction = roundFn(rand(1)) ? HALF_PI : TAU - HALF_PI;
    const speed = baseSpeed + rand(rangeSpeed);
    const life = 0;
    const ttl = baseTTL + rand(rangeTTL);
    const width = baseWidth + rand(rangeWidth);
    const hue = baseHue + rand(rangeHue);

    pipePropsRef.current.set(
      [x, y, direction, speed, life, ttl, width, hue],
      i
    );
  };

  const initPipes = () => {
    pipePropsRef.current = new Float32Array(pipePropsLength);
    for (let i = 0; i < pipePropsLength; i += pipePropCount) {
      initPipe(i);
    }
  };

  // ----- Update Pipes -----
  const updatePipe = (i) => {
    const props = pipePropsRef.current;
    let x = props[i];
    let y = props[i + 1];
    let direction = props[i + 2];
    let speed = props[i + 3];
    let life = props[i + 4];
    const ttl = props[i + 5];
    const width = props[i + 6];
    const hue = props[i + 7];

    drawPipe(x, y, life, ttl, width, hue);

    life++;
    x += cosFn(direction) * speed;
    y += sinFn(direction) * speed;

    const turnChance =
      !(tickRef.current % roundFn(rand(turnChanceRange))) &&
      (!(roundFn(x) % 6) || !(roundFn(y) % 6));
    const turnBias = roundFn(rand(1)) ? -1 : 1;
    direction += turnChance ? turnAmount * turnBias : 0;

    props[i] = x;
    props[i + 1] = y;
    props[i + 2] = direction;
    props[i + 4] = life;

    checkBounds(i);
    if (life > ttl) initPipe(i);
  };

  const updatePipes = () => {
    tickRef.current++;
    for (let i = 0; i < pipePropsLength; i += pipePropCount) {
      updatePipe(i);
    }
  };

  // ----- Drawing -----
  const drawPipe = (x, y, life, ttl, width, hue) => {
    const ctx = canvasARef.current.getContext("2d");
    ctx.save();
    ctx.strokeStyle = `hsla(${hue},75%,50%,${fadeInOut(life, ttl) * 0.5})`;
    ctx.beginPath();
    ctx.arc(x, y, width, 0, TAU);
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
  };

  const checkBounds = (i) => {
    let x = pipePropsRef.current[i];
    let y = pipePropsRef.current[i + 1];
    const width = canvasARef.current.width;
    const height = canvasARef.current.height;

    if (x > width) x = 0;
    if (x < 0) x = width;
    if (y > height) y = 0;
    if (y < 0) y = height;

    pipePropsRef.current[i] = x;
    pipePropsRef.current[i + 1] = y;
  };

  // ----- Canvas Setup -----
  const resizeCanvas = () => {
    const canvasA = canvasARef.current;
    const canvasB = canvasBRef.current;
    const width = window.innerWidth;
    const height = window.innerHeight;

    canvasA.width = width;
    canvasA.height = height;
    canvasB.width = width;
    canvasB.height = height;

    centerRef.current = [width / 2, height / 2];
  };

  const render = () => {
    const ctxA = canvasARef.current.getContext("2d");
    const ctxB = canvasBRef.current.getContext("2d");

    // Draw B background
    ctxB.fillStyle = backgroundColor;
    ctxB.fillRect(0, 0, canvasBRef.current.width, canvasBRef.current.height);

    // Blur A onto B
    ctxB.save();
    ctxB.filter = "blur(12px)";
    ctxB.drawImage(canvasARef.current, 0, 0);
    ctxB.restore();

    // Draw A onto B again
    ctxB.drawImage(canvasARef.current, 0, 0);
  };

  // ----- Animation Loop -----
  const draw = () => {
    updatePipes();
    render();
    requestAnimationFrame(draw);
  };

  useEffect(() => {
    resizeCanvas();
    initPipes();
    draw();

    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return (
    <div
      ref={containerRef}
      className="content--canvas"
      style={{ position: "relative", width: "100%", height: "100vh" }}
    >
      <canvas
        ref={canvasBRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      />
      <canvas ref={canvasARef} style={{ display: "none" }} />
    </div>
  );
}
