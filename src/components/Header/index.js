import { Link } from 'react-router-dom';
import Nav from '../Nav';
import './style.css';

export default function Header() {
    return (
        <header>
            <div className='container container-header flex space-between align-items-center'>
                <Link className='logo' to='/'>
                    Filmaria
                </Link>
                <Nav />
            </div>
        </header>
    );
}
