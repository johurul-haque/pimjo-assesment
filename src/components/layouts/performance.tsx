'use client';

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { formatNumber } from '@/lib/format-number';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
const monthlyData = [
  { category: 'Jan', amount: 4374 },
  { category: 'Feb', amount: 13462 },
  { category: 'Mar', amount: 5363 },
  { category: 'Apr', amount: 19622 },
  { category: 'May', amount: 14991 },
  { category: 'Jun', amount: 10811 },
  { category: 'Jul', amount: 4667 },
  { category: 'Aug', amount: 7452 },
  { category: 'Sep', amount: 16805 },
  { category: 'Oct', amount: 2204 },
  { category: 'Nov', amount: 14311 },
  { category: 'Dec', amount: 17292 },
];

const quarterlyData = [
  { category: 'Q1', amount: 14311 },
  { category: 'Q2', amount: 17292 },
  { category: 'Q3', amount: 13500 },
  { category: 'Q4', amount: 16700 },
];

const annualData = [
  { category: '2019', amount: 35000 },
  { category: '2020', amount: 42000 },
  { category: '2021', amount: 55000 },
  { category: '2022', amount: 68000 },
  { category: '2023', amount: 85000 },
];

export function Performance({ className }: { className?: string }) {
  const [activeTab, setActiveTab] = useState('monthly');

  return (
    <section className={cn('rounded-2xl border p-6', className)}>
      <Tabs
        className="flex flex-col h-full"
        value={activeTab}
        onValueChange={setActiveTab}
      >
        <div className="flex justify-between mb-8">
          <div>
            <h2 className="text-lg font-semibold mb-1">
              Portfolio Performance
            </h2>
            <p className="text-light-gray">
              Here is your performance stats of each month
            </p>
          </div>

          <TabsList className="grid grid-cols-3 max-w-xs">
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
            <TabsTrigger value="quarterly">Quarterly</TabsTrigger>
            <TabsTrigger value="annually">Annually</TabsTrigger>
          </TabsList>
        </div>

        <ResponsiveContainer className={'mt-auto'} width="100%" height={350}>
          <AreaChart data={getChartData(activeTab)}>
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#465FFF" stopOpacity={1} />
                <stop offset="100%" stopColor="#465FFF" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid
              stroke="#e5e7eb"
              horizontal={true}
              vertical={false}
            />

            <XAxis
              dataKey="category"
              stroke="#344054"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />

            <YAxis
              stroke="#344054"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => {
                const formatter = new Intl.NumberFormat('en', {
                  notation: 'compact',
                  compactDisplay: 'short',
                });

                return formatter.format(value);
              }}
            />

            <Tooltip content={<CustomTooltip />} />

            <Area
              type="monotone"
              dataKey="amount"
              stroke="#465FFF"
              fill="url(#colorGradient)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </Tabs>
    </section>
  );
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 border border-gray-200 rounded shadow-lg">
        <p className="font-semibold">{label}</p>
        <p className="text-blue-600">{`$ ${formatNumber(payload[0].value)}`}</p>
      </div>
    );
  }
  return null;
};

function getChartData(activeTab: string) {
  switch (activeTab) {
    case 'monthly':
      return monthlyData;
    case 'quarterly':
      return quarterlyData;
    case 'annually':
      return annualData;
    default:
      return monthlyData;
  }
}
