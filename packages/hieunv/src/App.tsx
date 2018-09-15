import * as React from 'react';
import * as logo from './logo.svg';
import * as css from './App.scss';


import { Button } from '@hieunv/react-mdc';

class App extends React.Component {
    constructor(props: any) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick($event: any) : void {
        console.log($event)
    }
  render() {
    return (
      <div className={css['App']}>
        <header className={css['App-header']}>
          <img src={logo} className={css['App-logo']} alt="logo" />
          <p>React with TypeScript & SASS</p>
            <Button onClick={this.onClick}>test</Button>
        </header>
      </div>
    );
  }
}

export default App;
