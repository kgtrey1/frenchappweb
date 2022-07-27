import { AxiosInstance } from 'axios'
import MockAdapter from 'axios-mock-adapter'

const setupMocks = (api: AxiosInstance) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const mocker = new MockAdapter(api, {
        delayResponse: 1000,
        onNoMatch: 'passthrough',
    })
}

export default setupMocks
