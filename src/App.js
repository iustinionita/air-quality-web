import "./App.scss";
import './_max600.scss';
import './_max400.scss';
import Search from "./Components/Search";
import Results from "./Components/Results";
import Footer from "./Components/Footer";
import { DataProvider } from "./Components/DataContext";

function App() {
  return (
    <>
      <DataProvider>
        <Results />
        <Search />
        <Footer />
      </DataProvider>
    </>
  );
}

export default App;
