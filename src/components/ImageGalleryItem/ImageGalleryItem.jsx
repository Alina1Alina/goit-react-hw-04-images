import { ItemsGallery, ImageItems } from './ItemsStyled';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({card, handleItemClick })=> {
  
    const { webformatURL, largeImageURL, user } = card;
    return (
      <ItemsGallery
        onClick={() => handleItemClick({ largeImageURL, user })}
      >
        <ImageItems src={webformatURL} alt={user} />
      </ItemsGallery>
    );
  }


ImageGalleryItem.propTypes = {
  card: PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      user: PropTypes.string.isRequired,
    }).isRequired,
    handleItemClick: PropTypes.func.isRequired,

}


