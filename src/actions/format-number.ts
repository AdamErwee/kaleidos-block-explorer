interface LocaleStringOptions {
  locale?: string;
  options?: Intl.NumberFormatOptions;
}

// Formats numbers to string using toLocalString. Basically used to reduce duplication of code
const formatNumber = (
  unformattedNumber: number,
  { locale = "en-US", options = {} }: LocaleStringOptions = {}
): string => {
  return unformattedNumber.toLocaleString(locale, options);
};

export default formatNumber;
