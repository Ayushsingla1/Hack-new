import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HackathonLower from "../components/HackathonLower";
import HackathonUpper from "../components/HackathonUpper";

const HackathonData = () => {

    return <div className="w-screen bg-gray-900 text-white min-h-screen">    
        <Navbar/>
        <HackathonUpper/>
        <HackathonLower/>
        <Footer/>
    </div>
}

export default HackathonData;