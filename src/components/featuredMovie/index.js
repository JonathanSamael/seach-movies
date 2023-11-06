import React from "react";
import './featuredMovie.css';

const FeaturedMovie = ({ item }) => {

    let firstDate = new Date(item.release_date);
    let genres = [];
    for (let i in item.genres) {
        genres.push(item.genres[i].name);
    }

    let backgroundPoster = item.backdrop_path ?? item.poster_path;

    let description = item.overview;
    if (description.length > 200) {
        description = description.substring(0, 200) + '...';
    }

    return (
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(http://image.tmdb.org/t/p/original${backgroundPoster})`
        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">{item.title}</div>
                    <div className="featured--info">
                        <div className="featured--points">{item.vote_average} pontos</div>
                        <div className="featured--year">{firstDate.getFullYear() ?? ''}</div>
                        <div className="featured--seasons">Título original: {item.original_title}
                        </div>
                    </div>
                    <div className="featured--description">{description}</div>
                    <div className="featured--buttons">
                        <a className="featured--watchbutton" href={`/watch/${item.id}`}>▶ Assistir</a>
                        <a className="featured--mylistbutton" href={`/watch/add/${item.id}`}>+ Minha Lista</a>
                    </div>
                    <div className="featured--genres"><strong>Gêneros:</strong> {genres.join(', ')}</div>
                </div>
            </div>
        </section>
    );
}

export { FeaturedMovie }