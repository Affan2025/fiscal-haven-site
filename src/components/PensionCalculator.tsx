import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calculator } from 'lucide-react';

export const PensionCalculator = () => {
  const [pension, setPension] = useState({
    currentAge: '',
    retirementAge: '',
    monthlyContribution: '',
    currentSavings: '',
    result: '',
  });

  const calculatePension = () => {
    const years = parseInt(pension.retirementAge) - parseInt(pension.currentAge);
    const monthlyContribution = parseFloat(pension.monthlyContribution);
    const currentSavings = parseFloat(pension.currentSavings);
    const annualReturn = 0.05; // Assuming 5% annual return
    
    let futureValue = currentSavings;
    for (let i = 0; i < years; i++) {
      futureValue = (futureValue + (monthlyContribution * 12)) * (1 + annualReturn);
    }
    
    setPension(prev => ({
      ...prev,
      result: futureValue.toFixed(2)
    }));
  };

  return (
    <Card className="bg-white/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="w-5 h-5" />
          Pension Calculator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Input
            type="number"
            placeholder="Current Age"
            value={pension.currentAge}
            onChange={(e) => setPension(prev => ({ ...prev, currentAge: e.target.value }))}
          />
        </div>
        <div>
          <Input
            type="number"
            placeholder="Retirement Age"
            value={pension.retirementAge}
            onChange={(e) => setPension(prev => ({ ...prev, retirementAge: e.target.value }))}
          />
        </div>
        <div>
          <Input
            type="number"
            placeholder="Monthly Contribution"
            value={pension.monthlyContribution}
            onChange={(e) => setPension(prev => ({ ...prev, monthlyContribution: e.target.value }))}
          />
        </div>
        <div>
          <Input
            type="number"
            placeholder="Current Savings"
            value={pension.currentSavings}
            onChange={(e) => setPension(prev => ({ ...prev, currentSavings: e.target.value }))}
          />
        </div>
        <Button onClick={calculatePension} className="w-full">Calculate</Button>
        {pension.result && (
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">Estimated Pension Pot:</p>
            <p className="text-2xl font-bold text-primary">£ {pension.result}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};