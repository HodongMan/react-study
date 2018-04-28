import React, { PureComponent } from 'react';

export default class Timeline extends PureComponent {

    render() {
        return (
            <div className="timeline-item">
                <div className="timeline-icon" />
                <div className="timeline-content">
                    <h2 className="timeline_header">일련의 제목입니다</h2>
                        <p className="timeline_content">
                            뭔가 타임라인의 내용입니다
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