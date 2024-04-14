import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../component/Footer";
import Spinner from "../component/Spinner";

function PriceComparison() {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("Iphone 14 Pro Max");
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [exchangeRate, setExchangeRate] = useState(null);
  const [showConverter, setShowConverter] = useState(false);
  const [convertTo, setConvertTo] = useState("USD");
  const [amount, setAmount] = useState("");
  const [convertedAmount, setConvertedAmount] = useState("");
  const API_KEY = import.meta.env.VITE_Pricer_API_KEY;

  useEffect(() => {
    fetchExchangeRate();
  }, []);

  const fetchExchangeRate = async () => {
    try {
      const response = await axios.get("https://api.exchangerate-api.com/v4/latest/USD");
      setExchangeRate(response.data.rates.INR);
    } catch (error) {
      console.error(error);
      setError("Failed to fetch exchange rate");
    }
  };

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get("https://pricer.p.rapidapi.com/str", {
        params: { q: searchTerm },
        headers: {
          "X-RapidAPI-Key": API_KEY,
          "X-RapidAPI-Host": "pricer.p.rapidapi.com",
        },
      });
      const updatedProducts = response.data.map(product => ({
        ...product,
        price: parseFloat(product.price.replace("$", "").replace(",", ""))
      }));
      setProducts(updatedProducts);
      setShowConverter(true);
    } catch (error) {
      console.error(error);
      setError("Failed to fetch products");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      fetchData();
    }
  };

  const handleConvert = () => {
    if (amount.trim() !== "") {
      const converted =
        convertTo === "USD" ? amount / exchangeRate : amount * exchangeRate;
      setConvertedAmount(converted.toFixed(2));
      setAmount(converted.toFixed(2)); // Set converted amount to input field
    }
  };

  return (
    <div className="text-center">
      <div className="mt-4 flex justify-center items-center">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search products..."
          className="mr-2 p-2 border border-gray-300 rounded-md w-[80%]"
        />
        <button
          onClick={handleSearch}
          className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
        >
          <span role="img" aria-label="Search">
            🔍
          </span>
        </button>
      </div>
      {showConverter && (
        <div className="mt-4">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            className="mr-2 p-2 border border-gray-300 rounded-md w-[15rem] md:w-[20rem] mx-auto"
          />
          <select
            value={convertTo}
            onChange={(e) => setConvertTo(e.target.value)}
            className="mr-2 p-2 border border-gray-300 rounded-md mt-2 md:mt-0"
          >
            <option value="USD">USD to INR</option>
            <option value="INR">INR to USD</option>
          </select>
          <button
            onClick={handleConvert}
            className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Convert
          </button>
        </div>
      )}
      {loading ? (
        <div className="ml-[50%] mt-[3rem]">
          <Spinner />
        </div>
      ) : error ? (
        <p>{error}</p>
      ) : products.length === 0 ? (
        <div className="mt-4 p-3 text-center bg-red-100 border border-red-400 rounded-md ml-4 mr-4">
          <p className="text-red-500 md:text-2xl font-mono">
            No data available
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-3 -mb-16 mr-5 ml-5 cursor-pointer">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 shadow-md border-2 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
            >
              <img src={product.img} alt={product.title} className="mb-4 w-[9em] h-[9rem]  rounded-sm" />
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-gray-600">
                Shop: <span className="font-semibold">{product.shop}</span>
              </p>
              <p className="text-gray-600">
                Price: <span className="font-semibold">${product.price.toFixed(2)}</span>
              </p>
              <p className="text-gray-600">Rating: {product.rating}</p>
              <p className="text-gray-600">Reviews: {product.reviews}</p>
              <p className="text-gray-600">Shipping: {product.shipping}</p>
              <a href={product.link} className="text-blue-500 hover:underline" target="_blank">
                View Product
              </a>
            </div>
          ))}
        </div>
      )}

      <div className="relative -bottom-[7.5rem]">
        <Footer />
      </div>
    </div>
  );
}

export default PriceComparison;
