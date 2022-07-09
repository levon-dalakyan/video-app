import React from 'react';

import { footerList1, footerList2, footerList3 } from '../../utils/constants';

import { List } from './List';

export const Footer = () => {
  return (
    <div className="mt-6 hidden xl:block">
      <List items={footerList1} mt={false} />
      <List items={footerList2} mt />
      <List items={footerList3} mt />
      <p className="mt-5 text-gray-500">2022 OkTok</p>
    </div>
  );
};
