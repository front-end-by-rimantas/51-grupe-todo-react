import style from './Tasks.module.css';

export function Tasks() {
    return (
        <section className="task-content">
            <div className="column">
                <h2 className="title">Todo</h2>
                <ul className="list">
                    <li className="task">
                        <div className="header">
                            <div className="more">...</div>
                            <div className="more-actions" data-visible="false">
                                <button type="button">Move up</button>
                                <button type="button">Move down</button>
                                <hr />
                                <button type="button">In progress</button>
                                <button type="button">Done</button>
                                <hr />
                                <button type="button">Delete</button>
                            </div>
                        </div>
                        <div className="content">
                            <p>Uzduoties tekstas</p>
                        </div>
                        <div className="footer">
                            <p>Deadline: 2024-09-04</p>
                        </div>
                    </li>
                    <li className="task">
                        <div className="header">
                            <div className="more">...</div>
                            <div className="more-actions" data-visible="false">
                                <button type="button">Move up</button>
                                <button type="button">Move down</button>
                                <hr />
                                <button type="button">In progress</button>
                                <button type="button">Done</button>
                                <hr />
                                <button type="button">Delete</button>
                            </div>
                        </div>
                        <div className="content">
                            <p>Uzduoties tekstas</p>
                        </div>
                        <div className="footer">
                            <p>Deadline: 2024-09-04</p>
                        </div>
                    </li>
                    <li className="task">
                        <div className="header">
                            <div className="more">...</div>
                            <div className="more-actions" data-visible="false">
                                <button type="button">Move up</button>
                                <button type="button">Move down</button>
                                <hr />
                                <button type="button">In progress</button>
                                <button type="button">Done</button>
                                <hr />
                                <button type="button">Delete</button>
                            </div>
                        </div>
                        <div className="content">
                            <p>Uzduoties tekstas: blocked</p>
                        </div>
                        <div className="footer">
                            <p>Deadline: 2024-09-04</p>
                        </div>
                    </li>
                    <li className="task">
                        <div className="header">
                            <div className="more">...</div>
                            <div className="more-actions" data-visible="false">
                                <button type="button">Move up</button>
                                <button type="button">Move down</button>
                                <hr />
                                <button type="button">In progress</button>
                                <button type="button">Done</button>
                                <hr />
                                <button type="button">Delete</button>
                            </div>
                        </div>
                        <div className="content">
                            <p>Uzduoties tekstas</p>
                        </div>
                        <div className="footer">
                            <p>Deadline: 2024-09-04</p>
                        </div>
                    </li>
                    <li className="task">
                        <div className="header">
                            <div className="more">...</div>
                            <div className="more-actions" data-visible="false">
                                <button type="button">Move up</button>
                                <button type="button">Move down</button>
                                <hr />
                                <button type="button">In progress</button>
                                <button type="button">Done</button>
                                <hr />
                                <button type="button">Delete</button>
                            </div>
                        </div>
                        <div className="content">
                            <p>Uzduoties tekstas</p>
                        </div>
                        <div className="footer">
                            <p>Deadline: 2024-09-04</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="column">
                <h2 className="title">In progress</h2>
                <ul className="list">LIST...</ul>
            </div>
            <div className="column">
                <h2 className="title">Done</h2>
                <ul className="list">LIST...</ul>
            </div>
        </section>
    );
}
