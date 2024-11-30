export function calculateROI(values: {
  contacts: number;
  weeklyEmails: number;
  openRate: number;
  conversionRate: number;
  monthlyGrowth: number;
  currentSpending: number;
  aov?: number;
}) {
  const monthlyEmails = values.weeklyEmails * 4;
  const openRateDecimal = values.openRate / 100;
  const conversionRateDecimal = values.conversionRate / 100;
  const monthlyGrowthDecimal = values.monthlyGrowth / 100;

  const monthlyOpens = monthlyEmails * values.contacts * openRateDecimal;
  const monthlyConversions = monthlyOpens * conversionRateDecimal;

  const newContactsPerYear = Math.round(values.contacts * monthlyGrowthDecimal * 12);
  
  let monthlyRevenue = 0;
  if (values.aov) {
    monthlyRevenue = monthlyConversions * values.aov;
  } else {
    monthlyRevenue = monthlyConversions * 10; // Assumed value per conversion for simple email
  }

  const roi = ((monthlyRevenue - values.currentSpending) / values.currentSpending) * 100;

  return {
    monthlyRevenue: Math.round(monthlyRevenue).toLocaleString('en-US'),
    annualRevenue: Math.round(monthlyRevenue * 12).toLocaleString('en-US'),
    roi: Math.round(roi),
    projectedContacts: newContactsPerYear.toLocaleString('en-US'),
    monthlyConversions: Math.round(monthlyConversions).toLocaleString('en-US'),
  };
}