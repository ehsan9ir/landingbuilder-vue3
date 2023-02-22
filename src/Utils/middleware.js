const Middleware = {
    auth: (to, from, next) => {
        const isAuthenticated = !!localStorage.getItem('ez_landingpage_token')
        
        if (isAuthenticated) {
            next()
        }
        else {
            next({ name: 'Login' })
        }
    },

    guest: (to, from, next) => {
        const isAuthenticated = !!localStorage.getItem('ez_landingpage_token')

        if ((to.name == 'Login' || to.name == 'Register') && isAuthenticated) {
            next({ name: 'Dashboard' })
        }
        else {
            next()
        }
    },
}

export default Middleware
