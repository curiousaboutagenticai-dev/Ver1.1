import { useState } from 'react';
import { Mail, Send, CheckCircle, MapPin, Phone, Upload, X } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const MAX_FILE_SIZE = 5 * 1024 * 1024;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.size > MAX_FILE_SIZE) {
        setFileError('File size must be less than 5MB');
        setFile(null);
      } else {
        setFileError('');
        setFile(selectedFile);
      }
    }
  };

  const removeFile = () => {
    setFile(null);
    setFileError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setStatus('success');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      setFile(null);

      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Let's Talk
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                Whether you have a question, want to start a project, or simply want to connect,
                feel free to reach out. I'll get back to you as soon as possible.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg text-blue-600 dark:text-blue-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Email</h4>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                <div className="p-3 bg-emerald-100 dark:bg-emerald-900 rounded-lg text-emerald-600 dark:text-emerald-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Location</h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    Available for remote work worldwide
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                <div className="p-3 bg-amber-100 dark:bg-amber-900 rounded-lg text-amber-600 dark:text-amber-400">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Response Time</h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    Usually within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="mb-6 p-4 bg-emerald-100 dark:bg-emerald-900 rounded-full">
                  <CheckCircle className="w-16 h-16 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                  Message Sent!
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  Thank you for reaching out. I'll get back to you soon.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-medium hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-900 dark:text-white mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-900 dark:text-white mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-900 dark:text-white mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                    Attachment (Optional)
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      id="file"
                      onChange={handleFileChange}
                      className="hidden"
                      accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png"
                    />
                    <label
                      htmlFor="file"
                      className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-slate-100 dark:bg-slate-700 border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-lg text-slate-600 dark:text-slate-400 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-all"
                    >
                      <Upload className="w-5 h-5" />
                      {file ? file.name : 'Click to upload file (Max 5MB)'}
                    </label>
                    {file && (
                      <button
                        type="button"
                        onClick={removeFile}
                        className="absolute top-3 right-3 p-1 bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 rounded-full hover:bg-red-200 dark:hover:bg-red-800 transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                  {fileError && (
                    <p className="mt-2 text-sm text-red-600 dark:text-red-400">{fileError}</p>
                  )}
                  {file && !fileError && (
                    <p className="mt-2 text-sm text-emerald-600 dark:text-emerald-400">
                      File size: {(file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-medium hover:bg-slate-800 dark:hover:bg-slate-100 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white dark:border-slate-900 border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
