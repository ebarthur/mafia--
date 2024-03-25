import { Separator } from '@/components/ui/separator';

const About = () => {
  return (
    <main className="w-full relative" id="about">
      <div className="grid lg:grid-cols-[3fr_2fr]">
        {/*  1 */}
        <div className="relative flex">
          <img
            src="https://cdn.2kgames.com/web/mafiagame.com/definitive-edition/desktop/MAFIA2_Lore_Section_Background_Settting.jpg"
            alt="Lore Section One"
            className="w-full xs:h-[50vh] h-[55vh]  lg:h-[70vh] object-cover filter brightness-50"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center sm:ml-8 md:ml-28 sm:items-start lg:ml-20 text-white">
            <span className="text-xl md:text-2xl uppercase font-bold">
              Empire Bay, 1943
            </span>
            <Separator
              orientation="horizontal"
              className="bg-[#920a0a] w-[8rem] my-4"
            />
            <p className="w-[90%] lg:w-[40rem]  text-sm md:text-base mt-2">
              This thriving East Coast metropolis is home to some of the
              nation&apos;s tallest skyscrapers and largest corporations.
              It&apos;s also home to a number of criminal organizations,
              including three powerful Mafia families that are all trying to
              take over the city&apos;s smuggling, extortion, and drug rackets.
            </p>
          </div>
        </div>
        {/* 2 */}
        <div className="relative flex">
          <img
            src="https://cdn.2kgames.com/web/mafiagame.com/definitive-edition/MAFIA2_Lore_Section_Background_Characters_WIDE_VIGNETTE.png"
            alt="Lore Section Two"
            className="w-full h-[75vh] xs:h-[612px] md:h-[60vh] lg:h-[70vh] object-cover"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center ml-5 md:ml-10 md:items-start md:mb-40 text-white">
            <span className=" text-lg mt-72 tracking-wide uppercase font-bold text-[#920a0a] md:tracking-tighter">
              Starring
            </span>
            <div className=" text-xl md:text-2xl font-bold uppercase md:tracking-tighter leading-2">
              Vito Scaletta
            </div>
            <Separator
              orientation="horizontal"
              className="bg-[#920a0a] w-32 my-4"
            />

            <p className="lg:w-40  text-sm mb-4 xs:-mb-10 lg:mb-40 md:text-base md:w-[30%] w-[90%]">
              Vito&apos;s Sicilian family moved to America in search of a better
              life when he was seven years old. His late father couldn&apos;t
              save the family from a life of poverty no matter how hard he
              worked, so Vito has chosen to pursue an American dream forged on
              the wrong side of the law.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
