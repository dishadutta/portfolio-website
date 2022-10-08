import logo from './logo.svg';
import './App.css';

import { BrowserRouter } from "react-router-dom";
import MainRouter from "./MainRouter";
import Main from './component/home';

const App = () => (
  <BrowserRouter>
      <MainRouter />
  </BrowserRouter>
);

export default App;