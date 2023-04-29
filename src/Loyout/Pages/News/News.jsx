import { Button } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const News = () => {
    const news = useLoaderData()
    const {image_url,title,details,category_id} = news
    return (
        <div style={{border:'1px solid #ccc'}} className='p-3'>
            <img className='w-100' src={image_url} alt="" />
            <h4 className='my-3'>{title}</h4>
            <p className='text-muted'>{details}</p>
            <Link to={`/catagory/${category_id}`}><Button variant='danger'><FaArrowLeft/> All News in this Catagorys</Button></Link>
        </div>
    );
};

export default News;