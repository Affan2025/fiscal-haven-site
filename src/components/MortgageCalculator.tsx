import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calculator } from 'lucide-react';

export const MortgageCalculator = () => {
  const [mortgage, setMortgage] = useState({
    amount: '',
    term: '',
    rate: '',
    result: '',
  });

  const calculateMortgage = () => {
    const principal = parseFloat(mortgage.amount);
    const rate = parseFloat(mortgage.rate) / 100 / 12;
    const term = parseFloat(mortgage.term) * 12;
    
    const monthlyPayment = (principal * rate * Math.pow(1 + rate, term)) / (Math.pow(1 + rate, term) - 1);
    
    setMortgage(prev => ({
      ...prev,
      result: monthlyPayment.toFixed(2)
    }));
  };

  return (
    <Card className="bg-white/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="w-5 h-5" />
          Mortgage Calculator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Input
            type="number"
            placeholder="Mortgage Amount"
            value={mortgage.amount}
            onChange={(e) => setMortgage(prev => ({ ...prev, amount: e.target.value }))}
          />
        </div>
        <div>
          <Input
            type="number"
            placeholder="Mortgage Term (Years)"
            value={mortgage.term}
            onChange={(e) => setMortgage(prev => ({ ...prev, term: e.target.value }))}
          />
        </div>
        <div>
          <Input
            type="number"
            placeholder="Interest Rate (%)"
            value={mortgage.rate}
            onChange={(e) => setMortgage(prev => ({ ...prev, rate: e.target.value }))}
          />
        </div>
        <Button onClick={calculateMortgage} className="w-full">Calculate</Button>
        {mortgage.result && (
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">Monthly Payment:</p>
            <p className="text-2xl font-bold text-primary">£ {mortgage.result}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};