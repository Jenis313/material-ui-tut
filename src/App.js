import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Notes from "./pages/Notes";
import Create from "./pages/Create";
import ErrorBoundary from "./error-boundary";
function App() {
  return (
    <Router>
      <ErrorBoundary>
        <Switch>
          <Route exact path="/">
            <Notes />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
        </Switch>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
