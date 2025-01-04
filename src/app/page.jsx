import Image from "next/image";

const Homepage = () => {
  return <div className='h-full flex flex-col'>
    {/* IMAGE CONTAINER */}
    <div className='h-1/2 relative bg-blue-200'>
      <Image src="/hero.png" alt="hero" fill/>
    </div>
    {/* TEXT CONTAINER */}
    <div className='h-1/2'>

    </div>
  </div>;
};

export default Homepage;
