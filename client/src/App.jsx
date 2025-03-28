import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TouristActraction from './components/Touristattraction';


function App() {
  return (
    <div className="App">
      <TouristActraction />
    </div>
  );  
}

export default App;


{/* <Router>
  <Routes>
    <Route path="/" element={<TouristActraction />} />
  </Routes>
</Router>; */}