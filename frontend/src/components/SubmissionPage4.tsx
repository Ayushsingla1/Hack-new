import { useAtom } from "jotai";
import { motion } from "framer-motion";
import { formatFieldName } from "../utils/formatters";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { toast } from "react-hot-toast"
import { submissionForm } from "../stateManagement/atoms";
import { useAccount, useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { ABI, ContractAddress } from "../utils/ContractInfo";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Page4 = ({ setPage }: { setPage: (value: React.SetStateAction<number>) => void }) => {
  const [form] = useAtom(submissionForm);
  const {hackathonId : id} = useParams();
  console.log(id)

  console.log(form)
  const [isLoading,] = useState(false);

  const navigate = useNavigate();

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
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const {address} = useAccount();
  const {writeContract , data : hash , isPending : isPending2} = useWriteContract();
  const {isSuccess , isPending ,isError} = useWaitForTransactionReceipt({hash});
  const [loading,setLoading] = useState(false);

  // Helper function to render form values based on field type
  const renderValue = (key: string, value: any) => {
    // Handle array fields
    if (Array.isArray(value)) {
      if (key === "images") {
        return (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
            {value.length > 0 ? (
              value.map((img, i) => (
                <div key={i} className="relative rounded-md overflow-hidden h-24">
                  <img
                    src={typeof img === "string" ? img : URL.createObjectURL(img)}
                    alt={`Project image ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))
            ) : (
              <p className="text-gray-400 italic">No images uploaded</p>
            )}
          </div>
        );
      }
      return value.length > 0 ? value.join(", ") : "None specified";
    }

    // Handle text fields
    if (typeof value === "string") {
      if (value.trim() === "") return <span className="text-gray-400 italic">Not provided</span>;
      
      // Special handling for longer text fields
      if (key === "introduction" || key === "projectMainDesc") {
        return (
          <div className="mt-1 text-gray-200 max-h-40 overflow-y-auto pr-2 text-sm">
            {value}
          </div>
        );
      }
      
      return value;
    }

    return JSON.stringify(value);
  };

  const submitHandler = async () => {
    setLoading(true);
      try {  
        const uploadPromises = form.images.map(async (file) => {

          console.log(file)
          const formData = new FormData();
          formData.append('file', file);
          const pinataOptions = JSON.stringify({ cidVersion: 1 });
          formData.append('pinataOptions', pinataOptions)
    
          const response = await axios.post(
            'https://api.pinata.cloud/pinning/pinFileToIPFS',
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${import.meta.env.VITE_APP_IPFS_JWT}`
                }
            }
        );
    
          return response.data.IpfsHash;
        });
    
        const uploadedFiles = await Promise.all(uploadPromises);
        console.log('Uploaded Images:', uploadedFiles);

        console.log(uploadedFiles)

        writeContract({
          abi : ABI,
          address : ContractAddress,
          functionName : "submitProject",
          args : [form.firstName,form.introduction,form.projectName,form.projectShortDesc,form.projectMainDesc,form.projectGithub,form.liveLink,address,form.email,uploadedFiles,form.projectDemoLink,form.category.split(","),id]
        })
    }
    catch(e){
      console.log(e);
    }
    finally{
      setLoading(false)
    }
  }

  // Group the form fields into sections
  const personalFields = ["firstName", "lastName", "introduction", "country", "state"];
  const projectFields = [
    "projectName", "projectGithub", "projectState", 
    "projectDemoLink", "projectShortDesc", "projectMainDesc"
  ];
  const additionalFields = ["category", "images"];


  console.log(isPending2 , isPending , isError , loading , isSuccess)

  if((isPending && isPending2) || loading){
    return <div className="flex w-screen h-screen justify-center items-center bg-gray-900">
      <span className="loader"></span>
    </div>
  }

  if(isSuccess && !isPending){
    toast.success("successfully submitted");
    navigate('/');
  }

  if(!isPending2 && !loading){
    return (
      <div className="relative min-h-screen bg-midnight text-white overflow-hidden">
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a2436] to-[#2d3a4f] opacity-70"></div>
        
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5" 
             style={{ 
               backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
               backgroundSize: '30px 30px' 
             }}>
        </div>
  
        <motion.div 
          className="relative z-10 max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="mb-12 text-center">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-purple-accent/10 text-purple-accent rounded-full mb-3">
              Review your submission
            </span>
            <h1 className="text-4xl md:text-5xl font-light mb-3 tracking-tight">
              Review Your <span className="text-gradient font-normal">Submission</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Please review all the information below before submitting your application.
              You can go back to make changes if needed.
            </p>
          </motion.div>
  
          <div className="space-y-8 mb-12">
            {/* Personal Information Section */}
            <motion.section 
              variants={itemVariants}
              className="glass-panel rounded-xl p-6 md:p-8"
            >
              <h2 className="text-xl font-medium mb-6 flex items-center">
                <CheckCircledIcon className="mr-2 text-blue-accent" />
                <span>Personal Information</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {personalFields.map(field => (
                  <div key={field} className="space-y-1">
                    <h3 className="text-sm text-gray-400">{formatFieldName(field)}</h3>
                    <div className="text-base font-medium">
                      {renderValue(field, 
                          //@ts-ignore
                          form[field as keyof SubmissionFormType])}
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
  
            {/* Project Information Section */}
            <motion.section
              variants={itemVariants} 
              className="glass-panel rounded-xl p-6 md:p-8"
            >
              <h2 className="text-xl font-medium mb-6 flex items-center">
                <CheckCircledIcon className="mr-2 text-blue-accent" />
                <span>Project Details</span>
              </h2>
              
              <div className="grid grid-cols-1 gap-6">
                {projectFields.map(field => (
                  <div key={field} className="space-y-1">
                    <h3 className="text-sm text-gray-400">{formatFieldName(field)}</h3>
                    <div className={`font-medium ${field === "projectMainDesc" ? "text-sm" : "text-base"}`}>
                    {renderValue(field, 
                          //@ts-ignore
                          form[field as keyof SubmissionFormType])}
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
  
            {/* Additional Information Section */}
            <motion.section
              variants={itemVariants}
              className="glass-panel rounded-xl p-6 md:p-8"
            >
              <h2 className="text-xl font-medium mb-6 flex items-center">
                <CheckCircledIcon className="mr-2 text-blue-accent" />
                <span>Additional Information</span>
              </h2>
              
              <div className="grid grid-cols-1 gap-6">
                {additionalFields.map(field => (
                  <div key={field} className="space-y-1">
                    <h3 className="text-sm text-gray-400">{formatFieldName(field)}</h3>
                    <div className="text-base font-medium">
                      {renderValue(field, 
                      //@ts-ignore
                          form[field as keyof SubmissionFormType])}
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>
  
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mt-8"
          >
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: "0 4px 20px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white text-base font-medium rounded-md border border-white/20 transition-all w-full sm:w-auto"
              onClick={() => setPage(prev => prev - 1)}
            >
              Back
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: "0 4px 20px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3 bg-gradient-to-r from-purple-accent to-blue-accent text-white text-base font-medium rounded-md transition-all w-full sm:w-auto relative overflow-hidden"
              onClick={submitHandler}
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                "Submit Application"
              )}
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-accent/20 to-purple-accent/20 blur-xl opacity-70"></div>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    );
  }
};

export default Page4;