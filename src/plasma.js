// Plasma wave effect renderer
// Overlapping sine waves create mesmerizing, constantly shifting patterns.

const W = 62;
const H = 12;
const CHARS = "        ..:,;+*?#@";

export function renderPlasma(A, B) {
  const lines = [];
  const t = A * 1.2;

  for (let y = 0; y < H; y++) {
    const chars = [];
    const grays = [];
    for (let x = 0; x < W; x++) {
      // Scale per-character, not per-width, so wider W shows more pattern, not stretched
      const u = (x - W / 2) / 18;
      const v = (y - H / 2) / 6;

      let val = 0;

      // Concentric ripple from center
      val += Math.sin(Math.sqrt(u * u + v * v) * 10 - t * 3);

      // Diagonal crossing waves
      val += Math.sin(u * 8 + t * 2) * 0.7;
      val += Math.sin(v * 6 - t * 1.7) * 0.7;

      // Rotating spiral
      const angle = Math.atan2(v, u) + t * 0.8;
      const dist = Math.sqrt(u * u + v * v);
      val += Math.sin(angle * 4 + dist * 5) * 0.6;

      // Interference pattern
      val += Math.sin((u + v) * 6 + t * 1.3) * 0.5;
      val += Math.sin((u - v) * 5 - t * 0.9) * 0.5;

      // Normalize: val range ≈ [-4, 4] → [0, CHARS.length-1]
      const norm = (val + 4) / 8;
      const idx = Math.floor(norm * (CHARS.length - 1));
      chars.push(CHARS[Math.max(0, Math.min(CHARS.length - 1, idx))]);

      // Gray brightness: 80 (dark) to 255 (white) based on intensity
      grays.push(Math.round(80 + norm * 175));
    }
    lines.push({ chars, grays });
  }
  return lines;
}

export const PLASMA_W = W;
export const PLASMA_H = H;
