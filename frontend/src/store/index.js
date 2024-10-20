import { createContext } from 'react'
import { globalReducer } from './helpers'

const context = createContext()
const BASE_URL = "http://localhost:3000/"

const initialState = {
    loaded: true,
    selectedProducts: [],
    currencies: [
        { code: "USD", active: true },
        { code: "EUR", active: false },
        { code: "GBP", active: false },
        { code: "JPY", active: false },
        { code: "RUB", active: false },
        { code: "UZS", active: false }
    ],
    languages: [
        { code: "en", active: true },
        { code: "uz", active: false },
        { code: "ru", active: false }
    ],
    basket: [],
}

export {
    context,
    BASE_URL,
    initialState,
    globalReducer
}
