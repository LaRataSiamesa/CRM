// import CustomTabPanel from './tabs'


const Contactos = () => {
    try {
        const [contactos, setContactos] = React.useState([
            { id: 1, nombre: 'Juan Pérez', email: 'juan@email.com', telefono: '555-0123', empresa: 'ABC Corp' },
            { id: 2, nombre: 'María García', email: 'maria@email.com', telefono: '555-0456', empresa: 'XYZ Ltd' },
            { id: 3, nombre: 'Carlos López', email: 'carlos@email.com', telefono: '555-0789', empresa: 'Tech Solutions' }
        ]);
        const [showModal, setShowModal] = React.useState(false);
        const [nuevoContacto, setNuevoContacto] = React.useState({
            nombre: '', email: '', telefono: '', empresa: ''
        });

        const handleSubmit = (e) => {
            e.preventDefault();
            const id = contactos.length + 1;
            setContactos([...contactos, { ...nuevoContacto, id }]);
            setNuevoContacto({ nombre: '', email: '', telefono: '', empresa: '' });
            setShowModal(false);
        };

        return React.createElement('div', {
            'data-name': 'contactos',
            'data-file': 'components/Contactos.js',
        },
            React.createElement('div', { className: 'd-flex justify-content-between align-items-center mb-4' },
                React.createElement('h3', null, 'Lista de Contactos'),
                React.createElement('button', {
                    className: 'btn btn-primary',
                    onClick: () => setShowModal(true)
                },
                    React.createElement('i', { className: 'fas fa-plus me-2' }),
                    'Nuevo Contacto'
                )
            ),
            React.createElement('div', { className: 'card' },
                React.createElement('div', { className: 'card-body' },
                    React.createElement('div', { className: 'table-responsive' },
                        React.createElement('table', { className: 'table table-hover' },
                            React.createElement('thead', { className: 'table-light' },
                                React.createElement('tr', null,
                                    React.createElement('th', null, 'Nombre'),
                                    React.createElement('th', null, 'Email'),
                                    React.createElement('th', null, 'Teléfono'),
                                    React.createElement('th', null, 'Empresa'),
                                    React.createElement('th', null, 'Acciones')
                                )
                            ),
                            React.createElement('tbody', null,
                                contactos.map(contacto =>
                                    React.createElement('tr', { key: contacto.id },
                                        React.createElement('td', null, contacto.nombre),
                                        React.createElement('td', null, contacto.email),
                                        React.createElement('td', null, contacto.telefono),
                                        React.createElement('td', null, contacto.empresa),
                                        React.createElement('td', null,
                                            React.createElement('button', { className: 'btn btn-sm btn-outline-primary me-2' },
                                                React.createElement('i', { className: 'fas fa-edit' })
                                            ),
                                            React.createElement('button', { className: 'btn btn-sm btn-outline-danger' },
                                                React.createElement('i', { className: 'fas fa-trash' })
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            ),
            showModal && React.createElement('div', { className: 'modal show d-block', style: { backgroundColor: 'rgba(0,0,0,0.5)' } },
                React.createElement('div', { className: 'modal-dialog' },
                    React.createElement('div', { className: 'modal-content' },
                        React.createElement('div', { className: 'modal-header' },
                            React.createElement('h5', { className: 'modal-title' }, 'Nuevo Contacto'),
                            React.createElement('button', {
                                className: 'btn-close',
                                onClick: () => setShowModal(false)
                            })
                        ),
                        React.createElement('form', { onSubmit: handleSubmit },
                            React.createElement('div', { className: 'modal-body' },
                                React.createElement('div', { className: 'mb-3' },
                                    React.createElement('label', { className: 'form-label' }, 'Nombre'),
                                    React.createElement('input', {
                                        type: 'text',
                                        className: 'form-control',
                                        value: nuevoContacto.nombre,
                                        onChange: (e) => setNuevoContacto({...nuevoContacto, nombre: e.target.value}),
                                        required: true
                                    })
                                ),
                                React.createElement('div', { className: 'mb-3' },
                                    React.createElement('label', { className: 'form-label' }, 'Email'),
                                    React.createElement('input', {
                                        type: 'email',
                                        className: 'form-control',
                                        value: nuevoContacto.email,
                                        onChange: (e) => setNuevoContacto({...nuevoContacto, email: e.target.value}),
                                        required: true
                                    })
                                )
                            ),
                            React.createElement('div', { className: 'modal-footer' },
                                React.createElement('button', {
                                    type: 'button',
                                    className: 'btn btn-secondary',
                                    onClick: () => setShowModal(false)
                                }, 'Cancelar'),
                                React.createElement('button', {
                                    type: 'submit',
                                    className: 'btn btn-primary'
                                }, 'Guardar')
                            )
                        )
                    )
                )
            )
        );
    } catch (error) {
        console.error('Contactos component error:', error);
        reportError(error);
    }
};
