import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calculator } from 'lucide-react';

export const Calculators = () => {
  const [gratuity, setGratuity] = useState({
    salary: '',
    years: '',
    result: '',
  });

  const calculateGratuity = () => {
    const basicSalary = parseFloat(gratuity.salary);
    const years = parseFloat(gratuity.years);
    
    if (years <= 5) {
      setGratuity(prev => ({
        ...prev,
        result: ((basicSalary * 21 * years) / 30).toFixed(2)
      }));
    } else {
      const firstFiveYears = (basicSalary * 21 * 5) / 30;
      const remainingYears = ((basicSalary * 30 * (years - 5)) / 30);
      setGratuity(prev => ({
        ...prev,
        result: (firstFiveYears + remainingYears).toFixed(2)
      }));
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="w-5 h-5" />
            UAE Gratuity Calculator
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Input
              type="number"
              placeholder="Basic Monthly Salary (AED)"
              value={gratuity.salary}
              onChange={(e) => setGratuity(prev => ({ ...prev, salary: e.target.value }))}
            />
          </div>
          <div>
            <Input
              type="number"
              placeholder="Years of Service"
              value={gratuity.years}
              onChange={(e) => setGratuity(prev => ({ ...prev, years: e.target.value }))}
            />
          </div>
          <Button onClick={calculateGratuity} className="w-full">Calculate</Button>
          {gratuity.result && (
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">Gratuity Amount:</p>
              <p className="text-2xl font-bold text-primary">AED {gratuity.result}</p>
            </div>
          )}
        </CardContent>
      </Card>

      <PersonalTaxCalculator />
      <LeaseCalculator />
      <MortgageCalculator />
      <PensionCalculator />
    </div>
  );
};

const PersonalTaxCalculator = () => {
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

const LeaseCalculator = () => {
  const [lease, setLease] = useState({
    amount: '',
    term: '',
    rate: '',
    result: '',
  });

  const calculateLease = () => {
    const principal = parseFloat(lease.amount);
    const rate = parseFloat(lease.rate) / 100 / 12;
    const term = parseFloat(lease.term) * 12;
    
    const monthlyPayment = (principal * rate * Math.pow(1 + rate, term)) / (Math.pow(1 + rate, term) - 1);
    
    setLease(prev => ({
      ...prev,
      result: monthlyPayment.toFixed(2)
    }));
  };

  return (
    <Card className="bg-white/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="w-5 h-5" />
          Lease Payment Calculator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Input
            type="number"
            placeholder="Lease Amount"
            value={lease.amount}
            onChange={(e) => setLease(prev => ({ ...prev, amount: e.target.value }))}
          />
        </div>
        <div>
          <Input
            type="number"
            placeholder="Lease Term (Years)"
            value={lease.term}
            onChange={(e) => setLease(prev => ({ ...prev, term: e.target.value }))}
          />
        </div>
        <div>
          <Input
            type="number"
            placeholder="Interest Rate (%)"
            value={lease.rate}
            onChange={(e) => setLease(prev => ({ ...prev, rate: e.target.value }))}
          />
        </div>
        <Button onClick={calculateLease} className="w-full">Calculate</Button>
        {lease.result && (
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">Monthly Payment:</p>
            <p className="text-2xl font-bold text-primary">£ {lease.result}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const MortgageCalculator = () => {
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

const PensionCalculator = () => {
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
