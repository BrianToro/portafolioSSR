import Home from '../containers/Home';
import Notfound from '../containers/notFound';

const routes = [
    {
        exact: true,
        path: "/",
        component: Home,
    },
    {
        name: 'NotFound',
        component: Notfound,
    },
];

export default routes;