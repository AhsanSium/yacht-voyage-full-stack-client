import React, { useEffect, useState } from 'react';
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "../hero/TwoColumnWithInput";
import Features from "../features/ThreeColSimple.js";
import MainFeature from "../features/TwoColSingleFeatureWithStats.js";
import SliderCard from "../cards/ThreeColSlider.js";
import TrendingCard from "../cards/TwoTrendingPreviewCardsWithImage.js";
import Blog from "../blogs/PopularAndRecentBlogPosts.js";
import Testimonial from "../testimonials/TwoColumnWithImageAndProfilePictureReview.js";
import FAQ from "../faqs/SimpleWithSideImage.js";
import SubscribeNewsLetterForm from "../forms/SimpleSubscribeNewsletter.js";
import Footer from "../footers/MiniCenteredFooter.js";
import  axios from 'axios';
import ThreeColSimpleWithImageAndDashedBorder from 'Components/blogs/ThreeColSimpleWithImageAndDashedBorder';
import ThreeColumnWithProfileImage from 'Components/testimonials/ThreeColumnWithProfileImage';

function Home2() {

    const [yacht, setYacht] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
        // setYacht({loading:true})
        setLoading(true);

        const result = await axios(
            'https://quiet-journey-44427.herokuapp.com/yachts',
            );
            
            setYacht(result&&result.data);
            // console.log(result&&result.data);
            setLoading(false);
        };
        
        fetchData();
    }, [setYacht]);

    return (
        <div>
            <AnimationRevealPage>
            <Hero />
            <Features />
            <ThreeColSimpleWithImageAndDashedBorder data={yacht} loading={loading} />
            <SliderCard data={yacht} loading={loading} />
            <MainFeature />
            <ThreeColumnWithProfileImage loading={loading} setLoading={setLoading}/>
            <Blog />
            <Testimonial textOnLeft={true}/>
            <FAQ />
            <SubscribeNewsLetterForm />
            <Footer />
        </AnimationRevealPage>
        </div>
    )
}

export default Home2
