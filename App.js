import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Credits from './telas/credits';
import Tabs from './telas/tabs';
import Tela1 from './telas/tela1';
import TelaAquiles from './telas/telaAquiles';
import TelaIgor from './telas/telaIgor';
import TelaOrivaldo from './telas/telaOrivaldo';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tela1" component={Tela1} />
        <Stack.Screen name="Credits" component={Credits} />
        <Stack.Screen name="TelaOrivaldo" component={TelaOrivaldo} />
        <Stack.Screen name="TelaAquiles" component={TelaAquiles} />
        <Stack.Screen name="TelaIgor" component={TelaIgor} />
        <Stack.Screen name="Tabs" component={Tabs}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
