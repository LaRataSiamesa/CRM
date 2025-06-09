const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
    try {
        const [user, setUser] = React.useState(null);
        const [isLoading, setIsLoading] = React.useState(true);

        React.useEffect(() => {
            const savedUser = localStorage.getItem('crmUser');
            if (savedUser) {
                setUser(JSON.parse(savedUser));
            }
            setIsLoading(false);
        }, []);

        const login = async (email, password) => {
            try {
                // Simulación de autenticación
                if (email === 'admin@crm.com' && password === 'admin123') {
                    const userData = {
                        id: 1,
                        email: email,
                        name: 'Administrador',
                        role: 'admin'
                    };
                    setUser(userData);
                    localStorage.setItem('crmUser', JSON.stringify(userData));
                    return { success: true };
                } else {
                    return { success: false, error: 'Credenciales incorrectas' };
                }
            } catch (error) {
                return { success: false, error: 'Error de conexión' };
            }
        };

        const logout = () => {
            setUser(null);
            localStorage.removeItem('crmUser');
        };

        const value = {
            user,
            login,
            logout,
            isLoading
        };

        return React.createElement(AuthContext.Provider, { value }, children);
    } catch (error) {
        console.error('AuthProvider error:', error);
        reportError(error);
    }
};

const useAuth = () => {
    const context = React.useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
