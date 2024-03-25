import { FaPlaystation, FaXbox } from 'react-icons/fa6';
import { BsSteam } from 'react-icons/bs';
import { Separator } from '@/components/ui/separator';

interface INavLink {
  [index: string]: string;
}

const navLinks: INavLink[] = [
  {
    name: 'Main',
    href: '#main',
  },
  { name: 'About', href: '#about' },
  {
    name: 'Features',
    href: '#features',
  },
  {
    name: 'Gameplay',
    href: '#gameplay',
  },
  {
    name: 'Bonuses',
    href: '#bonuses',
  },
] as const;

const Navbar = () => {
  return (
    <nav className="w-full h-14 fixed z-10 p-5 bg-[#141414]/95">
      <main className="flex  justify-between ">
        <div className="flex gap-5">
          <img
            src="https://cdn.2kgames.com/2022/08/22/6303f704f3b94Mafia_20Years_LOGO_256x52.png"
            alt="Mafia 20th Anniversary"
            className="h-6 w-28 md:w-32 hidden lg:inline-block"
          />
          <div>
            <Separator
              orientation="vertical"
              className="bg-[#920a0a] hidden lg:inline-block"
            />
          </div>

          <div className="  text-white font-semibold text-xl font-serif">
            MAFIA <span className="text-[#920a0a]">II</span>
          </div>
        </div>

        <section className="hidden lg:flex gap-5">
          {navLinks.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-white hover:text-[#920a0a] uppercase tracking-wider lg:tracking-widest font-semibold text-sm"
            >
              {item.name}
            </a>
          ))}
        </section>
        {/* Game console */}
        <section className="flex gap-5">
          <div className="flex gap-5">
            <FaXbox size={25} color={'#fff'} />

            <FaPlaystation size={25} color={'#fff'} />

            <BsSteam size={25} color={'#fff'} />
          </div>

          <div>
            <Separator
              orientation="vertical"
              className="bg-[#920a0a] hidden md:inline-block"
            />
          </div>
          <button className="text-white hidden md:inline-block hover:text-zinc-400 uppercase tracking-wider font-bold text-sm relative overflow-hidden">
            shop
          </button>
        </section>
      </main>
    </nav>
  );
};

export default Navbar;
