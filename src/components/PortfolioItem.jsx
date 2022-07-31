import React from 'react'

const PortfolioItem = ({title, img, description, link, id}) => {
  return (
    <li>
        <div className="product container">
            <div className="product-browser">
                <div className="product-circle"></div>
                <div className="product-circle"></div>
                <div className="product-circle"></div>
            </div>

            <a href={link} target="_blank" rel="noreferrer">
            <img className="product-image" src={img} alt={title}/>
            </a>
           
           </div>
    </li>
  )
}

export default PortfolioItem