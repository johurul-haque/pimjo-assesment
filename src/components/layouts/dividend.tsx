'use client';

import { EllipsisVertical } from 'lucide-react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

export function Dividend() {
  const data = getData();

  return (
    <section className="rounded-2xl border p-6 col-span-2 row-span-3 flex flex-col">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-lg font-semibold mb-1">Dividend</h2>

        <button>
          <span className="sr-only">More</span>
          <EllipsisVertical className="text-light-gray" />
        </button>
      </div>

      <ResponsiveContainer className="mt-auto" width="100%" height={210}>
        <BarChart width={150} height={40} data={data}>
          <CartesianGrid stroke="#e5e7eb" horizontal={true} vertical={false} />

          <XAxis
            dataKey="in"
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
            tickFormatter={(value) => `$${value}`}
          />

          <Tooltip
            cursor={{ fill: 'transparent' }}
            content={<CustomTooltip />}
          />

          <Bar
            dataKey="amount"
            fill="#F2F4F7"
            activeBar={{ fill: '#465FFF' }}
            radius={[25, 25, 0, 0]}
            width={10}
          />
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 border border-gray-200 rounded shadow-lg">
        <p className="font-semibold">{label}</p>
        <p className="text-blue-600">{`Amount: $${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

function getData() {
  return [
    {
      in: 'Jan',
      amount: 580,
    },
    {
      in: 'Feb',
      amount: 730,
    },
    {
      in: 'Mar',
      amount: 420,
    },
    {
      in: 'Apr',
      amount: 620,
    },
    {
      in: 'May',
      amount: 410,
    },
    {
      in: 'Jun',
      amount: 620,
    },
  ];
}
