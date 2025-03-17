import './App.css'
import { Routes , Route } from 'react-router-dom'
import HackathonHomepage from './page/HackthonHomePage'
import HackathonSubmission from './page/HackathonSubmission'
import HackathonListing from './page/HackathonListing'
import CreateHackathon from './page/HackathonCreation'
import HackathonData from './page/hackathonData'
function App() {
  return (
    
    <Routes>
      <Route path='/' element = {<HackathonHomepage/>}/>
      <Route path='/hackathons/explore' element = {<HackathonListing/>}/>
      <Route path='/submission' element = {<HackathonSubmission/>}/>
      <Route path='/create-hackathon' element = {<CreateHackathon/>}/>
      <Route path='/hackathon/submission/:id' element = {<HackathonSubmission/>}/>
      <Route path='/hackathon/info/:hackathonId' element = {<HackathonData/>}/>
    </Routes>
  )
}

export default App
