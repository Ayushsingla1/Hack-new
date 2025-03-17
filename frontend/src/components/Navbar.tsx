import { ConnectKitButton } from 'connectkit';
import { motion } from 'motion/react'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate();
    return (
        <motion.nav 
        className="sticky top-0 z-50 px-6 py-4 flex justify-between items-center backdrop-blur-md bg-gray-900/80 border-b border-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center">
          <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 hover:cursor-pointer" onClick={() => navigate('/')}>
            BlockHacks
          </div>
        </div>
        
        <div className="hidden md:flex space-x-6">
          <div className="hover:text-purple-400 transition-colors hover:cursor-pointer" onClick={() => navigate('/')}>Home</div>
          <div className="hover:text-purple-400 transition-colors hover:cursor-pointer" onClick={() => navigate('/hackathons/explore')}>Hackathons</div>
          <div className="hover:text-purple-400 transition-colors hover:cursor-pointer" onClick={() => navigate('/create-hackathon')}>Create Hackathon</div>
        </div>

        <ConnectKitButton/>
  
      </motion.nav>
    )
}

export default Navbar;