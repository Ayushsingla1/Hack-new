import { motion } from "motion/react";
import { useState } from "react";
import { useAtom } from "jotai";
import { submissionForm } from "../stateManagement/atoms";

const Page3 = ({ setPage }: { setPage: any }) => {
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [data,setData] = useAtom(submissionForm);
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const newImages = [...data.imageShow];
        const newImages2 = [...data.images];
        // console.log(e.target);
        //@ts-ignore
        newImages[index] = event.target?.result;

        //@ts-ignore
        newImages2[index] = e.target.files[0];

        console.log(newImages[index]);
        //@ts-ignore
        setData(prev => {return {...prev,imageShow : newImages,images : newImages2}});
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  
  // Handle drag events
  const handleDragEnter = (index: number) => {
    setDraggedIndex(index);
  };
  
  const handleDragLeave = () => {
    setDraggedIndex(null);
  };

  return (
    <div className="flex flex-col w-full px-30 gap-y-6 bg-[#1E2938] py-10">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl text-[#A843F8]/80 flex items-center"
      >
        <span className="mr-3">Images</span>
        <motion.div 
          animate={{ 
            rotate: [0, 5, 0, -5, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
          className="text-3xl"
        >
          📸
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="w-full"
      >
        {/* Images section */}
        <div className="grid grid-cols-3 gap-6">
          {[0, 1, 2, 3, 4].map((index) => (
            <motion.div
              key={index}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.1 * index, 
                type: "spring",
                stiffness: 120
              }}
              className={`relative aspect-square rounded-xl overflow-hidden ${
                draggedIndex === index 
                  ? "border-4 border-purple-400 shadow-lg shadow-purple-500/30" 
                  : "border-2 border-dashed border-purple-500/40"
              } hover:border-purple-500/80 bg-black/20 flex flex-col items-center justify-center transition-all`}
              whileHover={{ scale: 1.03, boxShadow: "0 10px 25px rgba(168, 67, 248, 0.2)" }}
              whileTap={{ scale: 0.98 }}
              onDragEnter={() => handleDragEnter(index)}
              onDragLeave={handleDragLeave}
              onDragEnd={handleDragLeave}
            >
              {data.imageShow[index] ? (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full h-full group"
                >
                  <img
                    src={data.imageShow[index]}
                    alt={`Uploaded image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/60 to-black/80 flex flex-col items-center justify-center"
                  >
                    <motion.label
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      htmlFor={`image-upload-${index}`}
                      className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg text-white cursor-pointer text-sm font-medium shadow-lg"
                    >
                      Replace Image
                    </motion.label>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        const newImages = [...data.imageShow];
                        //@ts-ignore
                        newImages[index] = "";
                        const newImages2 = [...data.images]
                  
                        setData(prev => {return {...prev,imageShow:newImages,images : newImages2}});
                      }}
                      className="mt-2 px-3 py-1 bg-red-500/80 hover:bg-red-600 rounded-lg text-white text-xs"
                    >
                      Remove
                    </motion.button>
                  </motion.div>
                </motion.div>
              ) : (
                <motion.label
                  htmlFor={`image-upload-${index}`}
                  className="flex flex-col items-center justify-center cursor-pointer w-full h-full text-purple-300/80 hover:text-purple-300 p-4"
                  whileHover={{ 
                    color: "rgba(216, 180, 254, 0.9)", 
                    backgroundColor: "rgba(30, 41, 59, 0.8)" 
                  }}
                >
                  <motion.div
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -5, 5, -5, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-16 w-16 mb-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </motion.div>
                  <motion.span 
                    className="text-center font-medium"
                    whileHover={{ scale: 1.05 }}
                  >
                    Upload Image {index + 1}
                  </motion.span>
                  <motion.p 
                    className="text-purple-300/40 text-xs mt-2 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 + (0.1 * index) }}
                  >
                    Click or drag files here
                  </motion.p>
                </motion.label>
              )}
              <input
                type="file"
                id={`image-upload-${index}`}
                accept="image/*"
                className="hidden"
                onChange={(e) => handleImageChange(e, index)}
              />
            </motion.div>
          ))}
        </div>
        
        {/* Info text with animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-6 text-center"
        >
          <span className="px-4 py-2 bg-purple-500/10 rounded-full text-purple-300/80 text-sm inline-flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Upload up to 5 images · Click to replace · Drag and drop supported
          </span>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="flex w-full justify-center items-center mt-10"
      >
        <div className="flex gap-x-10">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(168, 67, 248, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-xl text-white w-64 rounded-lg shadow-lg shadow-purple-500/20 font-medium"
            onClick={() => setPage((prev: number) => prev - 1)}
          >
            Back
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(168, 67, 248, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-xl text-white w-64 rounded-lg shadow-lg shadow-purple-500/20 font-medium"
            onClick={() => setPage((prev: number) => prev + 1)}
          >
            Next
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Page3;