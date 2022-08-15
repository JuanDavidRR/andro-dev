import React, { useState } from 'react'
import Card from './card';
import Carrousel from './carrousel';

const cardsData = [
    {
      title: 'DESARROLLO A LA MEDIDA:',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non massa lacus. Proin bibendum, nunc in posuere sodales, nulla odio malesuada erat, porta suscipit leo urna in est. Etiam suscipit orci vitae ligula fermentum, eu volutpat nibh volutpat',
      img: '',
    },
    {
      title: 'DE LA MANO CON TIGO: ',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non massa lacus. Proin bibendum, nunc in posuere sodales, nulla odio malesuada erat, porta suscipit leo urna in est. Etiam suscipit orci vitae ligula fermentum, eu volutpat nibh volutpat.`,
      img: '',
    },
    {
      title: 'TE LO PONEMOS FACIL',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non massa lacus. Proin bibendum, nunc in posuere sodales, nulla odio malesuada erat, porta suscipit leo urna in est. Etiam suscipit orci vitae ligula fermentum, eu volutpat nibh volutpat`,
      img: '',
    },
    {
      title: 'TU MEJOR DECISION:',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non massa lacus. Proin bibendum, nunc in posuere sodales, nulla odio malesuada erat, porta suscipit leo urna in est. Etiam suscipit orci vitae ligula fermentum, eu volutpat nibh volutpat`,
      img: '',
    },
    {
      title: 'VARIEDAD DE PRODUCTOS: ',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non massa lacus. Proin bibendum, nunc in posuere sodales, nulla odio malesuada erat, porta suscipit leo urna in est. Etiam suscipit orci vitae ligula fermentum, eu volutpat nibh volutpat',
      img: '',
    },
  ];

const Advantage = () => {
  const [selected, setSelected] = useState(0);
  return (
   <section>
    <div className='container' id='advantage'>
    <Carrousel
        onSlideChange={setSelected}
        className='pt-10 pb-10 h-max lg:px-28 max-w-[1440px]'
        breakpoints={{
          300: {
            slidesPerView: 1.5,
            initialSlide: 2,
          },
          460: {
            slidesPerView: 1.7,
            initialSlide: 2,
          },
          580: {
            slidesPerView: 2,
            initialSlide: 2,
          },
          720: {
            slidesPerView: 2,
            initialSlide: 2,
          },
          800: {
            slidesPerView: 2,
            spaceBetween: 30,
            initialSlide: 2,
          },
          900: {
            slidesPerView: 2.5,
            spaceBetween: 30,
            initialSlide: 2,
          },
          1020: {
            slidesPerView: 3,
            spaceBetween: 0,
            initialSlide: 2,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 10,
            initialSlide: 2,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 1,
            initialSlide: 2,
          },
          1366: {
            slidesPerView: 4.3,
            spaceBetween: 0,
            initialSlide: 2,
          }
        }}
      >
        {cardsData.map((card, i) => {
          const [isLeft, isRight] = [i < selected - 1, i > selected + 1];
          const isFar = isLeft || isRight;

          return (
            <Card
              key={'card-' + i}
              title={card.title}
              description={card.description}
              selected={selected === i}
              far={isFar}
              img={card.img}
              className={`${isLeft && 'lg2:translate-x-16 xl2:translate-x-12'} ${isRight && 'lg2:-translate-x-16 xl2:-translate-x-12'}`}
            />
          );
        })}
      </Carrousel>
       
    </div>
   </section>
  )
}

export default Advantage