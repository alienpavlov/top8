import React from 'react';

export default class Footer extends React.Component {
    handleChange(e) {
        const text = e.target.value;
        this.props.changeText(text);
    }

    render() {
        return (
            <footer>
                <h4>&copy; Alex Pavlov</h4>

                {/*<input className="form-control input-sm" value={this.props.text} onChange={this.handleChange.bind(this)} />*/}
                {/*<span>{this.props.text}</span>*/}
            </footer>
        );
    }
};