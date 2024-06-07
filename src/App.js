import logo from './logo.svg';
import './App.css';
import Addstudent from './components/Addstudent';
import SearchStud from './components/SearchStud';
import Delete from './components/Delete';
import Student from './components/Student'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Addstudent/>}/>
    <Route path='/Search' element={<SearchStud/>}/>
    <Route path='/Delete' element={<Delete/>}/>
    <Route path='/Viewall' element={<Student/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
