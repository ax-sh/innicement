import clsx from 'clsx';
import { GetStartedButton } from '../components/Nav';

export default function Hero() {
  return (
    <section
      id="hero"
      className="grid grid min-h-[80vh] grid-cols-1 md:grid-cols-12"
    >
      <div
        className={clsx(
          'col-span-6',
          'flex flex-col gap-8 justify-evenly items-start',
        )}
      >
        <img className="h-[20%]" src="get_upto_80k.svg" />
        <h1 className="hero-title *header-1">
          Do more with investments on your own terms
        </h1>
        <GetStartedButton className="border-0 w-full md:w-1/3 " />
      </div>
      <div
        className={clsx('col-span-6', 'grid grid-cols-2 grid-rows-1', 'gap-8')}
      >
        <div className="flex flex-col col-span-1 gap-12">
          <img
            alt="money man"
            className="flex-grow object-cover"
            src="./mathieu-stern-1zO4O3Z0UJA-unsplash.jpg"
          />
          <p>
            Get helpful investing ideas and a cash bonus when you invest in a
            new account with Innicement
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="h-20 text-5xl">Innicement</div>
          <img
            alt="money stack"
            className="flex-grow object-cover"
            src="./matthew-lancaster-OtfnlTw0lH4-unsplash.jpg"
          />
        </div>
      </div>
    </section>
  );
}
