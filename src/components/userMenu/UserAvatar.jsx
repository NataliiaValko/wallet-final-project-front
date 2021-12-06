import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';

const UserAvatar = ({ width, height }) => {
  const fullName = 'Nikolay Mosalov';
  const avatar = 'https://live.staticflickr.com/65535/51355167828_34e6d20320_n.jpg';
  return (
    <>
      <Avatar alt={fullName} src={avatar} sx={{ width, height }} />
      <span>{fullName}</span>
    </>
  );
};

UserAvatar.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

export default UserAvatar;
