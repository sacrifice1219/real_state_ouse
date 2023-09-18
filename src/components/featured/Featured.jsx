import React from 'react';
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&0=" alt="" />
            <div className="featuredTitles">
                <h1>Dublin</h1>
                <h2>123 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/600x600/684500.jpg?k=df54bcea224564a0a00497a2076d5338316a0b56692498eddb3c02c9a6cdde64&o=" alt="" />
            <div className="featuredTitles">
                <h1>Austin</h1>
                <h2>532 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/600x600/976952.jpg?k=4c536b3833e5f6721ff5f89fa4f15d8f50fd5cd4a963060414078428aa67a6d5&o=" alt="" />
            <div className="featuredTitles">
                <h1>Reno</h1>
                <h2>533 properties</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured;