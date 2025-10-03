import { Project, Skill } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'National Digital Health Mission Portal',
    description: 'Led end-to-end product strategy and development of India\'s National Digital Health Mission portal for the Government of India.',
    longDescription: 'Spearheaded the product vision and delivered five integrated software modules supporting critical healthcare infrastructure across central and state government agencies. Directed a 16-week sprint-based delivery schedule, managing a cross-functional team of eight using Agile SCRUM methodologies. Successfully launched for Prime Minister\'s inauguration on August 15, 2020.',
    imageUrl: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800',
    demoUrl: 'https://www.ndhm.gov.in',
    tags: ['Product Strategy', 'Agile SCRUM', 'Government', 'Healthcare', 'Digital Transformation'],
    featured: true,
  },
  {
    id: '2',
    title: 'Award-Winning Display Solutions - BARCO',
    description: 'Led global development and launch of two Red Dot Design Award-winning product portfolios for visualization technology.',
    longDescription: 'Directed cross-functional collaboration across R&D, software, hardware, service, production, and marketing to execute product design and go-to-market plans in Europe, Asia, and the Americas. Achieved EUR 1.2M in revenue within six months, increasing market share by 42%. Streamlined digital ordering process, reducing order time by 60%.',
    imageUrl: 'https://images.pexels.com/photos/1476321/pexels-photo-1476321.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Product Management', 'Global Markets', 'Hardware', 'SaaS', 'GTM Strategy'],
    featured: true,
  },
  {
    id: '3',
    title: 'Digital Signage & Video Conferencing Platform',
    description: 'Defined and led product vision for enterprise digital signage and video conferencing platforms targeting multiple sectors.',
    longDescription: 'Increased strategic customer engagement by 42% and improved gross margins by 40% through value-based pricing and tailored product positioning. Spearheaded launch of self-service online ordering platform, resulting in 55% increase in conversion rates and reducing customer onboarding time from 2 weeks to 3 days.',
    imageUrl: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Product Vision', 'Pricing Strategy', 'Enterprise', 'B2B', 'Platform Development'],
    featured: true,
  },
  {
    id: '4',
    title: 'ISO 27001:2013 Certification Program',
    description: 'Led ISO 27001:2013 certification program as lead program manager across 70+ global Nokia locations.',
    longDescription: 'Coordinated with 700 teams across global locations to achieve information security certification. Spearheaded deployment of a Learning Management System (LMS) that cut training time by 75%. Designed custom communication and presentation training programs for senior client teams, resulting in 35% increase in client retention.',
    imageUrl: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Program Management', 'ISO 27001', 'Global Coordination', 'Process Optimization', 'Training'],
    featured: false,
  },
  {
    id: '5',
    title: 'Incarnus Healthcare Software Enhancement',
    description: 'Led product lifecycle for healthcare software platform, driving platform enhancements and market adoption.',
    longDescription: 'Developed pricing models and commercial strategies through competitive analysis and user segmentation. Directed full product lifecycle from ideation through go-to-market using ICE scoring and forecasting models. Mentored five junior product managers, resulting in 40% increase in sales funnel values and stronger solution-market alignment.',
    imageUrl: 'https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Healthcare', 'SaaS', 'Product Lifecycle', 'Mentorship', 'Commercial Strategy'],
    featured: false,
  },
  {
    id: '6',
    title: 'NEC Visualization Solutions Transformation',
    description: 'Transformed NEC\'s Multimedia Products Group from pure reseller to full-service AV/IT solutions provider.',
    longDescription: 'Grew market share from 1% to 7% and increased average deal size by 45% within two years through bundled solutions and tiered pricing strategies. Delivered over ₹60 Crores in annual revenue by aligning product strategy with business development initiatives. Forged OEM partnerships with global brands and led cross-functional GTM execution.',
    imageUrl: 'https://images.pexels.com/photos/163097/twitter-facebook-together-exchange-of-information-163097.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Business Transformation', 'Partnerships', 'Revenue Growth', 'AV/IT Solutions', 'Sales Enablement'],
    featured: false,
  },
];

export const skills: Skill[] = [
  { name: 'Product Strategy', category: 'Product Management', proficiency: 95, icon: 'Target' },
  { name: 'Roadmapping', category: 'Product Management', proficiency: 95, icon: 'Map' },
  { name: 'Portfolio Management', category: 'Product Management', proficiency: 90, icon: 'Briefcase' },
  { name: 'Product-Market Fit', category: 'Product Management', proficiency: 90, icon: 'TrendingUp' },
  { name: 'Go-to-Market Strategy', category: 'Product Management', proficiency: 95, icon: 'Rocket' },
  { name: 'Feature Prioritization', category: 'Product Management', proficiency: 90, icon: 'ListOrdered' },
  { name: 'Product Analytics', category: 'Product Management', proficiency: 85, icon: 'BarChart3' },

  { name: 'Agile (SCRUM)', category: 'Methodologies', proficiency: 95, icon: 'Zap' },
  { name: 'SAFe', category: 'Methodologies', proficiency: 85, icon: 'Shield' },
  { name: 'Lean Startup', category: 'Methodologies', proficiency: 85, icon: 'Lightbulb' },
  { name: 'Design Thinking', category: 'Methodologies', proficiency: 90, icon: 'Palette' },
  { name: 'OKRs', category: 'Methodologies', proficiency: 90, icon: 'Target' },
  { name: 'A/B Testing', category: 'Methodologies', proficiency: 85, icon: 'GitBranch' },

  { name: 'Stakeholder Management', category: 'Leadership', proficiency: 95, icon: 'Users' },
  { name: 'Cross-Functional Leadership', category: 'Leadership', proficiency: 95, icon: 'Network' },
  { name: 'Team Coaching', category: 'Leadership', proficiency: 90, icon: 'MessageCircle' },
  { name: 'Change Management', category: 'Leadership', proficiency: 90, icon: 'RefreshCw' },
  { name: 'Digital Transformation', category: 'Leadership', proficiency: 90, icon: 'Smartphone' },

  { name: 'ISO 27001', category: 'Certifications', proficiency: 95, icon: 'Shield' },
  { name: 'Google Project Management', category: 'Certifications', proficiency: 90, icon: 'CheckCircle' },
  { name: 'UX Design', category: 'Certifications', proficiency: 85, icon: 'Layout' },
  { name: 'Cyber Security', category: 'Certifications', proficiency: 85, icon: 'Lock' },
  { name: 'AI & Prompt Engineering', category: 'Certifications', proficiency: 85, icon: 'Cpu' },
];

export const personalInfo = {
  name: 'Kumar Abhinav',
  title: 'Product Management Executive',
  tagline: 'Driving digital transformation and product innovation across global markets',
  bio: 'Product management executive with 20+ years of global experience delivering software and hardware solutions across Asia, Europe, the Americas, and the Middle East. Consistently achieved €50M+ in business impact by transforming product portfolios, accelerating go-to-market strategies, and optimizing product-market fit.',
  email: 'kumarforpm@outlook.com',
  github: 'https://github.com/kumarabhinav',
  linkedin: 'https://linkedin.com/in/kumarabhinav',
  twitter: 'https://twitter.com/kumarabhinav',
};
