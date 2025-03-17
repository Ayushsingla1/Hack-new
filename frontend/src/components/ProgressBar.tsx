

const ProgressBar = ({page} : {page : number}) => {
    return <div className="bg-[#1E2938] p-5 py-6 rounded-md w-72">
        <div className="flex flex-col gap-y-0.5 items-center">
            <div className={`rounded-full w-14 h-14 ${page ===1  ? "bg-[#9015F2]" : "bg-[#D9D9D9]"}`}></div>
            <div className="h-16 w-0.5 bg-gradient-to-r from-purple-500 to-blue-500"></div>
            <div className={`rounded-full w-14 h-14 ${page ===2  ? "bg-[#9015F2]" : "bg-[#D9D9D9]"}`}></div>
            <div className="h-16 w-0.5 bg-gradient-to-r from-purple-500 to-blue-500"></div>
            <div className={`rounded-full w-14 h-14 ${page ===3  ? "bg-[#9015F2]" : "bg-[#D9D9D9]"}`}></div>
            <div className="h-16 w-0.5 bg-gradient-to-r from-purple-500 to-blue-500"></div>
            <div className={`rounded-full w-14 h-14 ${page ===4  ? "bg-[#9015F2]" : "bg-[#D9D9D9]"}`}></div>
        </div>
    </div>
}

export default ProgressBar;