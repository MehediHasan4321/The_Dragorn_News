import moment from 'moment';
import React, { useState } from 'react';
import { FaBookmark, FaShare, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SingleNews = ({catagory}) => {
  const [star,setStar] = useState(<span className='text-warning'> <FaStar/> </span>)
    const {image_url,title,author,thumbnail_url,rating,total_view,_id,details} = catagory
    return (
        <div className=' mt-4 bg-light p-2 '>
            <div style={{backgroundColor:'#ccc'}} className='d-flex px-3 justify-content-between'>
                <div className='d-flex align-items-center gap-2'>
                    <img style={{height:'40px',borderRadius:'50%'}} src={author.img} alt="" />
                    <div>
                        <h6>{author.name? author.name : 'name found'}</h6>
                        <small> {moment(author.published_date).format('yyyy,m,dddd')}</small>
                    </div>
                </div>
                <div className='d-flex align-items-center gap-2'>
                    <FaBookmark/>
                    <FaShare/>
                </div>
            </div>
            <h4 className='mt-3'>{title}</h4>
            <img className='w-100 my-4' src={image_url} alt="" />
            <p>{details.slice(0,200)} <Link className='text-warning' to={`/news/${_id}`}>Read More</Link></p>
            <hr />
            <div className='d-flex justify-content-between px-3 align-items-center'>
                <p>{star} {rating.number}</p>
                <p>{total_view}</p>
            </div>
        </div>
    );
};

export default SingleNews;