import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const shirts = useLoaderData();
    return (
        <div>
            <h1>Total shirt : {shirts.length}</h1>
        </div>
    );
};

export default Home;