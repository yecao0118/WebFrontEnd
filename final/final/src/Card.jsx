import './Card.css';
import Button from './Button';

function Card({ 
    className, onReadMore, onNavigate,
    title, pic,
    alt, text, linkText,
 }) {
  return (
    <div className={className}>
        <h3 className={`${className}-title`}>{title}</h3>
        <img className={`${className}-pic`}
        src={pic} 
        alt={alt} />
      <p className={`${className}-text`}>{text}</p>
      <Button
        className={`${className}-link`}
        onClick={() => {
          if (onNavigate) {
            onNavigate();
          } else if (onReadMore) {
            onReadMore();
          }
        }}
        type="button"
        visual="link"
      >
        {linkText}
      </Button>
    </div>
  );
}

export default Card;