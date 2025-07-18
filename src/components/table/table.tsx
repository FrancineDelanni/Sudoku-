import './table.css'
import Cell from '../cell/cell'

function createCells(valor: number){
   
    for(let i=0;i<valor**2;i++){
        <Cell />
    }
}

function Table(){
    return(
        <div className="wrapper">
            <div className="table">

            </div>
        </div>
    )
}

export default Table;