'use client';

import Layout from '../components/Layout';
import { FileText, AlertCircle } from 'lucide-react';

export default function TermsOfUsePage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
              <FileText className="w-10 h-10 text-cyan-500" />
              Terms of Use
            </h1>
            <p className="text-lg text-gray-600">
              Last Updated: January 11, 2025
            </p>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="prose max-w-none">
              <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6 mb-8">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-yellow-900 mb-2">Please Read Carefully</h3>
                    <p className="text-yellow-800 text-sm">
                      By accessing and using Steal a Brainrot, you agree to be bound by these Terms of Use. 
                      If you do not agree with any part of these terms, please do not use our website.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">1. Acceptance of Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                These Terms of Use constitute a legally binding agreement between you and Steal a Brainrot 
                ("we," "us," or "our"). By accessing or using our website, you acknowledge that you have read, 
                understood, and agree to be bound by these terms.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">2. Use of Service</h2>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1 Permitted Use</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You may use our website for personal, non-commercial entertainment purposes. You agree to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6 ml-4">
                <li>Use the service in compliance with all applicable laws and regulations</li>
                <li>Not attempt to gain unauthorized access to any part of the website</li>
                <li>Not interfere with or disrupt the service or servers</li>
                <li>Not use automated systems (bots, scrapers) without permission</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.2 Prohibited Activities</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You agree NOT to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6 ml-4">
                <li>Copy, modify, or distribute any content from our website without permission</li>
                <li>Use the service for any illegal or unauthorized purpose</li>
                <li>Attempt to reverse engineer or extract source code from games</li>
                <li>Upload viruses, malware, or any harmful code</li>
                <li>Harass, abuse, or harm other users</li>
                <li>Impersonate any person or entity</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">3. Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                All games, content, and materials on this website are the property of their respective owners. 
                We do not claim ownership of any third-party games or content. All trademarks, logos, and brand 
                names are the property of their respective owners.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">4. Third-Party Content</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our website may contain links to third-party websites and embed games from external sources. 
                We are not responsible for the content, privacy policies, or practices of any third-party sites. 
                Your use of third-party content is at your own risk.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">5. User-Generated Content</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                By submitting comments, ratings, or reviews on our website, you grant us a non-exclusive, 
                royalty-free, perpetual license to use, display, and distribute your content. You represent 
                that you own or have the right to submit such content and that it does not violate any laws 
                or third-party rights.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">6. Disclaimer of Warranties</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER 
                EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, 
                OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">7. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, 
                SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICE.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">8. Age Restrictions</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our service is intended for users aged 13 and older. If you are under 13, you may only use 
                the service with parental or guardian supervision and consent.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">9. Modifications to Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We reserve the right to modify these Terms of Use at any time. Changes will be effective 
                immediately upon posting. Your continued use of the service after changes constitutes 
                acceptance of the modified terms.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">10. Termination</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We reserve the right to terminate or suspend your access to the service at any time, without 
                notice, for conduct that we believe violates these Terms of Use or is harmful to other users, 
                us, or third parties.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">11. Governing Law</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                These Terms of Use shall be governed by and construed in accordance with applicable laws, 
                without regard to conflict of law principles.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">12. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                If you have any questions about these Terms of Use, please contact us at:
              </p>
              <div className="bg-cyan-50 rounded-lg p-4 border-2 border-cyan-200">
                <p className="text-gray-900">
                  <strong>Email:</strong>{' '}
                  <a href="mailto:legal@stealbrainrot.com" className="text-cyan-600 hover:text-cyan-700">
                    legal@stealbrainrot.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Back to Home */}
          <div className="text-center">
            <a
              href="/"
              className="inline-block px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-lg transition-colors shadow-lg"
            >
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

