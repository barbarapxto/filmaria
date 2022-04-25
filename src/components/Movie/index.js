import { Link } from 'react-router-dom';
import './style.css';

export default function Movie(props) {
    return (
        <article className='movie flex flex-direction-column align-items-center'>
            <h2>{props.title}</h2>
            <img src={props.poster} alt={`Poster do filme ${props.title}`} />
            <Link className='btn' to={`/detalhes/${props.id}`}>
                Ver mais
            </Link>
        </article>
    );
}
