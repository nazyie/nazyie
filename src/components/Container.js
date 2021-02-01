import React from 'react'
import './Container.css'

function Container({children, backgroundImage, hrefLink, stylingType, headingText, descriptionText, smallText}){
  return (
    <div className='main-container' style={{ backgroundImage: `url(`+ backgroundImage +`)` }}>
      <div className='sub-container'>
        <h1 className='text-heading'>{headingText}</h1>
        <h3 className='desc'>{descriptionText}</h3>
        <p className='small-text'>{smallText}</p>
        {children}
      </div>
    </div>
  );
}

export default Container;