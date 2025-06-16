import './App.css';
import Layout from './Pages/Layout';
import { Route,Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/contact/Contact';

function App() {
  return (
   <>
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />  
          <Route exact path='/contact' element={<Contact/>} />      
        </Route>
      </Routes>
   </>
  );
}

export default App;


