import { createContext, useReducer } from "react";


export const LoginContext = createContext([false, false])

function reducer(state, action) {

    switch (action.type) {
        case 'login':
            const loginUser = {
                username: action.data,
                password: action.password,
                token: action.token,
            }
            localStorage.setItem("user", JSON.stringify(loginUser))
            return true;

        case 'logout':
            localStorage.removeItem("user");
            return false;
        default:
            throw new Error();
    }

}
const localstorage = localStorage.getItem("user") ?
    JSON.parse(localStorage.getItem("user"))
    :
    false;
function LoginProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, localstorage);
    const userContext = {
        isLogin: state !== false,
        login: (username, password, token) => dispatch({ type: "login", data: username, password: password, token: token }),
        logout: () => dispatch({ type: "logout" }),
        signup: (username, firstname, lastname, password) => dispatch({ type: "signup", username: username, firstname: firstname, lastname: lastname, password: password })
    }
    return (
        <LoginContext.Provider value={userContext}>
            {children}
        </LoginContext.Provider>
    )
}
export default LoginProvider;