import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HackathonUpper from "../components/HackathonUpper";
import HackathonEndedLower from "../components/HackathonEndedLower";

const HackathonEnded = () => {

    return <div className="w-screen bg-gray-900 text-white min-h-screen">    
        <Navbar/>
        <HackathonUpper/>
        <HackathonEndedLower/>
        <Footer/>
    </div>
}

export default HackathonEnded;