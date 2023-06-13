const Encuesta = () => {
    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className="titulo">
                <h1>Encuesta de Evento.</h1>
            </div>
            <div className="formulario">
                <form>
                    <div class="dropdown mt-3">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown button
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">0</a></li>
                            <li><a className="dropdown-item" href="#">1</a></li>
                            <li><a className="dropdown-item" href="#">2</a></li>
                            <li><a className="dropdown-item" href="#">3</a></li>
                            <li><a className="dropdown-item" href="#">4</a></li>
                            <li><a className="dropdown-item" href="#">5</a></li>
                            <li><a className="dropdown-item" href="#">6</a></li>
                            <li><a className="dropdown-item" href="#">7</a></li>
                            <li><a className="dropdown-item" href="#">8</a></li>
                            <li><a className="dropdown-item" href="#">9</a></li>
                            <li><a className="dropdown-item" href="#">10</a></li>
                        </ul>
                    </div>
                    <div className="form-floating mt-3">
                        <label htmlFor="">Comentarios</label>
                        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                        <label htmlFor="floatingTextarea">Escribe tus comentarios sobre el evento aqui</label>
                    </div>
                    <div>
                        <button className="btn btn-outline-success btn-block mt-auto" >Enviar</button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Encuesta