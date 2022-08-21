import { Routes, Route } from 'react-router-dom';
import Account from './Account';
import Navbar from './navbar/Navbar';
import Posts from './posts/Posts';
import Users from './users/Users';

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Account />
        <Routes>
          <Route path='/users' element={<Users />} />
          <Route path='/posts' element={<Posts />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
