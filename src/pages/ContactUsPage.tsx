import { useState } from 'react';
import Layout from '../components/Layout';
import { Mail, MessageSquare, Send, CheckCircle } from 'lucide-react';

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600">
              We'd love to hear from you! Send us a message.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <MessageSquare className="w-6 h-6 text-cyan-500" />
                Send a Message
              </h2>

              {submitted ? (
                <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-green-900 mb-2">Message Sent!</h3>
                  <p className="text-green-700">
                    Thank you for contacting us. We'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-400 focus:ring-2 focus:ring-cyan-200 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-400 focus:ring-2 focus:ring-cyan-200 outline-none transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-400 focus:ring-2 focus:ring-cyan-200 outline-none transition-all"
                    >
                      <option value="">Select a subject...</option>
                      <option value="general">General Inquiry</option>
                      <option value="bug">Report a Bug</option>
                      <option value="suggestion">Game Suggestion</option>
                      <option value="copyright">Copyright Issue</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-400 focus:ring-2 focus:ring-cyan-200 outline-none transition-all resize-none"
                      placeholder="Tell us what's on your mind..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-lg transition-colors shadow-lg flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Mail className="w-6 h-6 text-cyan-500" />
                  Get in Touch
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    Whether you have a question, feedback, or just want to say hi, we're here to help!
                  </p>
                  <div className="bg-cyan-50 rounded-lg p-4 border-2 border-cyan-200">
                    <p className="font-semibold text-gray-900 mb-1">Email Us:</p>
                    <a href="mailto:contact@stealbrainrot.com" className="text-cyan-600 hover:text-cyan-700 font-medium">
                      contact@stealbrainrot.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl shadow-xl p-8 border-2 border-orange-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Common Inquiries</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 font-bold">•</span>
                    <span><strong>Game Requests:</strong> Suggest new games to add</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 font-bold">•</span>
                    <span><strong>Bug Reports:</strong> Let us know if something isn't working</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 font-bold">•</span>
                    <span><strong>Copyright:</strong> Report copyright concerns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 font-bold">•</span>
                    <span><strong>Partnerships:</strong> Collaborate with us</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
                <p className="text-sm text-blue-900">
                  <strong>Response Time:</strong> We typically respond within 24-48 hours during business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

