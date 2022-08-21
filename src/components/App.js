import { Routes, Route } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import Posts from './posts/Posts';
import Users from './users/Users';

function App() {
  // TODO
  // •	Scss kullanmanız gerekmektedir.
  // •	Verileri https://jsonplaceholder.typicode.com online apideki /posts ve /users apilerini kullanarak doldurmanız beklenmektedir.
  // •	React Yaşam Döngüleri, Hooks ve Component kullanmanız beklenmektedir.
  // •	Dosya yapısına dikkat ediniz

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/users' element={<Users />} />
        <Route path='/posts' element={<Posts />} />
      </Routes>
    </>
  );
}

export default App;
