// The following formula is an estimate (I suspect that I might be missing a crucial part) and derived from multiple sources

import formatNumber from "./format-number";

const genesisCoefficientValue = 65535; // Derived from '1d00ffff' bits value in genesis block where difficulty was 1.0
const genesisBlockTarget = genesisCoefficientValue * 256 ** 26; // This is to get the full bit target for the genesis block

const calculateDifficulty = (bits: number): string => {
  // Step 1: Convert bits (dec -> hex).
  const hexBits: string = `0x${bits.toString(16)}`;

  // Step 2: Get Exponent from bits value (the first 4 bits).
  const hexExponent = hexBits.substring(0, 4);

  // Step 3: Extract mantissa (Basically the coefficient value, but refers specifically to the "significant digits in a floating-point number"). This is done by taking what's left of the hexBits after the exponent part is removed.
  const mantissaHexValue = `0x${hexBits.substring(4)}`;

  // Step 4: Convert hexExponent (hex -> dec) and subtract 3 to get the amount of "leading 0's" added to the mantissa. Note: "3" refers to the amount of significant bytes ("mantissa") already accounted for in the "target".
  const targetExponent = parseInt(hexExponent, 16) - 3;

  // Step 5: Convert mantissa (hex -> dec)
  const targetValue = parseInt(mantissaHexValue, 16);

  // Step 6: Set up "target" variable for block
  const currentBlockTarget = targetValue * 256 ** targetExponent;

  // Step 7: Calculate the block difficulty.
  // Formula: (genesisBlockTarget) / (currentBlockTarget)
  const difficulty = genesisBlockTarget / currentBlockTarget;

  const formattedDifficulty = formatNumber(difficulty, {
    options: { maximumFractionDigits: 2 },
  });

  return formattedDifficulty;
};

export default calculateDifficulty;
