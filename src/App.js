import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import OrderReview from './Components/OrderReview/OrderReview';
import GrandPa from './Components/GrandPa/GrandPa';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={ <Home /> }></Route>
        <Route path="/home" element={ <Home /> }></Route>
        <Route path="/OrderReview" element={ <OrderReview /> }></Route>
        <Route path="/grandpa" element={ <GrandPa /> }></Route>
      </Routes>
    </div>
  );
}

export default App;
