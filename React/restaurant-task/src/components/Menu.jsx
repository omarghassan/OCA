import { useEffect, useState } from "react";

import '../styles/Menu.css'

function Menu() {
    const [dishes, setDishes] = useState(null);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");

    useEffect(() => {
        fetch("http://localhost:3002/dishes")
            .then((response) => response.json())
            .then((data) => {
                setDishes(data);
                // Extract unique categories
                const uniqueCategories = [...new Set(data.map(dish => dish.category))];
                setCategories(uniqueCategories);
            })
            .catch((error) => console.error(error));
    }, []);

    if (!dishes || dishes.length === 0) return <div>No dishes found!</div>;

    // Filter dishes based on selected category
    const filteredDishes = selectedCategory === "All"
        ? dishes
        : dishes.filter(dish => dish.category === selectedCategory);

    return (
        <div className="container">

            <h1 className="page-title">Our Menu</h1>

            {/* Category Filter Buttons */}
            <div className="row mb-4">
                <div className="col-12">
                    <div className="category-filters">
                        <button
                            className={`btn ${selectedCategory === "All" ? "btn-success" : "btn-outline-success"} me-2 mb-2`}
                            onClick={() => setSelectedCategory("All")}
                        >
                            All
                        </button>
                        {categories.map(category => (
                            <button
                                key={category}
                                className={`btn ${selectedCategory === category ? "btn-success" : "btn-outline-success"} me-2 mb-2`}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Menu Items */}
            <div className="row">
                {filteredDishes.map((dish) => (
                    <div className="col-md-4 mb-4" key={dish.id}>
                        <div className="card">
                            <img src={dish.img} className="card-image" alt={dish.name} />
                            <div className="card-body">
                                <h4 className="card-title">{dish.name}</h4>
                                <h6 className="card-subtitle mb-2 text-muted">{dish.category}</h6>
                                <p className="card-text description">{dish.description}</p>
                                <p className="card-text"><strong>${dish.price.toFixed(2)}</strong></p>
                                <button className="btn btn-success">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Menu;