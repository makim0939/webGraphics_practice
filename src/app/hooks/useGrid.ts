import * as PIXI from "pixi.js";
import { useEffect } from "react";

const app = new PIXI.Application({
  backgroundColor: 0xffffff,
  resizeTo: window,
});
const grid = new PIXI.Graphics();
// graphics.beginFill(0xDE3249, 1);
// graphics.drawCircle(100, 250, 50);
// graphics.endFill();
const useGrid = () => {
  useEffect(() => {
    const width = app.screen.width;
    const height = app.screen.height;
    app.stage.addChild(grid);
    app.ticker.add((delta) => {
      for (let i = 0; i < width; i += 32) {
        for (let j = 0; j < height; j += 32) {
          grid.beginFill(0xf0f0f0, 1);
          grid.drawCircle(i, j, 3);
          grid.endFill();
        }
      }
    });
  }, []);
};

export default useGrid;
