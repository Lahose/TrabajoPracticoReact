
import { ComponentCounter } from "./assets/components/ComponentCounter/ComponentCounter"
import { ComponentUseEffect } from "./assets/components/ComponentUseEffect/ComponentUseEffect"
import { FormComponent } from "./assets/components/FormComponent/FormComponent"
import { MiPrimerComponent } from "./assets/components/MiPrimerComponent/MiPrimerComponent"

export const App = () => {

    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: '2vh'}}>
            
            <ComponentCounter />
            <ComponentUseEffect />
            <FormComponent />
        </div>
    )
}