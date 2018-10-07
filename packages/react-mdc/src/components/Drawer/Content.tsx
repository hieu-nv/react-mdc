import * as React from 'react';

export class Content extends React.PureComponent {
  public render(): React.ReactNode {
    return <div className="mdc-drawer__content">{this.props.children}</div>;
  }
}
