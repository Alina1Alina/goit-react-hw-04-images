import { ButtonLoadMore } from './ButtonStyled'; 
import PropTypes from 'prop-types';


export const Button = ({handleIncrement})=> {

    return (
      <ButtonLoadMore onClick={handleIncrement} type="button">
        Load more
      </ButtonLoadMore>
    );
  }


Button.propTypes = {
  handleIncrement: PropTypes.func.isRequired,
}

