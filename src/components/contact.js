import { h, Component } from 'preact';

export default class Contact extends Component {
	render() {
		return (
			<div id="contact">
				<h1 className="secondary-title">Kontakt</h1>
                <p>
                    <div>
                        <span className="icon-wrapper">
                            <i className="fa fa-facebook-official" />
                        </span>
                        <a href="http://facebook.com/fightfitkristinehamn">FightFit på facebook</a>
                    </div>
                    <div>
                        <span className="icon-wrapper">
                            <i className="fa fa-phone" />
                        </span>
                        076-046 69 94
                    </div>
                    <div>
                        <span className="icon-wrapper">
                            <i className="fa fa-map-marker" />
                        </span>
                        Tredje Industrigatan 2, Kristinehamn
                    </div>
                </p>
			</div>
		);
	}
}