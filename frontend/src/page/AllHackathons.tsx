import Footer from "../components/Footer"
import HackathonCard from "../components/HackathonCard"
import ListingSlider from "../components/ListingSlider"
import Navbar from "../components/Navbar"
import { ABI, ContractAddress } from "../utils/ContractInfo"
import { useReadContract } from "wagmi"
import LazySection from "../components/LazySection"

const AllHackathons = () => {


    const { data, isSuccess, isPending, isError } = useReadContract({
        abi: ABI,
        address: ContractAddress,
        functionName: 'getAllHackathons'
    })

    if (isPending) {
        return <div className='w-screen h-screen flex items-center justify-center bg-gray-900'>
            <span className='loader'></span>
        </div>
    }
    if (isError) {
        return <div className='w-screen h-screen flex items-center justify-center bg-gray-900 text-white'>
            Unable to Fetch at the moment
        </div>
    }

    if (isSuccess && !isPending) {
        return <div className="px-20 w-screen bg-gray-900 text-white min-h-screen">
            <Navbar />
            <div className="mt-20 px-20">
                <ListingSlider data={data} />
            </div>
            <div className="flex items-center gap-x-2 mt-24">
                <div className="text-lg">Live</div>
                <div className="h-0.5 w-full bg-gradient-to-r from-purple-500 to-blue-500"></div>
            </div>

            <LazySection>
                <div className="justify-center w-screen mb-20 mt-20">
                    <div className="grid grid-cols-2 gap-y-14 gap-x-10 px-20 mt-10">
                        {
                            (data as any[]).map((item: any, index: number) => {
                                return <div key={index}>
                                    <HackathonCard item={item} index={index} />
                                </div>
                            })
                        }
                    </div>
                </div>
            </LazySection>
            <Footer />
        </div>
    }
}

export default AllHackathons;