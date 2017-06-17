import { h, Component } from 'preact';

export default class Contact extends Component {
	render() {
		return (
			<div id="contact">
				<h1 className="secondary-title">Kontakt</h1>
				<table>
                    <thead>
                        <tr>
                            <th width="40"></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><i className="fa fa-facebook-official" /></td>
                            <td><a href="http://facebook.com/fightfitkristinehamn">FightFit på facebook</a></td>
                        </tr>
                        <tr>
                            <td><i className="fa fa-phone" /></td>
                            <td>076-046 69 94</td>
                        </tr>
                        <tr>
                            <td><i className="fa fa-map-marker" /></td>
                            <td>Tredje Industrigatan 2, Kristinehamn</td>
                        </tr>
                    </tbody>
                </table>
			</div>
		);
	}
}