import * as React from 'react';
import classNames from 'classnames';
import { Content } from "./Content";

interface DrawerProps {
  dismissible: boolean;
}

export class Drawer extends React.PureComponent<DrawerProps> {
  public render(): React.ReactNode {
    return <aside id="mdc-drawer"
                  className={classNames({'mdc-drawer': true, 'mdc-drawer--dismissible': this.props.dismissible})}>
      <Content>{this.props.children}</Content>
    </aside>;
  }
}
