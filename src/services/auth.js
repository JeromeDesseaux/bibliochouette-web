const register = () => {};

const login = () => {
    const token = 'blablablatoken';
    localStorage.setItem('token', token);
    return token;
};

const logout = () => {
    localStorage.removeItem('token');
};

const isLoggedIn = () => localStorage.getItem('token') !== null;

export { register, login, logout, isLoggedIn };
