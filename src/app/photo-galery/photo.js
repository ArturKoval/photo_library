import React from 'react';
import { useParams, useLocation, useHistory } from 'react-router-dom';
import './photo.css';

const Photo = ( { galery } ) => {
  const { id } = useParams();
  let history = useHistory();
  let galeryId = new URLSearchParams(useLocation().search).get("galery");

  const getImage = () => {
    return galery[galeryId].find(item => item.id === Number(id)).url;
  }

  const back = e => {
    e.stopPropagation();
    history.goBack();
  };

  return (
    <div className="img-presentation-container" onClick={back}>
      <img className="img-presentation" alt="img" src={getImage()}/>
    </div>
  )
}

export default Photo;