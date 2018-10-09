import * as React from 'react';
import classNames from 'classnames';
import { ButtonIcon } from '../ButtonIcon';

export interface ButtonProps {

  children?: any;

  dense?: boolean;

  icon?: string | React.ReactNode,

  outlined?: boolean;

  raised?: boolean;

  unelevated?: boolean;

  onClick?: ($event: React.MouseEvent<HTMLElement>) => void;
}

export class Button extends React.Component<ButtonProps> {
  public static defaultProps: Partial<ButtonProps> = {
    dense: false,
    outlined: false,
    raised: false,
    unelevated: false,
  };

  constructor(props: any) {
    super(props);
  }

  public render(): React.ReactNode {
    return <button className={
      classNames({
        'mdc-button': true,
        'mdc-button--dense': this.props.dense,
        'mdc-button--outlined': this.props.outlined,
        'mdc-button--raised': this.props.raised,
        'mdc-button--unelevated': this.props.unelevated,
      })
    } onClick={this.props.onClick}>
      {typeof this.props.icon === 'string' && <ButtonIcon>{this.props.icon}</ButtonIcon>}
      {typeof this.props.icon !== 'string' && this.props.icon}
      {this.props.children}
    </button>;
  }
}
