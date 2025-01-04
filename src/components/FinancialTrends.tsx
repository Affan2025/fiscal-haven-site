import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const dummyData = [
  { name: '1D', value: 1.23 },
  { name: '2D', value: 1.24 },
  { name: '3D', value: 1.22 },
  { name: '4D', value: 1.25 },
  { name: '5D', value: 1.26 },
];

export const FinancialTrends = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-lg">USD/AED</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[100px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={dummyData}>
                <Line type="monotone" dataKey="value" stroke="#1e3a8a" strokeWidth={2} dot={false} />
                <XAxis dataKey="name" hide />
                <YAxis hide />
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <p className="text-2xl font-bold text-center mt-2">3.67</p>
        </CardContent>
      </Card>

      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-lg">Gold (USD/oz)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[100px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={dummyData}>
                <Line type="monotone" dataKey="value" stroke="#1e3a8a" strokeWidth={2} dot={false} />
                <XAxis dataKey="name" hide />
                <YAxis hide />
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <p className="text-2xl font-bold text-center mt-2">2,023.50</p>
        </CardContent>
      </Card>

      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-lg">FTSE 100</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[100px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={dummyData}>
                <Line type="monotone" dataKey="value" stroke="#1e3a8a" strokeWidth={2} dot={false} />
                <XAxis dataKey="name" hide />
                <YAxis hide />
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <p className="text-2xl font-bold text-center mt-2">7,683.91</p>
        </CardContent>
      </Card>

      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-lg">Bitcoin (USD)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[100px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={dummyData}>
                <Line type="monotone" dataKey="value" stroke="#1e3a8a" strokeWidth={2} dot={false} />
                <XAxis dataKey="name" hide />
                <YAxis hide />
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <p className="text-2xl font-bold text-center mt-2">51,234.00</p>
        </CardContent>
      </Card>
    </div>
  );
};