import { Separator } from '@/components/ui/separator';

const Bonuses = () => {
  return (
    <main className="w-full h-auto features px-5 py-20">
      {/* 1 */}
      <section>
        <div className="flex justify-center items-center flex-col w-full">
          <h1 className="text-3xl font-bold tracking-wide md:text-4xl  uppercase text-center">
            Mafia: Trilogy Bonuses
          </h1>
          <Separator className="bg-[#920a0a] md:h-[3px] md:my-8 my-4 w-36 h-[2px]" />
        </div>
        <div className="flex justify-center items-center ">
          <p className="">
            Every Definitive Edition game in Mafia: Trilogy unlocks bonus
            content in the other two games. Purchase other Mafia games to unlock
            the following content in Mafia II.
          </p>
        </div>
      </section>
      {/* 2 */}
      <section className=" gap-y-6 my-6 grid">
        <div className="md:container md:columns-2 break-inside-avoid-column gap-x-20">
          <div className="">
            <img
              src="https://cdn.2kgames.com/web/mafiagame.com/definitive-edition/MAFIA1_TRILOGY_BONUS_1920x1080.jpg"
              alt="Trilogy Bonus"
            />
            <p className="mt-6">
              Pre-order the Mafia Trilogy or Mafia: Definitive Edition to unlock
              protagonist Tommy Angelo’s iconic 1930’s outfit and car in Mafia
              II: Definitive Edition.
            </p>
          </div>
          <div className="my-4">
            <img
              src="https://cdn.2kgames.com/web/mafiagame.com/definitive-edition/MAFIA3_TRILOGY_BONUS_1920x1080.jpg"
              alt="Trilogy Bonus"
            />
            <p className="mt-6">
              Suit up in Lincoln Clay's army jacket and cruise around in his
              American muscle car in Mafia II: Definitive Edition when you buy
              the Mafia Trilogy or Mafia III: Definitive Edition.
            </p>
          </div>
        </div>
      </section>
      {/* 3 */}
      <section className="lg:container lg:columns-2 lg:mx-auto gap-x-20 lg:w-[80%]">
        <section>
          <div className="flex justify-center items-center flex-col w-full">
            <h1 className="text-3xl font-bold tracking-wide uppercase text-center md:text-4xl">
              Purchase Mafia II: Definitive Edition
            </h1>

            <Separator className="bg-[#920a0a] my-4 w-36 md:h-[3px] md:my-8 h-[2px]" />

            <p>
              Owning Mafia II: Definitive Edition unlocks Vito Scaletta’s jacket
              and his Shubert Frigate sports car in the Definitive Editions of
              both Mafia and Mafia III. Mafia II: Definitive Edition is
              available now for PlayStation 4, Xbox One, and PC via Steam and
              the Epic Games Store. Also coming to Stadia at a later date.
            </p>
          </div>
        </section>
        {/* 4 */}
        <section className="flex items-center mt-8 w-full justify-center gap-x-4">
          <div>
            <img
              src="https://cdn.2kgames.com/2020/03/30/5e828699bde08footer-pslogo.png"
              alt="Playstation Logo"
              className=""
            />
          </div>
          <div>
            <img
              src="https://cdn.2kgames.com/2020/03/30/5e8286c10865bfooter-xbox.png"
              alt=" Xbox Logo"
            />
          </div>
          <div>
            <img
              src="https://cdn.2kgames.com/2020/05/18/5ec30d99bcc84footer-epicstore.png"
              alt=" Epic Store Logo"
            />
          </div>
          <div>
            <img
              src="https://cdn.2kgames.com/2020/03/30/5e82869aa4d01footer-steam.png"
              alt=" Steam Logo"
            />
          </div>
        </section>
      </section>
    </main>
  );
};

export default Bonuses;
