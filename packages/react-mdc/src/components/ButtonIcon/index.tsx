import * as React from 'react';
import classNames from 'classnames';

export class ButtonIcon extends React.PureComponent {
  public render(): React.ReactNode {
    return <i className={classNames({ 'material-icons': true, 'mdc-button__icon': true })}>{this.props.children}</i>;
  }
}
