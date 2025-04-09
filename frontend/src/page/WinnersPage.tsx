import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useReadContracts, useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { ABI, ContractAddress } from "../utils/ContractInfo";
import { useParams } from "react-router-dom";
import "../components/loader.css"
import { useNavigate } from "react-router-dom";

const WinnerPage = () => {

    const {hackathonId : id} = useParams();
    const navigate = useNavigate();

    const [winners, setWinners] = useState<{ teamName: string; projectName: string }[]>(
        Array(3).fill(null).map(() => ({ teamName: "", projectName: "" }))
    );

    // Handle Input Change
    const handleChange = (index: number, field: "teamName" | "projectName", value: string) => {
        setWinners(prevWinners => {
            const updatedWinners = [...prevWinners];
            updatedWinners[index] = { ...updatedWinners[index], [field]: value };
            return updatedWinners;
        });

        console.log(winners)
    };

    console.log(id)

    const {data , isPending , isSuccess} : {data : any , isPending : boolean , isSuccess : boolean} = useReadContracts({
        contracts : [
            {
                abi : ABI,
                address : ContractAddress,
                args : [parseInt(id!)],
                functionName : "getHackathon"
            },
            {
                abi : ABI,
                address : ContractAddress,
                args : [parseInt(id!)],
                functionName : "getHackathonSubmissions"
            }
        ]
    })


    console.log(data)

    const { writeContract , data : hash , isPending : transactionStarted} = useWriteContract({});
    const {isPending : writePending , isSuccess : writeSuccess } = useWaitForTransactionReceipt({hash});

    // Handle Form Submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const Address = [];
        const amount = data[0].result.hackathonPrize;

        const Projects = data[1].result;

        console.log(Projects)
        for(let i = 0 ; i < winners.length ; i++){
            for(let j = 0 ; j < Projects.length ; j++){
                if(winners[i].teamName === Projects[j].name && winners[i].projectName === Projects[j].projectName){
                    Address.push(Projects[j].walletAddress);
                }
            }
        }

        console.log("winners are : " , Address);
        console.log("amount is : " , amount);

        writeContract({
            abi : ABI,
            address : ContractAddress,
            args : [Address,amount,parseInt(id!)],
            functionName : "distributeWinners"
        })
    };

    if(isPending){
        return <div className="flex w-screen h-screen bg-gray-900 justify-center items-center">
            <span className="loader"></span>
        </div>
    }

    if(writePending && transactionStarted) {
        return <div className="flex justify-center items-center w-screen h-screen bg-gray-900">
            <div className="flex flex-col gap-y-5 text-2xl text-white">
                <span className="loader"></span>
                <div>Processing Payments...</div>
            </div>
        </div>
    }

    if(writeSuccess) {
        return <div className="flex justify-center items-center w-screen h-screen bg-gray-900">
            <div className="flex flex-col gap-y-5">
                <div>Payment Successfull</div>
                <button className="px-4 py-2 bg-green-600 rounded-md text-md" onClick={() => navigate('/')}>Home</button>
            </div>
        </div>
    }

    if(!isPending && isSuccess && !transactionStarted){
        console.log(data)
        return (
            <div className="bg-gray-900 text-white min-h-screen flex justify-between flex-col">
                <Navbar />
                <section className="winners-submission py-12 px-4 bg-gray-900">
                    <div className="container mx-auto max-w-3xl">
                        <h2 className="text-3xl font-bold text-center text-purple-400 mb-8">
                            Submit Hackathon Winners
                        </h2>
    
                        <form className="bg-gray-800 rounded-lg p-8 shadow-lg" onSubmit={handleSubmit}>
                            {["First", "Second", "Third"].map((place, index) => (
                                <div key={index} className="mb-8">
                                    <h3
                                        className={`text-2xl font-semibold mb-6 ${index === 0 ? "text-yellow-400" : index === 1 ? "text-gray-300" : "text-orange-600"
                                            }`}
                                    >
                                        {place} Place Winner
                                    </h3>
                                    <div className="mb-4">
                                        <label className="block text-gray-300 mb-2">{place} Place Team Name</label>
                                        <input
                                            type="text"
                                            className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-purple-500"
                                            value={winners[index].teamName}
                                            onChange={(e) => handleChange(index, "teamName", e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-300 mb-2">{place} Place Project Name</label>
                                        <input
                                            type="text"
                                            className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-purple-500"
                                            value={winners[index].projectName}
                                            onChange={(e) => handleChange(index, "projectName", e.target.value)}
                                        />
                                    </div>
                                </div>
                            ))}
                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="bg-purple-600 text-white py-3 px-8 rounded-lg font-medium hover:bg-purple-700 transition"
                                >
                                    Submit Winners
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
                <Footer />
            </div>
        );
    }
};

export default WinnerPage;
