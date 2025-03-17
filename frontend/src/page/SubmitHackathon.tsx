import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProgressBar from "../components/ProgressBar";
import Page1 from "../components/SubmissionPage1";
import Page2 from "../components/SubmissionPage2";
import Page3 from "../components/SubmissionPage3";
import Page4 from "../components/SubmissionPage4";


const SubmitHackathon = () => {
    const [Page,setPage] = useState(1);
    return <div className="w-screen bg-gray-900 text-white min-h-screen">
        <Navbar/>
        {
            Page === 1 ? (<div className="text-center mt-10 text-3xl">
                REGISTER FOR THE METAMASK HACKATHON
            </div>) : (<></>)
        }

        <div className="flex mt-10 mb-20 justify-evenly px-20 items-center gap-x-20">
            {

                Page === 4 ? (<></>) : (<ProgressBar page={Page}/>)
            }
            <div className="w-10/12">
                {
                    Page === 1 ? (<Page1 setPage={setPage}/>) : (Page ===2 ? (<Page2 setPage={setPage}/>) : (Page === 3 ? (<Page3 setPage={setPage}/>) : (<Page4 setPage={setPage}/>)))
                }
            </div>
        </div>
        <Footer/>
    </div>
}

export default SubmitHackathon;