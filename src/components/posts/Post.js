import { useContext, useRef, useState } from 'react';
import { PostContext } from '../../contexts/PostContext';
import Icon from '../icons/Icon';
import Menu from './Menu';
import TextArea from './TextArea';

const Post = ({ idx }) => {
  const [showMenu, setShowMenu] = useState(false);
  const { posts } = useContext(PostContext);
  const { title, body } = posts.find((post) => post.id === idx);
  const [showTextArea, setShowTextArea] = useState(false);

  return (
    <div className='post'>
      <div className='title'>
        <h2>{title}</h2>
        <button onClick={() => setShowMenu(!showMenu)}>
          <Icon type='more' />
        </button>
        {showMenu && (
          <Menu
            idx={idx}
            setShowTextArea={setShowTextArea}
            setShowMenu={setShowMenu}
          />
        )}
      </div>
      {showTextArea ? (
        <TextArea idx={idx} setShowTextArea={setShowTextArea} />
      ) : (
        <p>{body}</p>
      )}
    </div>
  );
};
export default Post;
