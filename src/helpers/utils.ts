export const getNumberOfVowels = (input: string): number => {
  const vowelsNumer = input.match(/[aeiou]/gi);
  return vowelsNumer?.length ? vowelsNumer.length : 0;
};

export const getNumberOfConsonants = (input: string): number => {
  const consonantsNumber = input.match(/[^aeiou ]/gi);
  return consonantsNumber?.length ? consonantsNumber.length : 0;
};

export const removeSpaces = (phrase :string): string => {
  return phrase.replace(/\s/g, '');
}
