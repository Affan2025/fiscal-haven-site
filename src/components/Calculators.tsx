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

      {/* More calculators will be added in subsequent iterations */}
    </div>
  );
};