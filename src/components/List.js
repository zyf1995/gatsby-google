import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../hooks/useInput';
import Item from './Item';
import checkUrl from '../utils/checkUrl';
import getDomin from '../utils/getDomin';

import * as moduleStyles from './list.module.css';

export default function List() {
  const shortcutReducer = useSelector(state => state.shortcutReducer);
  const [visibility, setVisibility] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);
  const { input: nameInput, setValue: setName } = useInput('');
  const { input: urlInput, setValue: setUrl } = useInput('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (nameInput.value && urlInput.value) {
      setIsConfirm(true);
    } else {
      setIsConfirm(false);
    }
  }, [nameInput.value, urlInput.value]);

  const submit = () => {
    setName('');
    setUrl('');
    setVisibility(!visibility);
    dispatch({
      type: 'addShortcut', 
      payload: { name: nameInput.value, url: urlInput.value }
    });
  };

  const toggleModile = () => {
    if (visibility) {
      return (
        <div className={moduleStyles.dialog}>
          <div className={moduleStyles.mark}></div>
          <div className={moduleStyles.box}>
            <div className={moduleStyles.title}>添加快捷方式</div>
            <div>
              <div className={moduleStyles.form}>
                <label htmlFor="">
                  <span className={moduleStyles.marginB6}>名称</span><br />
                  <input type="text" {...nameInput} />
                </label>
              </div>
              <div className={moduleStyles.form}>
                <label htmlFor="">
                  <span className={moduleStyles.marginB6}>网址</span><br />
                  <input type="text" {...urlInput} />
                </label>
              </div>
            </div>
            <div className={moduleStyles.footer}>
              <button className={moduleStyles.cancelBtn} onClick={() => setVisibility(!visibility)}>取消</button>
              <button
                className={isConfirm?moduleStyles.confirmBtnActive:moduleStyles.confirmBtn}
                onClick={submit}
                disabled={isConfirm ? false : true}
              >
                完成
              </button>
            </div>
          </div>
        </div>
      );
    };
  };

  return (
    <div className={moduleStyles.container}>
      {(shortcutReducer.length > 0) && shortcutReducer.map((item, index) => {
        return <Item
          key={index} 
          icon={checkUrl(item.url) ? `${getDomin(item.url)}favicon.ico` : '/img/default-icon.png'}
          name={item.name}  
         />
      })}
      <Item
        icon="/img/add.svg"
        name="添加快捷方式"
        clickHandle={() => setVisibility(!visibility)}
      />
      {toggleModile()}
    </div>
  );
};
