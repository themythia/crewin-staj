import { useEffect, useState } from 'react';
import User from './User';

const Users = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data.slice(0, 8)))
      .catch((e) => console.warn('Fetching users failed!', e));
  }, []);

  return (
    <main className='container'>
      <h1>Users</h1>
      <div className='card-container'>
        {users && users.map((user, idx) => <User key={idx} data={user} />)}
      </div>
    </main>
  );
};
export default Users;
