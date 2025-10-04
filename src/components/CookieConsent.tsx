import { useState, useEffect } from 'react';
import { Cookie, Settings, X } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = { necessary: true, analytics: true, marketing: true };
    setPreferences(allAccepted);
    localStorage.setItem('cookieConsent', JSON.stringify(allAccepted));
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const rejected = { necessary: true, analytics: false, marketing: false };
    setPreferences(rejected);
    localStorage.setItem('cookieConsent', JSON.stringify(rejected));
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    setIsVisible(false);
    setShowSettings(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="container mx-auto max-w-5xl">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 p-6 md:p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-amber-100 dark:bg-amber-900 rounded-xl flex-shrink-0">
              <Cookie className="w-6 h-6 text-amber-600 dark:text-amber-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Cookie Settings
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                We use cookies to enhance your browsing experience, analyze site traffic, and personalize
                content. You can customize your cookie preferences below.
              </p>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors flex-shrink-0"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {showSettings && (
            <div className="mb-6 space-y-4 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                    Necessary Cookies
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Required for basic site functionality. Cannot be disabled.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.necessary}
                  disabled
                  className="w-5 h-5 rounded"
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                    Analytics Cookies
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Help us understand how visitors interact with our website.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) =>
                    setPreferences({ ...preferences, analytics: e.target.checked })
                  }
                  className="w-5 h-5 rounded"
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                    Marketing Cookies
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Used to track visitors and display personalized content.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={(e) =>
                    setPreferences({ ...preferences, marketing: e.target.checked })
                  }
                  className="w-5 h-5 rounded"
                />
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleAcceptAll}
              className="flex-1 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-lg"
            >
              Accept All
            </button>
            <button
              onClick={handleRejectAll}
              className="flex-1 px-6 py-3 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-900 dark:text-white rounded-lg font-medium transition-colors"
            >
              Reject All
            </button>
            <button
              onClick={() => (showSettings ? handleSavePreferences() : setShowSettings(true))}
              className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-slate-300 dark:border-slate-600 hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 dark:text-slate-300 rounded-lg font-medium transition-colors"
            >
              <Settings className="w-5 h-5" />
              {showSettings ? 'Save Preferences' : 'Customize'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
