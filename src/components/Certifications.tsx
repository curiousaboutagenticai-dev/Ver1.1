import * as Icons from 'lucide-react';
import { certifications } from '../data/portfolio';

export default function Certifications() {
  const getIcon = (iconName: string) => {
    const Icon = Icons[iconName as keyof typeof Icons] as any;
    return Icon ? <Icon className="w-10 h-10" /> : <Icons.Award className="w-10 h-10" />;
  };

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; badge: string; glow: string }> = {
      blue: {
        bg: 'from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800',
        text: 'text-blue-700 dark:text-blue-300',
        badge: 'bg-blue-500',
        glow: 'group-hover:shadow-blue-500/50',
      },
      emerald: {
        bg: 'from-emerald-100 to-emerald-200 dark:from-emerald-900 dark:to-emerald-800',
        text: 'text-emerald-700 dark:text-emerald-300',
        badge: 'bg-emerald-500',
        glow: 'group-hover:shadow-emerald-500/50',
      },
      amber: {
        bg: 'from-amber-100 to-amber-200 dark:from-amber-900 dark:to-amber-800',
        text: 'text-amber-700 dark:text-amber-300',
        badge: 'bg-amber-500',
        glow: 'group-hover:shadow-amber-500/50',
      },
      red: {
        bg: 'from-red-100 to-red-200 dark:from-red-900 dark:to-red-800',
        text: 'text-red-700 dark:text-red-300',
        badge: 'bg-red-500',
        glow: 'group-hover:shadow-red-500/50',
      },
      purple: {
        bg: 'from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800',
        text: 'text-purple-700 dark:text-purple-300',
        badge: 'bg-purple-500',
        glow: 'group-hover:shadow-purple-500/50',
      },
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="certifications" className="py-32 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full font-semibold mb-6">
            Professional Excellence
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Certifications & Training
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Over 100+ professional certifications across multiple domains
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => {
            const colors = getColorClasses(cert.color);
            return (
              <div
                key={index}
                className={`group relative bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl ${colors.glow} transition-all duration-500 hover:-translate-y-3 border border-slate-200 dark:border-slate-700`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute -top-4 -right-4 px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-bold text-lg shadow-xl">
                  {cert.count}
                </div>

                <div className={`inline-flex p-5 bg-gradient-to-br ${colors.bg} rounded-2xl mb-6 ${colors.text} transform group-hover:scale-110 transition-transform duration-300`}>
                  {getIcon(cert.icon)}
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                  {cert.name}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 font-medium">
                  {cert.issuer}
                </p>

                <div className={`absolute bottom-0 left-0 right-0 h-2 ${colors.badge} rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl p-8 shadow-xl">
            <p className="text-xl font-bold text-white">
              Continuously updating skills across Product Management, Program Management,
              Cyber Security, Agile methodologies, and emerging technologies
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
