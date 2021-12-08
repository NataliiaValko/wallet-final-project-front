import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import UserMenu from 'components/UserMenu';
import style from './AppBar.module.scss';

const AppBar = () => {
  let location = useLocation();

  return (
    <>
      <header className={style.header}>
        <Link className={style.header__title} to="/balance">
          Kapusta
        </Link>

        {location.pathname === '/balance' && <UserMenu />}
      </header>
    </>
  );
};

export default AppBar;
