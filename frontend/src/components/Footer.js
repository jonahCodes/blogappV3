import React ,{Component} from 'react';

export default class Footer extends Component{
  render(){
    return(
      <div>
        <section id="footer">
				<div className="container">
					<header className="major">
						<h2>Get in touch</h2>
					</header>
					<form method="post" action="#">
						<div className="row gtr-uniform">
							<div className="col-6 col-12-xsmall"><input type="text" name="name" id="name" placeholder="Name" /></div>
							<div className="col-6 col-12-xsmall"><input type="email" name="email" id="email" placeholder="Email" /></div>
							<div className="col-12"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
							<div className="col-12">
								<ul className="actions special">
									<li><input type="submit" value="Send Message" className="primary" /></li>
								</ul>
							</div>
						</div>
					</form>
				</div>
				<footer>
					<ul className="icons">
						<li><a href="#" className="icon brands alt fa-twitter"><span className="label">Twitter</span></a></li>
						<li><a href="#" className="icon brands alt fa-facebook-f"><span className="label">Facebook</span></a></li>
						<li><a href="#" className="icon brands alt fa-instagram"><span className="label">Instagram</span></a></li>
						<li><a href="#" className="icon brands alt fa-dribbble"><span className="label">Dribbble</span></a></li>
						<li><a href="#" className="icon solid alt fa-envelope"><span className="label">Email</span></a></li>
					</ul>
					<ul className="copyright">
						<li>&copy; Untitled</li>
					</ul>
				</footer>
			</section>
      </div>
    )
  }
}