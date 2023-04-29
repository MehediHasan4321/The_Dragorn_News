import React from 'react';
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'
import banner from '../../../assets/bg.png'

const Qzone = () => {
    return (
        <>
            <div className='my-4 bg-light px-3'>
                <h4>Qzone</h4>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />

            </div>
            <img src={banner} alt="" />
        </>
    );
};

export default Qzone;