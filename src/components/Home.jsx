import Button from './Button'
const Home = () => {
  return (
    <div  id='' className=' lg:pt-[10rem] pt-[4rem]
    lg:pb-[8rem] pb-[4rem]   items-center  flex  justify-center'>
      <div>
<h1   className='text-white text-[2rem] font-bold text-center lg:text-[3.5rem] mt-[4rem]'> Explore the possibilities of <span className='text-[#8a2be2]  border-b-4 border-b-cyan-400 decoration-[linear-gradient(45deg,_#726bff,_#57b6fe)]'>AI Book Writing</span >   <br  /> With  <span className=''>Book AI</span></h1>

<p  className='text-[rgb(179,179,179)] text-center text-xl'>Unleash the power of AI to create  captivating books in minutes . <br /> Download  ,Distribte  whereever you want .Generate  unlimited free  books .</p>
  <div className=' flex items-center justify-center mt-[2rem] gap-5 flex-col lg:flex-row'>
  <Button text="Get Started "/>
  <Button text="Get API Access"/>
  </div>

      </div>
    </div>
  )
}

export default Home
