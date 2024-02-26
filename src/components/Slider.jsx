import React from 'react'

import './slider.css'

const Slider = () => {
    const data = [
        {
            id: 1,
            title: 'Title-1'
        },
        {
            id: 2,
            title: 'Title-2'
        },
        {
            id: 3,
            title: 'Title-3'
        },
        {
            id: 4,
            title: 'Title-4'
        },
        {
            id: 5,
            title: 'Title-5'
        },
        {
            id: 6,
            title: 'Title-6'
        },
        {
            id: 7,
            title: 'Title-7'
        },
        {
            id: 8,
            title: 'Title-8'
        },
        {
            id: 9,
            title: 'Title-9'
        },
        {
            id: 10,
            title: 'Title-10'
        }
    ]
    const slideRef = React.useRef()
    const containerRef = React.useRef()
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0: prevIndex + 1));
        containerRef.current.style.transform = `translateX(-${currentIndex * (100/ data.length + 2)}rem )`
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
        containerRef.current.style.transform = `translateX(-${currentIndex * (100 / data.length + 2)}rem )`
    };

    console.log(currentIndex)
  return (
      <>
          <div className='contain'>
              <button onClick={handleNext}>Next</button>
          <div className='slider-cont'>
              <ul ref={ containerRef } className='slider-contianer'
                  style={ { width: `${data.length * 100}%`, transform: `translate(${currentIndex})` } }
              >
          { data?.map((props) => (
              <li ref={ slideRef } className={ `slider-card` } key={ props?.id }
                //   style={ { width: `${100 / data.length}%` } }
              >
                  <div className='img'>
                  <img src={`https://via.placeholder.com/150?text=${props.title}`} alt={props.title} />
                    </div>
                    <div>{ props?.title}</div>
                </li>
          )) }
          </ul>
        </div>
              <button onClick={handlePrev}>Previous</button>
          </div>
      </>
  )
}

export default Slider