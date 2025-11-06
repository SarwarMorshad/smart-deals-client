// components/ProductDetails/ProductDetails.jsx
import { Link, useLoaderData } from "react-router";
import { IoArrowBack } from "react-icons/io5";
import { useEffect, useState } from "react";
import BidModal from "../BidModal/BidModal";
import BidsTable from "../BidsTable/BidsTable";

const ProductDetails = () => {
  const product = useLoaderData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bids, setBids] = useState([]);

  const {
    _id,
    title,
    category,
    price_min,
    price_max,
    image,
    created_at,
    description,
    condition,
    usage,
    seller_name,
    email,
    location,
    seller_contact,
    status,
    seller_image,
  } = product;

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    fetch(`http://localhost:3000/products/bids/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBids(data);
      });
  }, [_id]);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Image and Description */}
          <div className="space-y-6">
            {/* Product Image */}
            <div className="bg-gray-300 rounded-lg overflow-hidden aspect-square">
              <img src={image} alt={title} className="w-full h-full object-cover" />
            </div>

            {/* Product Description */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Product Description</h2>

              {/* Condition and Usage Time */}
              <div className="flex justify-between items-center pb-4 border-b border-gray-300 mb-4">
                <div>
                  <span className="text-purple-600 font-semibold">Condition : </span>
                  <span className="text-gray-800 font-semibold">{condition}</span>
                </div>
                <div>
                  <span className="text-purple-600 font-semibold">Usage Time : </span>
                  <span className="text-gray-800 font-semibold">{usage}</span>
                </div>
              </div>

              {/* Description Text */}
              <div className="text-gray-600 leading-relaxed whitespace-pre-line">{description}</div>
            </div>
          </div>

          {/* Right Column - Product Info and Seller */}
          <div className="space-y-6">
            {/* Back Button */}
            <Link
              to="/allProducts"
              className="inline-flex items-center gap-2 text-gray-700 hover:text-purple-600 transition-colors"
            >
              <IoArrowBack className="text-xl" />
              <span className="font-medium">Back To Products</span>
            </Link>

            {/* Product Title */}
            <h1 className="text-4xl font-bold text-gray-900">{title}</h1>

            {/* Category Badge */}
            <div>
              <span className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
                {category}
              </span>
            </div>

            {/* Price Section */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-4xl font-bold text-green-600 mb-2">
                ${price_min} - {price_max}
              </div>
              <p className="text-gray-600 text-sm">Price starts from</p>
            </div>

            {/* Product Details */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Product Details</h3>
              <div className="space-y-2">
                <div>
                  <span className="font-semibold text-gray-800">Product ID: </span>
                  <span className="text-gray-600">{_id}</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-800">Posted: </span>
                  <span className="text-gray-600">{new Date(created_at).toLocaleDateString()}</span>
                </div>
              </div>
            </div>

            {/* Seller Information */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Seller Information</h3>

              {/* Seller Profile */}
              <div className="flex items-center gap-4 mb-4">
                <div className="avatar">
                  <div className="w-16 h-16 rounded-full bg-gray-300">
                    <img src={seller_image} alt={seller_name} />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-lg">{seller_name}</h4>
                  <p className="text-gray-600 text-sm">{email}</p>
                </div>
              </div>

              {/* Seller Details */}
              <div className="space-y-2">
                <div>
                  <span className="font-semibold text-gray-800">Location: </span>
                  <span className="text-gray-600">{location}</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-800">Contact: </span>
                  <span className="text-gray-600">{seller_contact}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-gray-800">Status: </span>
                  <span className="inline-block bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                    {status}
                  </span>
                </div>
              </div>
            </div>

            {/* Buy Button */}
            <button
              onClick={openModal}
              className="btn btn-lg w-full bg-purple-600 hover:bg-purple-700 text-white border-none text-xl font-semibold rounded-lg h-16"
            >
              I Want Buy This Product
            </button>
          </div>
        </div>

        {/* Bids Table - Added at the bottom */}
        {bids && bids.length > 0 && <BidsTable bids={bids} productTitle={title} image={image} />}
      </div>

      {/* Bid Modal */}
      <BidModal
        isOpen={isModalOpen}
        onClose={closeModal}
        productId={_id}
        productTitle={title}
        status={status}
        image={image}
      />
    </div>
  );
};

export default ProductDetails;
