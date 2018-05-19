import React, { PureComponent } from 'react';

export default class TimelineHeader extends PureComponent {
    
    render() {
        return (
            <h1 className="project-name">{this.props.title}</h1>
        );
    }
}