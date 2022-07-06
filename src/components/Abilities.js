import reactLogo from '../imgs/reactlogo.png';
import landing from '../imgs/landing.jpg';
import spa from '../imgs/spa.png';
import complex from '../imgs/complex.png';
import more from '../imgs/more.png';
import { useDarkMode } from '../DarkModeContext';
function Abilities() {
  const { isDarkMode } = useDarkMode();
  return (
    <div
      className={`h-full flex flex-col justify-center ${isDarkMode && 'dark'}`}
    >
      <div className="py-16 bg-gradient-to-t from-indigo-400 overflow-hidden dark:bg-gradient-to-bl dark:from-slate-900 dark:via-slate-600">
        <div className=" m-auto px-6 space-y-8 text-gray-500 md:px-12 ">
          <div>
            <span className="text-gray-600 dark:text-white text-lg font-semibold">
              What Can I Do?
            </span>
            <h2 className="mt-4 text-2xl text-gray-900 dark:text-gray-200 font-bold md:text-4xl">
              Well, here's a list of some of the things I can do:
            </h2>
          </div>
          <div className="mt-16 grid border divide-x divide-y rounded-xl overflow-hidden sm:grid-cols-2 lg:divide-y-0 lg:grid-cols-3 xl:grid-cols-4">
            <div className="relative group bg-white dark:bg-slate-900 transition hover:z-[1] hover:shadow-2xl">
              <div className="relative p-8 space-y-8">
                <img src={landing} alt="landing_pages" className="w-96 h-56" />

                <div className="space-y-2">
                  <h5 className="text-xl text-gray-800 dark:text-white font-medium transition group-hover:text-indigo-600 dark:group-hover:text-amber-300">
                    Landing Pages
                  </h5>
                  <p className="text-sm text-gray-600 dark:text-gray-200">
                    I can build harmonic, smooth, animated landing pages for
                    your business.
                  </p>
                </div>
                <a
                  href="#"
                  className="flex justify-between items-center group-hover:text-indigo-600 dark:group-hover:text-amber-300"
                >
                  <span className="text-sm dark:text-gray-50">Read more</span>
                </a>
              </div>
            </div>
            <div className="relative group bg-white dark:bg-slate-900 transition hover:z-[1] hover:shadow-2xl">
              <div className="relative p-8 space-y-8">
                <img
                  src={spa}
                  className="w-96 h-56"
                  alt="single_page_applications"
                />

                <div className="space-y-2">
                  <h5 className="text-xl text-gray-800 dark:text-white font-medium transition group-hover:text-indigo-600 dark:group-hover:text-amber-300">
                    Single Page Applications
                  </h5>
                  <p className="text-sm text-gray-600 dark:text-gray-200">
                    I can build single page applications for your business.
                  </p>
                </div>
                <a
                  href="#"
                  className="flex justify-between items-center group-hover:text-indigo-600 dark:group-hover:text-amber-300"
                >
                  <span className="text-sm dark:text-gray-50">Read more</span>
                </a>
              </div>
            </div>
            <div className="relative group bg-white dark:bg-slate-900 transition hover:z-[1] hover:shadow-2xl">
              <div className="relative p-8 space-y-8">
                <img
                  src={complex}
                  className="w-96 h-56"
                  alt="complex_web_apps"
                />

                <div className="space-y-2">
                  <h5 className="text-xl text-gray-800 dark:text-white font-medium transition group-hover:text-indigo-600 dark:group-hover:text-amber-300">
                    Complex Applications
                  </h5>
                  <p className="text-sm text-gray-600 dark:text-gray-200">
                    I can build complex applications for your business.
                  </p>
                </div>
                <a
                  href="#"
                  className="flex justify-between items-center group-hover:text-indigo-600 dark:group-hover:text-amber-300"
                >
                  <span className="text-sm dark:text-gray-50">Read more</span>
                </a>
              </div>
            </div>
            <div className="relative group bg-gray-100 dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl lg:hidden xl:block">
              <div className="relative p-8 space-y-8 border-dashed rounded-lg transition duration-300 group-hover:bg-white dark:group-hover:bg-slate-600 group-hover:scale-95">
                <img src={more} className="w-96 h-56" alt="more" />

                <div className="space-y-2">
                  <h5 className="text-xl text-gray-800 dark:text-white font-medium transition group-hover:text-indigo-600 dark:group-hover:text-amber-300">
                    And more...
                  </h5>
                  <p className="text-sm text-gray-600 dark:text-gray-200">
                    I can build more than just a landing page. Currently I'm
                    practicing my skills in MERN stack.
                  </p>
                </div>
                <a
                  href="#"
                  className="flex justify-between items-center group-hover:text-indigo-600 dark:group-hover:text-amber-300 "
                >
                  <span className="text-sm dark:text-gray-50">Read more</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Abilities;
