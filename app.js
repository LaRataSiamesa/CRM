const App = () => {
    try {
        const { user, isLoading } = useAuth();
        const [activeModule, setActiveModule] = React.useState('dashboard');

        if (isLoading) {
            return React.createElement('div', {
                className: 'd-flex justify-content-center align-items-center',
                style: { height: '100vh' }
            },
                React.createElement('div', { className: 'spinner-border text-primary' }),
                React.createElement('span', { className: 'ms-2' }, 'Cargando...')
            );
        }

        if (!user) {
            return React.createElement(Login);
        }

        const renderActiveModule = () => {
            switch (activeModule) {
                case 'dashboard':
                    return React.createElement(Dashboard);
                case 'contactos':
                    return React.createElement(Contactos);
                case 'negocios':
                    return React.createElement(Negocios);
                case 'compras':
                    return React.createElement(Compras);
                case 'tickets':
                    return React.createElement(Tickets);
                default:
                    return React.createElement(Dashboard);
            }
        };

        return React.createElement('div', {
            className: 'container-fluid',
            'data-name': 'app-container',
            'data-file': 'app.js'
        },
            React.createElement('div', { className: 'row' },
                React.createElement(Sidebar, {
                    activeModule,
                    setActiveModule
                }),
                React.createElement('div', { className: 'col-md-9 col-lg-10 main-content' },
                    React.createElement(Header, { activeModule }),
                    React.createElement('div', { className: 'container-fluid px-4' },
                        renderActiveModule()
                    )
                )
            )
        );
    } catch (error) {
        console.error('App component error:', error);
        reportError(error);
    }
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    React.createElement(AuthProvider, null,
        React.createElement(App)
    )
);
