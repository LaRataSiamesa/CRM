const Header = ({ activeModule }) => {
    try {
        const getModuleTitle = (module) => {
            const titles = {
                dashboard: 'Dashboard',
                contactos: 'Gestión de Contactos',
                negocios: 'Gestión de Negocios',
                compras: 'Gestión de Compras',
                tickets: 'Gestión de Tickets'
            };
            return titles[module] || 'CRM System';
        };

        return React.createElement('header', {
            className: 'bg-white shadow-sm border-bottom p-3 mb-4',
            'data-name': 'header',
            'data-file': 'components/Header.js'
        },
            React.createElement('div', { className: 'row align-items-center' },
                React.createElement('div', { className: 'col' },
                    React.createElement('h2', { className: 'h4 mb-0 fw-bold text-dark' },
                        getModuleTitle(activeModule)
                    )
                ),
                React.createElement('div', { className: 'col-auto' },
                    React.createElement('div', { className: 'text-muted small' },
                        new Date().toLocaleDateString('es-ES', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })
                    )
                )
            )
        );
    } catch (error) {
        console.error('Header component error:', error);
        reportError(error);
    }
};
