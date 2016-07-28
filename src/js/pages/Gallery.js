import React from 'react';
import $ from 'jquery';
import auth from '../auth';
import Image from '../components/Image';

class Gallery extends React.Component {
    constructor() {
        super();
        this.state = {galleryItems: []}
    }

    componentDidMount() {
        let username = this.props.params.username || 'self';

        $.ajax({
            url: `https://api.instagram.com/v1/users/${username}/media/recent/`,
            dataType: 'jsonp',
            type: 'GET',
            data: {access_token: auth.getToken()},
            success: (data) => {
                console.log(data.data);
                this.setState({
                    /*
                     * sort images Desc by likes.count
                     * get only top 8 photos
                     * map them to Image component
                     */
                    galleryItems: data.data.sort((a, b) => {
                        if (a.likes.count < b.likes.count) {
                            return 1;
                        }
                        if (a.likes.count > b.likes.count) {
                            return -1;
                        }
                        // a must be equal to b
                        return 0;
                    }).slice(0, 8).map((obj, i) =>
                        <Image
                            i={i + 1}
                            key={obj.id}
                            data={obj}
                        />)
                });
            },
            error: (data) => {
                console.error(data);
            }
        });
    }

    render() {
        return (
            <div className="gallery-wrap">
                {/*<div>{this.props.params.pageid} gallery!</div>*/}
                <div className="img-row img-row-top-3">{this.state.galleryItems.slice(0, 3)}</div>
                <div className="img-row img-row-rest">{this.state.galleryItems.slice(3)}</div>
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