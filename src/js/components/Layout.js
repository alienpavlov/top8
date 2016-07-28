import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {
            text: "Some text from Layout!"
        };
    }

    changeText(text) {
        this.setState({text});
    }

    render() {
        return (
            <div>
                <Header />
                {this.props.children}
                <Footer changeText={this.changeText.bind(this)} text={this.state.text} />
            </div>
        );
    }
};