import * as React from 'react';
import {Link, RouteComponentProps} from '@reach/router';
import {Drawer, TopAppBar, AppContent, MainContent, List, Button, ButtonIcon} from '@hieunv/react-mdc';
import {NavConnector} from '@hieunv/react-mdc/connectors';
import classNames = require('classnames');
import './Home.scss';
export class Home extends React.PureComponent<RouteComponentProps> {

  private navConnector: NavConnector;

  constructor(props: RouteComponentProps) {
    super(props);
    this.navConnector = new NavConnector();
    this.onClick = this.onClick.bind(this);
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
        <TopAppBar id="app-bar" title="react-mdc">

            <a href="#" className="material-icons mdc-top-app-bar__action-item" aria-label="Download">file_download</a>
            <a href="#" className="material-icons mdc-top-app-bar__action-item" aria-label="Print this page">print</a>
            <a href="#" className="material-icons mdc-top-app-bar__action-item" aria-label="Bookmark this page">bookmark</a>

        </TopAppBar>
        <MainContent>
          <div className={classNames('mdc-top-app-bar--fixed-adjust')}>
            <h1>Button</h1>
            <div className="buttons">
              <Button className="button-1" onClick={this.onClick}>default buttton</Button>
              <Button className="button-2" raised={true}>raised button</Button>
              <Button className="button-3" unelevated={true}>unelevated button</Button>
              <Button className="button-4" outlined={true}>outlined button</Button>
              <Button className="button-5" dense={true}>dense button</Button>
              <Button className="button-6" icon="favorite">xxx</Button>
              <Button className="button-7" icon={<ButtonIcon>favorite</ButtonIcon>}>xx</Button>
            </div>
          </div>
        </MainContent>
      </AppContent>
    </div>;
  }

  private onClick($event: React.MouseEvent<HTMLElement>): void {
    console.log(this);
    console.log($event);
  }
}
