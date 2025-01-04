import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calculator } from 'lucide-react';

export const PersonalTaxCalculator = () => {
  const [income, setIncome] = useState('');
  const [result, setResult] = useState('');

  const calculateTax = () => {
    const annualIncome = parseFloat(income);
    let tax = 0;
    
    // Basic UK tax calculation (simplified)
    if (annualIncome > 50270) {
      tax += (annualIncome - 50270) * 0.4; // 40% on income over £50,270
      tax += 37700 * 0.2; // 20% on income between £12,570 and £50,270
    } else if (annualIncome > 12570) {
      tax += (annualIncome - 12570) * 0.2; // 20% on income over personal allowance
    }

    setResult(tax.toFixed(2));
  };

  return (
    <Card className="bg-white/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="w-5 h-5" />
          UK Personal Tax Calculator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Input
            type="number"
            placeholder="Annual Income (£)"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
          />
        </div>
        <Button onClick={calculateTax} className="w-full">Calculate</Button>
        {result && (
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">Estimated Tax:</p>
            <p className="text-2xl font-bold text-primary">£ {result}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};