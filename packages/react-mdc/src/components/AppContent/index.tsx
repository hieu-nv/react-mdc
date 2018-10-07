import * as React from 'react';

export class AppContent extends React.PureComponent {

  constructor(props: any) {
    super(props);
  }

  public render(): React.ReactNode {
    return <div className='mdc-drawer-app-content'>{this.props.children}</div>;
  }
}
