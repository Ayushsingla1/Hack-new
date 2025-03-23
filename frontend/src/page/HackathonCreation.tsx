import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import axios from "axios"
import { useWaitForTransactionReceipt, useWriteContract } from 'wagmi';
import { ABI, ContractAddress } from '../utils/ContractInfo';
import { parseEther } from 'viem';
import "../components/loader.css"
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const CreateHackathon = () => {
  const [formData, setFormData] = useState({
    hackathonName: '',
    description: '',
    info: '',
    discordLink: '',
    telegramLink: '',
    prizeDistribution: '',
    startDate: '',
    startTime: '',
    endDate: '',
    endTime: '',
    posterImage: null,
    prizes: [
        { position: '1st Place', prize: '', description: '' },
        { position: '2nd Place', prize: '', description: '' },
        { position: '3rd Place', prize: '', description: '' }
      ]
  });

  const [loading,setLoading] = useState(false);

  const navigate = useNavigate();

  const {isPending : isPending2,writeContract , data : hash} = useWriteContract();
  const {isPending , isError , isSuccess} = useWaitForTransactionReceipt({hash});

  const addPrizeField = () => {
    setFormData(prev => {
      return {...prev,
      prizes: [...formData.prizes, { position: '', prize: '', description: '' }]}
    });
  };

  const removePrizeField = (index : number) => {
    const updatedPrizes = [...formData.prizes];
    updatedPrizes.splice(index, 1);
    setFormData((prev) => {
      return {...prev,
      prizes: updatedPrizes}
    });
  };

  const handleChange = (e : any) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return {...prev,
      [name]: value}
    });
  };

  const handlePrizeChange = (index : number, field : any, value : any) => {
    const updatedPrizes = [...formData.prizes];
    updatedPrizes[index] = { ...updatedPrizes[index], [field]: value };
    setFormData((prev) => {
      return {...prev,
      prizes: updatedPrizes}
    });
  };

  const handleImageChange = (e : any) => {
    setFormData((prev) => {
        return {
            ...prev,
            posterImage: e.target.files[0]
        }
    });
  };
  const submitHandler = async() => {
    setLoading(true);
    try {

        console.log(formData.posterImage);
        const Data = new FormData();
        //@ts-ignore
        Data.append('file', formData.posterImage);
        const pinataOptions = JSON.stringify({ cidVersion: 1 });
        Data.append('pinataOptions', pinataOptions);

        const response = await axios.post(
            'https://api.pinata.cloud/pinning/pinFileToIPFS',
            Data,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${import.meta.env.VITE_APP_IPFS_JWT}`
                }
            }
        );
        let totalPrize = 0;
        const prizeArray = [];
        for(let i = 0 ; i  < 3 ; i++){
            totalPrize += parseInt(formData.prizes[i].prize);
            prizeArray.push(formData.prizes[i].prize);
        }
        console.log(parseEther(String(totalPrize/10000)));
        writeContract({
            abi : ABI,
            functionName : "createHackathon",
            address : ContractAddress,
            args : [formData.hackathonName,formData.description,formData.info,response.data.IpfsHash,[formData.discordLink,formData.telegramLink],prizeArray,formData.startDate,formData.endDate,totalPrize,["AI","BlockChain","Web3"]],
            value : parseEther(String((totalPrize/10000)))
        })

        console.log(hash)

        console.log("write called")
    }

    catch(e) {
        console.log(e);
    }
    finally{
        setLoading(false);
    }
}

    console.log(isPending2,isPending , isSuccess , isError)
    if((isPending && isPending2) || loading) {
        return <div className='flex w-screen h-screen bg-gray-900 items-center justify-center'>
            <span className='loader'></span>
        </div>
    }
    if(isSuccess) {
        toast.success("Hackathon Listed Successfully");
        navigate('/hackathons/explore');
        return;
    }
    if(!isSuccess && !isPending2 && !isError){
        return (

            <div className='bg-gray-900 text-white'>
                <Navbar/>
                <div className="min-h-screen  text-white py-12 px-4 sm:px-6 lg:px-8">
                    
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="text-center mb-12">
                    <motion.h1 
                        className="text-4xl font-bold text-purple-400 mb-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Create a Hackathon
                    </motion.h1>
                    <motion.p 
                        className="text-gray-300"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        Fill out the form below to set up your next amazing hackathon event
                    </motion.p>
                    </div>
        
                    <motion.div
                    className="bg-gray-800 rounded-lg shadow-xl p-6 md:p-8"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    >
                    <div className="space-y-6">
                        {/* Hackathon Name */}
                        <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">
                            Hackathon Name *
                        </label>
                        <input
                            type="text"
                            name="hackathonName"
                            value={formData.hackathonName}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                            required
                        />
                        </div>
        
                        {/* Description */}
                        <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">
                            Hackathon Description *
                        </label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            rows= {4}
                            className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                            required
                        />
                        </div>
        
                        {/* Info */}
                        <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">
                            Additional Information
                        </label>
                        <textarea
                            name="info"
                            value={formData.info}
                            onChange={handleChange}
                            rows={3}
                            className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                        />
                        </div>
        
                        {/* Poster Upload */}
                        <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">
                            Hackathon Poster
                        </label>
                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-600 border-dashed rounded-md">
                            <div className="space-y-1 text-center">
                            <svg
                                className="mx-auto h-12 w-12 text-gray-400"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 48 48"
                                aria-hidden="true"
                            >
                                <path
                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                />
                            </svg>
                            <div className="flex text-sm text-gray-400">
                                <label
                                htmlFor="file-upload"
                                className="relative cursor-pointer bg-gray-700 rounded-md font-medium text-purple-400 hover:text-purple-300 focus-within:outline-none focus-within:ring-2 focus-within:ring-purple-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-800 px-3 py-2"
                                >
                                <span>Upload a file</span>
                                <input
                                    id="file-upload"
                                    name="file-upload"
                                    type="file"
                                    className="sr-only"
                                    onChange={handleImageChange}
                                    accept="image/*"
                                />
                                </label>
                                <p className="pl-1 pt-2">or drag and drop</p>
                            </div>
                            <p className="text-xs text-gray-400">PNG, JPG, GIF up to 10MB</p>
                            </div>
                        </div>
                        </div>
        
                        {/* Links */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1">
                            Discord Link
                            </label>
                            <input
                            type="url"
                            name="discordLink"
                            value={formData.discordLink}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                            placeholder="https://discord.gg/..."
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1">
                            Telegram Link
                            </label>
                            <input
                            type="url"
                            name="telegramLink"
                            value={formData.telegramLink}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                            placeholder="https://t.me/..."
                            />
                        </div>
                        </div>
        
                        {/* Prize Distribution */}
                        <div>
                        <div className="flex justify-between items-center mb-2">
                            <label className="block text-sm font-medium text-gray-300">
                            Prize Distribution *
                            </label>
                            <motion.button
                            type="button"
                            onClick={addPrizeField}
                            className="text-sm px-3 py-1 bg-purple-600 hover:bg-purple-700 rounded-md text-white"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            >
                            + Add Prize
                            </motion.button>
                        </div>
                        
                        {formData.prizes.map((prize, index) => (
                            <motion.div 
                            key={index} 
                            className="mb-3 bg-gray-700 p-4 rounded-md relative"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            >
                            <div className="grid grid-cols-1 md:grid-cols-6 gap-3">
                                <div className="md:col-span-2">
                                <label className="block text-xs font-medium text-gray-400 mb-1">
                                    Position/Rank
                                </label>
                                <input
                                    type="text"
                                    value={prize.position}
                                    onChange={(e) => handlePrizeChange(index, 'position', e.target.value)}
                                    className="w-full px-3 py-2 rounded-md bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white text-sm"
                                    placeholder="1st Place"
                                    required
                                />
                                </div>
                                <div className="md:col-span-2">
                                <label className="block text-xs font-medium text-gray-400 mb-1">
                                    Prize Amount
                                </label>
                                <input
                                    type="text"
                                    value={prize.prize}
                                    onChange={(e) => handlePrizeChange(index, 'prize', e.target.value)}
                                    className="w-full px-3 py-2 rounded-md bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white text-sm"
                                    placeholder="$5000"
                                    required
                                />
                                </div>
                                <div className="md:col-span-2">
                                <label className="block text-xs font-medium text-gray-400 mb-1">
                                    Description (Optional)
                                </label>
                                <div className="flex items-center space-x-2">
                                    <input
                                    type="text"
                                    value={prize.description}
                                    onChange={(e) => handlePrizeChange(index, 'description', e.target.value)}
                                    className="w-full px-3 py-2 rounded-md bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white text-sm"
                                    placeholder="Plus mentorship opportunities"
                                    />
                                    {formData.prizes.length > 1 && (
                                    <button
                                        type="button"
                                        onClick={() => removePrizeField(index)}
                                        className="flex-shrink-0 p-1 rounded-full text-red-400 hover:bg-red-500 hover:text-white focus:outline-none"
                                    >
                                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </button>
                                    )}
                                </div>
                                </div>
                            </div>
                            </motion.div>
                        ))}
                        </div>
        
                        {/* Dates and Times */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1">
                            Start Date *
                            </label>
                            <input
                            type="date"
                            name="startDate"
                            value={formData.startDate}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                            required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1">
                            Start Time *
                            </label>
                            <input
                            type="time"
                            name="startTime"
                            value={formData.startTime}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                            required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1">
                            End Date *
                            </label>
                            <input
                            type="date"
                            name="endDate"
                            value={formData.endDate}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                            required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1">
                            End Time *
                            </label>
                            <input
                            type="time"
                            name="endTime"
                            value={formData.endTime}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                            required
                            />
                        </div>
                        </div>
        
                        {/* Submit Button */}
                        <motion.button
                        type="submit"
                        className="w-full py-3 px-4 bg-purple-600 hover:bg-purple-700 rounded-md font-medium text-white shadow-lg transition-all duration-300 ease-in-out transform hover:scale-102 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={submitHandler}
                        >
                        Create Hackathon
                        </motion.button>
                    </div>
                    </motion.div>
                </motion.div>
                </div>
            </div>
        );
    }
};

export default CreateHackathon;