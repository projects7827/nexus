import Header from "../app/header"

import "react-multi-carousel/lib/styles.css";
import Carousel from 'react-multi-carousel'
// import { useState } from "react";
import main_data from "../json/main.json"


const Index = () => {
    // let [state,setState]=useState({"main_data"})
    const main_responsiveness = {//carousel responsiveness
        desktop: {
            breakpoint: { max: 2500, min: 1101 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1100, min: 801 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 800, min: 0 },
            items: 2,
        },
    };
    return (<>
        <div className="popup_1">Trained Aesop consultations are available to provide bespoke skin care advise. Book a video consultation</div>
        <div className="popup_2"><div>+</div></div>
        <Header />
        {/*First Container*/}
        <div className="container container1">
            {/* <Image className="image" /> */}
            <div className="container1_inner">
                <div className="heading"></div>
                <div className="subheading"></div>
                <div className="description"></div>
                <button className="button"></button>
            </div>
        </div>
        {/*Container End*/}

        {/*Second Container*/}
        <div className="container container2">

            <div className="container_inner">
                <div className="heading"></div>
                <div className="subheading"></div>
                <div className="description"></div>
                <button className="button"></button>
            </div>

            <Carousel
                responsive={main_responsiveness}
                autoPlay={false}
                autoPlaySpeed={3000}
                showDots={false}
                transitionDuration={0}>
                {main_data["carousel1_data"].map((value, index) => {
                    return <div key={index}>
                        {/* <Image className="carousel_image" /> */}
                        <div className="carousel_heading"></div>
                        <div className="carousel_description"></div>
                    </div>
                })}
            </Carousel>
        </div>
        {/*Container End*/}

        {/*Third Container*/}
        <div className="container container3">

            <div className="container_inner">
                <div className="heading"></div>
                <div className="subheading"></div>
                <div className="description"></div>
                <button className="button"></button>
            </div>

            {/* <Image className="image" /> */}

        </div>
        {/*Container End*/}

        {/*Fourth Container*/}
        <div className="container container4">

            <div className="container_inner">
                <div className="heading"></div>
                <div className="subheading"></div>
                <div className="description"></div>
                <button className="button"></button>
            </div>

            <Carousel
                responsive={main_responsiveness}
                autoPlay={false}
                autoPlaySpeed={3000}
                showDots={false}
                transitionDuration={0}>
                {main_data["carousel2_data"].map((value, index) => {
                    return <div key={index}>
                        {/* <Image className="carousel_image" /> */}
                        <div className="carousel_heading"></div>
                        <div className="carousel_description"></div>
                    </div>
                })}
            </Carousel>
        </div>
        {/*Container End*/}

        {/*Fifth Container*/}
        <div className="container container5">
            {/* <Image className="image" /> */}

            <div className="container_inner">
                <div className="heading"></div>
                <div className="subheading"></div>
                <div className="description"></div>
                <button className="button"></button>
            </div>

        </div>
        {/*Container End*/}



        {/*Sixth Container*/}
        <div className="container container6">

            <div className="container_inner">
                <div className="heading"></div>
                <div className="subheading"></div>
                <div className="description"></div>
                <button className="button"></button>
            </div>


            <Carousel
                responsive={main_responsiveness}
                autoPlay={false}
                autoPlaySpeed={3000}
                showDots={false}
                transitionDuration={0}>
                {main_data["carousel3_data"].map((value, index) => {
                    return <div key={index}>
                        {/* <Image className="carousel_image" /> */}
                        <div className="carousel_heading"></div>
                        <div className="carousel_description"></div>
                    </div>
                })}
            </Carousel>
        </div>
        {/*Container End*/}


        {/*Seventh Container*/}
        <div className="container container7">

            <div className="container_inner">
                <div className="heading"></div>
                <div className="subheading"></div>
                <div className="description"></div>
                <button className="button"></button>
            </div>


            <Carousel
                responsive={main_responsiveness}
                autoPlay={false}
                autoPlaySpeed={3000}
                showDots={false}
                transitionDuration={0}>
                {main_data["carousel4_data"].map((value, index) => {
                    return <div key={index}>
                        {/* <Image className="carousel_image" /> */}
                        <div className="carousel_heading"></div>
                        <div className="carousel_description"></div>
                    </div>
                })}
            </Carousel>
        </div>
        {/*Container End*/}

        {/*Eighth Container*/}
        <div className="container container8">
            <div className="heading"></div>
            <div className="heading2"></div>
        </div>
        {/*Container End*/}
        {/* <Footer /> */}
    </>)
}

export default Index

