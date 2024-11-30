import { pricingData } from '../data/pricing';

export function calculatePricingTier(provider: string, contacts: number): number {
  const providerData = pricingData[provider];
  if (!providerData) return 0;

  if (provider === 'GoHighLevel') {
    return providerData.tiers[0].price;
  }

  const tier = providerData.tiers.find(t => contacts <= t.max);
  return tier ? tier.price : providerData.tiers[providerData.tiers.length - 1].price;
}