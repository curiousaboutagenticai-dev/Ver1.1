import { useState } from 'react';
import * as Icons from 'lucide-react';
import { skills } from '../data/portfolio';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', ...Array.from(new Set(skills.map(s => s.category)))];

  const filteredSkills = selectedCategory === 'all'
    ? skills
    : skills.filter(s => s.category === selectedCategory);

  const groupedSkills = filteredSkills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  const getIcon = (iconName: string) => {
    const Icon = Icons[iconName as keyof typeof Icons] as any;
    return Icon ? <Icon className="w-6 h-6" /> : <Icons.Code className="w-6 h-6" />;
  };

  return (
    <section id="skills" className="py-32 bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Comprehensive expertise across product management, methodologies, and leadership.
          </p>
        </div>

        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-lg scale-105'
                  : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="space-y-12">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <div key={category} className="animate-fade-in-up">
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
                {category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categorySkills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="group bg-white dark:bg-slate-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-200 dark:border-slate-600"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-slate-100 dark:bg-slate-600 rounded-lg text-slate-700 dark:text-slate-300 group-hover:bg-blue-100 dark:group-hover:bg-blue-900 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {getIcon(skill.icon)}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-slate-900 dark:text-white">
                          {skill.name}
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          {skill.proficiency}% proficiency
                        </p>
                      </div>
                    </div>
                    <div className="relative h-2 bg-slate-200 dark:bg-slate-600 rounded-full overflow-hidden">
                      <div
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-2xl p-8 md:p-12 text-white shadow-xl">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">Always Learning</h3>
            <p className="text-lg text-blue-50 mb-6">
              I'm constantly exploring new technologies and best practices to stay at the forefront of web development.
              Currently diving deeper into performance optimization, accessibility, and modern design systems.
            </p>
            <div className="flex justify-center gap-6 flex-wrap">
              <div className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full font-medium">
                Web Performance
              </div>
              <div className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full font-medium">
                Accessibility (A11y)
              </div>
              <div className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full font-medium">
                Design Systems
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
