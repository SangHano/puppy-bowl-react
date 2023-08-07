import { BrowserRouter, Routes, Route } from "react-router-dom";
import Playerlist from './components/Playerlist'
import NavBar from './components/NavBar'
import PlayerDetail from './components/SinglePlayerDetail'
import Playerform from './components/NewPlayerForm'
import MainPage from './components/MainPage'
import CreatePlayer from './components/PlayerCreate'

import './App.css'

const App=()=> {

  return (
    <>
      <nav>
         <NavBar/>
      </nav>
      
      
      
      <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/playerlist" element={<Playerlist/>} />
          <Route path="/playerform" element={<Playerform/>} />
          <Route path="/player/:playerId" element ={<PlayerDetail/>} />
      </Routes>
      
      </>
  )
}

export default App
