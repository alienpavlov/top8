import React from 'react';

export default class Image extends React.Component {
    clickHandler(e) {
        const {link} = this.props.data;
        console.log(link);
    }

    render() {
        const {data} = this.props;
        const {i} = this.props;
        const {link} = data;
        //for top3 use bigger images
        const {url} = [1, 2, 3].includes(i) ? data.images.low_resolution : data.images.thumbnail;
        const likesCount = data.likes.count;

        const highlight = 'highlight-' + i;
        const css = `${highlight}`;

        return (
            <div className="image-block">
                <div className={css} onClick={this.clickHandler.bind(this)}>
                    <a href={link} target="_blank">
                        <img src={url} alt={likesCount + " likes!"}/>
                        <span className="likesCounter">{likesCount}</span>
                    </a>
                </div>
            </div>
        );
    }
}