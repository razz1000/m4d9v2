import "./App.css";
import MyNav from "./components/MyNav";
import HeadingNavbar from "./components/HeadingNavbar";
import MyCarousel from "./components/MyCarousel";
import MyFooter from "./components/MyFooter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TVShows from "./components/TVShows";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/tv-shows" element={<TVShows />} />
        <Route path="/moviedetails/:movieID" element={<MovieDetails />} />
      </Routes>
      <div>
        <MyNav />
        <HeadingNavbar />
      </div>
      <div className="dark-netflix">
        <MyCarousel heading="Harry Potter" movie="Harry Potter" />
        <MyCarousel heading="James Bond" movie="James Bond" />
        <MyCarousel
          heading="The Lord of the Rings"
          movie="The Lord of The Rings"
        />
        <MyFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
