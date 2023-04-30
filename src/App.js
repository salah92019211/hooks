import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import MovieList from './components/MovieList/MovieList';
import AddMovie from './components/AddMovie';
import Filter from './components/Filter';
import ReactDOM from 'react-dom';

function App() {
  const[keyWords,setKeyWords]=useState('')
  const[rating,setRating]=useState(1)
  const[movies,setMovies]=useState([
    {id:"01",title:"Soul",description:"Pixar's `Soul` is about a jazz pianist who has a near-death experience and gets stuck in the afterlife, contemplating his choices and regretting the existence that he mostly took for granted.",rate:5,img:"https://th.bing.com/th/id/OIP.pqCAF0w6joXw23vSKQX_tgHaK-?pid=ImgDet&rs=1"},
    {id:"02",title:"Big Hero 6",description:"From Walt Disney Animation Studios, the team behind The Princess and the Frog, Frozen, and Wreck-It Ralph, comes Big Hero 6, an action-packed comedy-adventure about the special bond that develops between Baymax (Scott Adsit), an adorable, plus-sized inflatable robot, and prodigy Hiro Hamada (Ryan Potter).",rate:4,img:"http://1.bp.blogspot.com/-ivQ1javvMy8/VKWLBesekPI/AAAAAAAAQ84/lNLaBG29vtc/s1600/bighero6personajes.jpg"},
    {id:"03",title:"Interstellar",description:"A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",rate:3,img:"https://th.bing.com/th/id/R.17be8e82b5bbd79b815efce148304bae?rik=tdb0eqneLpYMdA&pid=ImgRaw&r=0"}
  ])
  const addNewMovie=(newMovie)=>{
    setMovies([...movies,newMovie])
  }
  const searchMovie=(text)=>{
    setKeyWords(text)
  }
  const rateMovie=(num)=>{
    setRating(num)
  }
  return (
    <div className="App">

      <AddMovie addNewMovie={addNewMovie}></AddMovie>
      <Filter searchMovie={searchMovie} rateMovie={rateMovie}></Filter>
      <MovieList movies={movies.filter(elm=>(elm.title.toLowerCase().includes(keyWords.toLowerCase().trim()))&&(elm.rate>=rating))}></MovieList> 
    </div>
  );
}

export default App;
