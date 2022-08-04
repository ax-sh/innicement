import clsx from "clsx";
import "./App.scss";
import { SubHeading } from "./components";
import Layout from "./components/Layout";
import { GetStartedButton, NavButton } from "./components/Nav";

function Hero() {
  return (
    <section
      id="hero"
      className="grid grid min-h-[80vh] grid-cols-1 md:grid-cols-12"
    >
      <div
        className={clsx(
          "col-span-6",
          "flex flex-col gap-8 justify-evenly items-start"
        )}
      >
        <img className="h-[20%]" src={"/get_upto_80k.svg"} />
        <h1 className="hero-title *header-1">
          Do more with investments on your own terms
        </h1>
        <GetStartedButton className="border-0 w-full md:w-1/3 " />
      </div>
      <div
        className={clsx("col-span-6", "grid grid-cols-2 grid-rows-1", "gap-8")}
      >
        <div className="flex flex-col col-span-1 gap-12">
          <img className="flex-grow" src="http://source.unsplash.com/random" />
          <p>
            Get helpful investing ideas and a cash bonus when you invest in a
            new account with Innicement
          </p>
        </div>
        <div className="flex flex-col">
          <p className="bg-black">
            Get helpful investing ideas and a cash bonus when you invest in a
            new account with Innicement
          </p>
          <img className="flex-grow" src="http://source.unsplash.com/random" />
        </div>
      </div>
    </section>
  );
}

function Info() {
  return (
    <section id="info" className="min-h-screen grid grid-cols-12 gap-8">
      <div className="col-span-3">
        <img src="http://source.unsplash.com/random" />
      </div>
      <div className="col-span-6">
        <SubHeading>Everything you need to invest the way you want</SubHeading>
        <details>
          <summary>Investing ideas</summary>
          <p>
            Innicement has the guidance and tools to confidently pursue your
            investing goals and build your portfolio.
          </p>
        </details>

        <details>
          <summary>$0 trades</summary>
        </details>
        <details>
          <summary>More rewards</summary>
        </details>
        <details>
          <summary>Investing & connected</summary>
        </details>
      </div>
      <div className="col-span-3"></div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="min-h-screen">
      <SubHeading>Invest your way</SubHeading>
    </section>
  );
}

function App() {
  return (
    <Layout className="container">
      <Hero />
      <Info />
      <Pricing />
      <section className="min-h-screen">
        <SubHeading>Lower costs can add up to big savings</SubHeading>
      </section>
      <section className="min-h-screen">
        <div>
          <SubHeading>Innicement Digital Advisor</SubHeading>
          <p>
            For those who prefer the convenience of a robo-advisor, Innicement
            Digital Advisor will build a customized portfolio and continue to
            optimize your investments over time. You get the benefit of
            Innicement time-tested philosophy delivered on a modern, all-digital
            platform that can evolve with your needs.
          </p>
          <NavButton>Learn More</NavButton>{" "}
        </div>
      </section>
      <section className="min-h-screen">
        <SubHeading>Preferred Rewards</SubHeading>
        <p>
          Investment balances can help you earn Preferred Rewards benefits and
          pricing discounts. Members enjoy program benefits including credit
          card rewards bonuses, discounts on home and auto loans, monthly
          account maintenance fee waivers, and more.
          <button>Learn More</button>
        </p>
      </section>
      <section className="get-started min-h-screen">
        <SubHeading>Get up to when you invest in Innicement</SubHeading>
      </section>
    </Layout>
  );
}

export default App;
