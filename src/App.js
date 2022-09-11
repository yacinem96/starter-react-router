import { BrowserRouter as Router ,Routes , Route } from 'react-router-dom';
import { Home } from './pages';
import { About } from './pages/about';
import { Admin } from './pages/admin/';
import { Users } from './pages/admin/users';
import { Posts } from './pages/admin/posts';
import { NotFoundPage } from './pages/errors/404';


import './App.css';
function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/admin" element={<Admin/>}>
          <Route path="users" element={<Users/>}/>
          <Route path="posts" element={<Posts/>}/>
        </Route>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </Router>
    </>
  
  );
}

export default App;
