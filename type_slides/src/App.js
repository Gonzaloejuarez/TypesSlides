import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import SlideOne from './components/SlideOne/SlideOne';
import SlideTwo from './components/SlideTwo/SlideTwo';
import SlideThree from './components/SlideThree/SlideThree';
import { Slide } from './Utils/Data';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/slideOne' element={<SlideOne slides={Slide} />} />
        <Route path='/slideTwo' element={<SlideTwo slides={Slide} />} />
        <Route path='/slideThree' element={<SlideThree slides={Slide} />} />
      </Routes>
    </div>
  );
}

export default App;
