import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Box,
  Sphere
} from 'react-vr';

export default class firstapp extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('chess-world.jpg')}/>
        <Box
        dimWidth={0.35}
        dimDepth={0.35}
        dimHeight={0.25}
        dimWidth={0.35}
        wireframe={true}
        style={{
          color:'red',
          transform:[{translate:[2,0,-2]},{rotateX:45},{rotateY:45},{rotateZ:45}]
        }}

        />
        <Sphere
        radius={0.5}
        widthSegments={100}
        heightSegments={100}
        wireframe={true}
        style={{
          color:'red',
          transform:[{translate:[0,0,-2]}]
        }}
        />
          
      </View>
    );
  }
};

AppRegistry.registerComponent('firstapp', () => firstapp);
