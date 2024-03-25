import { Separator } from '@/components/ui/separator';
import { FaAngleDown } from 'react-icons/fa6';

const Footer = () => {
  return (
    <main className="w-full p-10 h-auto bg-black">
      <section className="qq:flex">
        {/* 1 */}
        <section>
          <div>
            <div className="flex justify-center qq:items-start items-center gap-y-8 flex-col">
              <div>
                <img
                  src="https://cdn.2kgames.com/2022/08/22/6303f704f3b94Mafia_20Years_LOGO_256x52.png"
                  alt="Mafia 20th Anniversary"
                  className="h-8 w-36"
                />
              </div>
              <div className="flex gap-x-6">
                <a href="https://github.com/ebarthur/mafia--" target="_blank">
                  <img
                    src="https://cdn.2kgames.com/2020/03/30/5e827f1d40aabfooter-fb.png"
                    alt="Facebook Logo"
                    className="h-8"
                  />
                </a>
                <a href="https://twitter.com/StatmanAartt" target="_blank">
                  <img
                    src="https://cdn.2kgames.com/2020/03/30/5e827f2d1911bfooter-twitter.png"
                    alt="Twitter Logo"
                    className="h-8"
                  />
                </a>
                <a href="https://github.com/ebarthur/mafia--" target="_blank">
                  <img
                    src="https://cdn.2kgames.com/2020/03/30/5e827f4234525footer-yt.png"
                    alt="Youtube Logo"
                    className="h-8"
                  />
                </a>
                <a href="https://github.com/ebarthur/mafia--" target="_blank">
                  <img
                    src="https://cdn.2kgames.com/2020/05/15/5ebf1c4bc76cdfooter-instagram.png"
                    alt="Instagram Logo"
                    className="h-8"
                  />
                </a>
              </div>
            </div>
            <div className="flex items-center qq:items-start justify-center mx-auto flex-col qq:flex-row qq:gap-20">
              <div className="my-12">
                <img
                  src="https://cdn.2kgames.com/2020/05/08/5eb5c027d98celogoGarden_mafiaT_1.png"
                  alt=" 2K Games"
                  className="w-40"
                />
              </div>
              <div className="text-white/60 text-[0.8rem] tracking-wide gap-4 uppercase  break-inside-avoid-column columns-3 qq:w-[50rem] md:columns-4 space-y-2">
                <p className="hover:text-white">2K.com</p>
                <p className="hover:text-white">Support</p>
                <p className="hover:text-white">Privacy policy</p>
                <p className="hover:text-white">Terms of service</p>
                <p className="hover:text-white">Cookie Policy</p>
                <p className="hover:text-white">
                  Do not sell my personal information
                </p>
                <p className="hover:text-white">2k ad partners</p>
                <p className="hover:text-white">Cookie Settings</p>
              </div>
            </div>
          </div>
          <div className="">
            <Separator className="my-4 h-[0.25px] bg-white/30" />

            <p className="text-white/30 text-[0.7rem] text-center leading-4">
              &copy; 2020 TAKE-TWO INTERACTIVE SOFTWARE, INC. DEVELOPED BY
              HANGAR 13. MAFIA, TAKE-TWO INTERACTIVE SOFTWARE, 2K, HANGAR 13,
              AND THEIR RESPECTIVE LOGOS ARE ALL TRADEMARKS AND/OR REGISTERED
              TRADEMARKS OF TAKE-TWO INTERACTIVE SOFTWARE, INC.
            </p>
          </div>
        </section>
        {/* 2 */}
        <section>
          <div className="text-white/60 uppercase gap-x-4 text-[1rem] flex justify-center items-center my-4">
            <div>Language:</div>
            <div className="flex  px-4 py-2 gap-x-2 md:gap-x-8 qq:py-2 qq:px-6 items-center justify-center bg-zinc-800/70">
              <div className="qq:w-28">English (US)</div>
              <div>
                <FaAngleDown />
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-col items-center gap-8 mt-8 w-full justify-center">
              <div className="flex gap-4">
                <div>
                  <img
                    src="https://cdn.2kgames.com/2020/03/30/5e82869aa4d01footer-steam.png"
                    alt=" Steam Logo"
                    className="h-10"
                  />
                </div>
                <div>
                  <img
                    src="https://cdn.2kgames.com/2020/03/30/5e828699bde08footer-pslogo.png"
                    alt="Playstation Logo"
                    className="h-10"
                  />
                </div>
                <div>
                  <img
                    src="https://cdn.2kgames.com/2020/03/30/5e8286c10865bfooter-xbox.png"
                    alt=" Xbox Logo"
                    className="h-10"
                  />
                </div>
                <div>
                  <img
                    src="https://cdn.2kgames.com/2020/05/18/5ec30d99bcc84footer-epicstore.png"
                    alt=" Epic Store Logo"
                    className="h-10"
                  />
                </div>
              </div>
              <div>
                <img
                  src="https://cdn.2kgames.com/2020/05/14/5ebd9d285c5b6rating_esrb_mafia_2a.gif"
                  alt="ESRB Rating"
                  className="w-40 md:w-48"
                />
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Footer;
