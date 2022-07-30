import React from 'react';
import Header from './Header/Header';
import "./Hero.css"
import Hero_Img from "../assets/hero_image.png"
import Hero_image_back from "../assets/hero_image_back.png"
import Heart from "../assets/heart.png"
import Calories from "../assets/calories.png"


const Hero = () => {
    return (
        <div className='hero'>
            <div className='left-h'>
                <Header></Header>
                {/* The best ad... */}
                <div className='the-best-ad'>
                    <div>

                    </div>
                    <span>
                        The best  fitness club in the town
                    </span>
                </div>
                {/* Hero Heading */}
                <div className="hero-text">

                    <div>
                        <span className='stroke-text'> Shape</span>
                        <span> Your </span>
                    </div>
                    <div>
                        <span>
                            Ideal body
                        </span>
                    </div>
                    <div >
                        <span> In here we will help you to shape and build your ideal body and live up your life to fullest</span>
                    </div>

                </div>

                {/* figures */}

                <div className='figures'>
                    <div>
                        <span>
                            +140
                        </span>
                        <span>
                            expert coaches
                        </span>
                    </div>
                    <div>
                        <span>
                            +978
                        </span>
                        <span>
                            members joined
                        </span>
                    </div>
                    <div>
                        <span>
                            +50
                        </span>
                        <span>
                            fitness programs
                        </span>
                    </div>
                </div>
                {/* Hero button */}
                <div className="hero-button">
                    <buttons className="btn">Get Started</buttons>
                    <buttons className="btn">Learn More</buttons>
                </div>
            </div>
            <div className='right-h'>
                <button className='btn'>Join Now</button>


                <div className="heart-rate">
                    <img src={Heart} alt="" />

                    <span>Heart Rate</span> <span>117 bpm</span>
                </div>


                {/* Hero Image */}

                <div>
                    <img src={Hero_Img} className="hero-image" alt="" />
                    <img src={Hero_image_back} className="hero-image-back" alt="" />

                    {/* calories */}

                    <div className='calories'>
                        <img src={Calories} alt="" />
                        <div>
                            <span>Calories Burned</span>
                            <span>221 kcl</span>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Hero;