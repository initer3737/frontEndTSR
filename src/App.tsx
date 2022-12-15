import react from 'react'
import './App.css'
import {Routes,Route,Navigate} from 'react-router-dom';
import Nav from './nav'
import Index from './index';
import Create from './create';
import NotFound from './notfound';
import Update from './update';
function App() {
  return (
    <div className="w-screen">
      <Nav/>
      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/update/:id' element={<Update/>}/>
        <Route path='/404' element={<NotFound/>}/>
        <Route path='/*' element={<Navigate replace to={'/404'}/>}/>
      </Routes>
    </div>
  )
}

export default App
