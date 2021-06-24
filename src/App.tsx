import Category from './components/Category';
import './styles/compiled.css'
import { getPopular, getTopRated } from './utils/queries';

function App() {

  return (
    <div className="bg-black min-h-screen overflow-x-hidden">
        <Category title="Popular Choices" query={getPopular} />
        <Category title="Top Rated" query={getTopRated} />
        {/* <Category title="Latest" query={getLatest} /> */}
    </div>
  );
}

export default App;
