import * as React from 'react';
import classNames from 'classnames';

interface ActionItemProps {
  className?: string;
}

export class ActionItem extends React.PureComponent<ActionItemProps> {
  public render(): React.ReactNode {
    return <i className={
      classNames(
        this.props.className,
        'material-icons',
        'mdc-top-app-bar__action-item',
      )
    }>{this.props.children}</i>;
  }
}
