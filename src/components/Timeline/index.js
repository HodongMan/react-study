import React, { PureComponent } from 'react';

export default class Timeline extends PureComponent {

    render() {
        return (
            <div className="timeline-item">
                <div className="timeline-icon" />
                <div className="timeline-content">
                    <h2
                        onClick={(event) => {
                            event.preventDefault();
                            this.props.addCount();
                        }} 
                        className="timeline_header"
                    >{this.props.name}</h2>
                        <p className="timeline_content">
                            {this.props.description}
                        </p>
                    <a 
                        href="/" 
                        className="btn"
                    >
                        button
                    </a>
                </div>
            </div>
        );
    }
}