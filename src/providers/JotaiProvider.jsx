import React from "react";
import { Provider } from 'jotai'
const JotaiProvider = ({ children }) => {
    return <Provider>{children}</Provider>
}
export default JotaiProvider;