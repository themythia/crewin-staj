import { Routes, Route } from 'react-router-dom';
import PostContextProvider from '../contexts/PostContext';
import Account from './Account';
import Navbar from './navbar/Navbar';
import Posts from './posts/Posts';
import Users from './users/Users';

function App() {
  return (
    <>
      <Navbar />
      <div className='right-side'>
        <Account />
        <PostContextProvider>
          <Routes>
            <Route path='/users' element={<Users />} />
            <Route path='/posts' element={<Posts />} />
          </Routes>
        </PostContextProvider>
      </div>
    </>
  );
}

export default App;
