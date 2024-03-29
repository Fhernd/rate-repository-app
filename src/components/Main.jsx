import React from 'react';
import { Text, View } from 'react-native';
import { Redirect, Route, Switch } from 'react-router-native';

import RepositoryList from './RepositoryList';
import AppBar from './AppBar';

const Main = () => {
    return (
        <View style={{ flex: 1 }}>
            <AppBar />
            <Switch>
                <Route path='/' exact>
                    <RepositoryList />
                </Route>
                <Route path='/signin' exact>
                    <Text>Sign in</Text>
                </Route>
                <Redirect to='/' />
            </Switch>
        </View>
    );
}

export default Main;
