import * as React from 'react';
import classNames from 'classnames';

interface TopAppBarProps {
  id?: string;
  className?: string;
  title: string;
}

export class TopAppBar extends React.PureComponent<TopAppBarProps> {

  public render(): React.ReactNode {
    return <header id={this.props.id} className={
      classNames(this.props.className, 'mdc-top-app-bar', 'app-bar')
    }>
      <div className="mdc-top-app-bar__row">
        <section className={classNames('mdc-top-app-bar__section', 'mdc-top-app-bar__section--align-start')}>
          <a href="#" className={classNames('material-icons', 'mdc-top-app-bar__navigation-icon')}>menu</a>
          <span className={classNames('mdc-top-app-bar__title')}>{this.props.title}</span>
        </section>
        <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
        {
          Array.isArray(this.props.children) && this.props.children.map((component) => component) || this.props.children
        }
        </section>
      </div>
    </header>;
  }
}
