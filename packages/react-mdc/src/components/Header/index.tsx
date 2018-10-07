import * as React from 'react';
import classNames from 'classnames';

export class Header extends React.PureComponent {
  constructor(props: any) {
    super(props);
  }

  public render(): React.ReactNode {

    return <header id="app-bar" className={classNames('mdc-top-app-bar', 'app-bar')}>
      <div className={classNames('mdc-top-app-bar__row')}>
        <section className={classNames('mdc-top-app-bar__section', 'mdc-top-app-bar__section--align-start')}>
          <a href="#" className={classNames('material-icons', 'mdc-top-app-bar__navigation-icon')}>menu</a>
          <span className={classNames('mdc-top-app-bar__title')}>{this.props.children}</span>
        </section>
      </div>
    </header>
  }
}
