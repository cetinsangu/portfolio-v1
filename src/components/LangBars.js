import who from '../imgs/whoami.svg';
import { useDarkMode } from '../DarkModeContext';
function LangBars() {
  const { isDarkMode } = useDarkMode();
  return (
    <div className={`md:py-0 ${isDarkMode && 'dark'}`}>
      <div className="mx-auto px-10 h-full flex flex-col-reverse lg:flex-row justify-center items-center bg-gradient-to-b from-indigo-400 dark:from-slate-900 dark:via-slate-600 dark:bg-gradient-to-tl">
        <div className="relative">
          <div className="h-full rounded-full overflow-hidden">
            <img className="w-[720px]" src={who} alt="hero" />
          </div>
        </div>
        <div className="flex flex-col justify-center gap-3 lg:w-1/3">
          <h1 className="text-black md:dark:text-gray-200 font-bold text-4xl">
            Who am I?
          </h1>
          <p className="text-black md:dark:text-gray-200">
            I'm a self-taught(bachelor of law) front-end developer with a
            passion for building things and I'm always looking for new
            challenges to learn and grow. I live in Turkey.
          </p>
          <h2 className="text-barsec dark:text-white font-medium">HTML</h2>
          <div className="w-full bg-gray-200 h-1.5 rounded-md">
            <div className="w-full h-full bg-indigo-600 dark:bg-slate-500 rounded-md"></div>
          </div>
          <h2 className="text-barsec dark:text-white font-medium">CSS</h2>
          <div className="w-full bg-gray-200 h-1.5 rounded-md">
            <div className="w-5/6 h-full bg-indigo-600 dark:bg-slate-500 rounded-md"></div>
          </div>
          <h2 className="text-barsec dark:text-white font-medium">
            JavaScript
          </h2>
          <div className="w-full bg-gray-200 h-1.5 rounded-md">
            <div className="w-4/6 h-full bg-indigo-600 dark:bg-slate-500 rounded-md"></div>
          </div>
          <h2 className="text-barsec dark:text-white font-medium">React</h2>
          <div className="w-full bg-gray-200 h-1.5 rounded-md">
            <div className="w-5/6 h-full bg-indigo-600 dark:bg-slate-500 rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LangBars;
