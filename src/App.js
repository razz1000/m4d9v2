import "./App.css";
import MyNav from "./components/MyNav";
import HeadingNavbar from "./components/HeadingNavbar";
import MyCarousel from "./components/MyCarousel";
import MyFooter from "./components/MyFooter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TVShows from "./components/TVShows";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/tv-shows" element={<TVShows />} />
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
