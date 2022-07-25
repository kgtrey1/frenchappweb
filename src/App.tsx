import React from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'

import { store, persistor } from '@/Redux'
import ApplicationNavigator from '@/Navigation/Application'

const App: React.FC<{}> = (): JSX.Element => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ApplicationNavigator />
            </PersistGate>
        </Provider>
    )
}

App.defaultProps = {}

export default App
