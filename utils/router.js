export default const router = [
    {
        path: '/',
        name: 'home',
        child: [{
            path: '/home',
            name: 'about'
        }]
    }
]