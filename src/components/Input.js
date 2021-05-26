import React from 'react'

import * as moduleStyles from './input.module.css';

export default function Input() {
  return (
    <div className={moduleStyles.inputWrapper}>
      <input className={moduleStyles.input} type="search" placeholder="在 Google 上搜索，或者输入一个网址" />
      <span></span>
    </div>
  )
}
