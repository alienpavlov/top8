module.exports = {
    login(accessToken, cb) {
        cb = arguments[arguments.length - 1];
        if (localStorage.token) {
            if (cb) {
                cb(true);
            }
            this.onChange(true);
            return;
        }
        pretendRequest(accessToken, (res) => {
            if (res.authenticated) {
                localStorage.token = res.token;
                if (cb) {
                    cb(true);
                }
                this.onChange(true);
            } else {
                if (cb) {
                    cb(false);
                }
                this.onChange(false);
            }
        })
    },

    getToken() {
        return localStorage.token;
    },

    logout(cb) {
        delete localStorage.token;
        if (cb) {
            cb();
        }
        this.onChange(false);
    },

    loggedIn() {
        return !!localStorage.token;
    },

    onChange() {
    }
};

function pretendRequest(accessToken, cb) {
    setTimeout(() => {
        if (accessToken && typeof accessToken === "string") {
            cb({
                authenticated: true,
                token: accessToken
            });
        } else {
            cb({authenticated: false});
        }
    }, 0);
}