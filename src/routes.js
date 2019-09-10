import {
  createAppContainer
} from 'react-navigation';
import {
  createStackNavigator
} from 'react-navigation-stack';

import Home from './Screens/Home';
import Cronometer from './Screens/CornometerA';

const AppRouter = createAppContainer(
  createStackNavigator({
    Home,
    Cronometer,
  }),
);

export default AppRouter;