import { useEffect, useState } from 'react';
import Snowfall from 'react-snowfall';

import Home from './component/Home';
import List from './component/List';
import About from './component/About';
import Snowman from './component/Snowman';
import Otherabout from './component/Otherabout';
import Tokenomics from './component/Tokenomics';
import Joinus from './component/Joinus';
import moon from './assets/moon.png';
import arcthing from './assets/arcthing.png';
import Menu from './component/Menu';
// import AmazingAudioPlayer from './AmazingAudioPlayer';
function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const tracks = [
    {
      title: "Song Title 1",
      artist: "Artist 1",
      album: "Album 1",
      url: "./assets/money.mp3"
    },
  ];

  return (
    <div className="App relative flex flex-col items-center justify-center overflow-clip">

      <div className="fixed w-full h-screen top-0">
        <Snowfall />
      </div>


      <script src="https://static.elfsight.com/platform/platform.js" async></script>
      <div className="elfsight-app-ac3eefb0-c7fa-422d-977d-62a44e0fec69 z-[90]" data-elfsight-app-lazy></div>
      <Menu />
      <Home />
      <List />
      <About />
      <Snowman />
      <Otherabout />
      <Tokenomics />

      <Joinus />

      <div className="fixed lg:-bottom-[70%] bottom-[30%] -z-10 moon rotatemoonn w-full flex justify-center items-center transition-transform duration-500 ease-out"
        style={{
          transform: `translateY(-${scrollPosition * 0.15}px)`
        }}>

        <img
          src={moon}
          alt="moon"
          className=" w-[70%]  rotatemoon "
        />

      </div>
      <img src={arcthing} alt="arcthing" className="fixed w-[100%] lg:-bottom-[180%] -bottom-[12%] -z-[2]" />
    </div>
  );
}

export default App;
