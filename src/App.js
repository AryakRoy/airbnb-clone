import './App.css';
import Home from "./pages/Home"
import SearchPage from './pages/SearchPage';
import Header from "./components/Header"
import Footer from "./components/Footer"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={SearchPage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
