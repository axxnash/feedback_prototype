import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell} from 'recharts';

export default function RecommendationChart({ listings = [], topRecommendation = null }){
    const chartData = [...listings].map(item => {
        const itemId = item?.id ? String(item.id) : '';
        const recId = topRecommendation?.id ? String(topRecommendation.id) : '';

        const namesMatch = item?.foodName && topRecommendation?.foodName && item.foodName === topRecommendation.foodName;
    
        const isTopRec = (itemId && itemId === recId) || namesMatch;

        return {
        name: item.foodName || 'Unnamed Item',
        'Match Score': item.recommendationScore,
        'AI Confidence': '50',
        };
    })
    .sort((a, b) => b['Match Score'] - a['Match Score'])
    .slice(0, 5);

    if (chartData.length === 0){
        return (
            <div className="p-6 text-center text-sm text-gray-500 bg-gray-50 rounded-xl border border-dashed">
                No data available to display chart.
            </div>
        );
    }

    return (
        <div className="w-full bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Top Food Recommendations</h3>
                <p className="text-xs text-gray-500">Based on your preferences, proximity, and urgency</p>
            </div>

            <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 5 }}>
                       <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0"/>
                       <XAxis 
                       dataKey="name"
                       tick={{ fill: '#6b7280', fontSize: 12 }}
                       axisLine = {false}
                       tickLine = {false}
                       />
                       <YAxis 
                       domain={[0, 100]} 
                       tick={{ fill: '#6b7280', fontSize: 12 }}
                       axisLine={false}
                       tickLine={false}
                       />
                       <Tooltip
                          cursor={{ fill: '#f9fafb'}}
                          content={({ active, payload }) => {
                            if (active && payload && payload.length){
                                return (
                                    <div className="bg-gray-900 text-white p-3 rounded-lg shadow-md text-xs">
                                        <p className="font-semibold mb-1">{payload[0].payload.name}</p>
                                        <p><span className="text-emerald-400">Match Score:</span> {payload[0].value}/100</p>
                                        <p><span className="text-blue-400">AI Confidence:</span> {payload[0].payload.Confidence}%</p>
                                    </div>
                                );
                            }
                            return null;
                          }}
                        />
                       <Bar dataKey="Match Score" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={25}>
                         {chartData.map((entry, index) => {
                            return <Cell key={`cell-${index}`} fill={entry['AI Confidence'] > 0 ? '#10b981' : '#3b82f6'} />;
                         })}
                      </Bar>

                      <Bar dataKey="AI Confidence" fill="#8b5cf6" radius={[4, 4, 0, 0]} barSize={25} />
                   </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}