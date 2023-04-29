import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [catagorys, setCatagorys] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/catagory')
            .then(res => res.json())
            .then(data => setCatagorys(data))
    }, [])
    return (
        <>
            <div className='mt-4'>
                {
                    catagorys.map(catagory => <p className='ps-3 bg-light py-2' key={catagory.id}><Link to={`catagory/${catagory.id}`} className='text-decoration-none text-muted '>{catagory.name}</Link></p>)
                }
            </div>
        </>
    );
};

export default LeftNav;