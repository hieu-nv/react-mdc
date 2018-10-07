import {MDCTopAppBar} from "@material/top-app-bar";
// @ts-ignore
import {MDCDrawer} from "@material/drawer";

export class NavConnector {
  private topAppBar: MDCTopAppBar;
  private drawer: MDCDrawer;

  constructor() {
  }

  public connect(): void {
    this.drawer = MDCDrawer.attachTo(document.getElementById('mdc-drawer'));
    this.topAppBar = MDCTopAppBar.attachTo(document.getElementById('app-bar') as Element);
    // @ts-ignore
    this.topAppBar.setScrollTarget(document.getElementById('main-content'));
    this.topAppBar.listen('MDCTopAppBar:nav', () => {
      this.drawer.open = !this.drawer.open;
    });
  }

  public destroy(): void {
    this.topAppBar.destroy();
  }
}
