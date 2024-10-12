import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation"

interface AuthContext {
    user: any;
    login: (userData: any) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<any>(null);
    const router = useRouter();

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if(storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, [])

    const login = (userData: any) => {
        localStorage.setItem('user', JSON.stringify(userData));
    }
}
