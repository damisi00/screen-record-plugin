
import './App.css'
import Home from './pages/Home'
import { HashRouter, Routes, Route } from 'react-router-dom'
import LoginPg from './pages/LoginPg'   
import RecordsPg from './pages/RecordsPg'
import GuestRecordPg from './pages/GuestRecordPg'

function App() {
  

  return (
    <>
      <HashRouter>
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<LoginPg />} />
            <Route path='/login/record' element={<RecordsPg />} />
            <Route path='/guest' element={<GuestRecordPg />} />
          </Routes>
      </HashRouter>
     
    </>
  )
}

export default App
