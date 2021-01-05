export const trim = x => {
  let value = String(x);
  return value.replace(/^\s+|\s+$/gm, '');
};
export const isEmpty = element => {
  return (
    element === null ||
    element === undefined ||
    trim(element) === '' ||
    element.length === 0
  );
};
