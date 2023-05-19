// import React from 'react';
// import SlideCard from './SlideCard';
// import img1 from '../../asset/1.jpg'
// import img2 from '../../asset/2.jpg'
// import img3 from '../../asset/3.jpg'
// import img4 from '../../asset/4.jpg'
// import img5 from '../../asset/5.jpg'
// import img6 from '../../asset/6.jpg'
// const slideData = () => {
//     const slideData = [
//         {
//             image: img1,
//             prev: 6,
//             id: 1,
//             next: 2
//         },
//         {
//             image: img2,
//             prev: 1,
//             id: 2,
//             next: 3
//         },
//         {
//             image: img3,
//             prev: 2,
//             id: 3,
//             next: 4
//         },
//         {
//             image: img4,
//             prev: 3,
//             id: 4,
//             next: 5
//         },
//         {
//             image: img5,
//             prev: 4,
//             id: 5,
//             next: 6
//         },
//         {
//             image: img6,
//             prev: 5,
//             id: 6,
//             next: 1
//         }
//     ]
//     return (
//         <div>
//             <div className="carousel w-full">
//                 {
//                     slideData.map(slide => <SlideCard key={slide.id} slide={slide}></SlideCard>)
//                 }



//             </div>
//         </div>
//     );
// };

// export default slideData;
import React from 'react';
import img1 from '../../asset/1.jpg'
import img2 from '../../asset/2.jpg'
import img3 from '../../asset/3.jpg'
import img4 from '../../asset/4.jpg'
import img5 from '../../asset/5.jpg'
import img6 from '../../asset/6.jpg'
import SlideCard from './SlideCard';

const Slide = () => {
    const slideData = [
        {
            image: img1,
            prev: 6,
            id: 1,
            next: 2
        },
        {
            image: img2,
            prev: 1,
            id: 2,
            next: 3
        },
        {
            image: img3,
            prev: 2,
            id: 3,
            next: 4
        },
        {
            image: img4,
            prev: 3,
            id: 4,
            next: 5
        },
        {
            image: img5,
            prev: 4,
            id: 5,
            next: 6
        },
        {
            image: img6,
            prev: 5,
            id: 6,
            next: 1
        }
    ]
    return (
        <div className="carousel w-full">
            {
                slideData.map(slide => <SlideCard slide={slide} key={slide.id}></SlideCard>)
            }



        </div>
    );
};

export default Slide;