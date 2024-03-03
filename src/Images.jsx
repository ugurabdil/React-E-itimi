import React from 'react'

function Images({imagess}) {
 const { id, title, description,price,link,image }=imagess;
  return (
    <div className='image'>
          <img src={image} width={250} height={400}/>
          <h4 className='title'>{title}</h4>
          <h5 className='desc'>{description}</h5>
          <h3 className='price'>{price} </h3>
          <div className='link'><a  href={link}>Satın Almak İçin</a></div>
    </div>
  )
}

export default Images
