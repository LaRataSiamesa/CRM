const Tickets = () => {
    try {
        const [tickets, setTickets] = React.useState([
            { id: 1, titulo: 'Error en sistema de pagos', cliente: 'ABC Corp', prioridad: 'Alta', estado: 'Abierto', fecha: '2024-01-15' },
            { id: 2, titulo: 'Solicitud de nueva funcionalidad', cliente: 'XYZ Ltd', prioridad: 'Media', estado: 'En Progreso', fecha: '2024-01-14' },
            { id: 3, titulo: 'Problema de conectividad', cliente: 'Tech Solutions', prioridad: 'Baja', estado: 'Cerrado', fecha: '2024-01-13' },
            { id: 4, titulo: 'Consulta sobre facturación', cliente: 'StartupCo', prioridad: 'Media', estado: 'Abierto', fecha: '2024-01-12' }
        ]);

        const getPrioridadBadge = (prioridad) => {
            const badges = {
                'Alta': 'bg-danger',
                'Media': 'bg-warning',
                'Baja': 'bg-info'
            };
            return badges[prioridad] || 'bg-secondary';
        };

        const getEstadoBadge = (estado) => {
            const badges = {
                'Abierto': 'bg-danger',
                'En Progreso': 'bg-warning',
                'Cerrado': 'bg-success'
            };
            return badges[estado] || 'bg-secondary';
        };

        return React.createElement('div', {
            'data-name': 'tickets',
            'data-file': 'components/Tickets.js'
        },
            React.createElement('div', { className: 'd-flex justify-content-between align-items-center mb-4' },
                React.createElement('h3', null, 'Gestión de Tickets'),
                React.createElement('button', { className: 'btn btn-primary' },
                    React.createElement('i', { className: 'fas fa-plus me-2' }),
                    'Nuevo Ticket'
                )
            ),
            React.createElement('div', { className: 'row mb-4' },
                React.createElement('div', { className: 'col-md-3' },
                    React.createElement('div', { className: 'card text-center' },
                        React.createElement('div', { className: 'card-body' },
                            React.createElement('h4', { className: 'text-danger' }, tickets.filter(t => t.estado === 'Abierto').length),
                            React.createElement('p', { className: 'text-muted' }, 'Abiertos')
                        )
                    )
                ),
                React.createElement('div', { className: 'col-md-3' },
                    React.createElement('div', { className: 'card text-center' },
                        React.createElement('div', { className: 'card-body' },
                            React.createElement('h4', { className: 'text-warning' }, tickets.filter(t => t.estado === 'En Progreso').length),
                            React.createElement('p', { className: 'text-muted' }, 'En Progreso')
                        )
                    )
                ),
                React.createElement('div', { className: 'col-md-3' },
                    React.createElement('div', { className: 'card text-center' },
                        React.createElement('div', { className: 'card-body' },
                            React.createElement('h4', { className: 'text-success' }, tickets.filter(t => t.estado === 'Cerrado').length),
                            React.createElement('p', { className: 'text-muted' }, 'Cerrados')
                        )
                    )
                )
            ),
            React.createElement('div', { className: 'card' },
                React.createElement('div', { className: 'card-body' },
                    React.createElement('div', { className: 'table-responsive' },
                        React.createElement('table', { className: 'table table-hover' },
                            React.createElement('thead', { className: 'table-light' },
                                React.createElement('tr', null,
                                    React.createElement('th', null, 'ID'),
                                    React.createElement('th', null, 'Título'),
                                    React.createElement('th', null, 'Cliente'),
                                    React.createElement('th', null, 'Prioridad'),
                                    React.createElement('th', null, 'Estado'),
                                    React.createElement('th', null, 'Fecha'),
                                    React.createElement('th', null, 'Acciones')
                                )
                            ),
                            React.createElement('tbody', null,
                                tickets.map(ticket =>
                                    React.createElement('tr', { key: ticket.id },
                                        React.createElement('td', null, `#${ticket.id}`),
                                        React.createElement('td', null, ticket.titulo),
                                        React.createElement('td', null, ticket.cliente),
                                        React.createElement('td', null,
                                            React.createElement('span', {
                                                className: `badge ${getPrioridadBadge(ticket.prioridad)}`
                                            }, ticket.prioridad)
                                        ),
                                        React.createElement('td', null,
                                            React.createElement('span', {
                                                className: `badge ${getEstadoBadge(ticket.estado)}`
                                            }, ticket.estado)
                                        ),
                                        React.createElement('td', null, ticket.fecha),
                                        React.createElement('td', null,
                                            React.createElement('button', { className: 'btn btn-sm btn-outline-primary me-2' },
                                                React.createElement('i', { className: 'fas fa-eye' })
                                            ),
                                            React.createElement('button', { className: 'btn btn-sm btn-outline-success' },
                                                React.createElement('i', { className: 'fas fa-edit' })
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            )
        );
    } catch (error) {
        console.error('Tickets component error:', error);
        reportError(error);
    }
};
