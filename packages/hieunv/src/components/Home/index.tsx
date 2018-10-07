import * as React from 'react';
import {Link, RouteComponentProps} from "@reach/router";
import {Drawer, Header, AppContent, MainContent, List} from '@hieunv/react-mdc/components';
import {NavConnector} from "@hieunv/react-mdc/connectors";
import classNames = require("classnames");

export class Home extends React.PureComponent<RouteComponentProps> {

  private navConnector: NavConnector;

  constructor(props: RouteComponentProps) {
    super(props);
    this.navConnector = new NavConnector();
  }

  public componentDidMount(): void {
    this.navConnector.connect();
  }

  public componentWillUnmount(): void {
    this.navConnector.destroy();
  }

  public render(): React.ReactNode {
    return <div className="Home">
      <Drawer dismissible={true}>
        <List>
          <Link className={classNames('mdc-list-item', 'mdc-list-item--activated')} to="dash" aria-selected="true">
            <i className={classNames('material-icons', 'mdc-list-item__graphic')} aria-hidden="true">dashboard</i>
            <span className="mdc-list-item__text">Dash</span>
          </Link>
          <Link className="mdc-list-item" to="pie">
            <i className={classNames('material-icons', 'mdc-list-item__graphic')} aria-hidden="true">pie_chart</i>
            <span className="mdc-list-item__text">Pie</span>
          </Link>
          <Link className="mdc-list-item" to="line">
            <i className={classNames('material-icons', 'mdc-list-item__graphic')} aria-hidden="true">multiline_chart</i>
            <span className="mdc-list-item__text">Line</span>
          </Link>
        </List>
      </Drawer>
      <AppContent>
        <Header>react-mdc</Header>
        <MainContent>
          <div className={classNames('mdc-top-app-bar--fixed-adjust')}><span>Test</span></div>
        </MainContent>
      </AppContent>
    </div>
  }
}
