import { motion } from "motion/react"
import { useNavigate } from "react-router-dom";

const NotFound =() => {

    const navigate = useNavigate();

    return <div className="bg-gray-900 h-screen w-screen justify-center items-center flex flex-col gap-y-10">
        <div className="text-white text-xl font-light"> ERROR 404 | NOT FOUND</div>
        <motion.button whileHover={{scale : 1.05}} whileTap={{scale : .95}} className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-md" onClick={() => navigate('/')} >Take Me Home</motion.button>
    </div>
}

export default NotFound;