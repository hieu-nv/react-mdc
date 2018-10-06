import * as React from 'react';

export interface ButtonProps {
    children?: React.ReactNode
    onClick($event : React.MouseEvent<HTMLElement>) : void;
}
export class Button extends React.Component<ButtonProps> {

    constructor(props: any) {
        super(props);
    }

    render(): React.ReactNode {
        return <button className="mdc-button" onClick={this.props.onClick}>{ this.props.children }</button>
    }
}
