import './App.css'
import Navbar from './components/Navbar'
import ManagerDash from './components/ManagerDash'
import { ToastContainer } from 'react-toastify'
function App() {


  return (
    <>
    <Navbar/>
    
    <main className='flex flex-col justify-center items-center'>
    <ToastContainer/>
          <ManagerDash/>
    </main>
   
    </>
  )
}

export default App
