import React from 'react';
import { Pressable, Text, View } from 'react-native';

export default ({
    title,
    onPress,
}) => {
    return (
        <Pressable
            onPress={() => onPress && onPress()}
            style={{        
                height: 54,
                paddingHorizontal: 20,
                margin: 10,
                borderColor: 'black',
                borderWidth: 3,
                backgroundColor: 'white',
                justifyContent: 'center',}}
        >
            <View style={{ 
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',}}>
                <Text style={{textAlign: 'center'}}>{title}</Text>
            </View>
        </Pressable>
    );
};