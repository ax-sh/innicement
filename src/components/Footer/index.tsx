import clsx from 'clsx';
import React from 'react';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BsInstagram, BsLinkedin } from 'react-icons/bs';
import { ImReddit } from 'react-icons/im';
import { MdAlternateEmail } from 'react-icons/md';
import { RiFacebookFill } from 'react-icons/ri';
import { List } from '..';
import { extra, navItems, services } from '../constants';
import { LogoWithTextAndLink } from '../logo';

function FooterLinks() {
  return (
    <div className={clsx('grid flex-grow', 'gap-6', 'grid-cols-4')}>
      <List className="col-span-2  md:col-span-1 flex flex-col gap-5">
        {navItems.map(i => (

          <a className="cursor-pointer font-medium hover:font-bold" key={`footer-${i}`} href={`#${i}`}>
            {i}
          </a>
        ))}
      </List>
      <List className="col-span-2  md:col-span-1 flex flex-col gap-5">
        {services.map(({ id, label }) => (
          <a className="cursor-pointer font-medium hover:font-bold" key={id}>
            {label}
          </a>
        ))}
      </List>
      <List className="col-span-4 md:col-span-1 flex flex-col gap-5">
        {extra.map(({ id, label }) => (
          <a className="cursor-pointer font-medium hover:font-bold" key={id}>
            {label}
          </a>
        ))}
      </List>
      {/* <div></div> */}
    </div>
  );
}

function IconWrapper({ children }: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div className="border-2 rounded-full p-3 grid place-content-center cursor-pointer">
      {children}
    </div>
  );
}

function Social() {
  return (
    <List className="flex gap-3 pt-10">
      <IconWrapper>
        <RiFacebookFill size={30} />
      </IconWrapper>
      <IconWrapper>
        <BsInstagram size={30} />
      </IconWrapper>
      <IconWrapper>
        <BsLinkedin size={30} />
      </IconWrapper>
      <IconWrapper>
        <AiOutlineTwitter size={30} />
      </IconWrapper>
      <IconWrapper>
        <ImReddit size={30} />
      </IconWrapper>
      <IconWrapper>
        <MdAlternateEmail size={30} />
      </IconWrapper>
    </List>
  );
}

export default function Footer() {
  return (
    <footer>
      <div
        className={clsx('container', 'flex flex-col md:flex-row', 'items-start', 'py-10', 'gap-5')}
      >
        <LogoWithTextAndLink />
        <div className="flex flex-col flex-grow">
          <FooterLinks />
          <Social />
        </div>
      </div>
      <h2 className="text-center p-10">© ANP 2022. All rights reserved.</h2>
    </footer>
  );
}
