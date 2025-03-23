

const ProgressBar = ({page} : {page : number}) => {
    return <div className="bg-[#1E2938] p-5 py-6 rounded-md w-72 justify-center flex">
        <div className="flex flex-col gap-y-0.5 items-center">
            <div className="flex items-center gap-x-5 self-start">
                <div className={`rounded-full w-14 h-14 ${page ===1  ? "bg-[#9015F2]" : "bg-[#D9D9D9]"}`}></div>
                <div className="text-xl">Personal Info</div>
            </div>
            <div className="h-16 w-0.5 bg-gradient-to-r from-purple-500 to-blue-500 self-start relative left-7"></div>
            <div className="flex items-center gap-x-5 self-start">
                <div className={`rounded-full w-14 h-14 ${page ===2  ? "bg-[#9015F2]" : "bg-[#D9D9D9]"}`}></div>
                <div className="text-xl">Project Info</div>
            </div>
            <div className="h-16 w-0.5 bg-gradient-to-r from-purple-500 to-blue-500 self-start relative left-7"></div>
            <div className="flex items-center gap-x-5 self-start">
                <div className={`rounded-full w-14 h-14 ${page ===3  ? "bg-[#9015F2]" : "bg-[#D9D9D9]"}`}></div>
                <div className="text-xl">Images</div>
            </div>
            <div className="h-16 w-0.5 bg-gradient-to-r from-purple-500 to-blue-500 self-start relative left-7"></div>
            <div className="flex items-center gap-x-5 self-start">
                <div className={`rounded-full w-14 h-14 ${page ===4  ? "bg-[#9015F2]" : "bg-[#D9D9D9]"}`}></div>
                <div className="text-xl">Review</div>
            </div>
        </div>
    </div>
}

export default ProgressBar;