import Bell from './Bell';
import Home from './Home';
import Message from './Message';
import More from './More';
import Post from './Post';
import User from './User';

const Icon = ({ type }) => {
  const icons = {
    dash: Home,
    posts: Post,
    users: User,
  };

  const DynamicIcon = icons[type];

  return <DynamicIcon />;
};
export default Icon;
