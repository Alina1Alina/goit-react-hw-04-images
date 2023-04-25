import { createPortal } from 'react-dom';
import { Overlay, ModalW } from './ModalStyled';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

const modalRoot = document.querySelector('#modal-root');


export const Modal = ({largeImageURL, user, onClose })=> {

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleBackDropClick = e => {
    const backDrop = e.currentTarget;
    const modal = e.target;

    if (backDrop === modal) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackDropClick}>
      <ModalW>
        <img src={largeImageURL} alt={user} />
      </ModalW>
    </Overlay>,
    modalRoot
  );
  }

  Modal.propTypes = {
    largeImageURL: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired
  };