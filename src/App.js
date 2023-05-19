import GraphChart from './Pages/GraphChart/GraphChart';
import LeftSidebar from './Pages/LeftSideBar/LeftSideBar';
import NavCards from './Pages/NavCards/NavCards';
import Navbar from './Pages/Navbar/Navbar';
import SlideCard from './Pages/SlideCard/SlideCard';
import logo from './logo.svg';


function App() {
  return (

    <div className='bg-sky-400 h-72 flex justify-between'>
      <div className='ml-3 w-3/12 '>
        <LeftSidebar></LeftSidebar>

      </div>

      <div className='w-9/12 mr-3'>
        <div className=''>
          <Navbar></Navbar>
        </div>
        <div>
          <NavCards></NavCards>
        </div>
        <div className='flex'>
          <div className='w-6/12'>
            <GraphChart></GraphChart>
          </div>
          <div className='w-6/12'>
            <SlideCard></SlideCard>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
