import { useState } from 'react';
import Icon from '../icons/Icon';

const Post = ({ data }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className='post'>
      <div className='title'>
        <h2>{data.title}</h2>
        <button onClick={() => setShowMenu(!showMenu)}>
          <Icon type='more' />
        </button>
        {showMenu && (
          <div className='menu'>
            <span>Edit</span>
            <span>Delete</span>
          </div>
        )}
      </div>
      <p>{data.body}</p>
    </div>
  );
};
export default Post;
