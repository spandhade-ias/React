//39 Context
import React from "react";

//Pass the default value for the context in createContext()
const UserContext = React.createContext()

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProvider,UserConsumer}