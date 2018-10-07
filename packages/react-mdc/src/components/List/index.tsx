import * as React from 'react';

export class List extends React.PureComponent {
  public render(): React.ReactNode {
    return <nav className="mdc-list">{this.props.children}</nav>
  }
}
