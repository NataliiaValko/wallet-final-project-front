import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SelectionModal from 'components/Modal/SelectionModal';
import { Button } from 'components/Buttons/Buttons';
import Stack from '@mui/material/Stack';
import IconAvatar from 'components/IconAvatar';

const UserMenu = () => {
  const fullName = 'Nikolay Mosalov';
  const avatarUrl = 'https://live.staticflickr.com/65535/51355167828_34e6d20320_n.jpg';
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let navigate = useNavigate();

  const goToHomePage = () => navigate('/');
  return (
    <Stack style={{ display: 'flex', alignItems: 'center' }} direction="row" spacing={4}>
      <IconAvatar src={avatarUrl} width={56} height={56} />
      <p>{fullName}</p>

      <Button name="Выйти" type="button" onClick={handleOpen} />

      {open && <SelectionModal open={open} handleClose={handleClose} onClick={goToHomePage} />}
    </Stack>
  );
};

export default UserMenu;
