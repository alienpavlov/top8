import React from 'react';

export default class Footer extends React.Component {
    handleChange(e) {
        const text = e.target.value;
        this.props.changeText(text);
    }

    render() {
        return (
            <footer>
                <span className="label label-success">&copy; Alex Pavlov</span>

                {/*<input className="form-control input-sm" value={this.props.text} onChange={this.handleChange.bind(this)} />*/}
                {/*<span>{this.props.text}</span>*/}
            </footer>
        );
    }
};