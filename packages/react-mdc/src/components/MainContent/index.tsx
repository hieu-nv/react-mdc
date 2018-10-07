import * as React from 'react';

export class MainContent extends React.PureComponent {

  constructor(props: any) {
    super(props);
  }

  public render(): React.ReactNode {
    return <main id="main-content" className='main-content'>{this.props.children}</main>
  }
}
