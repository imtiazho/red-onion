import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/HomeParent/Home/Home';
import NotFounded from './Pages/NotFounded/NotFounded';
import NavBar from './Pages/Shared/NavBar/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/*' element={<NotFounded />}></Route>
      </Routes>
    </>
  );
}

export default App;
