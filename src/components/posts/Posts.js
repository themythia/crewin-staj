import { useEffect, useState } from 'react';
import Post from './Post';

const Posts = () => {
  const [posts, setPosts] = useState(null);
  console.log('posts', posts);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data.slice(0, 6)))
      .catch((e) => console.warn('Fetching posts failed!', e));
  }, []);

  return (
    <main className='posts-container'>
      <h1>Posts</h1>
      <div className='post-card-container'>
        {posts && posts.map((post, idx) => <Post key={idx} data={post} />)}
      </div>
    </main>
  );
};
export default Posts;
