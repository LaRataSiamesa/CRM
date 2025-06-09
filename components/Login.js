const Login = () => {
    try {
        const [email, setEmail] = React.useState('');
        const [password, setPassword] = React.useState('');
        const [error, setError] = React.useState('');
        const [isLoading, setIsLoading] = React.useState(false);
        const { login } = useAuth();

        const handleSubmit = async (e) => {
            e.preventDefault();
            setIsLoading(true);
            setError('');

            const result = await login(email, password);
            
            if (!result.success) {
                setError(result.error);
            }
            
            setIsLoading(false);
        };

        return React.createElement('div', {
            className: 'login-container d-flex align-items-center justify-content-center',
            'data-name': 'login-container',
            'data-file': 'components/Login.js'
        }, 
            React.createElement('div', { className: 'card shadow-lg', style: { width: '400px' } },
                React.createElement('div', { className: 'card-body p-5' },
                    React.createElement('div', { className: 'text-center mb-4' },
                        React.createElement('i', { className: 'fas fa-user-circle fa-3x text-primary mb-3' }),
                        React.createElement('h3', { className: 'fw-bold' }, 'Iniciar Sesión'),
                        React.createElement('p', { className: 'text-muted' }, 'Accede a tu CRM')
                    ),
                    error && React.createElement('div', { className: 'alert alert-danger' }, error),
                    React.createElement('form', { onSubmit: handleSubmit },
                        React.createElement('div', { className: 'mb-3' },
                            React.createElement('label', { className: 'form-label' }, 'Email'),
                            React.createElement('input', {
                                type: 'email',
                                className: 'form-control',
                                value: email,
                                onChange: (e) => setEmail(e.target.value),
                                placeholder: 'admin@crm.com',
                                required: true
                            })
                        ),
                        React.createElement('div', { className: 'mb-4' },
                            React.createElement('label', { className: 'form-label' }, 'Contraseña'),
                            React.createElement('input', {
                                type: 'password',
                                className: 'form-control',
                                value: password,
                                onChange: (e) => setPassword(e.target.value),
                                placeholder: 'admin123',
                                required: true
                            })
                        ),
                        React.createElement('button', {
                            type: 'submit',
                            className: 'btn btn-primary w-100',
                            disabled: isLoading
                        }, isLoading ? 'Iniciando...' : 'Iniciar Sesión')
                    )
                )
            )
        );
    } catch (error) {
        console.error('Login component error:', error);
        reportError(error);
    }
};
