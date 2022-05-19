export const isPrime = (n: number) => {
  for(let i = 2, s = Math.sqrt(n); i <= s; i++)
    if(n % i === 0) return false;
  return n > 1;
}

export const getRandomPrimePair = (): [number, number] => {
  let a: number, b: number;
  do {
    a = Math.floor(Math.random() * 5000);
    b = Math.floor(Math.random() * 5000);
  } while (!isPrime(a) || !isPrime(b))
  return [a, b];
}

export const gcd = (a: number, b: number): number => {
  if (a === 0)
    return b;
  return gcd(b % a, a);
}

export const modInverse = (a: number, b: number): number => {
  a %= b;
  for (let x = 1; x < b; x++) {
    if ((a*x)%b == 1) {
      return x;
    }
  }
  return 0;
}

export const binaryTransform = (n: number): [number, number[]] => {
  let i = 0, mod = 0, bigNum = Array.from({length: 1000}) as number[];

  while (n !== 0) {
    mod = n % 2;
    bigNum[i] = mod;
    n = Math.floor(n / 2);
    i++;
  }
  return [i, bigNum];
}

export const modularExp = (a: number, b: number, n: number) => {
  let c = 0;
  let d = 1;
  let [k, bigNum] = binaryTransform(b);

  for (let i = k - 1; i >= 0; i--) {
    c = 2 * c;
    d = (d * d) % n;
    if (bigNum[i] === 1) {
      c = c + 1;
      d = (d * a) % n;
    }
  }
  return d;
}
