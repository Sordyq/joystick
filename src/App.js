import './App.css';
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import About from './component/About'
import Service from './component/Service'
import Footer from './component/Footer'

function App() {
  return (
    <div className="App h-[100vh] w-full">
      <div className='lg:bg-[url("../src/image/pexels-kseverin-5961216.jpg")] sm:bg-[url("../src/image/pexels-kseverin-5961216.jpg")] lg:h-screen sm:h-4/5 bg-no-repeat bg-cover flex flex-col gap-[20px]'>
      <Navbar/>
      <Hero/>
      </div>
      <About/>
      <Service/>
      <Footer/>
    </div>
  );
}

export default App;
