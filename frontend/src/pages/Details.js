import React from "react";

function Details() {
    return(
        <div>
            <section className="details p-5 text-center">
                {/*- Pierwsza tabela (cennik) -*/}
                <section className="first-table mb-5">
                    <div className="container">
                        <h1>Cennik</h1>
                        <table className="table table-bordered">
                            <thead className="thead-dark">
                            <tr>
                                <th scope="col">Model auta</th>
                                <th scope="col">Cena za 1 dzień</th>
                                <th scope="col">Cena za 7 dni</th>
                                <th scope="col">Cena za 30 dni</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Audi R8</td>
                                <td>900zł brutto</td>
                                <td>4.500zł brutto</td>
                                <td>10.000zł brutto</td>
                            </tr>
                            <tr>
                                <td>Nissan GTR</td>
                                <td>800zł brutto</td>
                                <td>4.000zł brutto</td>
                                <td>9.000zł brutto</td>
                            </tr>
                            <tr>
                                <td>Porsche 911</td>
                                <td>700zł brutto</td>
                                <td>3.500zł brutto</td>
                                <td>8.000zł brutto</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
                {/*- Druga tabela (Limit km) -*/}
                <section className="second-table">
                    <div className="container ">
                        <div className="flex-row d-flex justify-content-center">
                            <div className="col-12 col-sm-4">
                                <table className="table table-bordered">
                                    <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">Okres najmu</th>
                                        <th scope="col">Limit kilometrów na dobę</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>1-3 dni</td>
                                        <td>250 km</td>
                                    </tr>
                                    <tr>
                                        <td>3-6 dni</td>
                                        <td>200 km</td>
                                    </tr>
                                    <tr>
                                        <td>7-13 dni</td>
                                        <td>175 km</td>
                                    </tr>
                                    <tr>
                                        <td>14-20 dni</td>
                                        <td>135 km</td>
                                    </tr>
                                    <tr>
                                        <td>21-29 dni</td>
                                        <td>100 km</td>
                                    </tr>
                                    <tr>
                                        <td>30 dni i dłużej</td>
                                        <td>85 km</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
                {/*- Trzecia tabela (usługi dodatkowe) -*/}
                <section className="third-table">
                    <div className="container">
                        <div className="flex-row d-flex justify-content-center">
                            <div className="col-12 col-sm-4">
                                <table className="table table-bordered">
                                    <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">Usługi dodatkowe</th>
                                        <th scope="col">Cena brutto</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>Lorem ipsum</td>
                                        <td>150zł</td>
                                    </tr>
                                    <tr>
                                        <td>Lorem ipsum</td>
                                        <td>200zł</td>
                                    </tr>
                                    <tr>
                                        <td>Lorem ipsum</td>
                                        <td>1.750zł</td>
                                    </tr>
                                    <tr>
                                        <td>Lorem ipsum</td>
                                        <td>50zł</td>
                                    </tr>
                                    <tr>
                                        <td>Lorem ipsum</td>
                                        <td>2.137zł</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
                {/*- Czwarta tabela (Kaucja) -*/}
                <section className="fourth-table">
                    <div className="container">
                        <div className="flex-row d-flex justify-content-center">
                            <div className="col-12 col-sm-4">
                                <table className="table table-bordered">
                                    <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">Wiek kierowcy</th>
                                        <th scope="col">Kaucja za samochód</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>18-21 lat</td>
                                        <td>4.000zł</td>
                                    </tr>
                                    <tr>
                                        <td>21-24 lata</td>
                                        <td>2.000zł</td>
                                    </tr>
                                    <tr>
                                        <td>powyżej 24 lat</td>
                                        <td>1.000zł</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    )
}

export default Details