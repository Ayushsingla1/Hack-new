import './App.css'
import { Routes , Route } from 'react-router-dom'
import HackathonHomepage from './page/HackthonHomePage'
import HackathonSubmission from './page/SubmitHackathon'
import CreateHackathon from './page/HackathonCreation'
import HackathonSubmissionsPage from './page/ViewSubmission'
import AllHackathons from './page/AllHackathons'
import IndividualHackathon from './page/IndividualHackathon'
function App() {
  return (
    
    <Routes>
      <Route path='/' element = {<HackathonHomepage/>}/>
      <Route path='/hackathons/explore' element = {<AllHackathons/>}/>
      <Route path='/create-hackathon' element = {<CreateHackathon/>}/>
      <Route path='/hackathon/info/:hackathonId' element = {<IndividualHackathon/>}/>
      <Route path='/hackathon/submit/:hackathonId' element = {<HackathonSubmission/>}/>
      <Route path='/hackathon/submissions/:hackathonId' element = {<HackathonSubmissionsPage/>} />
    </Routes>
  )
}

export default App
