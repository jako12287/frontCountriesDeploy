import './App.css';
import { LandinPage } from './components/views/landingPage';
import { Home } from './components/views/Home';
import { CreateActivity } from './components/views/Create_Activity';
import { DetailCountry } from './components/views/Detail_Country';
import { Routes, Route } from 'react-router-dom' 

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandinPage/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/details/:id' element={<DetailCountry/>}></Route>
      <Route path='/create_activities' element={<CreateActivity/>}></Route>
    </Routes>
  );
}

export default App;
