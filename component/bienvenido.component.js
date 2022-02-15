import { useState } from "react"

const Bienvenido = () =>
{
    const [mostrarVenta, setMostrarVenta] = useState(true)
    const [solicitarVenta, setSolicitarVenta] = useState(true)

    const butVentaDolar = () =>
    {
        setSolicitarVenta(true)
        setMostrarVenta(true)
    }

    const butCompraDolar = () =>
    {
        setSolicitarVenta(false)
        setMostrarVenta(false)
    }

    if(mostrarVenta)
    {
        return <div>
            <h1 className="mt-4">¡Bienvenid@!</h1>
            <div className="row">
                <div className="col-sm-4 mt-4">
                    <h5>
                        El mejor tipo de cambio
                        para cambiar dólares y
                        soles online en Lima, Perú
                    </h5>

                </div>

                <div className="col-md-4">
                    <div className="card text-center" >
                        <div className="card-body">
                            <div className="btn-group" role="group" aria-label="First group">
                                <button type="button" class="btn btn-info md-4" onClick={butVentaDolar}>
                                    Vender Dolares
                                </button>
                            </div>
                            <div className="card-body">
                                <h3>3.7931</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-4">
                    <div className="card text-center" >
                        <div className="card-body">
                            <div className="btn-group" role="group" aria-label="First group">
                                <button type="button" className="btn btn-info"
                                    onClick={butCompraDolar}>
                                        Comprar Dolares
                                </button>
                            </div>
                            <div className="card-body">
                                <h3>3.8131</h3>
                            </div>
                        </div>
                    </div>
                </div>



                {/* MOSTRAR TIPO DE CAMBIO VENTA*/}
                <div className="card mt-4">
                    <div className="row mt-4">
                        <div className="col-md-2">
                            <label for="">Vender $</label>
                        </div>
                        <div className="col-md-2">
                            <input className="form-control" type="number" />
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-2">
                            <label for="">Tipo de Cambio</label>
                        </div>
                        <div className="col">
                            <h4>3.7931 </h4>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-2">
                            <label for="">Recibirás S/.</label>
                        </div>
                        <div className="col-md-2">
                            <input className="form-control mb-4" value="0.00" type="text" />
                        </div>
                    </div>

                    <div>
                        <a href="#" className="btn btn-success mb-4">Solicitar venta</a>
                    </div>
                </div>
            </div>
        </div>
    }
    else
    {
        {/* MOSTRAR TIPO DE CAMBIO COMPRA*/ }
        return <div>
            <h1 className="mt-4">¡Bienvenid@!</h1>
            <div className="row">
                <div className="col-sm-4 mt-4">
                    <h5>
                        El mejor tipo de cambio
                        para cambiar dólares y
                        soles online en Lima, Perú
                    </h5>

                </div>

                <div className="col-md-4">
                    <div className="card text-center" >
                        <div className="card-body">
                            <div className="btn-group" role="group" aria-label="First group">
                                <button type="button" class="btn btn-info md-4"
                                    onClick={butVentaDolar}>Vender Dolares</button>
                            </div>
                            <div className="card-body">
                                <h3>3.7931</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-4">
                    <div className="card text-center" >
                        <div className="card-body">
                            <div className="btn-group" role="group" aria-label="First group">
                                <button type="button" className="btn btn-info">Comprar Dolares</button>
                            </div>
                            <div className="card-body">
                                <h3>3.8131</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card mt-4">
                    <div className="row mt-4">
                        <div className="col-md-2">
                            <label for="">Comprar $</label>
                        </div>
                        <div className="col-md-2">
                            <input className="form-control" type="number" />
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-2">
                            <label for="">Tipo de Cambio</label>
                        </div>
                        <div className="col">
                            <h4>3.8131 </h4>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-2">
                            <label for="">Enviarás S/.</label>
                        </div>
                        <div className="col-md-2">
                            <input className="form-control mb-4" value="0.00" type="text" />
                        </div>
                    </div>

                    <div>
                        <a href="#" className="btn btn-success mb-4">Solicitar compra</a>
                    </div>
                </div>
            </div>
        </div>
    }

}
export default Bienvenido