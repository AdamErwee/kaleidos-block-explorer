interface LocaleStringOptions {
  locale?: string;
  options?: Intl.NumberFormatOptions;
}

const formatNumber = (
  unformattedNumber: number,
  { locale = "en-US", options = {} }: LocaleStringOptions = {}
): string => {
  return unformattedNumber.toLocaleString(locale, options);
};

export default formatNumber;
