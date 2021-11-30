import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import style from '../CustomLink/CustomLink.module.scss';

export const CustomLink = ({ children, to, ...props }) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link
      className={match ? [style.link, style.activeLink].join(' ') : style.link}
      to={to}
      {...props}
    >
      {children}
    </Link>
  );
};
