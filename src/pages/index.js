import React from 'react';
import Input from '../components/Input';
import List from '../components/List';

import "../../styles/global.css";

export default function Home() {
  return (
    <div>
      <div className="logo"></div>
      <Input />
      <List />
    </div>
  )
}
