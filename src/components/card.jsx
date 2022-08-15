import { MdCodeOff } from "react-icons/md";

export const Card = ({ title, description, selected, far, className, img }) => (
  <div
    className={`
      card-advantage
        ${selected ? 'card-selected' : far ? 'card-far' : 'card-near'}
        ${className}
    `}
  >
    <div className='flex flex-grow flex-shrink-0 items-center justify-center'>
      <MdCodeOff size={50} />
    </div>
    <div className='card-items'>
      <h2
        className={`card-title
        ${selected ? 'lg:text-xl' : far ? 'lg:text-lg' : 'lg:text-lg'}`}
      >
        {title}
      </h2>
      <p className='card-description'>{description}</p>
    </div>
  </div>
);

export default Card;
