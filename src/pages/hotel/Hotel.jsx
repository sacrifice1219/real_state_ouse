import React, { useState } from 'react';
import "./Hotel.css"
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import MailList from '../../components/MailList/MailList';
import Footer from '../../components/Footer/Footer';

const Hotel = () => {

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/13125860.jpg?k=b5f4783a8a6ecf84738e080755acfebf943253d71f4458fbe2510a356cf3d8c8&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/403985858.jpg?k=9d07336797a8e03c62832e9666892de67abb124f53e10c1ceee1fc4a61083bb6&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/403985859.jpg?k=57573f2d62c70fff26480b81e074b7e1708153d365a31d7b6298f02c3a39e525&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/115650468.jpg?k=8f518825484355b05b2068915c4e27699a81d73e4523e616c3f2f001cbc79f92&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/13125860.jpg?k=b5f4783a8a6ecf84738e080755acfebf943253d71f4458fbe2510a356cf3d8c8&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/153938495.jpg?k=1540b28b6c3a2a789c4c216f3317640125e2d85aaa71502ba8bcb926ea5025ad&o=&hp=1"
    }
  ]

  const handleOpen = (i) =>{
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) =>{
    let newSlideNumber;

    if (direction === "l"){
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber-1;
    } else{
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber+1;
    }

    setSlideNumber(newSlideNumber)
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
       { open &&( <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} className='close' onClick={()=>setOpen(false)} />
          <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow' onClick={()=>handleMove("l")}/>
          <div className="sliderWrapper">
            <img src={photos[slideNumber].src} alt="" className="sliderImg" />
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className='arrow' onClick={()=>handleMove("r")}/>
        </div>)}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New York</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) =>(
              <div className="hotelImgWrapper">
                <img onClick={()=> handleOpen(i)} src={photo.src} alt='' className='hotelImg' />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of Krakov</h1>
              <p className="hotelDesc">
                Located a 5-minutes walk from st. florian's Gate in krakov, tower street apartments has accomodations with air conditioning and free wifi. the units come with the hardwood floors and feature a fully equipped kitchette with a microwave, a flat-screen TV, also offered, as well as an electric tea pot and a coffee machine. Popular points of interest near the apartment include cloth hall, main market sqaure and town hall tower. The nearest airport is john paul II International Krakov-Balice, 16.1 km from tower street apartments, and the property offers a paid airport shuttle service.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an excellent location score of 9.8!
              </span>
              <h2><b> $945</b> (9 nights)</h2>
              <button> Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  )
}

export default Hotel