import React, { useEffect, useRef } from "react";
import * as PIXI from "pixi.js";

const DOT_SIZE = 2.5;
const DOT_COLOR = 0xe7e7e7;
const DOT_SPACING = 32;
const GRID_DEFAULT_POS = 16;
const INITIAL_MOVE_SPEED = 0.05;
const INITIAL_MOVE_DIST = 32 * 16;
const BLUER_COEFFICIENT = 0.01;
const app = new PIXI.Application<HTMLCanvasElement>({
  backgroundAlpha: 0,
  resizeTo: window,
});
const grid = new PIXI.Graphics();
const blurFilter = new PIXI.BlurFilter();
grid.filters = [blurFilter];

const Grid = () => {
  const [animation, setAnimation] = React.useState("initial");
  const gridRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!gridRef.current) return;
    const width = app.screen.width;
    const height = app.screen.height;
    let count = 0;
    app.stage.addChild(grid);
    gridRef.current.appendChild(app.view);

    const gridDefault = (delta: number) => {
      count += (window.scrollY - count) * 0.07;
      grid.clear();
      for (
        let i = GRID_DEFAULT_POS;
        i - GRID_DEFAULT_POS < width;
        i += DOT_SPACING
      ) {
        for (
          let j = GRID_DEFAULT_POS;
          j - GRID_DEFAULT_POS < height;
          j += DOT_SPACING
        ) {
          grid.beginFill(DOT_COLOR, 1);
          grid.drawCircle(i, j - (count % DOT_SPACING), DOT_SIZE);
          grid.endFill();
        }
      }
    };
    const gridInitial = (delta: number) => {
      count += (INITIAL_MOVE_DIST - count) * INITIAL_MOVE_SPEED;
      grid.clear();
      for (
        let i = GRID_DEFAULT_POS;
        i - GRID_DEFAULT_POS < width;
        i += DOT_SPACING
      ) {
        for (
          let j = GRID_DEFAULT_POS;
          j - GRID_DEFAULT_POS < height;
          j += DOT_SPACING
        ) {
          grid.beginFill(DOT_COLOR, 1);
          grid.drawCircle(i, j - (count % DOT_SPACING), DOT_SIZE);
          grid.endFill();
          blurFilter.blur = (DOT_SPACING * 16 - count) * BLUER_COEFFICIENT;
        }
      }
      if (INITIAL_MOVE_DIST - count <= 0.1) {
        app.ticker.remove(gridInitial);
        setAnimation("default");
      }
    };
    count = 0;
    if (animation === "initial") app.ticker.add(gridInitial);
    if (animation === "default") app.ticker.add(gridDefault);

    const onResize = () => {
      app.renderer.resize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [animation]);

  return <div ref={gridRef} className="fixed top-0 z-[-1]"></div>;
};

export default Grid;
