import { useState, useEffect } from 'react';
import { Shield, X } from 'lucide-react';

export default function GDPRDialog() {
  const [isEU, setIsEU] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const gdprAccepted = localStorage.getItem('gdprAccepted');

    const checkEULocation = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        const euCountries = [
          'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR',
          'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL',
          'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE', 'GB'
        ];

        if (euCountries.includes(data.country_code) && !gdprAccepted) {
          setIsEU(true);
          setIsVisible(true);
        }
      } catch (error) {
        console.error('Failed to detect location');
      }
    };

    checkEULocation();
  }, []);

  const handleAccept = () => {
    localStorage.setItem('gdprAccepted', 'true');
    setIsVisible(false);
  };

  const handleDecline = () => {
    setIsVisible(false);
  };

  if (!isVisible || !isEU) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-2xl w-full p-8 relative animate-fade-in-up">
        <button
          onClick={handleDecline}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex items-start gap-4 mb-6">
          <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-xl">
            <Shield className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              Privacy & Data Protection
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              GDPR Compliance Notice
            </p>
          </div>
        </div>

        <div className="space-y-4 mb-8 text-slate-700 dark:text-slate-300">
          <p>
            We respect your privacy and are committed to protecting your personal data in accordance
            with the General Data Protection Regulation (GDPR).
          </p>

          <p>
            This website may collect and process personal information when you:
          </p>

          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Fill out contact forms</li>
            <li>Upload files or documents</li>
            <li>Use cookies for analytics and functionality</li>
          </ul>

          <p>
            Your data will only be used for the purposes stated and will not be shared with third
            parties without your explicit consent.
          </p>

          <p className="text-sm">
            By continuing to use this website, you consent to our data processing practices.
            You have the right to access, rectify, or delete your personal data at any time.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={handleAccept}
            className="flex-1 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-lg"
          >
            I Accept
          </button>
          <button
            onClick={handleDecline}
            className="flex-1 px-6 py-3 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-900 dark:text-white rounded-lg font-medium transition-colors"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
