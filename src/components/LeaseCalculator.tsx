import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calculator } from 'lucide-react';

export const LeaseCalculator = () => {
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