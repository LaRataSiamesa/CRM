const Sidebar = ({ activeModule, setActiveModule }) => {
    try {
        const { logout, user } = useAuth();

        const menuItems = [
            { id: 'dashboard', name: 'Dashboard', icon: 'fas fa-tachometer-alt' },
            { id: 'contactos', name: 'Contactos', icon: 'fas fa-users' },
            { id: 'negocios', name: 'Negocios', icon: 'fas fa-handshake' },
            { id: 'compras', name: 'Compras', icon: 'fas fa-shopping-cart' },
            { id: 'tickets', name: 'Tickets', icon: 'fas fa-ticket-alt' }
        ];

        return React.createElement('div', {
            className: 'sidebar col-md-3 col-lg-2 p-0',
            'data-name': 'sidebar',
            'data-file': 'components/Sidebar.js'
        },
            React.createElement('div', { className: 'p-3' },
                React.createElement('div', { className: 'text-center text-white mb-4' },
                    React.createElement('h4', { className: 'fw-bold' }, 'CRM System'),
                    React.createElement('small', null, `Bienvenido, ${user?.name}`)
                ),
                React.createElement('nav', { className: 'nav flex-column' },
                    menuItems.map(item =>
                        React.createElement('a', {
                            key: item.id,
                            href: '#',
                            className: `nav-link mb-1 ${activeModule === item.id ? 'active' : ''}`,
                            onClick: (e) => {
                                e.preventDefault();
                                setActiveModule(item.id);
                            }
                        },
                            React.createElement('i', { className: `${item.icon} me-2` }),
                            item.name
                        )
                    )
                ),
                React.createElement('hr', { className: 'border-light' }),
                React.createElement('a', {
                    href: '#',
                    className: 'nav-link text-light',
                    onClick: (e) => {
                        e.preventDefault();
                        logout();
                    }
                },
                    React.createElement('i', { className: 'fas fa-sign-out-alt me-2' }),
                    'Cerrar Sesión'
                )
            )
        );
    } catch (error) {
        console.error('Sidebar component error:', error);
        reportError(error);
    }
};
