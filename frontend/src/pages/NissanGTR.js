import React from "react";

function Nissan() {
    return(
        <div>
            <section className="gtr py-5">
                {/*- Sekcja tytułowa -*/}
                <section className="header-gtr bg-image">
                    <h1>NISSAN GTR (R35)</h1>
                </section>
                {/*- Zdjęcia i opis auta -*/}
                <section className="gtr-opis">
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col-md-6">
                                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
                                    <div className="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
                                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
                                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={3} aria-label="Slide 4" />
                                    </div>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src={require("./images/gtr/gtr1.png")} className="d-block w-100" alt="..." />
                                            <div className="carousel-caption d-none d-md-block">
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <img src={require("./images/gtr/gtr2.png")} className="d-block w-100" alt="..." />
                                            <div className="carousel-caption d-none d-md-block">
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <img src={require("./images/gtr/gtr3.png")} className="d-block w-100" alt="..." />
                                            <div className="carousel-caption d-none d-md-block">
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <img src={require("./images/gtr/gtr4.png")} className="d-block w-100" alt="..." />
                                            <div className="carousel-caption d-none d-md-block">
                                            </div>
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true" />
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute irure dolor.</p>
                                <p>Rodzaj paliwa: Lorem ipsum</p>
                                <p>Moc: Lorem ipsum</p>
                                <p>Skrzynia biegów: Lorem ipsum</p>
                                <p>Ilość pasażerów: Lorem ipsum</p>
                                <p>Przyspieszenie 0-100 km/h: Lorem ipsum</p>
                                <p>Limit kilometrów: Lorem ipsum</p>
                                <p>Napęd: Lorem ipsum</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/*- Tabela z cennikiem wypożyczenia -*/}
                <section className="gtr-cennik mt-3">
                    <h1>Cennik wypożyczenia</h1>
                    <p>Regularna cena za dobę: 800zł</p>
                    <div className="container">
                        <table className="table table-bordered">
                            <thead className="thead-dark">
                            <tr>
                                <th scope="col">Długość najmu (doby)</th>
                                <th scope="col">Cena za dobę</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>1</td>
                                <td>Lorem ipsum</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>Lorem ipsum</td>
                            </tr>
                            <tr>
                                <td>30</td>
                                <td>Lorem ipsum</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </section>
        </div>
    )
}

export default Nissan