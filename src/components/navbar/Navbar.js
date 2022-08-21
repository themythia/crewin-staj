import Link from './Link';
import Logo from './Logo';

const Navbar = () => {
  return (
    <nav>
      <Logo />
      <Link type='dash' />
      <Link type='users' />
      <Link type='posts' />
    </nav>
  );
};
export default Navbar;
