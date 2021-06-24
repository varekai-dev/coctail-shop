import React from 'react';
import Button from '../Button';
import { HiOutlinePlusSm } from 'react-icons/hi';
export default function CoctailBlock({ strDrinkThumb, strDrink }) {
	return (
		<div className="coctail-block">
			<img className="coctail-block__image" src={strDrinkThumb} alt="Coctail" />
			<h4 className="coctail-block__title">{strDrink}</h4>

			<div className="coctail-block__bottom">
				<div className="coctail-block__price">from 100 uah</div>
				<Button className="button--add" outline>
					<HiOutlinePlusSm />
					<span>Add</span>
					{1 && <i>{1}</i>}
				</Button>
			</div>
		</div>
	);
}
