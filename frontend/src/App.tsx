import './App.css'
import { Routes , Route } from 'react-router-dom'
import HackathonHomepage from './page/HackthonHomePage'
import HackathonSubmission from './page/SubmitHackathon'
import CreateHackathon from './page/HackathonCreation'
import HackathonSubmissionsPage from './page/ViewSubmission'
import AllHackathons from './page/AllHackathons'
import IndividualHackathon from './page/IndividualHackathon'
import WinnerPage from './page/WinnersPage'
import NotFound from './page/NotFound'
function App() {
  return (
    
    <Routes>
      <Route path='/' element = {<HackathonHomepage/>}/>
      <Route path='/hackathons/explore' element = {<AllHackathons/>}/>
      <Route path='/create-hackathon' element = {<CreateHackathon/>}/>
      <Route path='/hackathon/info/:hackathonId' element = {<IndividualHackathon/>}/>
      <Route path='/hackathon/submit/:hackathonId' element = {<HackathonSubmission/>}/>
      <Route path='/hackathon/submissions/:hackathonId' element = {<HackathonSubmissionsPage/>} />
      <Route path='/hackathon/submissions' element = {<HackathonSubmissionsPage/>}/>
      <Route path='/hackathon/winners/:hackathonId' element = {<WinnerPage/>}/>
      <Route path='*' element = {<NotFound/>}/>
    </Routes>
  )
}

export default App
