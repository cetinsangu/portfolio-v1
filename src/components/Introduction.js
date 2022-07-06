import man from '../imgs/man_workingsoft.svg';
import darkman from '../imgs/dark_man.svg';
import TypeWriterEffect from 'react-typewriter-effect';
import { useDarkMode } from '../DarkModeContext';

function Introduction() {
  const { isDarkMode } = useDarkMode();

  return (
    <div className={`${isDarkMode && 'dark'}`}>
      <div className="w-full h-screen bg-gradient-to-t from-indigo-400 via-indigo-400 dark:from-slate-900 dark:bg-gradient-to-bl dark:via-slate-600">
        <img
          className="absolute bottom-0 right-0 lg:left-0 mx-auto left-0 h-4/6 md:h-5/6"
          src={isDarkMode ? darkman : man}
          alt=""
        />
        <div className="absolute flex flex-col top-1/4 items-center h-full w-full sm:w-auto  md:block text-3xl md:top-1/3 sm:left-10 sm:text-4xl md:left-8 md:text-6xl lg:left-5 xl:left-36">
          <h1 className="font-medium dark:text-gray-300">Hi, I'm Çetin.</h1>
          <div className="flex gap-1.5 lg:gap-5 items-center mt-3">
            <span className="font-light dark:text-gray-300">I use</span>
            <TypeWriterEffect
              textStyle={{
                color: `${
                  isDarkMode ? 'rgb(255, 255, 255)' : 'rgb(79, 70, 229)'
                }`,
                fontWeight: 400,
              }}
              startDelay={1000}
              cursorColor={`${
                isDarkMode ? 'rgb(255,255,255)' : 'rgb(79, 70, 229)'
              }`}
              multiText={[
                'HTML.',
                'Pure CSS.',
                'Tailwind CSS.',
                'Bootstrap.',
                'JavaScript.',
                'React.',
              ]}
              multiTextDelay={2000}
              typeSpeed={100}
              multiTextLoop={true}
            />
          </div>
        </div>
        <div className="hidden lg:flex flex-col gap-3 shadow-lg rounded-xl absolute top-0 bottom-0 m-auto right-10 bg-white dark:bg-gray-900 p-6 h-fit w-1/3">
          <h1 className="text-4xl font-bold text-indigo-600 dark:text-gray-200">
            Front-end Developer
          </h1>
          <p className="text-gray-600 dark:text-gray-200">
            I'm a self-taught developer from Turkey. My primary field of
            interests are creating websites and web applications. I've been
            coding for the last one year.
          </p>
          <a
            className="bg-indigo-600 text-white text-xl px-3 py-2 w-fit rounded-md font-medium"
            href="#"
          >
            Hire Me
          </a>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
