import React from 'react';
import Logo from '../assets/img/logo.png';
import { IoCartOutline } from 'react-icons/io5';

function Header() {
	return (
		<div className="header">
			<div className="container">
				<div className="header__logo">
					<img width="50" src={Logo} alt="Coctail logo" />
					<div>
						<h1>Coctails Bar</h1>
						<p>Best coctails in whole world</p>
					</div>
				</div>
				<div className="header__cart">
					<a href="/cart.html" className="button button--cart">
						<span>520 ₽</span>
						<div className="button__delimiter"></div>
						<IoCartOutline />
						<span>3</span>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Header;
