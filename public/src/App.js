import React from "react";
import { Container} from "@material-ui/core";
import Navbar from "./components/Navbar/navBar";
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
const App = () => {

    return ( 
        <BrowserRouter>
            <Container maxwidth="lg">
                
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/auth" exact component={Auth} />
                </Switch>
             
            </Container>
        </BrowserRouter>
  
    
     );
}
 
export default App;