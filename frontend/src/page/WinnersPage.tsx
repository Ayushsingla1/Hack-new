import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


const WinnerPage = () => {
    return <div className="bg-gray-900 text-white min-h-screen flex justify-between flex-col">
        <Navbar />
        <section className="winners-submission py-12 px-4 bg-gray-900">
            <div className="container mx-auto max-w-3xl">
                <h2 className="text-3xl font-bold text-center text-purple-400 mb-8">Submit Hackathon Winners</h2>

                <form className="bg-gray-800 rounded-lg p-8 shadow-lg">
                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-yellow-400 mb-6">First Place Winner</h3>
                        <div className="mb-4">
                            <label htmlFor="first-place-team" className="block text-gray-300 mb-2">Team Name</label>
                            <input type="text" id="first-place-team" className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-purple-500"/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="first-place-project" className="block text-gray-300 mb-2">Project Name</label>
                            <input type="text" id="first-place-project" className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-purple-500"/>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-gray-300 mb-6">Second Place Winner</h3>
                        <div className="mb-4">
                            <label htmlFor="second-place-team" className="block text-gray-300 mb-2">Team Name</label>
                            <input type="text" id="second-place-team" className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-purple-500"/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="second-place-project" className="block text-gray-300 mb-2">Project Name</label>
                            <input type="text" id="second-place-project" className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-purple-500"/>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold text-orange-600 mb-6">Third Place Winner</h3>
                        <div className="mb-4">
                            <label htmlFor="third-place-team" className="block text-gray-300 mb-2">Team Name</label>
                            <input type="text" id="third-place-team" className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-purple-500"/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="third-place-project" className="block text-gray-300 mb-2">Project Name</label>
                            <input type="text" id="third-place-project" className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-purple-500"/>
                        </div>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="bg-purple-600 text-white py-3 px-8 rounded-lg font-medium hover:bg-purple-700 transition">
                            Submit Winners
                        </button>
                    </div>
                </form>
            </div>
        </section>
        <Footer />
    </div>
}

export default WinnerPage;