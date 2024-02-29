const determineBlockVersion = (decimal: number): string => {
  // Check if the input is a valid positive integer
  if (decimal <= 0 || !Number.isInteger(decimal)) {
    throw new Error("Invalid input: Please provide a positive integer");
  }

  const hexString = decimal.toString(16);

  return "0x" + hexString.padStart(8, "0");
};

export default determineBlockVersion;
