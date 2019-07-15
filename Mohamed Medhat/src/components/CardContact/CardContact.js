import React from 'react';
import Proptype from 'prop-types';

const CardContact = props => {
  let imgObj = null;

  try {
    imgObj = require(`../../assets/${props.data.img || 'profile-img.jpg'}`);
  } catch {
    imgObj = require(`../../assets/profile-img.jpg`);
  }

  return (
    <React.Fragment>
      <div className="col-md-12 d-flex pt-4 contact-card">
        <div className="contact-img-container">
          <img src={imgObj} className="w-100 contact-img" alt="profile img" />
        </div>
        <div className="pl-4 w-100 contact-name">
          {props.data.name}
          <div className="contact-job">{props.data.job}</div>
        </div>
      </div>
      <hr className="w-100" />
    </React.Fragment>
  );
};

CardContact.proptype = {
  data: Proptype.shape({
    _id: Proptype.string.isRequired,
    name: Proptype.string.isRequired,
    job: Proptype.number.isRequired,
    img: Proptype.string
  }).isRequired
};

CardContact.defaultProps = {
  data: {
    img: ''
  }
};

export default CardContact;
