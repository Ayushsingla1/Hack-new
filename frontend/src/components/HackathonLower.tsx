import {motion} from "motion/react"
import { useNavigate, useParams } from "react-router-dom";

const HackathonLower = ({data} : {data : any}) => {

    const {hackathonId} = useParams();

    const navigate = useNavigate();
    return (
        <div className="flex flex-col px-20 mt-10 w-screen">
            <div className="flex w-full gap-x-10 items-center">
                <div className="flex flex-row gap-x-4 w-7/12 items-center p-0">
                    <div>DESCRIPTION</div>
                    <div className="bg-gradient-to-r from-purple-500 to-blue-500 w-full h-0.5"></div>
                </div>
                <div className="flex justify-center w-5/12">
                    <motion.button className="px-3 py-3 bg-gradient-to-l from-purple-500 to-blue-500 rounded-md w-48 hover:cursor-pointer" whileHover={{scale : 1.1}} whileTap={{scale : 0.95}} onClick={() => navigate(`/hackathon/submit/${hackathonId}`)}>APPLY NOW</motion.button>
                </div>
            </div>

            <div>
            <div className="flex flex-col w-7/12 p-0 gap-y-4 mt-4">
                    <div>🚀 Build, Experiment, and Win!</div>
                    <div className="text-justify">
                        {data.hackathonDescription}
                    </div>
                    <div>
                        {data.additionalDetails}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HackathonLower;