import React from 'react';
import useTitle from '../Hooks';
import About from './About/About';
import Banner from './Banner/Banner';
import Card from './Card/Card';


const Home = () => {
    useTitle('Home')
    return (
        <div>
        <Banner></Banner>
        <Card></Card>
		<About></About>


        </div>
    );
};

export default Home;