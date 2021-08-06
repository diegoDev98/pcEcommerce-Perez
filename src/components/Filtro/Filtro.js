import React from 'react'
import './Filtro.css'
import { Link } from 'react-router-dom'



export default function Filtro() {
    return (
        <>
        <div className="filtro">
            <div className="filtroHeader">
                <h2>Categorias</h2>
            </div>

            <Link to='/category/processor/'>
                <div className="subcat">
                    <div className="subcatIcon processors"></div>
                    <div className="subcatTitle"> Procesadores</div>
                </div>
            </Link>
            <Link to='/category/motherboard/'>
                <div className="subcat">
                    <div className="subcatIcon motherboards"></div>
                    <div className="subcatTitle"> MotherBoards</div>
                </div>
            </Link>

            <Link to='/category/ram/'>
                <div className="subcat">
                    <div className="subcatIcon ram"></div>
                    <div className="subcatTitle"> Memorias Ram</div>
                </div>
            </Link>

            <Link to='/category/graphicscard/'>
                <div className="subcat">
                    <div className="subcatIcon videocard"></div>
                    <div className="subcatTitle"> Placa De Video</div>
                </div>
            </Link>

            <Link to='/category/storage/'>
                <div className="subcat">
                    <div className="subcatIcon storage"></div>
                    <div className="subcatTitle"> Almacenamiento</div>
                </div>
            </Link>

            <Link to='/category/gabinet/'>
                <div className="subcat">
                    <div className="subcatIcon gabinet"></div>
                    <div className="subcatTitle"> Gabinete</div>
                </div>
            </Link>

            <Link to='/category/powersupply/'>
                <div className="subcat">
                    <div className="subcatIcon powersupply"></div>
                    <div className="subcatTitle"> Fuentes</div>
                </div>
            </Link>

            <Link to='/category/cooler/'>
                <div className="subcat">
                    <div className="subcatIcon coolers"></div>
                    <div className="subcatTitle"> Refrigeracion</div>
                </div>
            </Link>

            <Link to='/category/accessories/'>
                <div className="subcat">
                    <div className="subcatIcon accessories"></div>
                    <div className="subcatTitle"> Perifericos</div>
                </div>
            </Link>

            <Link to='/category/games/'>
                <div className="subcat">
                    <div className="subcatIcon games"></div>
                    <div className="subcatTitle"> Juegos</div>
                </div>
            </Link>

            <Link to='/category/games/'>
                <div className="subcat">
                    <div className="subcatIcon consoles"></div>
                    <div className="subcatTitle"> Consolas </div>
                </div>
            </Link>

            <Link to='/category/monitor/'>
                <div className="subcat">
                    <div className="subcatIcon monitors"></div>
                    <div className="subcatTitle"> Monitores  </div>
                </div>
            </Link>


        </div>
        </>
    )
}
