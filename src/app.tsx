import { useRoutes } from 'react-router-dom';
import { routers } from './router';

export const App = () => {
  const element = useRoutes(routers);
  return element;
};
