import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import SingleNews from './SingleNews/SingleNews';

const Catagory = () => {
    const catagoryNews = useLoaderData()
   
    return (
        <div>
            <h2>News Found {catagoryNews.length}</h2>
            {
                catagoryNews.map(catagory=><SingleNews key={catagory._id} catagory ={catagory} />)
            }
        </div>
    );
};

export default Catagory;