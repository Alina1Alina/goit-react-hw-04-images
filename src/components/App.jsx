
import { ToastContainer } from 'react-toastify';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { AppContainer } from './AppStyled';

import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

export const App = ()=> {
  const [request, setRequest] = useState('');

  const handlerSearchbarSubmit = request => {
    setRequest( request );
  };

  return (
      <AppContainer>
        <Searchbar onSubmit={handlerSearchbarSubmit} />
        <ImageGallery propRequest={request} />
        <ToastContainer autoClose={3000} styled />
      </AppContainer>
    );
  }
