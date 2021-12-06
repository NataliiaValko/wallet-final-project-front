import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import UserAvatar from './Avatar';

const UserMenu = () => {
  return (
    <Stack style={{ display: 'flex', alignItems: 'center' }} direction="row" spacing={4}>
      <UserAvatar width={56} height={56} />
      <Link style={{ color: 'inherit' }} to="/">
        Выйти
      </Link>
    </Stack>
  );
};

export default UserMenu;
