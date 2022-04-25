import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiTrash2, FiSearch } from 'react-icons/fi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './style.css';

export default function Favorites() {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const myListFavorites = localStorage.getItem('favorites');
        const favorites = JSON.parse(myListFavorites) || [];

        setFavorites(favorites);
    }, []);

    function handleDelete(id) {
        let favoritesFilter = favorites.filter((favorite) => {
            return favorite.id !== id;
        });
        setFavorites(favoritesFilter);
        localStorage.setItem('favorites', JSON.stringify(favoritesFilter));
        toast.success('Filme excluído com sucesso!');
    }

    return (
        <div>
            <div className='container mt-40'>
                <h1>Favoritos</h1>

                <div className='list-favorites mt-24'>
                    {favorites.map((favorite) => {
                        return (
                            <div className='favorite' key={favorite.id}>
                                <h2>{favorite.nome}</h2>
                                <div className='btn-group flex'>
                                    <Link
                                        className='btn btn-details flex justify-content-center align-items-center gap-8'
                                        to={`/detalhes/${favorite.id}`}
                                    >
                                        <FiSearch />
                                        Ver detalhes
                                    </Link>
                                    <button
                                        onClick={() =>
                                            handleDelete(favorite.id)
                                        }
                                        className='btn btn-delete flex justify-content-center align-items-center gap-8'
                                    >
                                        <FiTrash2 />
                                        Excluir
                                    </button>
                                </div>
                            </div>
                        );
                    })}

                    {favorites.length === 0 && (
                        <p>Você ainda não adicionou nenhum filme. </p>
                    )}
                </div>
            </div>
        </div>
    );
}
