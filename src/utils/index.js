export const convertToShortString = (text) => {
  if (text !== undefined) {
    const first = text.substring(0, 6);
    const end = text.substring(text.length, text.length - 4);
    const full = `${first}...${end}...`;
    return full;
  }
};
