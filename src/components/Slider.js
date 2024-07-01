import React ,{useState,useEffect}from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideImages = [
      { id: 1, name: "https://i.pinimg.com/564x/86/d8/92/86d892111495b7bf8a435d6a50025032.jpg" },
      { id: 2, name: "https://www.spareparts.live/wp-content/uploads/lagers-1024x469.jpg" },
      { id: 3, name: "https://www.garicambi.com/wp-content/themes/garicambi/img/parts.png" },
    //   { id: 4, name: 'https://www.timeshighereducation.com/student/sites/default/files/istock-499343530.jpg' },
    //   { id: 5, name: img5 },
    //   { id: 6, name: img6 },
    ];
  
    const nextSlide = () => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slideImages.length - 1 ? 0 : prevSlide + 1
      );
    };
  
    const prevSlide = () => {
      setCurrentSlide((prevSlide) =>
        prevSlide === 0 ? slideImages.length - 1 : prevSlide - 1
      );
    };
    useEffect(() => {
      const slideInterval = setInterval(nextSlide, 3000);
      return () => clearInterval(slideInterval);
    }, []);
  return (
    <div className='bg-slate-100 py-10  h-[80vh]'>
    <div className=' w-full h-[100%]  relative  overflow-y-hidden overflow-hidden  container mx-auto'>
    <div className='transition ease-out duration-40 '
    //  style={{
    //     transform: `translateX(-${currentSlide *100 }%)`
    // }}
    >
      <img src={slideImages[currentSlide].name} alt='' className=' w-full h-full object-fit' />
    </div>
    <div className='top-0 absolute flex items-center justify-between h-full w-full text-orange-600 px-3 md:px-5 text-2xl'>
      <button onClick={prevSlide} className='bg-orange-100 rounded-full p-1 font-bold'>
      <IoIosArrowBack />
     
      </button>
      <button onClick={nextSlide} className='bg-orange-100 rounded-full p-1 font-bold'>
        <IoIosArrowForward />
      </button>
    </div>

    <div className='bottom-0 absolute py-4 flex justify-center left-[45%]  gap-3'>
        {slideImages.map((s,i) =>(
            <div key={i} className={`rounded-full h-2 w-2  ${i == currentSlide ? "bg-orange-600": "bg-orange-200"}`}></div>
        ))}
        
    </div>
  </div>
  </div>
  )
}

export default Slider
