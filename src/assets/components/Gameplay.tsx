import { Separator } from '@/components/ui/separator';

type IimageLinks = {
  url: string;
  alt?: string;
};

const imageLinks: IimageLinks[] = [
  {
    url: 'https://cdn.2kgames.com/2020/05/13/5ebb6516e049bmafia2de-001-560.jpg',
  },
  {
    url: 'https://cdn.2kgames.com/2020/05/13/5ebb70187c62cmafia2de-010-560.jpg',
  },
  {
    url: 'https://cdn.2kgames.com/2020/05/13/5ebb6fee1b446mafia2de-009-560.jpg',
  },
  {
    url: 'https://cdn.2kgames.com/2020/05/13/5ebb6f2a2d5c0mafia2de-005-560.jpg',
  },
  {
    url: 'https://cdn.2kgames.com/2020/05/13/5ebb6ecbb9cf0mafia2de-003-560.jpg',
  },
  {
    url: 'https://cdn.2kgames.com/2020/05/13/5ebb6f5c7c02emafia2de-006-560.jpg',
  },
  {
    url: 'https://cdn.2kgames.com/2020/05/13/5ebb6f889bba6mafia2de-007-560.jpg',
  },
  {
    url: 'https://cdn.2kgames.com/2020/05/13/5ebb6efc2104cmafia2de-004-560.jpg',
  },
  {
    url: 'https://cdn.2kgames.com/2020/05/13/5ebb64f4cc457mafia2de-002-560.jpg',
  },
];

const Gameplay = () => {
  return (
    <main className="gameplay w-full h-auto px-0 py-6 lg:px-36" id="gameplay">
      <section className="p-5 grid">
        <div className="flex justify-center flex-col items-center p-10">
          <h1 className="text-white text-4xl lg:text-5xl uppercase font-semibold tracking-wide ">
            Media
          </h1>
          <Separator className="bg-[#920a0a] h-[4px] w-40 my-4" />
        </div>
        <div className="space-y-8 md:space-x-4  lg:space-x-8  md:columns-3 md:container md:break-inside-avoid-column md:gap-x-4">
          {imageLinks.map((image, index) => (
            <div key={index} className="">
              <img src={image.url} alt={image.alt} />
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center my-8">
          <button
            className=" text-white relative px-6 py-2 text-base md:text-lg  tracking-tight uppercase font-semibold"
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
            View More
          </button>
        </div>
      </section>
    </main>
  );
};

export default Gameplay;
