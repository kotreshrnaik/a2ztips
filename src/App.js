import TopMenuBarRB from "./Components/ReactBootstrap/IncludesRB/TopMenuBarRB";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import SpellingAndBasicEnglishCourse from "./Components/OnlineCourses/SpellingAndBasicEnglishCourse";
import EnglishGrammarCourse from "./Components/OnlineCourses/EnglishGrammarCourse";

function App() {
  return (
    <div>
      <Router>
        <TopMenuBarRB />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" exact component={About}></Route>
          <Route path="/online-courses/spelling-and-basic-english-course" exact component={SpellingAndBasicEnglishCourse}></Route>
          <Route path="/online-courses/english-grammar-course" exact component={EnglishGrammarCourse}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
