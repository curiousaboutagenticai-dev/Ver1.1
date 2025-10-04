import { FileText, Home, User, Briefcase, Award, Mail, TrendingUp } from 'lucide-react';

export default function Sitemap() {
  const sections = [
    {
      title: 'Main Sections',
      icon: Home,
      links: [
        { name: 'Home', href: '#' },
        { name: 'About Me', href: '#about' },
        { name: 'Ayushman Bharat Case Study', href: '#ayushman-bharat' },
        { name: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'Projects',
      icon: Briefcase,
      links: [
        { name: 'All Projects', href: '#projects' },
        { name: '12 Marquee Projects', href: '#marquee-projects' },
        { name: 'Featured Work', href: '#projects' },
      ],
    },
    {
      title: 'Professional',
      icon: Award,
      links: [
        { name: 'Skills & Expertise', href: '#skills' },
        { name: 'Certifications', href: '#certifications' },
        { name: 'Career Timeline', href: '#career-timeline' },
      ],
    },
  ];

  return (
    <section id="sitemap" className="py-32 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-slate-200 dark:bg-slate-700 rounded-full font-bold text-slate-900 dark:text-white mb-6">
            <FileText className="w-6 h-6" />
            <span>Site Navigation</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Sitemap
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Quick access to all sections and content on this portfolio
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-xl">
                      <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {section.title}
                    </h3>
                  </div>

                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a
                          href={link.href}
                          className="block text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors pl-2 border-l-2 border-transparent hover:border-blue-600 dark:hover:border-blue-400"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="mt-12 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">
              Questions or Collaboration?
            </h3>
            <p className="text-white/90 mb-6">
              Feel free to reach out through the contact form
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-blue-600 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-lg"
            >
              <Mail className="w-5 h-5" />
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
