import {motion} from "motion/react"
import { useNavigate } from "react-router-dom"

const HackathonCard = ({item} : {item : any}) => {

    const navigate = useNavigate();
    return <motion.div className="bg-[#1E2938] flex flex-col gap-y-6 rounded-md text-white py-4 px-6 w-9/12" whileHover={{ 
        y: -5,
        boxShadow: "0 25px 50px -12px rgba(139, 92, 246, 0.25)",
        scale : 1.05
      }}
      transition={{ duration: 0.3 }}>
        <div className="flex justify-between">
            <div className="flex flex-col gap-y-1">
                <div className="text-lg">{item.name}</div>
                <div className="self-end text-sm">Hackathon</div>
            </div>
            <div className="flex gap-x-2">
                <div className="rounded-full w-10 h-10 bg-white"></div>
                <div className="rounded-full w-10 h-10 bg-white"></div>
            </div>
        </div>

        <div className="flex flex-col bg-[#D9D9D9]/15 rounded-md bg-opacity-15 px-3 py-2 gap-y-1">
            <div className="flex justify-between">
                <div className="flex flex-col gap-y-2">
                    <div>THEMES</div>
                </div>
                <div className="flex flex-col gap-y-2">
                    <div>ENDS</div>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <div className="flex gap-x-2 rounded-md">
                        {item.themes.map((ele : any,index : number) => {
                            return <div className="bg-[#706C6C]/65 px-2 py-1.5 rounded-sm" key={index}>{ele}</div>
                        })}
                </div>
                <div>{item.ends}</div>
            </div>
        </div>

        <div className="flex justify-between items-center">
            <div>{item.participating}+ participating</div>
            <motion.button className="bg-gradient-to-l from-purple-500 to-blue-500 p-1 w-40 rounded-md font-semibold text-lg hover:cursor-pointer" whileHover={{scale : 1.05}} whileTap={{scale : .95}} onClick={() => navigate('/hackathon/info/1')}>Apply Now</motion.button>
        </div>
    </motion.div>
}

export default HackathonCard;