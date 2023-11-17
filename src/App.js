import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Blogpost from './Pages/Blogpost';


function App() {
  return (
   <>
   <Router>
    <Routes>
      <Route path='/' Component={Login}/>
      <Route path='/Home' Component={Home}/>
      <Route path='/BlogPost' Component={Blogpost}/>
    </Routes>
   </Router>
   </>
  );
}

export default App;
