import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';
import { useLanguage } from '../context/LanguageContext';

const Skills: React.FC = () => {
  const { content } = useLanguage();
  const { skills, ui } = content;

  // Sort skills by level for better visualization
  const sortedSkills = [...skills].sort((a, b) => b.level - a.level);

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-800 border border-slate-700 p-3 rounded-lg shadow-xl">
          <p className="text-white font-medium">{label}</p>
          <p className="text-indigo-400 text-sm">Proficiency: {payload[0].value}%</p>
          <p className="text-slate-400 text-xs uppercase mt-1">{payload[0].payload.category}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <section id="skills" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-8 items-stretch">
            
            <div className="md:w-1/3 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="w-10 h-1 bg-indigo-500 rounded-full"></span>
                    {ui.headings.skills}
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                    {ui.headings.skillsSubtitle}
                </p>
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl">
                        <div className="text-3xl font-bold text-indigo-500 mb-1">3+</div>
                        <div className="text-slate-400 text-sm">{ui.headings.skillsStats.years}</div>
                    </div>
                    <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl">
                        <div className="text-3xl font-bold text-purple-500 mb-1">4</div>
                        <div className="text-slate-400 text-sm">{ui.headings.skillsStats.projects}</div>
                    </div>
                </div>
            </div>

            <div className="md:w-2/3 w-full bg-slate-900/50 rounded-3xl border border-slate-800 p-6 md:p-8">
                <div className="h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={sortedSkills}
                            layout="vertical"
                            margin={{ top: 10, right: 30, left: 0, bottom: 10 }}
                        >
                            <XAxis type="number" hide domain={[0, 100]} />
                            <YAxis 
                                dataKey="name" 
                                type="category" 
                                width={160}
                                tick={{ fill: '#94a3b8', fontSize: 13 }} 
                                axisLine={false}
                                tickLine={false}
                                interval={0}
                            />
                            <Tooltip content={<CustomTooltip />} cursor={{fill: 'rgba(255,255,255,0.05)'}} />
                            <Bar dataKey="level" radius={[0, 8, 8, 0]} barSize={28}>
                                {sortedSkills.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={
                                        (entry.category === 'Engineering' || entry.category.includes('Engineering')) ? '#3b82f6' : 
                                        (entry.category === 'AI' || entry.category.includes('AI')) ? '#a855f7' :
                                        (entry.category === 'Software' || entry.category.includes('Software')) ? '#10b981' :
                                        '#f59e0b'
                                    } />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
