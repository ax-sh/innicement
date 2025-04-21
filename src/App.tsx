import clsx from 'clsx';
import React from 'react';
import { SubHeading, Summary } from './components';
import Layout from './components/Layout';
import { GetStartedButton, NavButton } from './components/Nav';
import Hero from './container/Hero';
import Pricing from './container/Pricing';
import './App.scss';

function Info() {
  return (
    <section id="info" className="grid grid-cols-12 gap-8">
      <div className="col-span-3">
        <img alt={"difficult roads lead to beautiful destinations"} src="./nik-z1d-LP8sjuI-unsplash.jpg" />
      </div>
      <div className="col-span-full md:col-span-6 flex flex-col gap-4">
        <SubHeading>Everything you need to invest the way you want</SubHeading>
        <div>
          <Summary title="Investing ideas">
            <p>
              Innicement has the guidance and tools to confidently pursue your investing goals and
              build your portfolio.
            </p>
          </Summary>
          <Summary title="$0 trades">lorem</Summary>
          <Summary title="More rewards">lorem</Summary>
          <Summary title="Investing & connected">lorem</Summary>
        </div>
      </div>
      <div className="col-span-3 flex flex-col overflow-hidden gap-2">
        <img alt={"sign"} src="./austin-chan-ukzHlkoz1IE-unsplash.jpg" />
        <img alt={"telephone booth"} src="./marjan-blan-E4HksMblrdU-unsplash.jpg" />
      </div>
    </section>
  );
}

function ComparisonProgress({
  label,
  width,
  cost,
}: {
  width: string
  label: string
  cost: string
}) {
  return (
    <div className="ComparisonProgress border-3 text-white w-full">
      <div className={clsx(width, 'bg-black gap-8 p-2 overflow-hidden')}>
        <div className="flex justify-between items-center flex-wrap">
          <span className="text-3xl">{label}</span>
          <img className="flex-grow h-10 object-stretch" src="compare_progress_arrow.svg" />
          <span className="text-green text-3xl">{cost}</span>
        </div>
      </div>
    </div>
  );
}

function Comparison() {
  return (
    <section className="flex flex-col gap-10">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <SubHeading>Lower costs can add up to big savings</SubHeading>
        <img src="lower_cost.svg" />
      </div>
      <div className="flex flex-col gap-5 overflow-hidden">
        <ComparisonProgress label="Innicement" width="w-8/12" cost="$87,980" />
        <ComparisonProgress width="w-7/12" label="Average InvestmentFirm" cost="$77,980" />
      </div>
    </section>
  );
}

function App() {
  return (
    <Layout className="container flex flex-col gap-10">
      <Hero />
      <Info />
      <Pricing />
      <Comparison />

      <section className=" grid grid-cols-2 gap-4">
        <div className="grid grid-cols-2 gap-4">
          <img alt="stock graph" src="./tech-daily-ztYmIQecyH4-unsplash.jpg" />
          <img alt={"stock market"} src="./dylan-calluy-JpflvzEl5cg-unsplash.png" />
        </div>
        <div className="flex flex-col gap-8">
          <SubHeading>Innicement Digital Advisor</SubHeading>
          <p>
            For those who prefer the convenience of a robo-advisor, Innicement Digital Advisor will
            build a customized portfolio and continue to optimize your investments over time. You
            get the benefit of Innicement time-tested philosophy delivered on a modern, all-digital
            platform that can evolve with your needs.
          </p>
          <NavButton>Learn More</NavButton>
        </div>
      </section>
      <section className="flex flex-col md:flex-row gap-4">
        <div className="md:w-1/2 flex flex-col gap-5">
          <SubHeading>Preferred Rewards</SubHeading>
          <p>
            Investment balances can help you earn Preferred Rewards benefits and pricing discounts.
            Members enjoy program benefits including credit card rewards bonuses, discounts on home
            and auto loans, monthly account maintenance fee waivers, and more.
          </p>
          <NavButton>Learn More</NavButton>
        </div>
        <img className="md:w-1/2" src="./jeremy-bezanger-glY0yf3lxA4-unsplash-scaled.jpg" />
        {/* <Circles /> */}
      </section>
      <section className="get-started grid place-items-center py-6">
        <div className="flex flex-col gap-10 items-start p-20">
          <SubHeading>
            <div>Get up </div>
            <div>to when you invest in</div>
            <strong className="highlight">Innicement</strong>
          </SubHeading>
          <GetStartedButton />
        </div>
      </section>
    </Layout>
  );
}

export default App;
