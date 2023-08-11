import React from 'react';
import { Link } from 'react-router-dom';
import footerImg from '../../../assets/images/footer.png';
const Footer = () => {
    return (
       
            <div className='p-24'  style={{ backgroundImage: `url(${footerImg})` }}>
                <div className='flex justify-between'>
                    <div>
                        <h4 className='text-2xl mb-2'>SERVICES</h4>
                        <Link>Emergency Checkup</Link> <br/>
                        <Link>Monthly Checkup</Link> <br/>
                        <Link >Weekly Checkup</Link> <br/>
                        <Link>Deep Checkup</Link> <br/>
                    </div>
                    <div>
                         <h4 className='text-2xl mb-2'>ORAL HEALTH</h4>
                        <Link>Fluoride Treatment</Link> <br/>
                        <Link>Cavity Filling</Link> <br/>
                        <Link >Teath Whitening</Link> <br/>
                        
                    </div>
                    <div>
                        <h4 className='text-2xl mb-2'>OUR ADDRESS</h4>
                        <p>New York - 101010 Hudson</p>
                    </div>
                </div>
                <div className='mt-24 text-center'>
                    <p>Copyright 2022 All Rights Reserved</p>
                </div>
            </div>
        
    );
};

export default Footer;