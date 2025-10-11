import Layout from '../components/Layout';
import { Users, Gamepad2, Heart, Zap } from 'lucide-react';

export default function AboutUsPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About Steal a Brainrot
            </h1>
            <p className="text-xl text-gray-600">
              Your ultimate destination for unblocked brainrot games
            </p>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Gamepad2 className="w-7 h-7 text-cyan-500" />
                Who We Are
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Steal a Brainrot is an independent gaming website dedicated to bringing you the best collection 
                of unblocked brainrot games. We're passionate gamers who understand the joy of discovering 
                unique, entertaining, and sometimes hilariously absurd games that capture the essence of 
                internet culture.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2 mt-8">
                <Zap className="w-7 h-7 text-orange-500" />
                Our Mission
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our mission is simple: to provide free, instant access to the most entertaining brainrot games 
                without downloads, installations, or restrictions. We believe gaming should be accessible to 
                everyone, anywhere, anytime.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2 mt-8">
                <Heart className="w-7 h-7 text-pink-500" />
                What We Offer
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>A curated collection of the best brainrot games</li>
                <li>100% free to play - no hidden fees or subscriptions</li>
                <li>No downloads required - play instantly in your browser</li>
                <li>Unblocked access - play at school, work, or anywhere</li>
                <li>Regular updates with new games and content</li>
                <li>Mobile-friendly gaming experience</li>
                <li>Community-driven ratings and reviews</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2 mt-8">
                <Users className="w-7 h-7 text-purple-500" />
                Our Community
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We're building a vibrant community of gamers who appreciate the unique charm of brainrot culture. 
                Whether you're here for the memes, the gameplay, or just to kill some time, you're part of our 
                growing family of players worldwide.
              </p>

              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-6 border-2 border-cyan-200 mt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Why "Brainrot"?</h3>
                <p className="text-gray-700 leading-relaxed">
                  "Brainrot" is a playful term from internet culture referring to content that's so entertaining, 
                  absurd, or addictive that it consumes your thoughts. Our games embrace this spirit - they're 
                  fun, quirky, and unapologetically entertaining. From clicking Italian babies to stealing memes, 
                  we celebrate the wonderfully weird side of gaming.
                </p>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-red-900 mb-2">Important Disclaimer</h3>
            <p className="text-red-800 text-sm leading-relaxed">
              Steal a Brainrot is an independent website and is not affiliated with any game developers, 
              publishers, or organizations. All games are embedded from their original sources or third-party 
              platforms. We respect intellectual property rights and will promptly remove any content upon 
              valid copyright claims.
            </p>
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Have questions or suggestions?
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-lg transition-colors shadow-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}

