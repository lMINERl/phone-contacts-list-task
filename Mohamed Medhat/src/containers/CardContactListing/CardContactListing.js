import React from 'react';
import { connect } from 'react-redux';
import CardContact from '../../components/CardContact';

import Error from './Error';
const mapStateToProps = state => {
  return {
    contactList: state.contacts.filteredList
  };
};

// component
const CardContactListing = props => {
  // early return if no contacts available
  if (!props.contactList || !props.contactList.length) {
    return <Error />;
  }

  const List = props.contactList.map(v => {
    return (
      <div className="row" key={v.id}>
        <CardContact data={v} />
      </div>
    );
  });

  return <div className="container-fluid contact-container">{List}</div>;
};

const CardContactListingStore = connect(mapStateToProps)(CardContactListing);

export { CardContactListingStore, CardContactListing };
