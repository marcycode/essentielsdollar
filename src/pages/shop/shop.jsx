import React, { useState } from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";
import Footer from "../../components/Footer";

const Shop = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(PRODUCTS);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [sortBy, setSortBy] = useState("");

 
  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
    filterProducts(event.target.value, selectedOptions, sortBy);
  };

  const handleCheckboxChange = (option) => {
    let updatedSelectedOptions = [...selectedOptions];

    if (updatedSelectedOptions.includes(option)) {
      updatedSelectedOptions = updatedSelectedOptions.filter(
        (selectedOption) => selectedOption !== option
      );
    } else {
      updatedSelectedOptions.push(option);
    }

    setSelectedOptions(updatedSelectedOptions);
    filterProducts(searchInput, updatedSelectedOptions, sortBy);
  };

  const handleSortByChange = (event) => {
    const selectedSortBy = event.target.value;
    setSortBy(selectedSortBy);
    filterProducts(searchInput, selectedOptions, selectedSortBy);
  };

  const filterProducts = (searchValue, options, sortOption) => {
    let filtered = PRODUCTS.filter((product) => {
      const nameMatch = product.productName
        .toLowerCase()
        .includes(searchValue.toLowerCase());

      const optionsMatch =
        options.length === 0 || options.includes(product.category);

      return nameMatch && optionsMatch;
    });

    if (sortOption === "lowToHigh") {
      filtered = filtered.sort((a, b) => a.price - b.price);
    } else if (sortOption === "highToLow") {
      filtered = filtered.sort((a, b) => b.price - a.price);
    } else if (sortOption === "alphabetical") {
      filtered = filtered.sort((a, b) =>
        a.productName.localeCompare(b.productName)
      );
    }

    setFilteredProducts(filtered);
  };

  return (
    <div className="mb-20">
      <div className="shop">
        <div className="options-container">
          <h1 className="text-center mt-3 text-3xl font-bold">Food</h1>
          <div className="search-filter">
            <input
              type="text"
              className="search-input text-lg text-center border-2 border-gray-500 rounded-lg mb-3 ml-3 mt-5"
              placeholder="Search products"
              value={searchInput}
              onChange={handleSearchInputChange}
            />
            <div className="checkbox-group text-right mr-5">
              <label className="checkbox-label mr-2">
                <input
                  type="checkbox"
                  checked={selectedOptions.includes("Fruits")}
                  onChange={() => handleCheckboxChange("Fruits")}
                />
                Fruits
              </label>
              <label className="checkbox-label mr-2">
                <input
                  type="checkbox"
                  checked={selectedOptions.includes("Vegetables")}
                  onChange={() => handleCheckboxChange("Vegetables")}
                />
                Vegetables
              </label>
              <label className="checkbox-label mr-2">
                <input
                  type="checkbox"
                  checked={selectedOptions.includes("Meat")}
                  onChange={() => handleCheckboxChange("Meat")}
                />
                Meat
              </label>
            </div>
            <select
              value={sortBy}
              onChange={handleSortByChange}
              className="sort-select border-2 border-gray-500 rounded-lg float-right mr-7 mt-2"
            >
              <option value="">Sort By</option>
              <option value="lowToHigh">Price: Low to High</option>
              <option value="highToLow">Price: High to Low</option>
              <option value="alphabetical">Alphabetical</option>
            </select>
          </div>
        </div>
        <div className="products">
  {filteredProducts
    .filter((product) => product.id >= 0 && product.id <= 11)
    .map((product) => (
      <Product data={product} key={product.id} />
    ))}
</div>

      </div>
      <Footer />
    </div>
  );
};

export default Shop;
