import * as React from 'react';
import { shallow } from 'enzyme';
import { Button } from '../';
import { ButtonIcon } from '../../ButtonIcon';

describe('button', () => {
  test('default', () => {
    const defaultButton = shallow(<Button>default</Button>);
    expect(defaultButton.text()).toEqual('default');
    expect(defaultButton.prop('className')).toEqual('mdc-button');
    expect(defaultButton.prop('disabled')).toEqual(false);
  });

  test('disabled', () => {
    const disabled = shallow(<Button disabled={true}>disabled</Button>);
    expect(disabled.text()).toEqual('disabled');
    expect(disabled.prop('className')).toEqual('mdc-button');
    expect(disabled.prop('disabled')).toEqual(true);
  });

  describe('dense', () => {
    test('default', () => {
      const dense = shallow(<Button dense={true}>dense</Button>);
      expect(dense.text()).toEqual('dense');
      expect(dense.prop('className')).toEqual('mdc-button mdc-button--dense');
      expect(dense.prop('disabled')).toEqual(false);
    });
  });

  describe('outlined', () => {
    test('default', () => {
      const outlined = shallow(<Button outlined={true}>outlined</Button>);
      expect(outlined.text()).toEqual('outlined');
      expect(outlined.prop('className')).toEqual('mdc-button mdc-button--outlined');
      expect(outlined.prop('disabled')).toEqual(false);
    });
  });

  describe('raised', () => {
    test('default', () => {
      const outlined = shallow(<Button raised={true}>raised</Button>);
      expect(outlined.text()).toEqual('raised');
      expect(outlined.prop('className')).toEqual('mdc-button mdc-button--raised');
      expect(outlined.prop('disabled')).toEqual(false);
    });
  });

  describe('unelevated', () => {
    test('default', () => {
      const outlined = shallow(<Button unelevated={true}>unelevated</Button>);
      expect(outlined.text()).toEqual('unelevated');
      expect(outlined.prop('className')).toEqual('mdc-button mdc-button--unelevated');
      expect(outlined.prop('disabled')).toEqual(false);
    });
  });

  describe('icon', () => {
    test('string', () => {
      const icon = shallow(<Button icon='favorite'>favorite</Button>);
      expect(icon.html()).toContain('<i class="material-icons mdc-button__icon">favorite</i>');
      expect(icon.prop('className')).toEqual('mdc-button');
      expect(icon.prop('disabled')).toEqual(false);
    });
    test('React.ReactNode', () => {
      const icon = shallow(<Button icon={<ButtonIcon>favorite</ButtonIcon>}>favorite</Button>);
      expect(icon.html()).toContain('<i class="material-icons mdc-button__icon">favorite</i>');
      expect(icon.prop('className')).toEqual('mdc-button');
      expect(icon.prop('disabled')).toEqual(false);
    });
  });
});
