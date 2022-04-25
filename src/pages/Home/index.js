import { useEffect, useState } from 'react';
import api from '../../services/api';
import Movie from '../../components/Movie';
import './style.css';

export default function Home() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getFilmes() {
            const response = await api.get('r-api/?api=filmes');
            setMovies(response.data);
            setLoading(false);
        }

        getFilmes();
    }, []);

    if (loading) {
        return (
            <div className='container flex justify-content-center'>
                <h2>Carregando filmes...</h2>
            </div>
        );
    }

    return (
        <div className='container mt-24 mb-24'>
            <div className='movie-list'>
                {movies.map((movie) => {
                    return (
                        <Movie
                            key={movie.id}
                            id={movie.id}
                            title={movie.nome}
                            poster={movie.foto}
                        />
                    );
                })}

                {movies.length === 0 && <h2>Não foram encontrados filmes</h2>}
            </div>
        </div>
    );
}
