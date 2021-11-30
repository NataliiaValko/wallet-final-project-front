import { Link, Outlet } from 'react-router-dom';
import { CustomLink } from 'components/CustomLink/CustomLink';
import style from '../NavBar/NavBar.module.scss';

export const NavBar = () => {
  return (
    <>
      <header className={style.header}>
        <nav className={style.navigation}>
          <Link className={style.logo} to="/"></Link>

          <p className={style.headerTitle}>Kapusta</p>

          <ul className={style.list}>
            <li className={style.links}>
              <CustomLink to="/">Registration</CustomLink>
            </li>

            <li className={style.links}>
              <CustomLink to="/login">Login</CustomLink>
            </li>

            <li className={style.links}>
              <CustomLink to="/balance">Balance</CustomLink>
            </li>

            <li className={style.links}>
              <CustomLink to="/reports">Reports</CustomLink>
            </li>
          </ul>
        </nav>
      </header>

      <Outlet />
    </>
  );
};
