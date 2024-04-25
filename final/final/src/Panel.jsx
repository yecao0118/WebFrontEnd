function Panel({
  className,
  title,
  text,
  images,
  imageTexts
}) {
  return (
    <div className={className}>
      <div className={`${className}-text-container`}>
        <h3 className={`${className}-title`}>{title}</h3>
        <p className={`${className}-text`}>{text}</p>
      </div>
      <div className={`${className}-image-container`}>
        {images.map((img, index) => (
          <div key={index} className={`${className}-item`}>
            <img className={`${className}-image`} src={img.src} alt={img.alt} />
            <p className={`${className}-image-text`}>{imageTexts[index]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Panel;

