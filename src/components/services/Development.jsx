import React from 'react'

const Development = ({title, image, description}) => {
  return (
    <article className='service-container'>
        <section>
            <h3>{title}</h3>
            <p>{description}</p>
            <img src={image} alt={title} />

        </section>
        <section>
            <p>All custom content</p>
        </section>
    </article>
  )
}

export default Development