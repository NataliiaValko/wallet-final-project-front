import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import CancelIcon from '@mui/icons-material/Close';
import style from './SelectionModal.module.scss';

const modalRoot = document.querySelector('#modal-root');

const InformationEditModal = ({ open, handleClose }) => {
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
            Информация о редактирование
          </Typography>

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Для того что бы редактировать нужную вам ячейку, вам необходимо дважды кликнуть по
            нужной ячейке и после внести своё изменение. В процессе редактирования вы будите
            получать уведомления, для вашего удобства :)
          </Typography>
        </Box>
      </Modal>
    </Box>,
    modalRoot,
  );
};

InformationEditModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default InformationEditModal;
