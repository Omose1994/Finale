import React, { Component } from 'react';
import About from '../component/About';
import Ebook from '../component/Ebook';
import Footer from '../component/Footer';
import Testimonial from '../component/Testimonial';
import TopBanner from '../component/Topbanner';
import TopNav from '../component/TopNav';

class Home extends Component {
    state = {  }
    render() { 
        return ( 
        <>
            <TopNav/>
            <TopBanner/>
            <About/>
            <h2 style={{textAlign: 'center'}}>See our book collections</h2>
            <Ebook/>
            <Testimonial/>
            <Footer/>
        </> );
    }
}
 
export default Home;