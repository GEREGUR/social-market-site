// import Hamburger from './Hamburger';
// import { Footer } from './Footer';
// import { Hero } from './Hero';
// import { Cart } from './Cart-grid';
// import Filter from './Filter';
// import { Slider } from './Slider';
// import Pagination from './Paginagion';
// import { useState } from 'react';

// const header = () => {
//     const YourComponent: React.FC = () => {
//         const [currentPage, setCurrentPage] = useState(1);
      
//         const handlePageChange = (page: number) => {
//           setCurrentPage(page);
//           // Fetch or update data based on the new page
//         };
    
//     return (
//         <div className='rounded-sm content-center bg-white'>
            
//             <div className="w-full">
//                 <Hamburger onClick={open}></Hamburger>
//                 <img src="/src/images/sm logo.svg" alt="SM logo" className='h-8 w-18 cursor-pointer mt-10 ml-10'/>
//             </div>
//             <Slider></Slider>
//             <Hero></Hero>
//             <Filter></Filter>
//             <Cart></Cart>
//             <div className='my-5 flex justify-center w-full'>
//                 <Pagination totalItems={50} itemsPerPage={10} currentPage={1} onPageChange={handlePageChange}/>
                
//             </div>
//             <Footer></Footer>            
//         </div>
//     );
// };
// }
// export default header;


import React, { useState } from 'react';
import Hamburger from './Hamburger';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { Cart } from './Cart-grid';
import Filter from './Filter';
import { Slider } from './Slider';// Assuming Slider is a default export from './Slider'
import Pagination from './Paginagion';

const YourComponent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Fetch or update data based on the new page
  };

  return (
    <div className='rounded-sm content-center bg-white'>
      <div className="w-full">
        <Hamburger onClick={() => {/* Define your logic here */}} />
        <img src="/src/images/sm logo.svg" alt="SM logo" className='h-8 w-18 cursor-pointer mt-10 ml-10'/>
      </div>
      <Slider></Slider>
      <Hero />
      <Filter />
      <Cart />
      <div className='my-5 flex justify-center w-full'>
        <Pagination totalItems={50} itemsPerPage={10} currentPage={currentPage} onPageChange={handlePageChange} />
      </div>
      <Footer />
    </div>
  );
};

export default YourComponent;
