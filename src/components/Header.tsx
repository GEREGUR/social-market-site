import Hamburger from './Hamburger';
// import {Slider}  from './Slider';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { Cart } from './Cart';
import Filter from './Filter';
import { Pagination } from '@mui/material';





const header = () => {
    return (
        <div className='rounded-sm content-center bg-white mx-5'>
            
            <div className="w-full">
                <Hamburger></Hamburger>
                <img src="/src/images/sm logo.svg" alt="SM logo" className='h-8 w-18 cursor-pointer mt-10'/>
            </div>
            {/* <Slider></Slider> */}
            <Hero></Hero>
            <Filter></Filter>
            <Cart></Cart>
            <div className='my-5 flex justify-center w-full'>
                <Pagination/>
            </div>
            <Footer></Footer>

            {/* <div className="w-full inline-flex flex-nowrap">
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none">
                    <li>
                        <img src="./images/#2mansion.svg" alt="Mansion" />
                    </li>
                     <li>
                        <img src="./images/#10undermind.svg" alt="Undermind" />
                    </li>
                    <li>
                        <img src="./images/#3kritika.svg" alt="Kritika" />
                    </li>
                    <li>
                        <img src="./images/#7ayne.svg" alt="Ayne" />
                    </li>
                    <li>
                        <img src="./images/#8junky-snax.svg" alt="junky-snax" />
                    </li>
                    <li>
                        <img src="./images/#8stain.svg" alt="Stain" />
                    </li>
                </ul>
            </div> */}
            
        </div>
    );
};

export default header;