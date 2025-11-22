import { conversionRates } from './currencyUtils';
import { currencyIcons } from './currencyUtils';

export const convertPrice = (
  price: number,
  originalCurrency: string,
  targetCurrency: string,
) => {
  const priceInUSD = price / conversionRates[originalCurrency];
  const convertedRaw = priceInUSD * conversionRates[targetCurrency];
  const converted = Math.round(convertedRaw);

  const label = ['UAH', 'PLN', 'CHF'].includes(targetCurrency)
    ? `${converted} ${currencyIcons[targetCurrency]}`
    : `${currencyIcons[targetCurrency]}${converted}`;

  return { converted, label };
};
