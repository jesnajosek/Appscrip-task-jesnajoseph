import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext(null)

export default function AuthProvider({ children }) {

    const [user, setUser] = useState(null)

    useEffect(() => {
        const currentUser = localStorage.getItem('currentUser');
        if (currentUser) {
            setUser(JSON.parse(currentUser));
        }
    }, []);

    function signup(email, password) {
        const users = JSON.parse(localStorage.getItem('users')) || [];


        if (users.find(u => u.email === email)) {
            return { success: false, error: 'User already exists' };

        }
        const newUser = {
            id: Date.now(),
            email,
            password
        }
        users.push(newUser)
        localStorage.setItem('users', JSON.stringify(users))


        
        return { success: true };
    }

    function login(email, password) {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const foundUser = users.find(u => u.email === email && u.password === password);
        
        if (foundUser) {
            setUser(foundUser);
            localStorage.setItem('currentUser', JSON.stringify(foundUser));
            return { success: true };
        }
        
        return { success: false, error: 'Invalid email or password' };
    }

    function logout() {
        setUser(null);
        localStorage.removeItem('currentUser');
    }

    return <AuthContext.Provider value={{ user, signup, login, logout }}>
        {children}
    </AuthContext.Provider>

}