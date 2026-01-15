
import './App.css'
import Random from './Components/Random'
import Tag from './Components/Tag'

function App() {
  

  return (
    <div className="min-h-screen w-full flex flex-col items-center px-6">
      <h1 className="bg-white rounded-sm w-full text-center mt-[40px] px-10 py-2 text-3xl text-black font-bold">RANDOM GIFS</h1>
      <div className='flex flex-row  items-center gap-y-10 gap-x-50 mt-[30px]'>
        <Random></Random>
        <Tag></Tag>
      </div> 
    </div>
  )
}

export default App
