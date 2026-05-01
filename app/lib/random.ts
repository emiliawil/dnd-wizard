export function pickRandom<T>(arr: readonly T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function rollDie(sides: number): number {
  return Math.floor(Math.random() * sides) + 1;
}
