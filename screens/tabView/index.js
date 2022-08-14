import * as React from 'react';
import { View, useWindowDimensions, Text } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: 'white' }} />
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);

export default function TabViewExample() {
    
  const layout = useWindowDimensions();


  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  const TabComponent = () => {
    return (
      <View>
        <Text>
          {'First'}
        </Text>
      </View>
    )
  }
  

  return (  
    <View style={{flex: 1}}>
      <View>
        <Text>
          {'ahjshjb'}
        </Text>
      </View>
      <TabView
        renderTabBar={props => <TabComponent {...props} />}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
      </View>  
  );
}   