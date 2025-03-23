import discordIcon from "../assets/discord-icon-svgrepo-com.svg"
import {motion} from "motion/react"

const HackathonUpper = ({data} : {data : any}) => {

    return (
        <div className="flex justify-center gap-x-10 px-10 mt-20">
            <div className="w-7/12 p-0">
                <img src={`https://turquoise-certain-fox-148.mypinata.cloud/ipfs/${data.hackathonPoster}`} className="object-cover"></img>
            </div>
            <motion.div className="flex flex-col bg-[#1E2938] w-4/12 px-6 py-5 rounded-sm gap-y-5" whileHover={{ 
                y: -5,
                boxShadow: "0 25px 50px -12px rgba(139, 92, 246, 0.25)"
              }}
              transition={{ duration: 0.3 }}>
                <div className="flex border-2 border-[#2D3849] justify-between rounded-sm">
                    <div className="text-[#B0AAAA] py-4 px-3">
                    {data.hackathonName}
                    </div>
                    <div className="flex flex-col mr-1 mt-1">
                    <div className="bg-[#1A3B34] text-[#0EC469] align-top rounded-sm p-0.5 text-sm">
                        Active
                    </div>
                    </div>
                </div>
                <div className="flex justify-between px-3 py-4 bg-[#161E2E] rounded-sm">
                    <div>Total Prize Pool</div>
                    <div className="text-[#C27BFF]">{parseInt(data.hackathonPrize[0]) + parseInt(data.hackathonPrize[1]) + parseInt(data.hackathonPrize[2])}</div>
                </div>
                <div className="flex flex-col px-3 py-4 gap-y-2 bg-[#161E2E] rounded-sm">
                    <div>Prize Distribution</div>
                    <div className="flex flex-col gap-y-0.5 text-[#93959A]">
                    <div className="flex flex-row justify-between">
                        <div>1ST PLACE</div>
                        <div>{data.hackathonPrize[0]}</div>
                    </div>
                    <div className="flex flex-row justify-between">
                        <div>2ND PLACE</div>
                        <div>{data.hackathonPrize[1]}</div>
                    </div>
                    <div className="flex flex-row justify-between">
                        <div>3RD PLACE</div>
                        <div>{data.hackathonPrize[2]}</div>
                    </div>
                    </div>
                </div>

                <div className="flex flex-col px-3 py-4 bg-[#161E2E] rounded-sm gap-y-3">
                    <div className="flex justify-between">
                        <div>HACKATHON STATUS</div>
                        <div className="text-[#FEC855]">SUBMISSION STARTED</div>
                    </div>
                    <div className="flex flex-col gap-y-0.5">
                        <div className="flex justify-between text-[#B1B3B9] text-xs">
                            <div className="w-1/4">22 Feb - 28 Feb</div>
                            <div className="w-1/4">22 Feb - 28 Feb</div>
                            <div className="w-1/4">22 Feb - 28 Feb</div>
                            <div className="w-1/4">22 Feb - 28 Feb</div>
                        </div>
                        <div className="w-full rounded-sm bg-[#939393]">
                            <div className="bg-gradient-to-r from-purple-500 to-blue-500 w-6/12 h-2 rounded-sm"></div>
                        </div>
                        <div className="flex justify-evenly text-[#B1B3B9] text-xs">
                            <div className="w-1/4 ">Registration</div>
                            <div className="w-1/4">Submissions</div>
                            <div className="w-1/4">Judging</div>
                            <div className="w-1/4">Result & Prizes</div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col px-3 pt-2 pb-3 gap-y-2 bg-[#161E2E] rounded-sm">
                    <div>CONNECT</div>
                    <div className="flex gap-x-5">
                        <a className="border-2 border-[#A843F8] opacity-80 flex justify-between px-1.5 py-0.5 gap-x-2 rounded-sm hover:cursor-pointer text-sm items-center" href={data.additionalLinks[0]
} target="_blank">
                            <div><img src={discordIcon} className="w-6 h-6"></img></div>
                            <div>Discord</div>
                        </a> 
                        <button className="border-2 border-[#A843F8] opacity-80 flex justify-between px-1.5 py-0.5 gap-x-2 rounded-sm hover:cursor-pointer text-sm items-center">
                            <div><img src={discordIcon} className="w-6 h-6"></img></div>
                            <div>Discord</div>
                        </button> 
                        <button className="border-2 border-[#A843F8] opacity-80 flex justify-between px-1.5 py-0.5 gap-x-2 rounded-sm hover:cursor-pointer text-sm items-center">
                            <div><img src={discordIcon} className="w-6 h-6"></img></div>
                            <div>Discord</div>
                        </button> 
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default HackathonUpper;