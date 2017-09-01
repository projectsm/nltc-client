class App{
	constructor(){
		this.state = {};
	}

	render(html, component){
		component.innerHTML += html;
	}

	reRender(html, component){
		component.innerHTML += html;
	}
}

class Component extends App{
	constructor(){

		super();
	}

	landingPage(){
		let html = `
		<div>
			<nav>
				<div class="nav-wrapper">
					<a href="#" class="brand-logo center" style="font-size: 1.0em;">New Lian Tai Commercial</a>
				</div>
			</nav>
			<div class="row">
				<div class="col s12 m6">
					<div class="card blue-grey darken-1 hoverable">
						<div class="card-content white-text">
							<span class="card-title">Register</span>
							<div class="row">
								<form class="col s12">
									<div class="row">
										<div class="input-field col s6">
											<input id="reg_firstname" type="text" class="validate">
											<label for="reg_firstname">First Name</label>
										</div>
										<div class="input-field col s6">
											<input id="reg_lastname" type="text" class="validate">
											<label for="reg_lastname">Last Name</label>
										</div>
									</div>
									<div class="row">
										<div class="input-field col s12">
											<input id="reg_contactnumber" type="text" class="validate">
											<label for="reg_contactnumber">Contact Number</label>
										</div>
									</div>
									<div class="row">
										<div class="input-field col s12">
											<input id="reg_username" type="text" class="validate">
											<label for="reg_username">Username</label>
										</div>
									</div>
									<div class="row">
										<div class="input-field col s6">
											<input id="reg_password" type="password" class="validate">
											<label for="reg_password">Password</label>
										</div>

										<div class="input-field col s6">
											<input id="reg_cpassword" type="password" class="validate">
											<label for="reg_cpassword">Confirm Password</label>
										</div>
									</div>
									<div class="row">
										<div class="input-field col s12">
											<select id="reg_type">
												<option value="" disabled selected>Choose your option</option>
												<option value="1">CUSTOMER</option>
												<option value="2">SUPPLIER</option>
												<option value="3">MANAGER</option>
											</select>
											<label>Account Type</label>
										</div>
									</div>
								</form>
							</div>
						</div>
						<div class="card-action">
							<button class="btn btn-primary pink right" >Register</button>
							<div>&nbsp;</div><div>&nbsp;</div>
						</div>
					</div>
				</div>
				<div class="col s12 m6">
					<div class="card blue-grey darken-1 hoverable">
						<div class="card-content white-text">
							<span class="card-title">Login</span>
							<div class="row">
								<form class="col s12">
									<div class="row">
										<div class="input-field col s12">
											<input id="login_username" type="text" class="validate">
											<label for="login_username">Username</label>
										</div>
									</div>
									<div class="row">
										<div class="input-field col s12">
											<input id="login_password" type="password" class="validate">
											<label for="login_password">Password</label>
										</div>
									</div>
								</form>
							</div>
						</div>
						<div class="card-action">
							<button class="btn btn-primary blue right">Login</button>
							<div>&nbsp;</div><div>&nbsp;</div>
						</div>
					</div>
				</div>
			</div>
		</div>		
		`;
		this.reRender(html, document.querySelector('#app'));

		$('select').material_select();		
	}

}

let component = new Component();
component.landingPage();