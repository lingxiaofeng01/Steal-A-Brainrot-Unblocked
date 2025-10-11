import { Link } from './Link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-red-500 to-pink-500 text-white mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Disclaimer */}
        <div className="text-center mb-6 pb-6 border-b border-white/20">
          <p className="text-sm md:text-base font-medium">
            <strong>Disclaimer:</strong> Steal a Brainrot is an independent website and is not affiliated with any organizations.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center items-center gap-3 md:gap-5 text-sm md:text-base mb-6">
          <Link
            href="/about"
            className="hover:text-yellow-200 transition-colors font-medium hover:underline"
          >
            About Us
          </Link>
          <span className="text-white/50 hidden sm:inline">|</span>
          <Link
            href="/contact"
            className="hover:text-yellow-200 transition-colors font-medium hover:underline"
          >
            Contact Us
          </Link>
          <span className="text-white/50 hidden sm:inline">|</span>
          <Link
            href="/terms"
            className="hover:text-yellow-200 transition-colors font-medium hover:underline"
          >
            Terms of Use
          </Link>
          <span className="text-white/50 hidden sm:inline">|</span>
          <Link
            href="/privacy"
            className="hover:text-yellow-200 transition-colors font-medium hover:underline"
          >
            Privacy Policy
          </Link>
          <span className="text-white/50 hidden sm:inline">|</span>
          <Link
            href="/copyright"
            className="hover:text-yellow-200 transition-colors font-medium hover:underline"
          >
            Copyright Infringement Notice Procedure
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-white/90 text-sm font-medium mb-1">
            © {currentYear} Steal a Brainrot. All rights reserved.
          </p>
          <p className="text-white/70 text-xs">
            Play free unblocked games online - No downloads required
          </p>
        </div>
      </div>
    </footer>
  );
}
