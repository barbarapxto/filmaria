import { Link } from 'react-router-dom';
import './style.css';

export default function Nav() {
    return (
        <nav>
            <ul className='nav-list'>
                <li className='nav-item'>
                    <Link to='/'>Início</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/favoritos'>Favoritos</Link>
                </li>
            </ul>
        </nav>
    );
}
