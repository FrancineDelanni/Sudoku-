import "./Menu.css"
import MenuIcon from '../../assets/Menu.svg'
import ArrowIcon from '../../assets/arrow_back.svg'
import HomeIcon from '../../assets/Home.svg'

function Menu() {
    return (
        <div className="menu">
            <div className="icons">
                <img src={MenuIcon} alt="Menu icon" className="icon"></img>
                <img src={ArrowIcon} alt="Arrow icon" className="icon"></img>
                <img src={HomeIcon} alt="Home icon" className="icon"></img>
            </div>
            <div className="options">
                <a className="option">Play</a>
                <a className="option">Multiplayer</a>
                <a className="option">Solve puzzle</a>
            </div>
        </div>
    )
}

export default Menu;