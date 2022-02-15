const NosotrosPag = () => {
    return <div>
        <h2 className="mt-2">Integrantes Grupo San Valentín</h2>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div className="carousel-inner">

                <div className="carousel-item active">
                    <img src="http://assets.stickpng.com/images/5a24123c6003f508dd5d5b39.png" class="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Jacquie Dueñas</h5>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://i.ytimg.com/vi/zZCyJiyWdX0/maxresdefault.jpg" class="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Alisson Gallardo</h5>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://i.ytimg.com/vi/MfS7nrd2gGc/mqdefault.jpg" class="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Jhon Ipanaque</h5>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://proprogramming.org/wp-content/uploads/2014/12/snake-2Bladder-2Bc-2B-2B.jpg" class="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Rodrigo Loli</h5>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

        <div className="mt-4">
            <a href="/" class="btn btn-primary" role="button" >Regresar</a>

        </div>

    </div>
}
export default NosotrosPag