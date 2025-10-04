import { User, MapPin, Briefcase, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function AboutMe() {
  return (
    <section id="about" className="py-32 bg-gradient-to-br from-blue-50 to-emerald-50 dark:from-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            About Me
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            More than just a professional journey
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl p-10 md:p-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded-2xl">
                <User className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                Personal Background
              </h3>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                {personalInfo.personalBackground}
              </p>

              <div className="grid md:grid-cols-2 gap-8 mt-10">
                <div className="flex items-start gap-4 p-6 bg-slate-50 dark:bg-slate-700/50 rounded-2xl">
                  <div className="p-3 bg-emerald-100 dark:bg-emerald-900 rounded-xl">
                    <MapPin className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-2">Global Experience</h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      Travelled extensively across 16 countries. Based in Europe for 4 years managing product portfolios.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-slate-50 dark:bg-slate-700/50 rounded-2xl">
                  <div className="p-3 bg-amber-100 dark:bg-amber-900 rounded-xl">
                    <Briefcase className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-2">Leadership Roles</h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      Held leadership positions at NEC, BenQ, BARCO, and British Telecom across multiple functions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-8 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <Heart className="w-7 h-7 text-white" />
                  <h4 className="text-2xl font-bold text-white">Interests & Passions</h4>
                </div>
                <p className="text-lg text-white/90">
                  {personalInfo.interests}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
