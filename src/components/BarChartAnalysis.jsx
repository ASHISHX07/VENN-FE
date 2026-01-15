'use client';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import CustomTooltip from './CustomTooltip';

const weeklyData = [
  { day: 'D1', pnl: 5000 },
  { day: 'D2', pnl: -1200 },
  { day: 'D3', pnl: 3500 },
  { day: 'D4', pnl: -500 },
  { day: 'D5', pnl: 8000 }
];

const WeeklyReturnsChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={weeklyData}>
        
        <XAxis
          dataKey="day"
          stroke="#888888"
          tick={{ fontSize: 12, fill: '#94a3b8' }}
          tickLine={false}
          axisLine={false}
        />
        
        <YAxis 
          tick={{ fontSize: 12, fill: '#64748b' }} 
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `₹${value}`}
        />
        
        {/* <Tooltip 
          contentStyle={{ backgroundColor: '#1e293b', border: 'none' }} 
          itemStyle={{ color: '#fff' }}
        /> */}
        <Tooltip cursor={{ fill: 'rgba(128,128,128,0.05)' }} content={<CustomTooltip />} />

        <Bar barSize="50" dataKey="pnl" fill="#22c55e">
          
          {weeklyData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.pnl >= 0 ? '#22c55e' : '#ef4444'} />
          ))}
        </Bar>
        
      </BarChart>
    </ResponsiveContainer>
  );
};

export default WeeklyReturnsChart;