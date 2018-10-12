import * as React from 'react';
import { shallow } from 'enzyme';
import { TopAppBar } from '../../../src/components/TopAppBar';

describe('TopAppBar', () => {
  test('default', () => {
    const topAppBar = shallow(<TopAppBar title="react-mdc"/>);
    expect(topAppBar.prop('className')).toEqual('mdc-top-app-bar app-bar');
  });
  test('one components', () => {
    const topAppBar = shallow(<TopAppBar title="react-mdc">
      <a href="#" className="material-icons mdc-top-app-bar__action-item" aria-label="Download">file_download</a>
    </TopAppBar>);
    expect(topAppBar.html()).toContain('file_download');
  });
  test('two components', () => {
    const topAppBar = shallow(<TopAppBar title="react-mdc">
      <a href="#" className="material-icons mdc-top-app-bar__action-item" aria-label="Download">file_download</a>
      <a href="#" className="material-icons mdc-top-app-bar__action-item" aria-label="Print this page">print</a>
    </TopAppBar>);
    expect(topAppBar.html()).toContain('file_download');
    expect(topAppBar.html()).toContain('print');
  });
});
