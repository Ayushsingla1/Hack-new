import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import { ConnectKitButton } from 'connectkit';
import "../components/loader.css"
import LazySection from '../components/LazySection';

const HackathonHomepage = () => {

  const navigate = useNavigate();

  const { scrollYProgress } = useScroll();
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.2], [0.1, 0]);

    return (
      <div className="min-h-screen bg-gray-900 text-white">
        <motion.div 
          className="fixed inset-0 z-0"
          style={{ opacity: backgroundOpacity }}
        >
          <motion.div 
            className="absolute w-full h-full"
            style={{
              backgroundImage: 'radial-gradient(circle at 10% 10%, rgba(111, 66, 193, 0.15) 0%, transparent 70%), radial-gradient(circle at 90% 90%, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
            }}
          />
        </motion.div>
  
        <Navbar/>
  
        <section className="relative z-10 px-6 py-16 lg:py-28 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <motion.h1 
                className="text-4xl lg:text-6xl font-bold mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                Build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">Future</span> of Web3
              </motion.h1>
              
              <motion.p 
                className="text-gray-400 text-lg mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                Join the most innovative blockchain hackathon platform with on-chain features, 
                AI-powered tools, and a thriving community of builders.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4" 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                <motion.button
                  className="bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-3 rounded-md font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/hackathons/explore')}
                >
                  Join Hackathon
                </motion.button>
                
                <motion.button
                  className="border border-purple-600 px-8 py-3 rounded-md font-medium"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(139, 92, 246, 0.1)' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/hackathon/submissions')}
                >
                  Explore Projects
                </motion.button>
              </motion.div>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <motion.div 
                className="relative z-10 bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-xl"
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 25px 50px -12px rgba(139, 92, 246, 0.25)"
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex justify-between mb-4">
                  <div className="text-xl font-bold">Live Hackathons</div>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    { name: "DeFi Revolution", participants: 240, prize: "$50K", daysLeft: 3 },
                    { name: "NFT Marketplace", participants: 186, prize: "$35K", daysLeft: 5 },
                    { name: "Web3 Social", participants: 312, prize: "$65K", daysLeft: 7 }
                  ].map((hackathon, index) => (
                    <motion.div 
                      key={index}
                      className="p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + 0.5 }}
                      whileHover={{ scale: 1.03 }}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-medium">{hackathon.name}</div>
                          <div className="text-sm text-gray-400">{hackathon.participants} participants</div>
                        </div>
                        <div className="text-right">
                          <div className="text-purple-400 font-medium">{hackathon.prize}</div>
                          <div className="text-sm text-gray-400">{hackathon.daysLeft} days left</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                className="absolute -z-10 inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 blur-3xl rounded-full"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.6, 0.5]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            </motion.div>
          </div>
        </section>
  
        <LazySection>
          <section className="relative z-10 px-6 py-16">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
                  <h2 className="text-3xl font-bold mb-6">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                      Transparent Prize Distribution
                    </span>
                  </h2>
                  <p className="text-gray-300 mb-6">
                    Our platform uses smart contract escrow technology to ensure 100% transparent and automatic prize distribution.
                  </p>
                  <ul className="space-y-4 mb-8">
                    {[
                      "Prize pools are secured in smart contracts at hackathon launch",
                      "Funds are automatically distributed based on final judging results",
                      "All transactions are verified on-chain and publicly auditable",
                      "No middlemen or manual processing - winners receive prizes instantly"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-purple-400 mr-2">✓</span>
                        <span className="text-gray-400">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <motion.a
                    className="text-purple-400 border border-purple-600 px-6 py-2 rounded-md font-medium"
                    whileHover={{ 
                      scale: 1.05, 
                      backgroundColor: 'rgba(139, 92, 246, 0.1)'
                    }}
                    whileTap={{ scale: 0.95 }}
                    href='https://edu-chain-testnet.blockscout.com/address/0x8d140c3fD51781f5F6015f55a5B50a93855Ff9E4'
                    target='_blank'
                  >
                    View Smart Contract
                  </motion.a>
                </div>
                
                <div className="md:w-1/2 bg-gray-800 rounded-xl p-6 border border-gray-700 relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl blur-md -z-10"></div>
                  
                  <div className="bg-gray-800 p-4 rounded-lg mb-4 border border-gray-700">
                    <div className="flex justify-between items-center mb-2">
                      <div className="text-sm text-gray-400">Smart Contract</div>
                      <div className="text-xs bg-green-900/40 text-green-400 px-2 py-1 rounded">Active</div>
                    </div>
                    <div className="font-mono text-xs text-gray-400 break-all">
                    0x8d140c3fD51781f5F6015f55a5B50a93855Ff9E4
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-gray-900/60 p-4 rounded-lg">
                      <div className="flex justify-between">
                        <div className="text-sm">Total Prize Pool</div>
                        <div className="font-medium text-purple-400">120,000 USDC</div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-900/60 p-4 rounded-lg">
                      <div className="flex justify-between mb-2">
                        <div className="text-sm">Prize Distribution</div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <div className="text-gray-400">1st Place</div>
                          <div>60,000 USDC (50%)</div>
                        </div>
                        <div className="flex justify-between text-sm">
                          <div className="text-gray-400">2nd Place</div>
                          <div>30,000 USDC (25%)</div>
                        </div>
                        <div className="flex justify-between text-sm">
                          <div className="text-gray-400">3rd Place</div>
                          <div>18,000 USDC (15%)</div>
                        </div>
                        <div className="flex justify-between text-sm">
                          <div className="text-gray-400">Community Choice</div>
                          <div>12,000 USDC (10%)</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-900/60 p-4 rounded-lg">
                      <div className="flex justify-between mb-1">
                        <div className="text-sm">Release Status</div>
                        <div className="font-medium text-yellow-400">Pending Judging</div>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                        <div className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full" style={{ width: '70%' }}></div>
                      </div>
                      <div className="flex justify-between mt-1">
                        <div className="text-xs text-gray-400">Escrow Active</div>
                        <div className="text-xs text-gray-400">Judging</div>
                        <div className="text-xs text-gray-400">Funds Released</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </LazySection>
  
        <LazySection>
          <section className="relative z-10 py-16">
            <div className="max-w-6xl mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">
                  Powered by <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">Blockchain</span> Technology
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Our platform combines cutting-edge blockchain features with AI-powered assistance to create the ultimate hackathon experience.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "On-Chain Verification",
                    description: "All submissions and judging happen on-chain for maximum transparency and fairness.",
                    icon: "🔗",
                    highlight: true
                  },
                  {
                    title: "AI Chatbot Assistance",
                    description: "Get help from specialized AI chatbots that can assist with code, design, and project planning.",
                    icon: "🤖",
                    highlight: false
                  },
                  {
                    title: "NFT Certificates",
                    description: "Earn unique NFT certificates for participation and winning that showcase your achievements.",
                    icon: "🏆",
                    highlight: false
                  }
                ].map((feature, index) => {
                  const isHighlighted = feature.highlight;
                  
                  return (
                    <motion.div
                      key={index}
                      className={`p-6 rounded-xl border ${isHighlighted 
                        ? "bg-gradient-to-b from-gray-800 to-gray-900 border-purple-700/50" 
                        : "bg-gray-800 border-gray-700"}`}
                      whileHover={{ 
                        y: -5,
                        boxShadow: isHighlighted 
                          ? "0 20px 25px -5px rgba(139, 92, 246, 0.2), 0 10px 10px -5px rgba(139, 92, 246, 0.1)" 
                          : "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className={`text-4xl mb-4 ${isHighlighted ? "bg-purple-600/20 p-3 inline-block rounded-full" : ""}`}>
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                      <p className="text-gray-400">{feature.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        </LazySection>
        <LazySection>
          <section className="relative z-10 px-6 py-16 bg-gray-800/20">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { value: "10K+", label: "Developers" },
                  { value: "250+", label: "Hackathons" },
                  { value: "$2M+", label: "Prize Pool" },
                  { value: "500+", label: "Projects Launched" }
                ].map((stat, index) => (
                  <motion.div 
                    key={index} 
                    className="text-center"
                    whileInView={{ 
                      opacity: [0, 1],
                      y: [20, 0]
                    }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 mt-2">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </LazySection>
  
        <LazySection>
          <section className="relative z-10 px-6 py-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold mb-8">Upcoming Hackathons</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Metaverse Builders",
                    date: "Apr 15-22, 2025",
                    prize: "$75K",
                    tags: ["VR/AR", "Gaming", "Social"]
                  },
                  {
                    title: "DeFi Summer 2.0",
                    date: "May 1-10, 2025",
                    prize: "$120K",
                    tags: ["Finance", "Staking", "Insurance"]
                  },
                  {
                    title: "Web3 Infrastructure",
                    date: "May 20-30, 2025",
                    prize: "$90K",
                    tags: ["Protocol", "Scaling", "Security"]
                  }
                ].map((event, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700"
                    whileHover={{ y: -5 }}
                  >
                    <div className="h-32 bg-gradient-to-r from-purple-900/50 to-blue-900/50 flex items-center justify-center">
                      <div className="font-bold text-xl">{event.title}</div>
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between mb-4">
                        <div className="text-gray-400">{event.date}</div>
                        <div className="font-medium text-purple-400">{event.prize}</div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {event.tags.map((tag, i) => (
                          <span key={i} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </LazySection>
  
        <LazySection>
          <section className="relative z-10 px-6 py-16">
            <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-purple-900/40 to-blue-900/40 p-12 rounded-2xl border border-purple-700/50">
              <h2 className="text-3xl font-bold mb-4">Ready to Build the Future?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Join our next hackathon and connect with like-minded developers, designers, and blockchain enthusiasts.
              </p>
              <motion.button
                className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-md font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ConnectKitButton/>
              </motion.button>
              
            </div>
          </section>
        </LazySection>
  
        <LazySection>
          <Footer/>
        </LazySection>
      </div>
    );
};

export default HackathonHomepage;