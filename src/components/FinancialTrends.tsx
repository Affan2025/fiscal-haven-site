import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const fetchMarketData = async () => {
  return {
    forex: {
      'USD/AED': { rate: 3.67, history: generateDummyHistory(3.67) },
      'GBP/USD': { rate: 1.26, history: generateDummyHistory(1.26) },
      'EUR/USD': { rate: 1.08, history: generateDummyHistory(1.08) },
      'JPY/USD': { rate: 0.0067, history: generateDummyHistory(0.0067) }
    },
    crypto: {
      'BTC/USD': { rate: 95000.00, history: generateDummyHistory(95000.00) },
      'ETH/USD': { rate: 3521.75, history: generateDummyHistory(3521.75) },
      'SOL/USD': { rate: 184.32, history: generateDummyHistory(184.32) },
      'BNB/USD': { rate: 567.89, history: generateDummyHistory(567.89) },
      'XRP/USD': { rate: 0.62, history: generateDummyHistory(0.62) }
    },
    stocks: {
      'DFMGI': { value: 4183.23, history: generateDummyHistory(4183.23) },
      'ADX': { value: 9847.12, history: generateDummyHistory(9847.12) },
      'S&P500': { value: 5234.84, history: generateDummyHistory(5234.84) },
      'NASDAQ': { value: 16325.45, history: generateDummyHistory(16325.45) },
      'FTSE100': { value: 7687.32, history: generateDummyHistory(7687.32) }
    },
    commodities: {
      'GOLD': { value: 2023.50, history: generateDummyHistory(2023.50) }
    }
  };
};

const generateDummyHistory = (currentValue: number) => {
  return Array.from({ length: 5 }, (_, i) => ({
    name: `${i + 1}D`,
    value: Number((currentValue * (1 + (Math.random() * 0.02 - 0.01))).toFixed(2))
  }));
};

export const FinancialTrends = () => {
  const { data: marketData, isLoading } = useQuery({
    queryKey: ['marketData'],
    queryFn: fetchMarketData,
    refetchInterval: 60000 // Refetch every minute
  });

  if (isLoading) {
    return <div className="text-center">Loading market data...</div>;
  }

  const renderMarketCard = (title: string, value: number, history: any[], prefix: string = '') => (
    <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[100px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={history}>
              <Line type="monotone" dataKey="value" stroke="#1e3a8a" strokeWidth={2} dot={false} />
              <XAxis dataKey="name" hide />
              <YAxis hide />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <p className="text-2xl font-bold text-center mt-2">{prefix}{value.toLocaleString()}</p>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold mb-4">Forex Markets</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {Object.entries(marketData.forex).map(([pair, data]) => (
            renderMarketCard(pair, data.rate, data.history)
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Cryptocurrency Markets</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {Object.entries(marketData.crypto).map(([pair, data]) => (
            renderMarketCard(pair, data.rate, data.history, '$')
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Stock Markets</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {Object.entries(marketData.stocks).map(([index, data]) => (
            renderMarketCard(index, data.value, data.history)
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Commodities</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {Object.entries(marketData.commodities).map(([commodity, data]) => (
            renderMarketCard(`${commodity} (USD/oz)`, data.value, data.history, '$')
          ))}
        </div>
      </div>
    </div>
  );
};
