import { useContext } from 'react';
import { PostContext } from '../../contexts/PostContext';
import Post from './Post';

const Posts = () => {
  const { posts } = useContext(PostContext);

  return (
    <main className='posts-container'>
      <h1>Posts</h1>
      <div className='post-card-container'>
        {posts && posts.map((post) => <Post key={post.id} idx={post.id} />)}
      </div>
    </main>
  );
};
export default Posts;
