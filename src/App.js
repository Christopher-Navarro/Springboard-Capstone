import "./App.css";
import "./CharacterPage";
import "./HousesPage";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import CharPage from "./CharacterPage";
import HousesPage from "./HousesPage";
import BookPage from "./BookPage";

function Home() {
  return (
    <div className="App">
      <h1>A Song of Ice and Fire Encyclopedia</h1>
      <div className="Headings image-container">
        <div>
          <h2 className="label">
            <a href="/characters">Characters</a>
          </h2>
          <Link to="/characters">
            <img src="https://i.pinimg.com/originals/1f/80/2c/1f802c3bbe2253fb4c53c57eb30dbeec.jpg"></img>
          </Link>
        </div>
        <div>
          <h2 className="label">
            <a href="/houses">Houses</a>
          </h2>
          <Link to="/houses">
            <img src="https://c4.wallpaperflare.com/wallpaper/910/396/869/game-of-thrones-a-song-of-ice-and-fire-tv-series-arms-george-r-r-martin-house-arryn-house-mormont-architecture-houses-hd-art-wallpaper-preview.jpg"></img>
          </Link>
        </div>
        <div>
          <h2 className="label">
            <a href="/books">Books</a>
          </h2>
          <Link to="/books">
            <img src="https://m.media-amazon.com/images/I/71zeljzAalL._AC_UF894,1000_QL80_.jpg"></img>
          </Link>
        </div>
      </div>
    </div>
  );
}
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/characters" element={<CharPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/houses" element={<HousesPage />} />
        <Route path="/books" element={<BookPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
