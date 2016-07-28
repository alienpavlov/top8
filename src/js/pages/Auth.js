import React from 'react';
import LoginButton from './../components/LoginButton';
import auth from '../auth';

export default class AuthPage extends React.Component {
    render() {
        const {params} = this.props;
        if (params.type === "ig") {
            auth.login(window.location.hash.split('=')[1], () => {
                // history.pushState("", document.title, window.location.pathname);
                location.href = "/";
            });
        }
        return (
            <div>
                <LoginButton/>
            </div>
        );
    }
}