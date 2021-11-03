import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SecuredRoute from "./components/atoms/SecuredRoute";
import Login from "./components/organisms/Login";
import AuthCallback from "./components/organisms/AuthCallback";
import Home from "./components/organisms/Home";
import ShowStreamsPerGame from "./components/organisms/ShowStreamsPerGame";
import ShowHighestViewPerGame from "./components/organisms/ShowHighestViewPerGame";
import ShowMedianViewer from "./components/organisms/ShowMedianViewer";
import ShowStreams from "./components/organisms/ShowStreams";
import ShowTopStreams from "./components/organisms/ShowTopStreams";
import StreamsWithSameViewCount from "./components/organisms/StreamsWithSameViewCount";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/callback">
          <AuthCallback />
        </Route>
        <Route path="/streams/game">
          <SecuredRoute>
            <ShowStreamsPerGame />
          </SecuredRoute>
        </Route>
        <Route path="/viewer/game/high">
          <SecuredRoute>
            <ShowHighestViewPerGame />
          </SecuredRoute>
        </Route>
        <Route path="/viewer/median">
          <SecuredRoute>
            <ShowMedianViewer />
          </SecuredRoute>
        </Route>
        <Route path="/streams/odd">
          <SecuredRoute>
            <ShowStreams type="odd" />
          </SecuredRoute>
        </Route>
        <Route path="/streams/even">
          <SecuredRoute>
            <ShowStreams type="even" />
          </SecuredRoute>
        </Route>
        <Route path="/streams/top100/asc">
          <SecuredRoute>
            <ShowTopStreams sort="asc" />
          </SecuredRoute>
        </Route>
        <Route path="/streams/top100/desc">
          <SecuredRoute>
            <ShowTopStreams sort="desc" />
          </SecuredRoute>
        </Route>
        <Route path="/viewer/same/count">
          <SecuredRoute>
            <StreamsWithSameViewCount />
          </SecuredRoute>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
