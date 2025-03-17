import { useAtom } from "jotai";
import { submissionForm } from "../stateManagement/atoms";
import {motion} from "motion/react"

const Page2 = ({setPage} : {setPage : any}) => {

        const [data , setData] = useAtom(submissionForm);
        console.log(data)
    
    
        const changeHandler = (e : any) => {
            const {name , value } = e.target;
            console.log(name , value)
            setData((prev) => {
                return {
                    ...prev ,
                    [name] : value
                }
            })
        }

    return <div className="flex flex-col w-full px-30 gap-y-6 bg-[#1E2938] py-10">
        <div className="text-3xl text-[#A843F8]/80">Project Info</div>
        <div className="flex flex-col gap-y-6">
        <div className="flex justify-between">
            <div className="flex flex-col items-start gap-y-0.5 w-[48%]">
                <label htmlFor="projectName">Project Name</label>
                <input className="p-3 w-full bg-white/70 rounded-sm text-black" type="text" placeholder="Enter Your project Name" value={data.projectName} id = "projectName" name="projectName" onChange={(e) =>changeHandler(e)}/>
            </div>
            <div className="flex flex-col items-start gap-y-0.5 w-[48%]">
                <label htmlFor="projectGithub">Project Github</label>
                <input className="p-3 w-full bg-white/70 rounded-sm text-black" type="text" placeholder="Enter Your project Github" value={data.projectGithub} id = "projectGithub" name="projectGithub" onChange={(e) =>changeHandler(e)}/>
            </div>
        </div>
        <div className="flex justify-between">
            <div className="flex flex-col items-start gap-y-0.5 w-[48%]">
                <label htmlFor="category">category</label>
                <input className="p-3 w-full bg-white/70 rounded-sm text-black" type="text" placeholder="Enter Your Project Category" value={data.category} id = "category" name="category" onChange={(e) =>changeHandler(e)}/>
            </div>
            <div className="flex flex-col items-start gap-y-0.5 w-[48%]">
                <label htmlFor="projectDemoLink">Demo Link</label>
                <input className="p-3 w-full bg-white/70 rounded-sm text-black" type="text" placeholder="Enter Your Project Demo Link" value={data.projectDemoLink} id = "projectDemoLink" name="projectDemoLink" onChange={(e) =>changeHandler(e)}/>
            </div>
        </div>
        <div className="flex flex-col items-start gap-y-0.5 w-full">
            <label htmlFor="projectShortDesc">One Line Project Description (max 120 chars)</label>
            <textarea className = "p-4 bg-white/70 w-full min-h-10 rounded-sm text-black text-wrap resize-none" placeholder="Tell about yourself" value={data.projectShortDesc} id="projectShortDesc" name="projectShortDesc" onChange={(e) =>changeHandler(e)}/>
        </div>
        <div className="flex flex-col items-start gap-y-0.5 w-full">
            <label htmlFor="projectMainDesc">Detailed Project Description</label>
            <textarea className = "p-4 bg-white/70 w-full min-h-24 rounded-sm text-black text-wrap resize-none" placeholder="Tell about yourself" value={data.projectMainDesc} id="projectMainDesc" name="projectMainDesc" onChange={(e) =>changeHandler(e)}/>
        </div>
        <div className="flex w-full justify-center items-center mt-10">
            <div className="flex gap-x-10">
                <motion.button whileHover={{scale : 1.05}} whileTap={{scale : .95}} className="px-3 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-xl text-white w-64 rounded-sm" onClick={() => setPage((prev : number) => prev-1)}>Back</motion.button>
                <motion.button whileHover={{scale : 1.05}} whileTap={{scale : .95}} className="px-3 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-xl text-white w-64 rounded-sm" onClick={() => setPage((prev : number) => prev+1)}>Next</motion.button>
            </div>
        </div>
    </div>
    </div>
}

export default Page2;