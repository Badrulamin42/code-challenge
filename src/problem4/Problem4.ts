
// Loop
export function sum_to_n_e(n: number): number {

  let sum = 0;

  while (n > 0) {
    sum += n;
    n--;
  }

  return sum;
}

// ternery
export const sum_to_n_f = (n: number): number => {

  return n > 0 ? (n * (n + 1)) / 2 : 0;
}

// array reduce/map/foreach depends on situation
export function sum_to_n_reduce(n: number): number {
  if (n <= 0) return 0;

  return Array.from({ length: n }, (_, i) => i + 1)
    .reduce((sum, current) => sum + current, 0);
}

// Based on my experience, this is very commonly used in a big project