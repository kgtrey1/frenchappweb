import React from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'

import { store, persistor } from '@/store'
import ApplicationNavigator from '@/navigation/application'

const App: React.FC<{}> = (): JSX.Element => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ApplicationNavigator />
        </PersistGate>
    </Provider>
)

App.defaultProps = {}

export default App
