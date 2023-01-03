import PropTypes from 'prop-types';
import { Btn, BtnLabel } from './GoToBackButton.styled';

export default function GoToBackButton({onClick, label, arrow}) {

  return (
    <Btn type='button' onClick={onClick}>
      {arrow}
      <BtnLabel>
        {label}
      </BtnLabel>
    </Btn>
  )
};

GoToBackButton.propTypes = {
  onClick: PropTypes.func.isRequired,
}