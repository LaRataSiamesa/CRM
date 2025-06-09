const Dashboard = () => {
    try {
        const stats = [
            { title: 'Contactos', value: '1,234', icon: 'fas fa-users', color: 'primary' },
            { title: 'Negocios Activos', value: '56', icon: 'fas fa-handshake', color: 'success' },
            { title: 'Compras del Mes', value: '$45,678', icon: 'fas fa-shopping-cart', color: 'info' },
            { title: 'Tickets Abiertos', value: '23', icon: 'fas fa-ticket-alt', color: 'warning' }
        ];

        return React.createElement('div', {
            'data-name': 'dashboard',
            'data-file': 'components/Dashboard.js'
        },
            React.createElement('div', { className: 'row mb-4' },
                stats.map((stat, index) =>
                    React.createElement('div', { key: index, className: 'col-md-3 mb-3' },
                        React.createElement('div', { className: 'card h-100' },
                            React.createElement('div', { className: 'card-body text-center' },
                                React.createElement('div', { className: `text-${stat.color} mb-3` },
                                    React.createElement('i', { className: `${stat.icon} fa-2x` })
                                ),
                                React.createElement('h3', { className: 'fw-bold' }, stat.value),
                                React.createElement('p', { className: 'text-muted mb-0' }, stat.title)
                            )
                        )
                    )
                )
            ),
            React.createElement('div', { className: 'row' },
                React.createElement('div', { className: 'col-md-8' },
                    React.createElement('div', { className: 'card' },
                        React.createElement('div', { className: 'card-header' },
                            React.createElement('h5', { className: 'mb-0' }, 'Actividad Reciente')
                        ),
                        React.createElement('div', { className: 'card-body' },
                            React.createElement('div', { className: 'list-group list-group-flush' },
                                React.createElement('div', { className: 'list-group-item border-0' },
                                    React.createElement('i', { className: 'fas fa-user-plus text-success me-2' }),
                                    'Nuevo contacto agregado: Juan Pérez'
                                ),
                                React.createElement('div', { className: 'list-group-item border-0' },
                                    React.createElement('i', { className: 'fas fa-handshake text-info me-2' }),
                                    'Negocio cerrado por $15,000'
                                ),
                                React.createElement('div', { className: 'list-group-item border-0' },
                                    React.createElement('i', { className: 'fas fa-ticket-alt text-warning me-2' }),
                                    'Nuevo ticket de soporte creado'
                                )
                            )
                        )
                    )
                ),
                React.createElement('div', { className: 'col-md-4' },
                    React.createElement('div', { className: 'card' },
                        React.createElement('div', { className: 'card-header' },
                            React.createElement('h5', { className: 'mb-0' }, 'Tareas Pendientes')
                        ),
                        React.createElement('div', { className: 'card-body' },
                            React.createElement('ul', { className: 'list-unstyled' },
                                React.createElement('li', { className: 'mb-2' },
                                    React.createElement('i', { className: 'fas fa-circle text-danger me-2' }),
                                    'Llamar a cliente ABC Corp'
                                ),
                                React.createElement('li', { className: 'mb-2' },
                                    React.createElement('i', { className: 'fas fa-circle text-warning me-2' }),
                                    'Revisar propuesta XYZ'
                                ),
                                React.createElement('li', { className: 'mb-2' },
                                    React.createElement('i', { className: 'fas fa-circle text-info me-2' }),
                                    'Actualizar base de datos'
                                )
                            )
                        )
                    )
                )
            )
        );
    } catch (error) {
        console.error('Dashboard component error:', error);
        reportError(error);
    }
};
