import './App.css';
import Blog from './components/dashboard/Blog'
// import Themeroutes from "./routes/Router";
import { useRoutes } from "react-router-dom";
import Themeroutes from "./routes/Router";


const App = () => {
  const routing = useRoutes(Themeroutes);

  return <div className="dark">{routing}</div>;
  // return(
  // <div className="App">
  //     <Blog/>
  //   </div>)
};

export default App;
