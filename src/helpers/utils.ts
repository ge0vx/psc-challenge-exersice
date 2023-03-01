export const getNumberOfVowels = (input: string): number => {
  const vowelsNumer = input.match(/[aeiou]/gi);
  return vowelsNumer?.length ? vowelsNumer.length : 0;
};

export const getNumberOfConsonants = (input: string): number => {
  const consonantsNumber = input.match(/[^aeiou ]/gi);
  return consonantsNumber?.length ? consonantsNumber.length : 0;
};

export const removeSpaces = (phrase: string): string => {
  return phrase.replace(/\s/g, "");
};

export const getCommonFactors = (x: number, y: number): boolean => {
  //calculate the  maximum common divisor
  if (typeof x !== "number" || typeof y !== "number") return false;
  x = Math.abs(x);
  y = Math.abs(y);
  while (y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x === 1;
};
