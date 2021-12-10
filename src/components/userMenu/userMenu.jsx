import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import Media from 'react-media';
import SelectionModal from 'components/Modal/SelectionModal';
// import LogoutIcon from '@mui/icons-material/Logout';
import Stack from '@mui/material/Stack';
import IconAvatar from 'components/IconAvatar';
import style from './UserMenu.module.scss';

const UserMenu = () => {
  const fullName = 'User Name';
  const avatarUrl = 'https://live.staticflickr.com/65535/51355167828_34e6d20320_n.jpg';
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let navigate = useNavigate();

  const goToHomePage = () => navigate('/');

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <IconAvatar src={avatarUrl} width={32} height={32} />
      <p className={style.user__name}>{fullName}</p>
      <span className={style.user__line}></span>

      <button className={style.user__button__logout} onClick={handleOpen}>
        Выйти
      </button>

      {open && <SelectionModal open={open} handleClose={handleClose} onClick={goToHomePage} />}
    </Stack>
  );
};

export default UserMenu;
