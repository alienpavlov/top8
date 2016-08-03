import React from 'react';

export default class Image extends React.Component {
    clickHandler(e) {
        const {link} = this.props.data;
        console.log(link);
    }

    render() {
        const {i} = this.props;
        const {link} = this.props;
        //for top3 use bigger images
        const {url} = [1, 2, 3].includes(i) ? this.props.images.low_resolution : this.props.images.thumbnail;
        const likesCount = this.props.likes.count;
        const commentsCount = this.props.comments.count;

        const highlight = 'highlight-' + i;
        const css = `${highlight}`;

        return (
            <div className="image-block">
                <div className={css} onClick={this.clickHandler.bind(this)}>
                    <a href={link} target="_blank">
                        <img src={url} alt={likesCount + " likes!"}/>
                        <span className="likes-counter">{likesCount}&hearts;</span>
                        <span className="comments-counter">{commentsCount}&copy;</span>
                    </a>
                </div>
            </div>
        );
    }
}