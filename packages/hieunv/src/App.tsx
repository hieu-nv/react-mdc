import * as React from 'react';
import {Router} from "@reach/router";
import {Home} from "./components";

export class App extends React.Component {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return <Router>
      <Home path="/*"/>
    </Router>;
  }
}
