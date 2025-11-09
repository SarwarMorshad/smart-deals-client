import { use, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext";

const MyBids = () => {
  const { user } = use(AuthContext);
  const [myBids, setMyBids] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      fetchBidsWithSellerInfo();
    }
  }, [user?.email]);

  // components/MyBids/MyBids.jsx
  const fetchBidsWithSellerInfo = async () => {
    try {
      // Fetch user's bids
      const bidsResponse = await fetch(`http://localhost:3000/users/bids/${user.email}`);
      const bidsData = await bidsResponse.json();

      // Fetch seller info for each bid
      const bidsWithSeller = await Promise.all(
        bidsData.map(async (bid) => {
          try {
            const productResponse = await fetch(`http://localhost:3000/products/${bid.product}`);
            const productData = await productResponse.json();

            return {
              ...bid,
              image: bid.image || productData.image, // Use bid image or fallback to product image
              seller_name: productData.seller_name,
              seller_email: productData.email,
              seller_image: productData.seller_image,
              seller_contact: productData.seller_contact,
            };
          } catch (error) {
            console.error(`Error fetching product ${bid.product}:`, error);
            return bid; // Return original bid if product fetch fails
          }
        })
      );

      console.log("Bids with seller info:", bidsWithSeller); // Debug log
      setMyBids(bidsWithSeller);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching bids:", error);
      setLoading(false);
    }
  };

  const handleRemoveBid = (bidId) => {
    if (window.confirm("Are you sure you want to remove this bid?")) {
      fetch(`http://localhost:3000/bids/${bidId}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            setMyBids(myBids.filter((bid) => bid._id !== bidId));
            alert("Bid removed successfully!");
          }
        })
        .catch((error) => {
          console.error("Error removing bid:", error);
          alert("Failed to remove bid");
        });
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg text-purple-600"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          <span className="text-gray-900">My Bids: </span>
          <span className="text-purple-600">{myBids.length.toString().padStart(2, "0")}</span>
        </h1>

        {/* Bids Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="table w-full">
              {/* Table Head */}
              <thead className="bg-gray-50">
                <tr className="border-b border-gray-200">
                  <th className="text-left text-gray-700 font-semibold py-4 px-6">SL No</th>
                  <th className="text-left text-gray-700 font-semibold py-4 px-6">Product</th>
                  <th className="text-left text-gray-700 font-semibold py-4 px-6">Seller</th>
                  <th className="text-left text-gray-700 font-semibold py-4 px-6">Bid Price</th>
                  <th className="text-left text-gray-700 font-semibold py-4 px-6">Status</th>
                  <th className="text-left text-gray-700 font-semibold py-4 px-6">Actions</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                {myBids.map((bid, index) => (
                  <tr key={bid._id} className="border-b border-gray-100 hover:bg-gray-50">
                    {/* SL No */}
                    <td className="py-4 px-6">
                      <span className="text-gray-800 font-medium">{index + 1}</span>
                    </td>

                    {/* Product */}
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="w-12 h-12 rounded bg-gray-300">
                            <img
                              src={bid.image || "https://via.placeholder.com/150"}
                              alt={bid.productTitle}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-800">{bid.productTitle}</div>
                          <div className="text-sm text-gray-600">${bid.bid_Price}</div>
                        </div>
                      </div>
                    </td>

                    {/* Seller */}
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="w-10 h-10 rounded-full bg-gray-300">
                            <img
                              src={bid.seller_image || "https://i.pravatar.cc/150"}
                              alt={bid.seller_name}
                              className="w-full h-full object-cover"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-medium text-gray-800">{bid.seller_name || "Sara Chen"}</div>
                          <div className="text-sm text-gray-600">
                            {bid.seller_email || "crafts.by.sara@shop.net"}
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Bid Price */}
                    <td className="py-4 px-6">
                      <span className="text-lg font-bold text-gray-900">${bid.bid_Price}</span>
                    </td>

                    {/* Status */}
                    <td className="py-4 px-6">
                      <span className="inline-block bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold">
                        {bid.status || "Pending"}
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="py-4 px-6">
                      <button
                        onClick={() => handleRemoveBid(bid._id)}
                        className="btn btn-sm btn-outline text-orange-600 hover:bg-orange-600 hover:text-white border-orange-600"
                      >
                        Remove Bid
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Empty State */}
        {myBids.length === 0 && (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <p className="text-gray-500 text-lg">You haven't placed any bids yet.</p>
            <a href="/allProducts" className="btn btn-lg bg-purple-600 hover:bg-purple-700 text-white mt-6">
              Browse Products
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyBids;
