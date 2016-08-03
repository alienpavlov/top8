import React from 'react';

export default class Header extends React.Component {
    likeClickHandler(e) {
        e.preventDefault();
        console.log('like', this);
    }

    commentsClickHandler(e) {
        e.preventDefault();
        console.log('comment', this);
    }

    render() {
        return (
            <header>
                <h1>TOP 8</h1>
                {/*<a onClick={this.likeClickHandler.bind(this)} href="#" className="btn btn-success">Likes</a>*/}
                {/*<a onClick={this.commentsClickHandler.bind(this)} href="#" className="btn btn-warning">Comments</a>*/}
            </header>
        );
    }
}