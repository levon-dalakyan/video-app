import React, { FC } from 'react';

interface IProps {
  items: string[];
  mt: boolean;
}

export const List: FC<IProps> = ({ items, mt }) => {
  return (
    <ul
      className={`flex gap-x-2 gap-y-1 flex-wrap ${
        mt && 'mt-4'
      } text-sm text-gray-500`}
    >
      {items.map((item) => (
        <li className="hover:underline cursor-pointer" key={item}>
          {item}
        </li>
      ))}
    </ul>
  );
};
