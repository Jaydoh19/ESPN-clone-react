import { InstagramIcon, LinkedinIcon, TwitterIcon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-[#0d121d] text-white">

      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between gap-12">

          {/* Brand */}
          <div className="flex flex-col max-w-sm">
            <div className="flex items-center gap-3">
              <img src="logo2.png" className="h-12 w-12 object-contain" />
              <div>
                <p className="font-bold text-lg">NBA GO</p>
                <p className="text-sm text-gray-500">Stats & Scores</p>
              </div>
            </div>

            <p className="text-sm text-gray-400 mt-4 leading-relaxed">
              Your ultimate destination for real-time NBA scores, comprehensive
              player statistics, and team standings.
            </p>

            <div className="flex gap-3 mt-6">
              {[
                { icon: TwitterIcon, url: 'https://twitter.com' },
                { icon: InstagramIcon, url: 'https://instagram.com' },
                { icon: LinkedinIcon, url: 'https://www.linkedin.com/in/jayden-blunt04/' }
              ].map(({ icon, url }) => (
                <Link
                  key={url}
                  to={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-500/20 p-2 rounded-lg hover:bg-gray-500/30 transition"
                >
                  {React.createElement(icon, { className: "w-5 h-5" })}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <p className="font-semibold text-lg">Quick Links</p>
            <Link className="footer-link text-sm text-gray-400" to="/scores">Scores</Link>
            <Link className="footer-link text-sm text-gray-400" to="/standings">Standings</Link>
            <Link className="footer-link text-sm text-gray-400" to="/stats">Stats</Link>
            <Link className="footer-link text-sm text-gray-400" to="/teams">Teams</Link>
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-3">
            <p className="font-semibold text-lg">Resources</p>
            <Link className="footer-link text-sm text-gray-400" to="https://www.nba.com/" target="_blank">NBA Official</Link>
            <Link className="footer-link text-sm text-gray-400" to="https://www.nba.com/league-pass-purchase" target="_blank">NBA League Pass</Link>
            <Link className="footer-link text-sm text-gray-400" to="https://store.nba.com/" target="_blank">NBA Store</Link>
            <Link className="footer-link text-sm text-gray-400" to="https://nbafantasy.nba.com/" target="_blank">NBA Fantasy</Link>
          </div>

        </div>
      </div>

      {/* Full-width divider */}
      <div className="border-t border-white/10" />

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} NBA Live Stats. All rights reserved.</p>

          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition">
              Terms of Service
            </Link>
            <Link to="/contact" className="hover:text-white transition">
              Contact
            </Link>
          </div>
        </div>

        <p className="text-xs text-gray-500 text-center mt-4 max-w-3xl mx-auto">
          This site is not affiliated with the NBA. All team logos and trademarks
          are property of their respective owners.
        </p>
      </div>
    </footer>
  )
}

export default Footer
