import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../services/api';
import { FiYoutube, FiStar } from 'react-icons/fi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.css';

export default function Detalhes() {
    const { id } = useParams();
    let navigate = useNavigate();

    const [details, setDetails] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getDetails() {
            const response = await api.get(`r-api/?api=filmes/${id}`);

            if (response.data.length === 0) {
                navigate('/');
                return;
            }

            setDetails(response.data);
            setLoading(false);
        }

        getDetails();

        return () => {
            //console.log('componente desmontado');
        };
    }, [id, navigate]);

    function setMovieAsFavorite() {
        const myListFavorites = localStorage.getItem('favorites');
        let favorites = JSON.parse(myListFavorites) || [];
        const hasMovie = favorites.some((fav) => fav.id === details.id);

        if (hasMovie) {
            toast.info('Você já adicionou esse filme como favorito!');
            return;
        }

        localStorage.setItem(
            'favorites',
            JSON.stringify([...favorites, details])
        );

        toast.success('Filme adicionado aos favoritos!');
    }

    if (loading) {
        return (
            <div className='container flex justify-content-center'>
                <h2>Carregando detalhes do filme...</h2>
            </div>
        );
    }
    return (
        <div className='container flex flex-direction-column gap-16 mt-40'>
            <img className='details-poster' src={details.foto} alt='' />
            <h1 className='details-title'>{details.nome}</h1>
            <p className='details-description'>{details.sinopse}</p>
            <div className='details-btn-group flex'>
                <button
                    onClick={setMovieAsFavorite}
                    className='btn flex align-items-center gap-8 btn-favorite'
                >
                    <FiStar />
                    Favoritar
                </button>
                <a
                    href={`https://youtube.com/results?search_query=${details.nome} trailer`}
                    target='_blank'
                    rel='noreferrer'
                    className='btn btn-watch flex align-items-center gap-8'
                >
                    <FiYoutube />
                    Assistir trailer
                </a>
            </div>
        </div>
    );
}
