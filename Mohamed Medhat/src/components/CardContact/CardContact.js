import React from 'react';
import Proptype from 'prop-types';

const CardContact = props => {
  return (
    <React.Fragment>
      <div className="col-md-12 d-flex pt-2 card-contact">
        <div className="w-25">
          <img
            src={require(`../../assets/${props.data.img || 'profile-img.jpg'}`)}
            className="w-100"
            alt="profile img"
            style={{ borderRadius: `50%` }}
          />
        </div>
        <div className="w-100 pl-2">
          {props.data.name}
          <div className="">{props.data.job}</div>
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
