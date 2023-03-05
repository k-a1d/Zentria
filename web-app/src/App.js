import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Meditation from './components/Meditation/Meditation';
import { useState } from 'react';
import './App.css';

function App() {
  const [sliderContent, setSliderContent] = useState(<Meditation />);
  const [isSliderOpen, setIsSliderOpen] = useState(false);

  const slideAnimation = (color, title, content) => {
    if (content === sliderContent) return

    document.getElementById('home-page').style.backgroundColor = color;
    document.getElementById('page-title').textContent = title;

    if (!content) { // If returning to home page
      document.getElementById('back-btn').classList.toggle('hide');
      document.querySelector('.slider').classList.toggle('close');
      setIsSliderOpen(false);
      return;
    }
    
    setSliderContent(content)

    if (!isSliderOpen) {
      document.getElementById('back-btn').classList.toggle('hide');
      document.querySelector('.slider').classList.toggle('close');
      setIsSliderOpen(true)
    }

   
}

  return (
    <div className="App">
      <Home sliderContent={sliderContent} slideAnimation={slideAnimation} />     
      <NavBar slideAnimation={slideAnimation}/>   
    </div>
  );
}

export default App;
