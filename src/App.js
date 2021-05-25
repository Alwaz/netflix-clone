import "./App.css";
import Rows from "./Components/Rows";
import request from "./request";
import Banner from "./Components/Banner";

function App() {
  return (
    <div className="App">
      <Banner />
      <Rows
        originals
        title="NETFLIX ORIGNALS"
        fetchUrl={request.fetchNetflixOriginals}
      />
      <Rows title="Trending Now" fetchUrl={request.fetchTrending} />
      <Rows title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Rows title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Rows title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Rows title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
    </div>
  );
}

export default App;
