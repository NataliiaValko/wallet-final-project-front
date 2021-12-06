import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import UserMenu from 'components/userMenu/userMenu';
import style from '../NavBar/NavBar.module.scss';

export const NavBar = () => {
  let location = useLocation();

  return (
    <>
      <header className={style.header}>
        <Link className={style.headerTitle} to="/balance">
          Kapusta
        </Link>

        {location.pathname === '/balance' && <UserMenu />}
      </header>
    </>
  );
};
