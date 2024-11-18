
import { AppProduct } from "./assets/components/AddProduct/AppProduct"
import { ComponentCounter } from "./assets/components/ComponentCounter/ComponentCounter"
import { ComponentUseEffect } from "./assets/components/ComponentUseEffect/ComponentUseEffect"
import { FormComponent } from "./assets/components/FormComponent/FormComponent"
import { MiPrimerComponent } from "./assets/components/MiPrimerComponent/MiPrimerComponent"

export const App = () => {

    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: '2vh'}}>
            <MiPrimerComponent
            text={"Texto desde Propiedades"}
            color="red"
            fontSize={0}
            />

            <ComponentCounter />
            <ComponentUseEffect />
            <FormComponent />
            <AppProduct />
        </div>
    )
}