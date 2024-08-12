import React from 'react';

import { classNameForNavLink } from './customClassName';

const ListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className={`${classNameForNavLink} dark:border-transparent`}>
    {children}
  </li>
);

const Separator: React.FC = () => (
  <span className="border-l border-gray-400 h-"></span>
);

export default function LiButton() {
  return (
    <>
      <Separator />
      <ListItem>
        <button className="flex items-center">{'Call me'}</button>
      </ListItem>
      <Separator />
      <ListItem>
        <div className="flex items-center">{'+7 (911) 818-34-10'}</div>
      </ListItem>
    </>
  );
}
