// pages/index.js
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import About from './components/about';
import Portfolio from './components/portfolio';
import Resume from './components/resume';
import Nft from './components/nft';
import Blog from './components/blog';
import Contact from './components/contact';
import Footer from './components/footer';


export default function Home() {
  return (
    <>
      <div id="page" className="min-h-screen ">
      <div className="relative h-screen">
        <Banner />
        <div className="absolute top-0 left-0 w-full z-20">
          <Navbar />
        </div>
        <Portfolio/>
        <About/>
        <Resume/>
        <Blog/>
        <Nft/>
        <Contact/>
        <Footer/>
       
      </div>
      
      

        
      </div>
    </>
  );
}
