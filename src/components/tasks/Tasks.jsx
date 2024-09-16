/* eslint-disable react/prop-types */
import { TaskCard } from './TaskCard';
import style from './Tasks.module.css';

export function Tasks({ showOptionsMenu, cardMenuVisibleById }) {
    return (
        <section className={style.taskContent}>
            <div className={style.column}>
                <h2 className={style.title}>Todo</h2>
                <ul className={style.list}>
                    <TaskCard id={1} showOptionsMenu={showOptionsMenu} cardMenuVisibleById={cardMenuVisibleById} />
                    <TaskCard id={2} showOptionsMenu={showOptionsMenu} cardMenuVisibleById={cardMenuVisibleById} />
                    <TaskCard id={3} showOptionsMenu={showOptionsMenu} cardMenuVisibleById={cardMenuVisibleById} />
                    <TaskCard id={4} showOptionsMenu={showOptionsMenu} cardMenuVisibleById={cardMenuVisibleById} />
                </ul>
            </div>
            <div className={style.column}>
                <h2 className={style.title}>In progress</h2>
                <ul className={style.list}>
                    <TaskCard id={5} showOptionsMenu={showOptionsMenu} cardMenuVisibleById={cardMenuVisibleById} />
                </ul>
            </div>
            <div className={style.column}>
                <h2 className={style.title}>Done</h2>
                <ul className={style.list}>
                    <TaskCard id={6} showOptionsMenu={showOptionsMenu} cardMenuVisibleById={cardMenuVisibleById} />
                </ul>
            </div>
        </section>
    );
}
