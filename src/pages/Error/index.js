import { Link } from 'react-router-dom';
import { FiHome } from 'react-icons/fi';

import './style.css';

export default function Error() {
    return (
        <div className='not-found flex flex-direction-column justify-content-center align-items-center gap-16 mt-40'>
            <h1>404</h1>
            <h2>A página solicitada não foi encontrada</h2>
            <Link className='btn flex align-items-center gap-8' to='/'>
                <FiHome />
                Retornar ao Início
            </Link>
        </div>
    );
}
