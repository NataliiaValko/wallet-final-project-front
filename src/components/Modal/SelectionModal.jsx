import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { Button } from 'components/Buttons/Buttons';
import CancelIcon from '@mui/icons-material/Close';
import style from './SelectionModal.module.scss';

const modalRoot = document.querySelector('#modal-root');

const SelectionModal = ({ open, handleClose, onClick }) => {
  return createPortal(
    <Box>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box className={style.modal}>
          <CancelIcon className={style.modal__close_button} onClick={handleClose} />
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            Вы уверены?
          </Typography>
          <Box className={style.modal__button__thumb}>
            <Button type="button" name="Да" onClick={onClick} />
            <Button type="button" name="Нет" onClick={handleClose} />
          </Box>
        </Box>
      </Modal>
    </Box>,
    modalRoot,
  );
};

SelectionModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SelectionModal;
