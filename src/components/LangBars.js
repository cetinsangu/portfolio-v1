import who from '../imgs/whoami.svg';

function LangBars() {
  return (
    <div className="py-20 md:py-0 ">
      <div className="container mx-auto px-10 h-full flex flex-col-reverse lg:flex-row justify-center items-center">
        <div className="relative">
          <div className="h-full rounded-full overflow-hidden">
            <img className="w-[720px]" src={who} alt="hero" />
          </div>
        </div>
        <div className="flex flex-col justify-center gap-3">
          <h1 className="text-indigo-600 font-bold text-4xl">Who am I?</h1>
          <p className="text-gray-600">
            I'm a self-taught software developer with a passion for building
            things.
          </p>
          <h2 className="text-gray-400 font-medium">HTML</h2>
          <div className="w-full bg-gray-200 h-1.5 rounded-md">
            <div className="w-full h-full bg-indigo-600 rounded-md"></div>
          </div>
          <h2 className="text-gray-400 font-medium">CSS</h2>
          <div className="w-full bg-gray-200 h-1.5 rounded-md">
            <div className="w-5/6 h-full bg-indigo-600 rounded-md"></div>
          </div>
          <h2 className="text-gray-400 font-medium">JavaScript</h2>
          <div className="w-full bg-gray-200 h-1.5 rounded-md">
            <div className="w-4/6 h-full bg-indigo-600 rounded-md"></div>
          </div>
          <h2 className="text-gray-400 font-medium">React</h2>
          <div className="w-full bg-gray-200 h-1.5 rounded-md">
            <div className="w-5/6 h-full bg-indigo-600 rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LangBars;
