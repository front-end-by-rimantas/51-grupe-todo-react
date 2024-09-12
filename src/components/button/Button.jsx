/* eslint-disable react/prop-types */
import style from './Button.module.css';

export function Button(props) {
    const { text, icon } = props;
    const iconElement = !icon ? null : <span className={style.icon}>{icon}</span>;

    return (
        <button type='button' className={style.btn}>
            {iconElement}
            <span className={style.text}>{text}</span>
        </button>
    );
}
