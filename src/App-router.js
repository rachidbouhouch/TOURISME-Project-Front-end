import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";

const Home = lazy(() => import("./Pages/LandingPage"));

export default function router() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
          <Route exact path="/" component={Home} />
      </Suspense>
    </Router>
  );
}