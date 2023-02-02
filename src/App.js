import Header from "./Header";
import Content from "./component/Content";
import api from './api'
import Footer from "./component/Footer";
function App() {
  return (
    <div className="bg-black">
      <Header url={api.fetchTrending}/>
      <Content title="Trending now" url={api.fetchTrending}/>
      <Content title="Netflix original" url={api.fetchNetflixOriginals}/>
      <Content title="Top rated" url={api.fetchTopRated}/>
      <Footer/>
    </div>
  );
}

export default App;
