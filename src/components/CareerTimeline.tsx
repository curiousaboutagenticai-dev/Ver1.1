import { Calendar, Briefcase, User } from 'lucide-react';
import { careerTimeline } from '../data/portfolio';

export default function CareerTimeline() {
  return (
    <section id="career-timeline" className="py-32 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Career Journey
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Two decades of innovation and leadership
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-emerald-500 to-amber-500"></div>

            {careerTimeline.map((item, index) => (
              <div
                key={index}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto md:text-left'
                }`}
              >
                <div className={`flex items-center gap-4 ${index % 2 === 0 ? 'md:flex-row-reverse md:justify-end' : 'md:justify-start'}`}>
                  <div className="flex-shrink-0 w-16 h-16 bg-white dark:bg-slate-700 rounded-full border-4 border-blue-500 flex items-center justify-center shadow-lg z-10">
                    {item.type === 'personal' ? (
                      <User className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                    ) : (
                      <Briefcase className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
                    )}
                  </div>

                  <div className="flex-1 bg-white dark:bg-slate-700 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Calendar className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                      <span className="text-lg font-bold text-amber-600 dark:text-amber-400">
                        {item.year}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                      {item.title}
                    </h3>

                    {item.company && (
                      <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">
                        {item.company}
                      </p>
                    )}

                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
