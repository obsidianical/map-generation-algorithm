import * as openSimplex from "open-simplex-noise";
import { Noise2D } from "open-simplex-noise/lib/2d";

export default class FractalNoise {
  private noise2d: Noise2D;

  constructor(private seed: number, private depth?: number) {
    this.noise2d = openSimplex.makeNoise2D(seed);
  }

  makeNoise(x: number, y: number): number {
    let sum = 0;

    for (let i = 0; i < (this.depth || 4); ++i) {
      const factor = Math.pow(2, i);
      sum += (this.noise2d(x * factor, y * factor) + 1) / 2 / factor;
    }

    return sum / 2;
  }
}
