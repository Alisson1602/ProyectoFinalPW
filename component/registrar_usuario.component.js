import { useState } from "react"

const RegistroUsuario = (props) =>
{
    {/* BOTON REGISTRAR */ }
    const [txtNombre, setTxtNombre] = useState("")
    const [txtApellido, setTxtApellido] = useState("")
    const [txtDNI, setTxtDNI] = useState(0)

    const butRegistrarOnClick = () => 
    {
        props.onRegistro()
    }

    return <div>
        <h1>Registrate</h1>
        <div class="card mt-4">
            <div class="card-body">
                <h3>Paso 1</h3>
                <form>
                    <div>
                        <label for="txt_username" class="form-label">Nombre</label>
                        <input id="txt_username" type="text" class="form-control"
                            defaultValue={txtNombre}/>
                    </div>
                    <div>
                        <label for="txt_apellido" class="form-label">Apellido</label>
                        <input id="txt_apellido" type="text" class="form-control"
                            defaultValue={txtApellido}/>
                    </div>
                    <div>
                        <label for="txt_dni" class="form-label">D.N.I</label>
                        <input id="txt_dni" type="text" class="form-control"
                            defaultValue={txtDNI}/>
                    </div>

                    <button id="butRegistrar" className="btn btn-link" type="button"
                        onClick={butRegistrarOnClick}>
                        Registrar
                    </button>
                </form>
            </div>
        </div>
    </div>
}
export default RegistroUsuario