import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import Tela2 from './tela2';



export default function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tela2" component={Tela2} options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}/>
    </Tab.Navigator>
  );
}