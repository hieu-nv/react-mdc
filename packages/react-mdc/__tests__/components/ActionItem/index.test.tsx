import * as React from 'react';
import { shallow } from 'enzyme';
import { ActionItem } from '../../../src/components/ActionItem';

describe('ActionItem', () => {
  test('default', () => {
    const action = shallow(<ActionItem/>);
    expect(action.prop('className')).toEqual('material-icons mdc-top-app-bar__action-item');
    expect(action.text()).toEqual('');
  });
  test('icon', () => {
    const action = shallow(<ActionItem>print</ActionItem>);
    expect(action.prop('className')).toEqual('material-icons mdc-top-app-bar__action-item');
    expect(action.text()).toEqual('print');
  });
});
