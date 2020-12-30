import { React } from "react";
import './css/App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Container from '@material-ui/core/Container';
import ToDoList from "./components/ToDoList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContextApp from "./components/context/ContextApp";
import Main from "./components/useEffect/Main";
import CompA from "./components/axios/CompA";
import { Route, Switch } from "react-router-dom";
import About from "./components/router/About";
import Home from "./components/router/Home";
import Contact from "./components/router/Contact";
import Error from "./components/router/Error";
import Menu from "./components/router/Menu";



function App() {
  return (

    // <Container fixed>
    //   <Header />
    //   <ToDoList />
    //   <Footer />
    // </Container>

    // For Complex API and useContext concept
    // <ContextApp />

    // For useEffect Concept
    // <Main />

    // For axios Rest API concept
    // <CompA />

    // For Router Concept
    <>
      <Menu />
      <Switch>
        <Route path="/" component={Home} exact />

        {/* <Route path="/about" component={About} exact /> */}

        {/* Passing props in given route element */}
        {/* <Route path="/about" component={() => <About name="About" />} exact /> */}

        {/* same as the above but method has change from 'component' to 'render' */}
        <Route path="/about" render={() => <About name="About" />} exact />

        <Route path="/contact" component={Contact} exact />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;

