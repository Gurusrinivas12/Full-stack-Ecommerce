import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
         <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
         <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>At <i>Forever</i>, we believe in creating timeless fashion that celebrates individuality, comfort, and style. Our journey began with a simple vision: to craft high-quality clothing and accessories that stand the test of time, ensuring that you always feel confident and comfortable. We are passionate about blending classic designs with contemporary trends, offering collections that cater to all occasions—from casual everyday wear to statement pieces for special moments.</p>
            <p>At the heart of <i>Forever</i> is our dedication to sustainability and craftsmanship. We prioritize premium fabrics, ethical production practices, and attention to every detail. We're committed to not only creating lasting fashion but also building a lasting relationship with our customers. Thank you for choosing Forever. Together, we're redefining timeless style for the modern world.</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>At <i>Forever</i>, our mission is to inspire confidence and self-expression through timeless fashion. We are dedicated to creating high-quality, versatile pieces that empower individuals to embrace their unique style while promoting sustainability and ethical practices. Our goal is to make fashion accessible, comfortable, and long-lasting, ensuring every step of your journey is met with style and confidence.</p>
         </div>
      </div>

      <div className='text-xl py-4 '>
          <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance:</b>
            <p className='text-gray-600'>At <i>Forever</i>, quality is at the heart of everything we do. We are committed to using premium materials and meticulous craftsmanship to create products that stand the test of time. Every item undergoes rigorous quality checks to ensure it meets our high standards for durability, comfort, and design. Our dedication to excellence guarantees that you receive only the best, every time you shop with us. Your satisfaction is our top priority.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenience:</b>
            <p className='text-gray-600'>At <i>Forever</i>, we prioritize your shopping experience by offering unmatched convenience at every step. Our user-friendly website makes it easy to browse, select, and purchase your favorite products from the comfort of your home. With multiple secure payment options, fast shipping, and hassle-free returns, we ensure a seamless and stress-free shopping experience. Your satisfaction and ease are our top priorities.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Service:</b>
            <p className='text-gray-600'>At <i>Forever</i>, we are dedicated to providing exceptional customer service every step of the way. Our friendly and knowledgeable support team is always ready to assist you—whether you have questions about a product, need help with an order, or require post-purchase support. We believe in building lasting relationships with our customers through transparency, responsiveness, and care. Your satisfaction is our top priority, and we are here to ensure your shopping experience is nothing short of outstanding.</p>
        </div>

      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default About
