import * as React from 'react';
import classNames from 'classnames';
import { ButtonIcon } from '../ButtonIcon';
import {MDCRipple} from "@material/ripple";
import {RefObject} from "react";

export interface ButtonProps {

  children?: React.ReactNode;

  className?: string;

  dense?: boolean;

  disabled?: boolean;

  icon?: string | React.ReactNode,

  outlined?: boolean;

  raised?: boolean;

  ripple?: boolean;

  unelevated?: boolean;

  onClick?: ($event: React.MouseEvent<HTMLElement>) => void;
}

export class Button extends React.Component<ButtonProps> {
  public static defaultProps: Partial<ButtonProps> = {
    className: '',
    dense: false,
    disabled: false,
    outlined: false,
    raised: false,
    ripple: false,
    unelevated: false,
  };

  private readonly ref: RefObject<HTMLButtonElement>;
  private mdc: MDCRipple;

  constructor(props: any) {
    super(props);

    this.ref = React.createRef();
  }

  componentDidMount() {
    console.log(this.ref);
    if (this.props.ripple && this.ref && this.ref.current) {
      this.mdc = MDCRipple.attachTo(this.ref.current);
    }
  }

  public render(): React.ReactNode {
    return <button ref={this.ref} className={
      classNames(
        this.props.className,
        {
          'mdc-button': true,
          'mdc-button--dense': this.props.dense,
          'mdc-button--outlined': this.props.outlined,
          'mdc-button--raised': this.props.raised,
          'mdc-button--unelevated': this.props.unelevated,
        },
      )
    } disabled={this.props.disabled} onClick={this.props.onClick}>
      {typeof this.props.icon === 'string' && <ButtonIcon>{this.props.icon}</ButtonIcon> || this.props.icon}
      {this.props.children}
    </button>;
  }
}
