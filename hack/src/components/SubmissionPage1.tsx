import { useAtom } from "jotai";
import { submissionForm } from "../stateManagement/atoms";
import {motion} from "motion/react"
const Page1 = ({setPage} : {setPage : any}) => {

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
    return <div className="flex flex-col w-full px-30 gap-y-8 bg-[#1E2938] rounded-md py-10">
        <div className="text-3xl text-[#A843F8]/80">Personal Info</div>
        <div className="flex flex-col gap-y-6">
        <div className="flex justify-between flex-wrap gap-y-2">
            <div className="flex flex-col items-start gap-y-0.5 xl:min-w-[48%] lg:min-w-full md:min-w-full">
                <label htmlFor="firstName">FirstName</label>
                <input className="p-3 bg-white/70 rounded-sm text-black w-full" type="text" placeholder="Enter Your First Name Ex. John" value={data.firstName} id = "firstName" name="firstName" onChange={(e) =>changeHandler(e)}/>
            </div>
            <div className="flex flex-col items-start gap-y-0.5 xl:min-w-[48%] lg:min-w-full md:min-w-full">
                <label htmlFor="lastName">LastName</label>
                <input className="p-3 bg-white/70 rounded-sm text-black w-full" type="text" placeholder="Enter Your Last Name Ex. Doe" value={data.lastName} id = "lastName" name="lastName" onChange={(e) =>changeHandler(e)}/>
            </div>
        </div>
        <div className="flex justify-between items-center flex-wrap gap-y-2">
            <div className="flex flex-col items-start gap-y-0.5 xl:min-w-[48%] lg:min-w-full md:min-w-full">
                <label htmlFor="country">Country</label>
                <input className="p-3 bg-white/70 rounded-sm text-black w-full" type="text" placeholder="Enter Your Country" value={data.country} id = "country" name="country" onChange={(e) =>changeHandler(e)}/>
            </div>
            <div className="flex flex-col items-start gap-y-0.5 xl:min-w-[48%] lg:min-w-full md:min-w-full">
                <label htmlFor="state">State</label>
                <input className="p-3 bg-white/70 rounded-sm text-black w-full" type="text" placeholder="Enter Your State" value={data.state} id = "state" name="state" onChange={(e) =>changeHandler(e)}/>
            </div>
        </div>
        <div className="flex flex-col items-start gap-y-0.5 w-full">
            <label htmlFor="introduction">Introduction</label>
            <textarea className = "p-4 bg-white/70 w-full min-h-28 rounded-sm text-black text-wrap resize-none" placeholder="Tell about yourself" value={data.introduction} id="introduction" name="introduction" onChange={(e) =>changeHandler(e)}/>
        </div>
        <div className="flex w-full justify-center items-center mt-10">
            <motion.button whileHover={{scale : 1.05}} whileTap={{scale : .95}} className="px-3 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-xl text-white w-64 rounded-sm" onClick={() => setPage((prev : number) => prev+1)}>Next</motion.button>
        </div>
        </div>
    </div>
}

export default Page1;