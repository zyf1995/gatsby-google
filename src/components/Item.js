import React from 'react'

import * as moduleStyles from './list.module.css';

export default function Item({ icon, name, clickHandle }) {
  return (
    <>
      <div
        role="button"
        tabIndex="0"
        className={moduleStyles.tile}
        onClick={clickHandle}
        onKeyDown={clickHandle}
      >
        <div className={moduleStyles.tileIcon}>
          <img src={icon} alt="" />
        </div>
        <div className={moduleStyles.tileTitle}>
          <span>{name}</span>
        </div>
      </div>
    </>
  )
}
