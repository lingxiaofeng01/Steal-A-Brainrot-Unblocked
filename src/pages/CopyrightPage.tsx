'use client';

import Layout from '../components/Layout';
import { AlertTriangle, Mail, FileText, CheckSquare } from 'lucide-react';

export default function CopyrightPage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
              <AlertTriangle className="w-10 h-10 text-red-500" />
              Copyright Infringement Notice Procedure
            </h1>
            <p className="text-lg text-gray-600">
              DMCA Takedown Policy
            </p>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="prose max-w-none">
              <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 mb-8">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-red-900 mb-2">Important Notice</h3>
                    <p className="text-red-800 text-sm">
                      Steal a Brainrot respects the intellectual property rights of others and expects our 
                      users to do the same. We will respond to valid copyright infringement notices in 
                      accordance with the Digital Millennium Copyright Act (DMCA).
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Our Commitment</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We are committed to respecting copyright and intellectual property rights. If you believe 
                that content on our website infringes your copyright, please follow the procedure outlined 
                below to submit a takedown notice.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8 flex items-center gap-2">
                <FileText className="w-6 h-6 text-cyan-500" />
                Filing a DMCA Takedown Notice
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To file a copyright infringement notification, you must provide a written communication 
                that includes the following:
              </p>

              <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200 mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <CheckSquare className="w-5 h-5 text-green-500" />
                  Required Information
                </h3>
                <ol className="list-decimal list-inside text-gray-700 space-y-3 ml-4">
                  <li className="leading-relaxed">
                    <strong>Identification of the copyrighted work:</strong> A description of the copyrighted 
                    work that you claim has been infringed, or if multiple works are covered by a single 
                    notification, a representative list of such works.
                  </li>
                  <li className="leading-relaxed">
                    <strong>Identification of the infringing material:</strong> A description of where the 
                    material that you claim is infringing is located on our website (please provide specific 
                    URLs).
                  </li>
                  <li className="leading-relaxed">
                    <strong>Your contact information:</strong> Your name, address, telephone number, and 
                    email address.
                  </li>
                  <li className="leading-relaxed">
                    <strong>Good faith statement:</strong> A statement that you have a good faith belief 
                    that the disputed use is not authorized by the copyright owner, its agent, or the law.
                  </li>
                  <li className="leading-relaxed">
                    <strong>Accuracy statement:</strong> A statement, made under penalty of perjury, that 
                    the information in your notice is accurate and that you are the copyright owner or 
                    authorized to act on the copyright owner's behalf.
                  </li>
                  <li className="leading-relaxed">
                    <strong>Physical or electronic signature:</strong> Your physical or electronic signature.
                  </li>
                </ol>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8 flex items-center gap-2">
                <Mail className="w-6 h-6 text-cyan-500" />
                How to Submit Your Notice
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Please send your DMCA takedown notice to our designated Copyright Agent:
              </p>

              <div className="bg-cyan-50 rounded-xl p-6 border-2 border-cyan-200 mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Copyright Agent Contact</h3>
                <div className="space-y-2 text-gray-700">
                  <p>
                    <strong>Email:</strong>{' '}
                    <a href="mailto:dmca@stealbrainrot.com" className="text-cyan-600 hover:text-cyan-700 font-medium">
                      dmca@stealbrainrot.com
                    </a>
                  </p>
                  <p>
                    <strong>Subject Line:</strong> DMCA Takedown Notice
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-bold text-yellow-900 mb-2">⚠️ Important Notes</h3>
                <ul className="list-disc list-inside text-yellow-800 space-y-2 ml-4 text-sm">
                  <li>
                    Please be as specific as possible when identifying the infringing content. Include 
                    direct URLs to the specific pages or games in question.
                  </li>
                  <li>
                    Incomplete or unclear notices may delay our response. We may request additional 
                    information before taking action.
                  </li>
                  <li>
                    False or fraudulent DMCA notices may result in legal liability. Please ensure your 
                    claim is legitimate before submitting.
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Our Response Process</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Upon receiving a valid DMCA notice, we will:
              </p>
              <ol className="list-decimal list-inside text-gray-700 space-y-2 mb-6 ml-4">
                <li>Review the notice for completeness and validity</li>
                <li>Remove or disable access to the allegedly infringing content</li>
                <li>Notify the user who posted the content (if applicable)</li>
                <li>Take appropriate action based on the circumstances</li>
              </ol>
              <p className="text-gray-700 leading-relaxed mb-6">
                We typically respond to valid DMCA notices within 24-48 hours.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Counter-Notification</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                If you believe that content you posted was removed in error or misidentification, you may 
                file a counter-notification. The counter-notification must include similar information as 
                the original notice, along with a statement that you consent to the jurisdiction of the 
                federal court and that you will accept service of process from the person who filed the 
                original notice.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Repeat Infringers</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We have a policy of terminating, in appropriate circumstances, users who are repeat 
                infringers of intellectual property rights.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Third-Party Content</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Please note that many games on our website are embedded from third-party sources. While 
                we will remove links or embeds upon valid notice, you may also need to contact the original 
                content host directly.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Questions?</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                If you have questions about our copyright policy or the DMCA process, please contact us at:
              </p>
              <div className="bg-gray-50 rounded-lg p-4 border-2 border-gray-200">
                <p className="text-gray-900">
                  <strong>General Inquiries:</strong>{' '}
                  <a href="mailto:legal@stealbrainrot.com" className="text-cyan-600 hover:text-cyan-700">
                    legal@stealbrainrot.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-8">
            <h3 className="text-lg font-bold text-blue-900 mb-2">Disclaimer</h3>
            <p className="text-blue-800 text-sm leading-relaxed">
              This page provides general information about our DMCA policy. It is not legal advice. 
              For specific legal questions, please consult with an attorney. We reserve the right to 
              modify this policy at any time.
            </p>
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

