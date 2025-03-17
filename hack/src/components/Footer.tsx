

const Footer = () => {
    return (
        <footer className="relative z-10 px-6 py-12 border-t border-gray-800 mt-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 mb-4">
                  BlockHacks
                </div>
                <p className="text-gray-400">
                  The premier web3 hackathon platform powered by blockchain technology.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-4">Platform</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-purple-400 transition-colors">Events</a></li>
                  <li><a href="#" className="hover:text-purple-400 transition-colors">Projects</a></li>
                  <li><a href="#" className="hover:text-purple-400 transition-colors">Chatbots</a></li>
                  <li><a href="#" className="hover:text-purple-400 transition-colors">Rewards</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-4">Resources</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-purple-400 transition-colors">Documentation</a></li>
                  <li><a href="#" className="hover:text-purple-400 transition-colors">Tutorials</a></li>
                  <li><a href="#" className="hover:text-purple-400 transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-purple-400 transition-colors">FAQ</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-4">Community</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-purple-400 transition-colors">Discord</a></li>
                  <li><a href="#" className="hover:text-purple-400 transition-colors">Twitter</a></li>
                  <li><a href="#" className="hover:text-purple-400 transition-colors">Telegram</a></li>
                  <li><a href="#" className="hover:text-purple-400 transition-colors">GitHub</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
              &copy; 2025 BlockHacks. All rights reserved.
            </div>
          </div>
        </footer>
    )
}

export default Footer;