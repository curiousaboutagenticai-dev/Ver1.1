import { Award, Users, Calendar, Target, CheckCircle, TrendingUp } from 'lucide-react';

export default function AyushmanCaseStudy() {
  return (
    <section id="ayushman-bharat" className="py-32 bg-gradient-to-br from-blue-600 to-emerald-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full font-bold text-white mb-6">
            <Award className="w-6 h-6" />
            <span>Featured Case Study</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Ayushman Bharat
          </h2>
          <p className="text-2xl md:text-3xl text-blue-100 font-semibold">
            National Digital Health Mission
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl p-10 md:p-16 mb-12">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                  Project Overview
                </h3>
                <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                  Led end-to-end product strategy and development of India's National Digital Health Mission
                  portal for the Government of India. This transformative initiative aimed to revolutionize
                  healthcare delivery across the nation.
                </p>
                <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                  Spearheaded the product vision and delivered five integrated software modules supporting
                  critical healthcare infrastructure across central and state government agencies.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-blue-50 dark:bg-blue-900/30 rounded-2xl">
                  <Calendar className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">Launch Date</h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      August 15, 2020 - Inaugurated by Prime Minister
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-emerald-50 dark:bg-emerald-900/30 rounded-2xl">
                  <Users className="w-6 h-6 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">Team Management</h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      Directed cross-functional team of 8 using Agile SCRUM
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-amber-50 dark:bg-amber-900/30 rounded-2xl">
                  <Target className="w-6 h-6 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">Delivery Timeline</h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      16-week sprint-based delivery schedule
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-200 dark:border-slate-700 pt-12">
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
                Key Achievements
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-1" />
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    Delivered five integrated software modules for nationwide healthcare infrastructure
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-1" />
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    Successfully launched on national Independence Day for PM's inauguration
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-1" />
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    Coordinated with central and state government agencies across India
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-1" />
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    Implemented Agile SCRUM methodologies for rapid, iterative development
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <div className="flex items-center gap-4 justify-center text-white">
              <TrendingUp className="w-8 h-8" />
              <p className="text-xl font-semibold">
                Transforming healthcare delivery for over 1.3 billion citizens
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
