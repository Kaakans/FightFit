import { h, Component } from 'preact';

export default class Trainers extends Component {
	render() {
		return (
			<div className="tab-container primary primary-faded rounded mt-50 mb-50" id="trainers">
				<h1 className="tab-title secondary-text inline-block">FightFit</h1>
				<h2 className="inline-block">&nbsp;i tre steg</h2>
				<div className="tabs">
					<div class="tab-3">
						<label for="tab3-1">Morgan</label> <input checked={true} id="tab3-1" name="tabs-two" type="radio" />
						<div>
							<img src="../images/morgan_profile.jpg" alt="Morgan" class="profile-picture" />
							<h4>Pass, gym, rådgivning</h4>
							<p>
								FightFit, Reps, Barbell hell, Core
							</p>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
								Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
								consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
								nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
								mollit anim id est laborum.
							</p>
						</div>
					</div>
					<div class="tab-3">
						<label for="tab3-2">Malin</label> <input id="tab3-2" name="tabs-two" type="radio" />
						<div>
							<img src="../images/malin_profile.jpg" alt="Morgan" class="profile-picture" />
							<h4>Pass, gym, rådgivning</h4>
							<p>
								FightFit, Core
                    		</p>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
								Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
								consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
								nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
								mollit anim id est laborum.
							</p>
						</div>
					</div>
					<div class="tab-3">
						<label for="tab3-3">Thord</label> <input id="tab3-3" name="tabs-two" type="radio" />
						<div>
							<img src="../images/default_profile.jpg" alt="Morgan" class="profile-picture" />
							<h4>Pass</h4>
							<p>
								FightFit
                    		</p>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
								Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
								consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
								nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
								mollit anim id est laborum.
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}