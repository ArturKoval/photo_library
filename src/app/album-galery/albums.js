import React from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';

const Albums = ({ galery }) => {
  const { id } = useParams();

  return (
    <div className="album-wrapper">
      {galery[id].map((photo, i) => (
        <Link to={`/photo/${photo.id}?galery=${id}`} key={i}>
          <div className="album" >
            <img src={photo.url} alt="img" className="album__thumbnail" />
            <div className="album__title">{photo.title}</div> 
          </div>
        </Link>
      ))}
    </div>
  )
}


Albums.propTypes = {
  galery: PropTypes.object.isRequired
};

export default Albums;