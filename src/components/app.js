import { h, Component } from 'preact';
import Navbar from './navbar';
import Fightfit from './fightfit';
import Trainers from './trainers';
import Sessions from './sessions';
import Gym from './gym';
import About from './about';
import Contact from './contact';

export default class App extends Component {
	render() {
		return (
			<div className="app">
				<Navbar />
				<img src="../images/boxing.jpg" class="fit-screen-image"/>
				<Fightfit />
				<Trainers />
				<Sessions />
				<Gym />
				<div className="tiny-info-container">
					<About />
					<Contact />
				</div>
			</div>
		);
	}
}