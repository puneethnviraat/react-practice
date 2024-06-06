import React, { useState } from 'react';
import { useEffect } from 'react';
import './styles.css';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';

const ImageSlider = ({ url, limit }) => {
  const [images, setImages] = useState('');
  const [currentSlider, setCurrentSlider] = useState(2);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMesssage] = useState('');

  const getImages = async (url, limit) => {
    try {
      setLoading(true);
      const response = await fetch(`${url}&limit=${limit}`);
      const data = await response.json();
      setImages(data);
      setLoading(false);
    } catch (error) {
      setErrorMesssage(error.message);
      setLoading(false);
    }
  };
  const handlePrevious = () => {
    setCurrentSlider(
      currentSlider === 0 ? images.length - 1 : currentSlider - 1
    );
  };

  const handleNext = () => {
    setCurrentSlider(
      currentSlider === images.length - 1 ? 0 : currentSlider + 1
    );
  };

  useEffect(() => {
    if (url !== '') getImages(url, limit);
  }, [url]);

  if (loading) {
    return (
      <div>
        <h4>Loading the images, Please wait...</h4>
      </div>
    );
  }
  if (errorMessage) {
    return (
      <div>
        <h4>Error occured, try again later</h4>
      </div>
    );
  }
  return (
    <div className="container">
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className="arrow arrow-left"
      />
      {images && images.length
        ? images.map((imageItem, index) => (
            <img
              key={imageItem.id}
              alt={imageItem.download_url}
              src={imageItem.download_url}
              className={
                currentSlider === index
                  ? 'current-image'
                  : 'current-image hide-current-image'
              }
            />
          ))
        : null}

      <BsArrowRightCircleFill
        onClick={handleNext}
        className="arrow arrow-right"
      />
      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => (
              <button
                onClick={() => setCurrentSlider(index)}
                key={index}
                className={
                  currentSlider === index
                    ? 'current-indicator'
                    : 'current-indicator inactive-indicator'
                }
              ></button>
            ))
          : null}
      </span>
    </div>
  );
};

export default ImageSlider;
