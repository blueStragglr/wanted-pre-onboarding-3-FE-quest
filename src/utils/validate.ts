export const isValidate = (inputs: Array<string>) => {
  return inputs.find((value) => value.trim().length > 1);
};
