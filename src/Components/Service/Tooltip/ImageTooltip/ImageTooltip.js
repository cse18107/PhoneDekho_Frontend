import React from 'react';
import './ImageTooltip.css';

const ImageTooltip = (props) => {
    const { src,alt,name } = props;
    return (
      <div class="image-tooltip">
        {props.children}
        <span class="image-tooltiptext"><img className='tooltipImage' src={src} alt={alt}/><p>{name}</p></span>
      </div>
    );
}

export default ImageTooltip