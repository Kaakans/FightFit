import { h, Component } from 'preact';
import Navbar from './navbar';
import Fightfit from './fightfit';
import Trainers from './trainers';
import About from './about';

export default class App extends Component {
	render() {
		return (
			<div className="app">
				<Navbar />
				<img src="../images/boxing.jpeg" class="fit-screen-image"/>
				<Fightfit />
				<Trainers />
				<About />
			</div>
		);
	}
}