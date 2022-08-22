import { useContext, useEffect, useRef, useState } from 'react';
import { PostContext } from '../../contexts/PostContext';

const TextArea = ({ idx, setShowTextArea }) => {
  const { posts, setPosts } = useContext(PostContext);
  const { body } = posts.find((post) => post.id === idx);
  const [input, setInput] = useState(body.split('\n').join(''));
  const ref = useRef(null);

  useEffect(() => {
    if (ref && ref.current) {
      ref.current.select();
    }
  }, []);

  const cancelEdit = () => setShowTextArea(false);
  const editPost = () => {
    setPosts(
      posts.map((post) =>
        post.id === idx
          ? {
              ...post,
              body: input,
            }
          : post
      )
    );
    setShowTextArea(false);
  };

  return (
    <>
      <textarea
        ref={ref}
        autoFocus
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={editPost}>Edit</button>
      <button onClick={cancelEdit}>Cancel</button>
    </>
  );
};
export default TextArea;
