import { nanoid } from 'nanoid';

export const navItems = [
  'Home',
  'About',
  'Investment',
  'Services',
  'News',
] as const;

export const services = [
  'Compare Services',
  'Investment Products',
  'Account & Plans',
  'Rollovers',
  'Transfers',
].map(item => ({ id: nanoid(), label: item }));

export const extra = [
  'Why Innicement',
  'Fees & commissions',
  'Benefits',
  'Account conveniences',
].map(item => ({ id: nanoid(), label: item }));
