import {Route,Routes} from 'react-router-dom';
import './App.css';
import Home from './components/home';
import Home from './components/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        < Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />

        <Route path='/counter' element={<Counter/>}/>
      

      </Routes>
    </div>
  );
}

