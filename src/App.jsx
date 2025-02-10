import { Alert } from "./components/Alert/Alert"
import { GlobalStyle } from "./GlobalStyled.styled"

export const App = () => {
    return (
    <div>
        <Alert text="warning" type="warning"/> 
        <Alert text="success" type="success"/> 
        <Alert text="error" type="error"/> 
    <GlobalStyle/>
    </div>
    )
}