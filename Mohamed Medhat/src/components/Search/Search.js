import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getContactsByName } from '../../store/actions/ContactActions';
import Proptype from 'prop-types';

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getContactsByName }, dispatch);

const Search = props => {
  const [searchText, setSearchText] = useState('');
  return (
    <div className="container-fluid">
      <div className="p-3 row d-flex search-container">
        <div className="col-md-4">
          <i className="fa fa-bars menu"></i>
        </div>
        <div className="col-md-4 text-center search-title">Contact List</div>
        <div className="col-12 d-flex justify-content-center mt-3">
          <div className="col-2"></div>
          <div className="col-8 d-flex justify-content-center">
            <i
              style={{ visibility: searchText.length ? 'hidden' : 'visible' }}
              className="position-relative fa fa-search search-icon"
            ></i>
            <input
              type="text"
              placeholder="Search Contacts"
              onChange={e => {
                setSearchText(e.target.value);
                props.getContactsByName(e.target.value);
              }}
              className="search-input"
              value={searchText || ''}
            />
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    </div>
  );
};

Search.prototype = {
  getContactsByName: Proptype.func.isRequired
};

Search.defaultProps = {
  getContactsByName: () =>
    console.error('function cant retrive data from contacts state')
};

const SearchStore = connect(
  null,
  mapDispatchToProps
)(Search);
export { SearchStore, Search, getContactsByName };
