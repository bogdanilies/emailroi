import React from 'react';
import { Input } from '../ui/Input';

interface SimpleEmailCalculatorProps {
  values: {
    contacts: number;
    weeklyEmails: number;
    openRate: number;
    conversionRate: number;
    monthlyGrowth: number;
    currentSpending: number;
  };
  onChange: (key: string, value: number) => void;
}

export function SimpleEmailCalculator({ values, onChange }: SimpleEmailCalculatorProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Input
        label="Number of Contacts"
        type="number"
        value={values.contacts}
        onChange={(e) => onChange('contacts', Number(e.target.value))}
        min={0}
      />
      <Input
        label="Weekly Emails Sent"
        type="number"
        value={values.weeklyEmails}
        onChange={(e) => onChange('weeklyEmails', Number(e.target.value))}
        min={0}
      />
      <Input
        label="Open Rate (%)"
        type="number"
        value={values.openRate}
        onChange={(e) => onChange('openRate', Number(e.target.value))}
        min={0}
        max={100}
      />
      <Input
        label="Conversion Rate (%)"
        type="number"
        value={values.conversionRate}
        onChange={(e) => onChange('conversionRate', Number(e.target.value))}
        min={0}
        max={100}
      />
      <Input
        label="Monthly List Growth Rate (%)"
        type="number"
        value={values.monthlyGrowth}
        onChange={(e) => onChange('monthlyGrowth', Number(e.target.value))}
        min={0}
      />
      <Input
        label="Current Monthly Email Spending ($)"
        type="number"
        value={values.currentSpending}
        onChange={(e) => onChange('currentSpending', Number(e.target.value))}
        min={0}
      />
    </div>
  );
}