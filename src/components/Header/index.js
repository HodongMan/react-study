import * as React from 'react';

export default class Header extends React.PureComponent
{
    render() {
        return (
            <header>
                <div className="container">
                    <a href="/">
                        <h1 className="logo">
                            <img src="/LOGO.png" />
                        </h1>
                    </a>
                    <section className="social">
                        <a >
                            글쓰기
                        </a>
                        <a className="btn">Twitter</a>
                    </section>
                </div>
            </header>
        );
    }
}