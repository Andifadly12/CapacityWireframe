import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import AuthRoute from "./route/auth";
function App() {
  return(
    <NavigationContainer>
      <AuthRoute />
    </NavigationContainer>
  );
}

export default App;

