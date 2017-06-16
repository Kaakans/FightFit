import { h, Component } from 'preact';

export default class Sessions extends Component {

    sessions() {
        return [
            { day: 'Måndag', sessions: [ { time: '16.15 - 17.00', type: 'FightFit' } ] }, 
            { 
                day: 'Tisdag', 
                sessions: [ 
                    { time: '16.15 - 17.00', type: 'FightFit' }, 
                    { time: '17.15 - 18.00', type: 'Reps' }, 
                    { time: '18.15 - 19.15', type: 'Kick and  box' }
                ]
            }, 
            { day: 'Onsdag', sessions: [ { time: '16.15 - 17.00', type: 'FightFit' } ] }, 
            { 
                day: 'Torsdag', 
                sessions: [ 
                    { time: '17.15 - 18.00', type: 'FightFit' },
                    { time: '18.15 - 19.00', type: 'Barbell Hell' }
                ]
            }, 
            { day: 'Fredag', sessions: [ { time: '16.15 - 17.00', type: 'FightFit' } ] }, 
            { day: 'Lördag', sessions: [ { time: '10.00 - 11.00', type: 'Kick and  box' } ] }, 
            { day: 'Söndag', sessions: [ { time: '10.00 - 10.45', type: 'Tabata' } ] }
        ];
    }

	render() {
		return <div id="sessions">
            <h1 className="secondary-title">Pass</h1>
            {this.renderSchedules()}
        </div>;
}

    renderSchedules() {
        return this.sessions().map(x => this.renderDay(x));
    }

    renderDay(data) {
        return <div className="session">
            <span className="sub-title">{data.day}</span>
            <table>
                <tbody>
                    {data.sessions.map(x => this.renderSession(x))}
                </tbody>
            </table>
        </div>;
    }

    renderSession(session) {
        return <tr>
            <td>{session.time}</td>
            <td>{session.type}</td>
        </tr>;
    }
}