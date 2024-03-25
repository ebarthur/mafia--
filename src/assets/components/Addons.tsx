import { Separator } from '@/components/ui/separator';

const Addons = () => {
  return (
    <main className="w full h-auto add-ons lg:px-44 ">
      <section className="px-5 py-10 lg:py-20 md:px-10 lg:space-x-6 text-white lg:grid lg:grid-cols-2">
        {/* 1 */}
        <div>
          <div className="flex items-center md:items-start flex-col p-4 justify-center">
            <h1 className=" uppercase text-[1.5rem] xs:text-[1.7rem] font-bold md:text-[2.5rem] md:tracking-wide">
              Get the full story
            </h1>
            <Separator className="my-4 w-32 h-[2px] md:h-[3px] bg-[#920a0a]" />
          </div>
          <div className="w-full flex flex-col md:text-lg">
            <p className="tracking-tight ">
              Spend more time in Empire Bay with three included add-ons that
              expand the main story with different perspectives from familiar
              characters.
            </p>
            <div className="my-4 mx-4">
              <ul className="list-disc marker:text-[#920a0a] text-white tracking-tight ">
                <li>The Betrayal of Jimmy</li>
                <li>Jimmy's Vendetta</li>
                <li>Joe's Adventures</li>
              </ul>
            </div>
            <div className="my-4">
              <button
                className=" text-white relative px-6 lg:px-8 py-2 text-base tracking-tight uppercase font-semibold"
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
                Learn More
              </button>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div>
          <div>
            <img
              src="https://cdn.2kgames.com/2020/05/12/5ebb273ac2e08Mafia-2fs.jpg"
              alt=" Vito Scaletta, Joe Barbaro"
              className="my-10"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Addons;
