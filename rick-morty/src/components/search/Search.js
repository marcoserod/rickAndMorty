import React, { useState, useEffect, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import URLHelper from '../../helpers/URLHelper';
import { useHistory, withRouter, useLocation, Link } from 'react-router-dom';

const Search = (props) => {
  const [inputSearch, setInputSearch] = useState('');
  const [formOk, setFormOk] = useState(false);
  const history = useHistory();
  const status = '';
  const gender = '';
  const location = useLocation();

  const handleInputSearch = (e) => {
    setInputSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/search?${urlGenerator(status, gender, inputSearch)}&page=1`);
    setInputSearch('');
    // if (history.location.pathname === '/search'){
    //     window.location.reload();
    // }
  };

  const urlGenerator = () => {
    const istatus = status ? `status=${status}` : 'status=';
    const igender = gender ? `gender=${gender}` : 'gender=';
    const iname = inputSearch ? `name=${inputSearch}` : 'name=';

    const generatedURL = istatus + '&' + igender + '&' + iname;
    return generatedURL;
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)} className="custom-search">
        <input
          value={inputSearch}
          type="text"
          placeholder="Search..."
          onChange={(e) => handleInputSearch(e)}
        ></input>
        <button type="submit">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
    </>
  );
};

export default Search;
