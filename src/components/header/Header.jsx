import logo from '../../assets/logo.png';
import { Button } from '../button/Button';
import headerStyle from './Header.module.css';

export function Header() {
    return (
        <header className={headerStyle.mainHeader}>
            <img className={headerStyle.logo} src={logo} alt="Logo" />
            <div className={headerStyle.stats}>
                <div className={headerStyle.detail}>
                    <span className={headerStyle.label}>Viso:</span>
                    <span className={headerStyle.value}>0</span>
                </div>
                <div className={headerStyle.detail}>
                    <span className={headerStyle.label}>Todo:</span>
                    <span className={headerStyle.value}>0</span>
                </div>
                <div className={headerStyle.detail}>
                    <span className={headerStyle.label}>In-progress:</span>
                    <span className={headerStyle.value}>0</span>
                </div>
                <div className={headerStyle.detail}>
                    <span className={headerStyle.label}>Done:</span>
                    <span className={headerStyle.value}>0</span>
                </div>
                <div className={headerStyle.detail}>
                    <span className={headerStyle.label}>Deleted:</span>
                    <span className={headerStyle.value}>0</span>
                </div>
            </div>
            <Button />
        </header>
    );
}