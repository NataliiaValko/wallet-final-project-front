import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SelectionModal from 'components/Modal/SelectionModal';
import { Button } from 'components/Buttons/Buttons';
import Stack from '@mui/material/Stack';
import UserAvatar from './UserAvatar';

const UserMenu = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let navigate = useNavigate();

  const goToHomePage = () => navigate('/');
  return (
    <Stack style={{ display: 'flex', alignItems: 'center' }} direction="row" spacing={4}>
      <UserAvatar width={56} height={56} />

      <Button name="Выйти" type="button" onClick={handleOpen} />

      {open && <SelectionModal open={open} handleClose={handleClose} onClick={goToHomePage} />}
    </Stack>
  );
};

export default UserMenu;
