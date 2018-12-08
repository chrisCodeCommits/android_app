import React from 'react';
import { Text, View } from 'react-native';


// creating header component
const Header = () => {
    const { textStyle, viewStyle } = styles;

    return ( 
    <View style={viewStyle}>
    <Text style={textStyle}>Fitness App</Text>
    </View>
    );
};


// Styling header component
const styles = {

    viewStyle: {
        backgroundColor: '#F3F3F3',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15, 
    },


    textStyle: {
        fontSize: 20
    }
};


// making this component accessible
// to indexjs
export default Header;
