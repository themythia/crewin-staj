import { useContext } from 'react';
import { PostContext } from '../../contexts/PostContext';

const Menu = ({ idx, setShowTextArea, setShowMenu }) => {
  const { posts, setPosts } = useContext(PostContext);

  const deletePost = (idx) => setPosts(posts.filter((post) => post.id !== idx));
  const handleEdit = () => {
    setShowTextArea(true);
    setShowMenu(false);
  };

  return (
    <div className='menu'>
      <span onClick={handleEdit}>Edit</span>
      <span onClick={() => deletePost(idx)}>Delete</span>
    </div>
  );
};

export default Menu;
