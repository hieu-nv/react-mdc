import * as React from 'react';
import {Link, RouteComponentProps} from '@reach/router';
import {Drawer, Header, AppContent, MainContent, List, Button, ButtonIcon} from '@hieunv/react-mdc/components';
import {NavConnector} from '@hieunv/react-mdc/connectors';
import classNames = require('classnames');

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
          <div className={classNames('mdc-top-app-bar--fixed-adjust')}>
            <h1>Button</h1>
            <div className="buttons">
              <Button>default buttton</Button>
              <Button raised={true}>raised button</Button>
              <Button unelevated={true}>unelevated button</Button>
              <Button outlined={true}>outlined button</Button>
              <Button dense={true}>dense button</Button>
              <Button icon="favorite">xxx</Button>
              <Button icon={<ButtonIcon>favorite</ButtonIcon>}>xx</Button>
            </div>
          </div>
        </MainContent>
      </AppContent>
    </div>;
  }
}
