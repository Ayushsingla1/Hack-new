import Slider from "react-slick";
import { hackathonData } from "../assets/data";
import { motion } from "motion/react"
import "./style.css"
const ListingSlider = ({data} : {data : any}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows : false,
        customPaging: () => (
            <div className="active-one w-4 h-1 rounded-sm bg-gray-300 cursor-pointer mt-10"></div>
        ),
    };
    return (
        <Slider {...settings} className="flex justify-center w-full slider-container">
            {
                data.map((hackathon : any, index : number) => {
                    return <div key={index} className="px-20">
                        <div className="flex w-full justify-center gap-x-15 items-center">
                            <div className="flex w-6/12 justify-end">
                                <img src={`https://turquoise-certain-fox-148.mypinata.cloud/ipfs/${hackathon.hackathonPoster}`} className="rounded-xl object-fit h-64 w-10/12" />
                            </div>
                            <div className="justify-start w-6/12">
                                <div className="bg-[#1E2938] flex flex-col gap-y-6 rounded-md text-white py-4 px-6 w-5/6">
                                    <div className="flex justify-between">
                                        <div className="flex flex-col gap-y-1">
                                            <div className="text-lg">{hackathon.hackathonName}</div>
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
                                                {hackathon.hackathonTheme
.map((ele: any, index: number) => {
                                                    return <div className="bg-[#706C6C]/65 px-2 py-1.5 rounded-sm" key={index}>{ele}</div>
                                                })}
                                            </div>
                                            <div>{hackathon.hackathonEnds
                                            }</div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div>{100}+ participating</div>
                                        <motion.button className="bg-gradient-to-l from-purple-500 to-blue-500 p-1 w-40 rounded-md font-semibold text-lg hover:cursor-pointer" whileHover={{ scale: 1.05 }} whileTap={{ scale: .95 }}>Apply Now</motion.button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                })
            }
        </Slider>
    )
}

export default ListingSlider;