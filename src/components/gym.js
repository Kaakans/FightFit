import { h, Component } from 'preact';

export default class Gym extends Component {
	render() {
		return (
			<div id="gym">
				<h1 className="secondary-title">Fight Fit Athletics</h1>
				<p>En topputrustad träningsanläggning med över 700 kvadrat träningsyta. Vi har:</p>
				<ul>
					<li>28 konditionsmaskiner</li>
					<li>Flertalet friviktsmaskiner</li>
					<li>Maskiner med viktmagasin</li>
					<li>Stort utbud av fria vikter. tunga hantlar och flertalet skivstänger</li>
					<li>Riktiga tyngdlyftningsgolv</li>
					<li>Powerracks</li>
					<li>Crossfitriggar som är fullt utrustade</li>
					<li>Stor yta konstgräs med över 20-talet funktionsredskap</li>
					<li>Stor lokal för pass</li>
					<li>Balkong för fika och mat</li>
				</ul>
			</div>
		);
	}
}