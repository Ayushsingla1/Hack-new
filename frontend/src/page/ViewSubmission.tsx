import { useState } from 'react';
import { motion } from 'framer-motion';
import { useReadContract } from 'wagmi';
import { ABI, ContractAddress } from '../utils/ContractInfo';
import { useNavigate, useParams } from 'react-router-dom';
import "../components/loader.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


type selectedSubmission = {
  name : String , 
  projectName : String,
  projectShortDescription : String
  projectDescription : String,
  projectImages : String[] , 
  introduction : String , 
  userEmail : String,
  projectGithub : String,
  demoVideo : String,
  projectLink : String,
  projectState : "Complete"
}
const HackathonSubmissionsPage = () => {


    const {hackathonId : id}= useParams();

    //@ts-ignore
    const {data : submissions , isSuccess , isPending , isError}= useReadContract({
        abi : ABI,
        address : ContractAddress,
        functionName : "getHackathonSubmissions",
        args : [id]
    })

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
          opacity: 1,
          transition: { 
            staggerChildren: 0.1 
          }
        }
      };
      
      const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { 
          y: 0, 
          opacity: 1,
          transition: { duration: 0.5 }
        }
      };


    console.log(submissions)

  
  const [selectedProject, setSelectedProject] = useState<null | selectedSubmission>(null);
  const [filterCategory, setFilterCategory] = useState("");
  const navigate = useNavigate();
  
  // Get unique categories


  if(isError) {
    return <div className='flex justify-center items-center w-screen h-screen bg-gray-900'>
        <div className='flex flex-col gap-y-10'>
            <div>Error loading page</div>
            <button className='p-3 bg-gradient-to-r from-purple-500 to-blue-500' onClick={() => navigate('/')}>Home</button>
        </div>
    </div>
  }
  if(isPending){
    return <div className='flex justify-center items-center w-screen h-screen bg-gray-900'>
        <span className='loader'></span>
    </div>
  }
  if(!isPending && isSuccess){
    //@ts-ignore
    const categories = [...new Set(submissions.map((sub : Submission)=> sub.category))];
  
  // Filter submissions based on category
  const filteredSubmissions = filterCategory 
  //@ts-ignore
    ? submissions.filter((sub : any) => sub.category === filterCategory)
    : submissions;

    return (
       <div className='bg-gray-900 text-white'>
        <Navbar/>
         <div className="min-h-screen bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <motion.h1 
              className="text-4xl font-bold mb-2 text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Hackathon Projects Showcase
            </motion.h1>
            
            <motion.p 
              className="text-lg text-center text-gray-300 mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Browse innovative solutions created during our latest hackathon
            </motion.p>
            
            {/* Filter by category */}
            <div className="mb-8 flex justify-center">
              <div className="inline-flex rounded-md shadow-sm">
                <button 
                  className={`px-4 py-2 rounded-l-md ${!filterCategory ? 'bg-blue-600' : 'bg-gray-700'}`}
                  onClick={() => setFilterCategory("")}
                >
                  All Projects
                </button>
                {categories.map(category => (
                  <button 
                  //@ts-ignore
                    key={category}
                    className={`px-4 py-2 ${filterCategory === category ? 'bg-blue-600' : 'bg-gray-700'}`}
                    //@ts-ignore
                    onClick={() => setFilterCategory(category)}
                  >
                    {category as string}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Project grid */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {filteredSubmissions.map((submission : any, index : any) => (
                <motion.div 
                  key={index}
                  className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedProject(submission)}
                >
                  <div className="h-48 bg-gray-700 overflow-hidden">
                    <img 
                      src={`https://gateway.pinata.cloud/ipfs/${submission.projectImages[0]}`}
                      alt={submission.projectName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <h2 className="text-xl font-bold mb-2">{submission.projectName}</h2>
                      <span className={`text-xs px-2 py-1 rounded ${
                        submission.projectState === "Complete" ? "bg-green-600" : "bg-yellow-600"
                      }`}>
                        {submission.projectState}
                      </span>
                    </div>
                    
                    <p className="text-gray-300 text-sm mb-4">{submission.projectShortDesc}</p>
                    
                    <div className="flex items-center text-sm text-gray-400">
                      <span>By {submission.name}</span>
                      <span className="mx-2">•</span>
                      <span>{submission.category}</span>
                    </div>
                    
                    <div className="mt-4 flex space-x-2">
                      <a href={submission.projectGithub} target="_blank" rel="noopener noreferrer" className="text-xs bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded-full">GitHub</a>
                      <a href={submission.demoVideo} target="_blank" rel="noopener noreferrer" className="text-xs bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded-full">Demo</a>
                      <a href={submission.projectLink} target="_blank" rel="noopener noreferrer" className="text-xs bg-blue-700 hover:bg-blue-600 px-3 py-1 rounded-full">Live</a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Project detail modal */}
            {selectedProject && (
              <motion.div
                className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                //@ts-ignore
                onClick={() => setSelectedProject(null)}
              >
                <motion.div 
                  className="bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  onClick={e => e.stopPropagation()}
                >
                  <div className="relative">
                    <button 
                      className="absolute top-4 right-4 bg-gray-700 rounded-full p-2 hover:bg-gray-600"
                      //@ts-ignore
                      onClick={() => setSelectedProject(null)}
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                    
                    {(selectedProject.projectImages as any[]).length > 0 && (
                      <div className="h-64 bg-gray-700">
                        <img 
                          //@ts-ignore
                          src={`https://gateway.pinata.cloud/ipfs/${selectedProject.projectImages[0]}`} 
                          //@ts-ignore
                          alt={selectedProject.projectName}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h2 className="text-2xl font-bold">{selectedProject.projectName}</h2>
                        <span className={`text-sm px-2 py-1 rounded ${
                          selectedProject.projectState === "Complete" ? "bg-green-600" : "bg-yellow-600"
                        }`}>
                          {selectedProject.projectState}
                        </span>
                      </div>
                      
                      <div className="mb-6">
                        <p className="text-lg text-gray-300 mb-4">{selectedProject.projectShortDescription}</p>
                        <p className="text-gray-400">{selectedProject.projectDescription}</p>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h3 className="text-lg font-medium mb-2">Developer</h3>
                          <p className="text-gray-300">{selectedProject.name}</p>
                          <p className="text-gray-400 text-sm mt-1">{selectedProject.introduction}</p>
                          <p className="text-gray-400 text-sm mt-2">{selectedProject.userEmail}</p>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-medium mb-2">Project Links</h3>
                          <div className="space-y-2">
                            <div className="flex items-center">
                              <span className="text-gray-400 mr-2">GitHub:</span>
                              <a href={(selectedProject.projectGithub).toString()} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">{selectedProject.projectGithub}</a>
                            </div>
                            <div className="flex items-center">
                              <span className="text-gray-400 mr-2">Demo:</span>
                              <a href={(selectedProject.demoVideo).toString()} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">{selectedProject.demoVideo}</a>
                            </div>
                            <div className="flex items-center">
                              <span className="text-gray-400 mr-2">Live:</span>
                              <a href={(selectedProject.projectLink).toString()} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">{selectedProject.projectLink}</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {selectedProject.projectImages.length > 1 && (
                        <div>
                          <h3 className="text-lg font-medium mb-2">Project Gallery</h3>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                            {selectedProject.projectImages.map((img, i) => (
                              <img 
                                key={i} 
                                src={`https://gateway.pinata.cloud/ipfs/${img}`}
                                alt={`${selectedProject.projectName} screenshot ${i+1}`}
                                className="rounded-lg h-32 w-full object-cover"
                              />
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </div>
        </div>
        <Footer/>
       </div>
      );
  }
};

export default HackathonSubmissionsPage;