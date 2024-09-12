import style from './Button.module.css';

export function Button() {
    return (
        <button className={style.btn}>
            <span className={style.icon}>+</span>
            <span className={style.text}>New task</span>
        </button>
    );
}
