import React from 'react';

export default class LoginButton extends React.Component {
    render() {
        const clientId = "380d65a04e09478ebc25fdedf15f2386";
        const redirectUri = `${location.origin}/login/ig`;
        const href = `https://api.instagram.com/oauth/authorize/?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&scope=public_content+follower_list`;
        return (
            <a className="btn btn-primary" href={href}>Login using Instagram</a>
        );
    }
}