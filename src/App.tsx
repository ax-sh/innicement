import clsx from "clsx";
import React from "react";
import "./App.scss";
import { SubHeading } from "./components";
import Layout from "./components/Layout";
import { GetStartedButton } from "./components/Nav";

function Hero() {
  return (
    <section id="hero" className="grid grid min-h-[80vh] grid-cols-12">
      <div className="col-span-5 flex flex-col justify-evenly items-stretch">
        <img className="" />
        <h1 className="hero-title *header-1">
          Do more with investments on your own terms
        </h1>
        <GetStartedButton className="border-0" />
      </div>
      <div className="grid grid-cols-2 grid-rows-1">
        <div className="flex flex-col  col-span-1">
          <img className="flex-grow" />
          <p>
            Get helpful investing ideas and a cash bonus when you invest in a
            new account with Innicement
          </p>
        </div>
        {/* <div className="flex flex-col">
          <p>
            Get helpful investing ideas and a cash bonus when you invest in a new account with
            Innicement
          </p>
          <img className="flex-grow" />
        </div> */}
      </div>
    </section>
  );
}

function Info() {
  return (
    <section id="info" className="min-h-screen">
      <SubHeading>Everything you need to invest the way you want</SubHeading>
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
        <SubHeading>Innicement Digital Advisor</SubHeading>
      </section>
      <section className="min-h-screen">
        <SubHeading>Preferred Rewards</SubHeading>
      </section>
      <section className="min-h-screen">
        <SubHeading>Get up to when you invest in Innicement</SubHeading>
      </section>
    </Layout>
  );
}

export default App;
