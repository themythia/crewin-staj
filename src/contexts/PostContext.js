import { createContext, useEffect, useState } from 'react';

export const PostContext = createContext();

const PostContextProvider = ({ children }) => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    if (!posts) {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((data) => setPosts(data.slice(0, 6)))
        .catch((e) => console.warn('Fetching posts failed!', e));
    }
  }, [posts]);

  return (
    <PostContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostContext.Provider>
  );
};
export default PostContextProvider;
