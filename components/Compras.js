const Compras = () => {
    try {
        const [compras, setCompras] = React.useState([
            { id: 1, proveedor: 'Proveedor A', producto: 'Equipos de Oficina', monto: 5000, fecha: '2024-01-15', estado: 'Completada' },
            { id: 2, proveedor: 'Proveedor B', producto: 'Software Licencias', monto: 12000, fecha: '2024-01-12', estado: 'Pendiente' },
            { id: 3, proveedor: 'Proveedor C', producto: 'Servicios Cloud', monto: 8000, fecha: '2024-01-10', estado: 'Completada' }
        ]);

        const totalCompras = compras.reduce((sum, compra) => sum + compra.monto, 0);

        const getEstadoBadge = (estado) => {
            return estado === 'Completada' ? 'bg-success' : 'bg-warning';
        };

        return React.createElement('div', {
            'data-name': 'compras',
            'data-file': 'components/Compras.js'
        },
            React.createElement('div', { className: 'd-flex justify-content-between align-items-center mb-4' },
                React.createElement('h3', null, 'Gestión de Compras'),
                React.createElement('button', { className: 'btn btn-primary' },
                    React.createElement('i', { className: 'fas fa-plus me-2' }),
                    'Nueva Compra'
                )
            ),
            React.createElement('div', { className: 'row mb-4' },
                React.createElement('div', { className: 'col-md-4' },
                    React.createElement('div', { className: 'card text-center' },
                        React.createElement('div', { className: 'card-body' },
                            React.createElement('h4', { className: 'text-primary' }, `$${totalCompras.toLocaleString()}`),
                            React.createElement('p', { className: 'text-muted' }, 'Total Compras')
                        )
                    )
                ),
                React.createElement('div', { className: 'col-md-4' },
                    React.createElement('div', { className: 'card text-center' },
                        React.createElement('div', { className: 'card-body' },
                            React.createElement('h4', { className: 'text-success' }, compras.filter(c => c.estado === 'Completada').length),
                            React.createElement('p', { className: 'text-muted' }, 'Completadas')
                        )
                    )
                ),
                React.createElement('div', { className: 'col-md-4' },
                    React.createElement('div', { className: 'card text-center' },
                        React.createElement('div', { className: 'card-body' },
                            React.createElement('h4', { className: 'text-warning' }, compras.filter(c => c.estado === 'Pendiente').length),
                            React.createElement('p', { className: 'text-muted' }, 'Pendientes')
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
                                    React.createElement('th', null, 'Proveedor'),
                                    React.createElement('th', null, 'Producto'),
                                    React.createElement('th', null, 'Monto'),
                                    React.createElement('th', null, 'Fecha'),
                                    React.createElement('th', null, 'Estado'),
                                    React.createElement('th', null, 'Acciones')
                                )
                            ),
                            React.createElement('tbody', null,
                                compras.map(compra =>
                                    React.createElement('tr', { key: compra.id },
                                        React.createElement('td', null, compra.proveedor),
                                        React.createElement('td', null, compra.producto),
                                        React.createElement('td', null, `$${compra.monto.toLocaleString()}`),
                                        React.createElement('td', null, compra.fecha),
                                        React.createElement('td', null,
                                            React.createElement('span', {
                                                className: `badge ${getEstadoBadge(compra.estado)}`
                                            }, compra.estado)
                                        ),
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
        console.error('Compras component error:', error);
        reportError(error);
    }
};
