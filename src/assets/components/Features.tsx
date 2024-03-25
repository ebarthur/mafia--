import { Separator } from '@/components/ui/separator';

const Features = () => {
  return (
    <main className="features h-auto lg:h-[85vh] p-5 w-full" id="features">
      <section className="w-full h-48 flex flex-col justify-center items-center p-10">
        <div className=" xs:text-3xl md:text-4xl lg:text-6xl  lg:tracking-wide uppercase  font-extrabold tracking-widest text-center text-[1.8rem] leading-[1.8rem]">
          Game Features
        </div>
        <Separator className="my-8 h-[4px] md:h-[2px] lg:h-[4px] w-40 bg-[#920a0a]" />
      </section>

      <section className=" gap-y-4 md:gap-y-6 grid lg:mx-40 lg:grid-cols-3 lg:gap-x-6 md:place-content-center ">
        {/* 1 */}
        <div className="w-full p-5 flex md:rounded-md lg:rounded-none justify-start md:justify-center items-center flex-col features_background-1 h-[30vh]">
          <div className="text-[#fff]  text-center mt-8 uppercase text-xl md:text-2xl font-semibold mb-2 tracking-wide lg:tracking-normal">
            Experience a classic remastered
          </div>
          <Separator className="bg-[#920a0a] my-4 lg:my-2 w-32" />
          <h1 className=" text-white w-[85%] tracking-tight text-center md:text-lg lg:text-base">
            Live the life of a gangster during the Golden Era of organized crime
            in glorious 4k
          </h1>
        </div>
        {/* 2 */}
        <div className="w-full  p-5 flex md:rounded-md lg:rounded-none justify-start md:justify-center items-center flex-col features_background-2 h-[30vh]">
          <div className=" text-[#fff] text-center mt-8 uppercase text-xl md:text-2xl font-semibold mb-2 tracking-wide  lg:tracking-normal">
            Make the family proud
          </div>
          <Separator className="bg-[#920a0a] my-4 lg:my-2 w-32" />
          <h1 className=" text-white w-[85%] text-center tracking-tight md:text-lg lg:text-base">
            Climb up the ranks of the Italian Mafia by completing a variety of
            dangerous missions.
          </h1>
        </div>
        {/* 3 */}
        <div className="w-full  p-5 flex md:rounded-md lg:rounded-none justify-start md:justify-center items-center flex-col features_background-3 h-[30vh]">
          <div className=" text-[#fff] text-center mt-8 uppercase text-xl md:text-2xl font-semibold mb-2 tracking-wide  lg:tracking-normal">
            Explore empire bay
          </div>
          <Separator className="bg-[#920a0a] my-4 lg:my-2 w-32" />
          <h1 className=" text-white w-[85%] text-center tracking-tight md:text-lg lg:text-base">
            Visit distinct neighborhoods and memorable landmarks in and around
            this bustling city
          </h1>
        </div>
      </section>
      <section className="w-full h-32 p-5 flex items-center justify-center">
        <button
          className=" text-white relative px-4 lg:px-8 py-2 text-lg  tracking-[-1.5px] uppercase font-semibold"
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
            className="absolute inset-0 border border-black "
            style={{
              pointerEvents: 'none',
              margin: '0.25rem',
            }}
          ></span>
          Explore More
        </button>
      </section>
    </main>
  );
};

export default Features;
