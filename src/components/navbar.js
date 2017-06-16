import { h, Component } from 'preact';

export default class Navbar extends Component {
    render() {
        return (
            <nav role="navigation" id="nav">
                <input className="trigger" type="checkbox" id="mainNavButton" />
                <label for="mainNavButton" onclick>
                    <img src="../images/favicon.png" className="icon" />
                </label>
                <ul>
                    <li className="nav-filler">
                        <img src="../images/favicon.png" className="icon" />
                    </li>
                    <li><a href="#fightfit">FightFit</a></li>
                    <li><a href="#trainers">Instruktörer</a></li>
                    <li><a href="#sessions">Pass</a></li>
                    <li><a href="#gym">Gym</a></li>
                    <li><a href="#about">Om oss</a></li>
                    <li><a href="#contact">Kontakt</a></li>
                    <li className="nav-filler-2"></li>
                </ul>
            </nav>
        );
    }
}