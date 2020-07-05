import React from "react";
import MyNavbar from "./components/Navbar/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/Main/main";
import MoviePage from "./components/MoviePage/MoviePage";
import ActorPage from "./components/ActorPage/ActorPage";
import { Route, Switch } from "react-router-dom";
import SearchResult from "./components/Navbar/searchResult";
import { MovieProvider } from "./StateProvider";

export default function App() {
  return (
    <MovieProvider>
      <MyNavbar />
      <Switch>
        <Route path="/iraq-bc-movies-project-students/" exact component={Main} />
        <Route path={`/iraq-bc-movies-project-students/movie/:movieId`} component={MoviePage} />
        <Route path={`/iraq-bc-movies-project-students/people/:castId`} component={ActorPage} />
        <Route exact path="/iraq-bc-movies-project-students/search" component={SearchResult} />
      </Switch>
    </MovieProvider>
  );
}
