import React, { useEffect, useRef } from "react";
import * as PIXI from "pixi.js";

const app = new PIXI.Application<HTMLCanvasElement>({
  backgroundAlpha: 0,
  resizeTo: window,
});
const sprite = PIXI.Sprite.from("https://pixijs.com/assets/bunny.png");
sprite.anchor.set(0.5);
sprite.x = app.screen.width / 2;
sprite.y = app.screen.height / 2;

const PixiTest = () => {
  const [animation, setAnimation] = React.useState("initial");
  const gridRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!gridRef.current) return;
    gridRef.current.appendChild(app.view);
    const width = app.screen.width;
    const height = app.screen.height;
    let count = 0;
    app.stage.addChild(sprite);
    let scale = 1;
    app.ticker.add(() => {
      scale += (2 - scale) * 0.1; // Ease-out effect
      sprite.scale.set(scale);
    });
  }, [animation]);

  return <div ref={gridRef} className="fixed top-0 z-[-1]"></div>;
};

export default PixiTest;
