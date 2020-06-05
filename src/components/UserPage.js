import React from 'react';
import {View, Text,AsyncStorage} from 'react-native';
import decode from 'jwt-decode';



export default function UserPage() {

    const [state, setState] = React.useState({
        user: null,

    });

    async function getUser () {

        try {
            const token = await AsyncStorage.getItem('jwt');

            if(token){
                const decoded = decode(token);
                setState(decoded);
            }

        }catch (e) {
            console.log(e);
        }
    }

    getUser();


    return (

        <View>

            <Text>
                {state.email}
                USER INFO
            </Text>



        </View>
    );
}

