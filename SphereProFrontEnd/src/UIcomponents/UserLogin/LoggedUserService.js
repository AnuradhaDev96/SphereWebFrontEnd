export default class LoggedUserService {

    // setTokenData(tokenData) {
    //     localStorage.setItem('tokenData', tokenData);
    // }

    // get tokenData() {
    //     return localStorage.getItem('tokenData');
    // }

    setUserDetails(LoggedInStatus, Username, Role) {
        if (LoggedInStatus === "Success") {
            localStorage.setItem('LoggedInStatus', 'true');
            localStorage.setItem('Username', Username);
            localStorage.setItem('Role', Role);
            // alert('Login Successful !');
            if (Role === 'ADMIN')
                window.location.href = "/adminHome";
            else if (Role === 'SITEMNG')
                window.location.href = "/siteManagerHome";
            else if (Role === 'PROJECTMNG')
                window.location.href = "/projectManagerHome";
            else if (Role === 'ACCOUNTANT')
                window.location.href = "/accountantHome";
        } else {
            // alert('Invalid Username or Password !');
            localStorage.setItem('LoggedInStatus', 'false');
        }
    }

    get Role(){
        return (localStorage.getItem('Role'))
    }

    get isLoggedIn() {
        return (localStorage.getItem('LoggedInStatus') === 'true');
    }

    get username() {
        // if (this.isLoggedIn) {
            return localStorage.getItem('Username');
        // } else {
        //     return 'Invalid';
        // }
    }

    logout() {
        localStorage.removeItem('LoggedInStatus');
        localStorage.removeItem('Username');
        // localStorage.removeItem('tokenData');
        localStorage.removeItem('Role');
        window.location.href = "/login"
    }
}