import { BiSearch } from 'react-icons/bi';
import {
  SearchbarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput
} from './SearchbarStyled';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { useState } from 'react';

export const Searchbar = ({ onSubmit }) => {
  const [request, setRequest] = useState('')


  const handleSubmit = e => {
    e.preventDefault();

    if (request.trim() === '') {
      return toast.error('enter a query');
    }
     onSubmit(request);

    e.currentTarget.elements.request.value = '';
  };

  const handlerChange = e => {
    setRequest(e.target.value.toLowerCase());
  };

  return (
    <SearchbarHeader>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <BiSearch
            style={{
              width: 20,
              height: 20,
              marginTop: 6,
            }}
          />
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        </SearchFormButton>

        <SearchFormInput
          onChange={handlerChange}
          type="text"
          autocomplete="off"
          name="request"
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchbarHeader>
  );
  }


Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,

}


