import LogoComp from "./LogoComp";
import githubicon from '../assets/github.png'

const Navbar = () => {
  return (
    <>
      <header className="w-full p-2 md:p-4  bg-gradient-to-r from-green-200 to-green-50  rounded-b-sm">
        <nav className="flex justify-between items-center px-1 md:px-2 ">
          <div>
            <LogoComp color={"black"} />
          </div>
          <ul className="flex justify-around items-center gap-4 md:gap-6">
            <li>
              <a href="https://github.com/tascan25" target="_blank">
                <button className="rounded-full border font-fontPoppins border-slate-500 px-2 py-1 text-xs md:text-sm
              flex gap-2 justify-center items-center
              hover:font-semibold bg-black text-white font-medium  hover:ring-2 hover:border-[bg-gradient-to-r from-emerald-300 to-emerald-100]">
                  <img src={githubicon} alt="" className="w-4 md:w-7" />
                  <span>GitHub</span>
                </button>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
