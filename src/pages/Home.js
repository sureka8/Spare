import React from 'react'
import Slider from '../components/Slider'
import Tensimonial from '../components/Tensimonial'


const Home = () => {
  const product = [
    {id:1 ,name:'Fuel Filter Water Level Sensor For Truck',price:'3',img:'https://s.alicdn.com/@sc04/kf/H311454140e114ecaaaad9860e3d3d9e8P.png_300x300.jpg'},
    {id:2,name:'Water Level Sensor Bowl For Truck',price:'5',img:'https://s.alicdn.com/@sc04/kf/Hf9cfd8cd3bc54ed494af274fa4e99a56s.png_300x300.jpg'},
    {id:3,name:'Bobina de encendido para',price:'8',img:'https://s.alicdn.com/@sc04/kf/He8fb42f34ba44afba51d0e79a2f766dfJ.jpg_300x300.jpg'},
    {id:4,name:'Headlight Bulb H4 Led Bulbs',price:'2',img:'https://s.alicdn.com/@sc04/kf/S35ef5649adb04101a5169a5e84940adav.jpg_300x300.jpg'},
    {id:5,name:' Front Axle Disc Brake Pads',price:'5',img:'https://s.alicdn.com/@sc04/kf/H7f3a20dfd63943899226d083fbfaddec2.jpg_300x300.jpg'},
    {id:6,name:' Wheel Hub Bearing Supplier',price:'4',img:'https://s.alicdn.com/@sc04/kf/H8444341ac54c4fbbb1c4fd3f82585a054.jpg_300x300.jpg'},
    {id:7,name:' Body Kit Upgrade',price:'60',img:'https://s.alicdn.com/@sc04/kf/H8a17deb6d49a4f969e481693aa65a8e7q.png_300x300.jpg'},
    {id:8,name:'Flange Plates Car Auto Parts ',price:'10',img:'https://s.alicdn.com/@sc04/kf/H4cc431d6c1fd443ea177b81acf50a5a3u.jpg_200x200.jpg'},
  ]
  return (
    <div>
     <Slider /> 
     <div className='container mx-auto'>
    <div className='grid grid-cols-4 gap-4'>
      {product.map((product) =>(
    <div className='bg-white shadow-xl h-auto w-72 rounded-md mt-10'>
      <div className='w-full h-1/2 p-3 '>
      <img src={product.img} className='w-full h-full object-cover' alt='product' />
      <div className='flex flex-col items-center justify-center mt-6'>
        <h1 className=' font-bold'>{product.name}</h1>
        <p className='text-gray-800 text-2xl font-semibold'>${product.price}</p>
      </div>
      </div>
          </div>
      ))}
  
    </div>
    <p className='text-2xl font-bold mt-20'>Our Service</p>
    <Tensimonial />
     </div>
    
    </div>
  )
}

export default Home
