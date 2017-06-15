import { h, Component } from 'preact';

export default class About extends Component {
	render() {
		return (
			<div id="about">
				<h1 className="secondary-title">Om oss</h1>
				<p>
					Individanpassad cirkelträning för hela familjen! Vi finns i Wiréns åkeris lokal bredvid bilpoolen.
					All träning sker på egen risk. Välkomna!
				</p>
			</div>
		);
	}
}