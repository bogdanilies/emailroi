interface PricingTier {
  max: number;
  price: number;
}

interface PricingData {
  [key: string]: {
    tiers: PricingTier[];
    hasFreePlan: boolean;
    hasTrial: boolean;
    website: string;
  };
}

export const pricingData: PricingData = {
  Klaviyo: {
    tiers: [
      { max: 500, price: 20 },
      { max: 1000, price: 30 },
      { max: 1500, price: 45 },
      { max: 2500, price: 60 },
      { max: 5000, price: 100 },
      { max: 10000, price: 150 },
      { max: 20000, price: 375 },
      { max: 30000, price: 550 },
      { max: 50000, price: 720 },
      { max: 100000, price: 1380 }
    ],
    hasFreePlan: true,
    hasTrial: false,
    website: "https://www.klaviyo.com/partner/signup?utm_source=0013o00002YApaFAAT&utm_medium=partner"
  },
  Omnisend: {
    tiers: [
      { max: 500, price: 16 },
      { max: 1000, price: 20 },
      { max: 2500, price: 35 },
      { max: 5000, price: 65 },
      { max: 10000, price: 115 },
      { max: 15000, price: 180 },
      { max: 25000, price: 245 },
      { max: 50000, price: 330 }
    ],
    hasFreePlan: true,
    hasTrial: false,
    website: "https://your.omnisend.com/c/1299008/1793390/21260"
  },
  "Active Campaign": {
    tiers: [
      { max: 500, price: 15 },
      { max: 1000, price: 29 },
      { max: 2500, price: 55 },
      { max: 5000, price: 99 },
      { max: 10000, price: 155 },
      { max: 25000, price: 259 },
      { max: 50000, price: 345 },
      { max: 100000, price: 505 }
    ],
    hasFreePlan: false,
    hasTrial: true,
    website: "https://www.activecampaign.com/?_r=NZX98FMK"
  },
  MailerLite: {
    tiers: [
      { max: 1000, price: 10 },
      { max: 2500, price: 15 },
      { max: 5000, price: 30 },
      { max: 10000, price: 50 },
      { max: 25000, price: 120 },
      { max: 50000, price: 210 },
      { max: 100000, price: 360 }
    ],
    hasFreePlan: true,
    hasTrial: false,
    website: "https://www.mailerlite.com/a/eroo7pdddx5u"
  },
  GoHighLevel: {
    tiers: [
      { max: Number.MAX_SAFE_INTEGER, price: 97 }
    ],
    hasFreePlan: false,
    hasTrial: true,
    website: "https://www.gohighlevel.com/?fp_ref=koolagency"
  }
};