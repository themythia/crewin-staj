import { NavLink } from 'react-router-dom';
import Icon from '../icons/Icon';

const Link = ({ type }) => {
  const content = {
    dash: { icon: '', text: 'Dashboard' },
    users: { icon: '', text: 'Users' },
    posts: { icon: '', text: 'Posts' },
  };
  return (
    <NavLink
      to={type}
      className={`navlink ${({ isActive }) => (isActive ? 'active' : '')}}`}
    >
      <Icon type={type} />
      <span>{content[type].text}</span>
    </NavLink>
  );
};
export default Link;
