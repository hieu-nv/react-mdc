import * as React from 'react';
import {MouseEvent, ReactNode} from "react";

export interface ButtonProps {
    children?: ReactNode
    onClick($event : MouseEvent<HTMLElement>) : void;
}
export class Button extends React.Component<ButtonProps> {

    constructor(props: any) {
        super(props);
    }

    render(): React.ReactNode {
        return <button className="mdc-button" onClick={this.props.onClick}>{ this.props.children }</button>
    }
}