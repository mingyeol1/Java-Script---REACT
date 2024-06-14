import React from "react";
import {MdCheckBox, MdCheckBoxOutlineBlank} from 'react-icons/md'
import styles from './CheckBox.module.css'
import classNames from "classnames/bind";
//1. CheckBox 생성
//2. CheckBox icon 사용.
// react-icon을 설치. Font Awesome, Ionicons, material, Design icons등을
// 쉽게 사용할 수 있게하는 라이브러리 (다운 코드 : yarn add react-icons)
//3. classnames/bind 사용. : className.bind(styles);
// const cx = classNames.bind(styles);
// => cx('클래스이름')으로 사용이 가능함.
const cx = classNames.bind(styles); //styles 모듈을 묶어 줌.

function CheckBox({children, checked, ...rest}){
    return(
        <div className={cx('checkbox')}>
            <label>
                <input type="checkbox" checked={checked} {...rest} /> {/* className='checkbox test' 이거와 같음*/}
                <div className={cx('icon')}>
                    {checked? 
                    <MdCheckBox className={cx('checked-icon')}/> : <MdCheckBoxOutlineBlank />}</div>
            </label>
            <span>{children}</span>
        </div>
    );
}

export default CheckBox;