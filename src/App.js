import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Blogpost from './Pages/Blogpost';
import CommentPage from './Pages/CommentPage';
import Signup from './Pages/Signup';
import LLogout from './Pages/LLogout';


function App() {
  return (
   <>
   <Router>
    <Routes>
      <Route path='/' Component={Login}/>
      <Route path='/Signup' Component={Signup}/>
      <Route path='/Home' Component={Home}/>
      <Route path='/BlogPost/:id' Component={Blogpost}/>
      <Route path='/CommentPage/:id' Component={CommentPage}/>
      <Route path='/LLogout' Component={LLogout}/>
    </Routes>
   </Router>
   </>
  );
}

export default App;
