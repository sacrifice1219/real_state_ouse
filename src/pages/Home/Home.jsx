import React from 'react';
import "./Home.css";
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import Featured from '../../components/featured/Featured';
import PropertyList from '../../components/propertylist/PropertyList';
import FeaturedProperties from '../../components/featuredProperties/featuredProperties';
import MailList from '../../components/MailList/MailList';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div> 
        <Navbar/>
        <Header/>
        <div className="homeContainer">
          <Featured />
          <h1 className="homeTitle">Browse by property type</h1>
          <PropertyList />
          <h1 className="homeTitle">Homes guests love</h1>
          <FeaturedProperties /> 
          <MailList />
          <Footer />
        </div>
     </div>
  )
}

export default Home;