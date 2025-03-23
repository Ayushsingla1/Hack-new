import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HackathonLower from "../components/HackathonLower";
import HackathonUpper from "../components/HackathonUpper";
import { useReadContract } from "wagmi";
import { ABI, ContractAddress } from "../utils/ContractInfo";
import { useParams } from "react-router-dom";
import "../components/loader.css"
import HackathonChatbot from "../components/Chatbot";


type contractResponse = {
    hackathonName : string;
    hackathonDescription : string;   
    additionalDetails : string;
    hackathonPoster : string;
    additionalLinks : string;
    hackathonPrize : string;
    hackathonOpen : string;
    hackathonEnds : string;
    hackathonOwner : string;
    totalPrize : number;
    hackathonTheme : string[];
}

const IndividualHackathon = () => {


    const {hackathonId : id} = useParams();

    console.log(id);

    const {data , isPending , isSuccess , isError} : {data : contractResponse | undefined , isPending : boolean , isSuccess : boolean , isError : boolean} = useReadContract({
        abi : ABI,
        address : ContractAddress,
        functionName : "getHackathon",
        args : [parseInt(id!)]
    })

    console.log(data);

    if(isPending){
        return <div className="flex w-screen h-screen justify-center items-center bg-gray-900">
            <span className="loader"></span>
        </div>
    }

    if(isError || id === undefined || parseInt(id) < 0){
        return <div className="flex w-screen h-screen justify-center items-center bg-gray-900">
            <span className="text-white font-semibold">Error 404 : Page Not Found</span>
        </div>
    }

    if(!isPending && isSuccess){
        return <div className="w-screen bg-gray-900 text-white min-h-screen">    
                <Navbar/>
                <HackathonUpper data = {data}/>
                <HackathonLower data = {data}/>
                <HackathonChatbot hackathonDescription =
                {data?.hackathonDescription}/>
                <Footer/>
            </div>
    }
}

export default IndividualHackathon;