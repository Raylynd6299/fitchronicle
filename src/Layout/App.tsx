import '../Styles/App.css'
import { CgGym } from "react-icons/cg";
import Login from '../views/Login';

function App() {

  return (
    <div className='bg-slate-700 min-h-[100vh]'>
      <nav className='h-14 flex justify-center pt-1' >
        <CgGym className='h-full w-full text-red-500' />
      </nav>
      <Login/>

    </div>
  )
}

export default App
