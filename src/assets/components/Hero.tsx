import { useState, useEffect } from 'react';

const Hero = () => {
  const [imageUrl, setImageUrl] = useState<string>('');

  useEffect(() => {
    const setResponsiveImage = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 639) {
        setImageUrl(
          'https://cdn.2kgames.com/web/mafiagame.com/definitive-edition/mobile/m2_hero_mobile_2.jpg',
        );
      } else if (screenWidth <= 821) {
        setImageUrl(
          'https://cdn.2kgames.com/web/mafiagame.com/definitive-edition/tablet/m2_hero_tab_2.jpg',
        );
        /* ipad pro */
      } else if (screenWidth <= 1026) {
        setImageUrl(
          'https://cdn.2kgames.com/web/mafiagame.com/definitive-edition/tablet/m2_hero_tab_2.jpg',
        );
      } else {
        setImageUrl(
          'https://cdn.2kgames.com/web/mafiagame.com/definitive-edition/desktop/m2_hero_desk_2.jpg',
        );
      }
    };

    setResponsiveImage();

    window.addEventListener('resize', setResponsiveImage);

    return () => {
      window.removeEventListener('resize', setResponsiveImage);
    };
  }, []);

  return (
    <main className="w-full h-screen relative" id="main">
      <img src={imageUrl} alt="mafia-2-hero" className="w-full h-full" />
      <div className="absolute top-28 md:top-0 left-0 bottom-0 right-0 md:bottom-80 flex items-center md:justify-start justify-center md:ml-6 lg:ml-20 sm:mt-48 sm:mb-40">
        <img
          src="https://cdn.2kgames.com/web/mafiagame.com/definitive-edition/logo/logo_m2_L_2.png"
          alt=""
          className="max-w-40 h-14 md:h-12 sm:max-w-64 sm:h-20  lg:max-w-96 lg:h-24"
        />
      </div>
      {/* note */}
      <div className="absolute top-[15rem] md:top-0 left-0 bottom-0 md:mt-[14rem] right-0 md:bottom-48 flex items-center md:justify-start justify-center w-full md:ml-6 sm:mt-48 sm:mb-40 lg:ml-20  lg:mt-20">
        <h1 className=" text-white text-center md:text-start uppercase w-64 lg:w-[618px] lg:px-2 py-2 md:w-80 mt-6 lg:mt-52 font-bold bg-black/60 md:bg-black text-3xl md:text-4xl lg:text-5xl">
          When all is not enough
        </h1>
      </div>

      <div className="absolute top-[28rem] xs:top-[30rem] left-0 right-0 bottom-0 flex items-center justify-center  sm:mt-64 lg:mt-80 md:ml-6 lg:ml-20 sm:ml-20 md:mt-[18rem] md:top-0 md:bottom-48 md:justify-start">
        <button
          className=" text-white relative px-8 md:px-8 py-2 md:py-3 text-lg md:text-xl tracking-[-1.5px] uppercase font-semibold"
          style={{
            backgroundImage: `url('https://mafiagame.com/images/nav/primary-cta-noborder.png')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            border: '2px solid transparent',
            overflow: 'hidden',
          }}
        >
          <span
            className="absolute inset-0 border border-black"
            style={{
              pointerEvents: 'none',
              margin: '0.25rem',
            }}
          ></span>
          Buy Now
        </button>
      </div>
    </main>
  );
};

export default Hero;
