import React from 'react';

const Home = React.lazy(() => import('../modules/Home'));
const DashBoard = React.lazy(() => import('../modules/DashBoard'));

const routes = [
  { exact: true, path: '/', name: 'Home', component: Home },
  { exact: true, path: '/DashBoard', name: 'DashBoard', component: DashBoard },
];

export default routes;
