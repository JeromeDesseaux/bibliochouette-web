const register = () => {};

const login = () => {
    const token = 'blablablatoken';
    localStorage.setItem('token', token);
    window.location = '/';
    return token;
};

const logout = () => {
    console.log('test');
    localStorage.removeItem('token');
    window.location = '/login';
};

const isLoggedIn = () => localStorage.getItem('token') !== null;

export { register, login, logout, isLoggedIn };
