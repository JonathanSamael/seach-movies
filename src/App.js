import React, { useEffect, useState } from 'react'
import './App.css'
import { TmdbList } from './Tmdb'
import { Header } from './components/header'
import { FeaturedMovie } from './components/featuredMovie'
import { MovieRow } from './components/movieRow'
import { Footer } from './components/footer'

function App() {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      let list = await TmdbList.getHomeList();
      setMovieList(list);

      let toprated = list.filter(i => i.slug === 'toprated');
      let randonChosen = Math.floor(Math.random() * (toprated[0].items.results.length - 1))
      let chosen = toprated[0].items.results[randonChosen]
      let chosenInfo = await TmdbList.getMovieInfo(chosen.id, 'movie');
      setFeaturedData(chosenInfo)
    }
    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true)
      } else {
        setBlackHeader(false)
      }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);

  return (
    <div className='page'>

      <Header black={blackHeader} />

      {featuredData &&
        <FeaturedMovie item={featuredData} />
      }
      <section className='lists'>
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}

      </section>

      <Footer />

      {movieList.length <= 0 &&
        <div className='loading'>
          <div className='spinner' />
        </div>
      }
    </div>
  )
}

export { App }