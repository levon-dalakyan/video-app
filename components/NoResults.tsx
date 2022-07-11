import React, { FC } from 'react';

export interface IProps {
  text: string;
}

export const NoResults: FC<IProps> = ({ text }) => {
  return <div>{text}</div>;
};
