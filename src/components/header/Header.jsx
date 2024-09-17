import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import { Button } from '../button/Button';
import { Stats } from '../stats/Stats';
import style from './Header.module.css';
import logo from '../../assets/logo.png';
import { LightboxContext } from '../../context/LightboxContext';

export function Header() {
    const { showLightbox } = useContext(LightboxContext);
    const { updateOptionsMenuStatus } = useContext(GlobalContext);

    return (
        <header onClick={() => updateOptionsMenuStatus(-1)} className={style.mainHeader}>
            <img className={style.logo} src={logo} alt="Logo" />
            <Stats />
            <Button text="New task" icon="+" onClick={showLightbox} />
        </header>
    );
}