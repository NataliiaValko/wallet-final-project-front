import PropTypes from 'prop-types';
import Stack from '@mui/material/Stack';
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';

const CustomButtonRoot = styled('button')`
  background-color: rgb(250, 248, 248);
  padding: 15px 20px;
  border-radius: 10px;
  color: #000;
  font-weight: 600;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 14px;
  transition: all 200ms ease;
  cursor: pointer;
  box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 0 rgba(0, 127, 255, 0);
  border: none;
  height: 55px;

  &:hover {
    background-color: rgb(255, 165, 0);
    color: #fff;
  }

  &.${buttonUnstyledClasses.active} {
    background-color: #004386;
  }

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
    box-shadow: 0 0 0 0 rgba(0, 127, 255, 0);
  }
`;

function CustomButton(props) {
  return <ButtonUnstyled {...props} component={CustomButtonRoot} />;
}

const Buttons = ({ name, type, onclick }) => {
  return (
    <Stack spacing={2} direction="row">
      <CustomButton type={type[0]}>{name[0]}</CustomButton>
      <CustomButton onClick={onclick} type={type[1]}>
        {name[1]}
      </CustomButton>
    </Stack>
  );
};

export const Button = ({ name, type, onclick }) => (
  <CustomButton onClick={onclick} type={type}>
    {name}
  </CustomButton>
);

Buttons.propTypes = {
  name: PropTypes.array.isRequired,
  type: PropTypes.array.isRequired,
  onclick: PropTypes.func,
};

Button.propTypes = {
  name: PropTypes.array.isRequired,
  type: PropTypes.array.isRequired,
  onclick: PropTypes.func,
};

export default Buttons;
