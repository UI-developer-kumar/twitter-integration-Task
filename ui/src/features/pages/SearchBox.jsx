import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setQuery } from '../user/searchSlice';
import SuggestionList from '../pages/SuggetionList';
import { IoIosSearch } from 'react-icons/io';


const SearchBox = () => {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.search.query);

  const handleChange = (e) => {
    dispatch(setQuery(e.target.value));
  };

  return (
    <div className="search-container">
      
      <div className='field-flex'>
        <div className='search-icon'>
            <IoIosSearch />
        </div>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search for names or hashtags..."
      />
      </div>
      <SuggestionList />
    </div>
  );
};

export default SearchBox;