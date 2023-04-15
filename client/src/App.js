 
import './App.css'; 
import NavBar from './Components/NavBar';
import CodeForInterview from './Components/CodeForInterview';
import AllUsers from './Components/AllUsers';
import AddUser from './Components/AddUser';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import EditUser from './Components/EditUser';
import Wheather from './Components/Wheather';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
    <Route path='/' element= {<CodeForInterview/>}/>
     <Route path='/add' element={<AddUser/>}/>
     <Route path='/all' element= {<AllUsers/>} />
     <Route path='/edit/:id' element={<EditUser/>}/>
     <Route path='/Weather' element={<Wheather/>}/>
      </Routes>
    
    </BrowserRouter>
    
  );
}

export default App;
