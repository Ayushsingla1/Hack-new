import { useAtom } from "jotai";
import { submissionForm } from "../stateManagement/atoms";
import { motion } from "motion/react";

const Page3 = ({ setPage }: { setPage: any }) => {
  const [data, setData] = useAtom(submissionForm);
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const files = e.target.files;
    if (files && files[0]) {
      const fileReader = new FileReader();
      fileReader.onload = (event) => {
        const newPreviewUrls = [...data.imageShow];
        const newImageFiles = [...data.images]
        newPreviewUrls[index] = event.target?.result as string;
        newImageFiles[index]  = files[0];
        setData(prev => {return {...prev , imageShow : newPreviewUrls , images : newImageFiles}});
      };
      fileReader.readAsDataURL(files[0]);
    }
  };

  const removeImage = (index: number) => {
    const newPreviewUrls = [...data.imageShow];
    const newImageFiles = [...data.images]
    newPreviewUrls[index] = "";
    //@ts-ignore
    newImageFiles[index] = undefined;
    setData(prev => {return {...prev , imageShow : newPreviewUrls , images : newImageFiles}});
  };

  return (
    <div className="flex flex-col w-full px-30 gap-y-8 bg-[#1E2938] rounded-md py-10">
      <div className="text-3xl text-[#A843F8]/80">Images</div>
      <p className="text-white/70">Upload 5 images for your project</p>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {Array(5).fill(0).map((_, index) => (
          <div key={index} className="flex flex-col gap-y-2">
            <div className="relative w-full aspect-square bg-[#161F2A] border border-purple-500/50 rounded-md overflow-hidden">
              {data.imageShow[index] ? (
                <>
                  <img 
                    src={data.imageShow[index]} 
                    alt={`Preview ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                  <button 
                    onClick={() => removeImage(index)}
                    className="absolute top-2 right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-sm"
                  >
                    ×
                  </button>
                </>
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <svg className="w-8 h-8 text-purple-400 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  <span className="text-white/50 text-xs">{index + 1}</span>
                </div>
              )}
              <input
                type="file"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                accept="image/*"
                onChange={(e) => handleImageChange(e, index)}
              />
            </div>
            
            {data.imageShow[index] && (
              <button 
                onClick={() => removeImage(index)}
                className="text-red-400 text-xs flex items-center justify-center gap-1 hover:text-red-300"
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                </svg>
                Remove image
              </button>
            )}
          </div>
        ))}
      </div>
      
      <div className="flex w-full justify-between items-center mt-10">
        <motion.button 
          whileHover={{scale: 1.05}} 
          whileTap={{scale: 0.95}} 
          className="px-3 py-2 border border-purple-500 text-white w-36 rounded-sm"
          onClick={() => setPage((prev: number) => prev - 1)}
        >
          Previous
        </motion.button>
        
        <motion.button 
          whileHover={{scale: 1.05}} 
          whileTap={{scale: 0.95}} 
          className="px-3 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white w-36 rounded-sm"
          onClick={() => setPage((prev: number) => prev + 1)}
        >
          Next
        </motion.button>
      </div>
    </div>
  );
};

export default Page3;