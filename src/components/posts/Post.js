import { useState } from 'react';
import Icon from '../icons/Icon';
import Menu from './Menu';

const Post = ({ data }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className='post'>
      <div className='title'>
        <h2>{data.title}</h2>
        <button onClick={() => setShowMenu(!showMenu)}>
          <Icon type='more' />
        </button>
        {showMenu && <Menu />}
      </div>
      <p>{data.body}</p>
    </div>
  );
};
export default Post;
