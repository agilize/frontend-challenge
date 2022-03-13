export const replaceWithSpaceIn = (word: string, position: number) => {
  return word
    .split('')
    .map((value, index) => {
      if (index !== position) {
        return value;
      }
      return ' ';
    })
    .join('');
};
