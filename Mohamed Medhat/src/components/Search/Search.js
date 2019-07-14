import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getContactsByName } from '../../store/actions/ContactActions';
import Proptype from 'prop-types';

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getContactsByName }, dispatch);

const Search = props => {
  return (
    <div className="container-fluid">
      <div className="p-3 row d-flex search-container">
        <div className="col-md-4">
          <i className="fa fa-bars menu"></i>
        </div>
        <div className="col-md-4 text-center search-title">Contact List</div>
        <div className="col-md-4 "></div>
        <div className="mt-5 w-100 d-flex justify-content-center">
          <div>
            <i className="position-relative fa fa-search search-icon"></i>
            <input
              placeholder="Search Contacts"
              onChange={e => props.getContactsByName(e.target.value)}
              className="search-input"
            />
          </div>
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
