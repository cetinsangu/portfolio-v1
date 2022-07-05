import mansvg from '../imgs/man_workingsoft.svg';
import TypeWriterEffect from 'react-typewriter-effect';

function Introduction() {
  return (
    <div className="w-full h-screen bg-gradient-to-t from-indigo-400">
      <img
        className="absolute bottom-0 right-0 lg:left-0 mx-auto left-0 h-4/6 md:h-5/6"
        src={mansvg}
        alt=""
      />
      <div className="absolute flex flex-col top-1/4 items-center h-full w-full md:block text-3xl md:top-1/3 sm:left-10 sm:text-4xl md:left-8 md:text-6xl lg:left-5 xl:left-36">
        <h1 className="font-medium">Hi, I'm Çetin.</h1>
        <div className="flex gap-1.5 lg:gap-5 items-center mt-3">
          <span className="font-light">I use</span>
          <TypeWriterEffect
            textStyle={{
              color: 'rgb(79, 70, 229)',
              fontWeight: 400,
            }}
            startDelay={1000}
            cursorColor="rgb(79, 70, 229)"
            multiText={[
              'HTML',
              'Pure CSS',
              'Tailwind CSS',
              'Bootstrap',
              'JavaScript',
              'React',
            ]}
            multiTextDelay={2000}
            typeSpeed={100}
            multiTextLoop={true}
          />
        </div>
      </div>
      <div className="hidden lg:flex flex-col gap-3 shadow-lg rounded-xl absolute top-0 bottom-0 m-auto right-10 bg-white p-6 h-fit w-1/3">
        <h1 className="text-4xl font-bold text-indigo-600">
          Front-end Developer
        </h1>
        <p className="text-gray-400">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Voluptatibus, in? Distinctio veritatis ipsa ullam atque nemo. Nemo
          consequatur libero at, voluptatum fuga, commodi, nesciunt velit
          maiores magni reprehenderit sapiente facilis.
        </p>
        <a
          className="bg-indigo-600 text-white text-xl px-3 py-2 w-fit rounded-md font-medium"
          href="#"
        >
          Hire Me
        </a>
      </div>
    </div>
  );
}

export default Introduction;
