import React from 'react';
import auth from '../auth';
import jsonp from 'jsonp';

import Image from '../components/Image';

class Gallery extends React.Component {
    constructor() {
        super();
        this.state = {galleryItems: []}
    }

    imgSort(arr, order = "DESC", type = 'likes') {
        arr.sort((a, b)=>b[type].count - a[type].count);

        if (order === "ASC") {
            arr.reverse();
        }

        return arr;
    }

    componentDidMount() {
        let username = this.props.params.username || 'self';

        jsonp(
            `https://api.instagram.com/v1/users/${username}/media/recent/?access_token=${auth.getToken()}`,
            null,
            (err, {data}) => {
                if (err) {
                    console.error(err);
                } else {
                    console.log(data);
                    this.setState({
                        /*
                         * sort images
                         * get only top 8 photos
                         */
                        galleryItems: this.imgSort(data, 'DESC', 'likes').slice(0, 8)
                    });
                }
            }
        );
    }

    render() {
        //map galleryItems to Image component
        const ImageComponents = this.state.galleryItems.map(
            (obj, i) => <Image i={i + 1} key={obj.id} {...obj}/>
        );

        return (
            <div className="gallery-wrap">
                {/*<div>{this.props.params.pageid} gallery!</div>*/}
                <div className="img-row img-row-top-3">{ImageComponents.slice(0, 3)}</div>
                <div className="img-row img-row-rest">{ImageComponents.slice(3)}</div>
            </div>
        );
    }
}
Gallery.defaultProps = {
    params: {
        pageid: 'self',
        hello: 'world'
    }
};

export default Gallery;