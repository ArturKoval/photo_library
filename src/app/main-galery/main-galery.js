import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './main-galery.css';

const MainGalery = ( { galery } ) => (
  galery && (
    <div className="album-wrapper">
      {Object.keys(galery).map(album => (
          <Link to={`album/${album}`} key={album}>
            <div className="album">
              <img className="album__thumbnail" alt="img" src={galery[album][0].thumbnailUrl}/>
              <div className="album__title">{album}</div> 
            </div>
          </Link>
        )
      )}
    </div>
  )
)

MainGalery.propTypes = {
  galery: PropTypes.object.isRequired
};

export default MainGalery;