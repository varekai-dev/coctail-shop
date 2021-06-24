import React, { useState, useEffect } from 'react';
import Api from '../api';

function Categories() {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		const getCategories = async () => {
			try {
				const response = await Api.DB.getCategoryList();
				const data = await response.data;
				setCategories(data.drinks);
			} catch (e) {
				console.log('error', e);
			}
		};
		getCategories();
	}, []);
	const [activeCategory, setActiveCategory] = useState(null);
	const onClickCategory = (category) => {
		setActiveCategory(category);
	};

	return (
		<div className="categories">
			<ul>
				<li className={activeCategory === null ? 'active' : ''} onClick={() => onClickCategory(null)}>
					All
				</li>
				{categories.length > 0 &&
					categories.map((item, index) => (
						<li onClick={() => onClickCategory(index)} className={activeCategory === index ? 'active' : ''} key={`${item.strCategory}_${index}`}>
							{item.strCategory}
						</li>
					))}
			</ul>
		</div>
	);
}

export default Categories;
