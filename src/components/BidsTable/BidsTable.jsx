// components/BidsTable/BidsTable.jsx
const BidsTable = ({ bids, image }) => {
  const handleAcceptOffer = (bidId) => {
    console.log("Accept offer:", bidId);
  };

  const handleRejectOffer = (bidId) => {
    console.log("Reject offer:", bidId);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 my-8">
      {/* Header */}
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Bids For This Products:{" "}
        <span className="text-purple-600">{bids.length.toString().padStart(2, "0")}</span>
      </h2>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* Table Head */}
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left text-gray-600 font-semibold py-4">SL No</th>
              <th className="text-left text-gray-600 font-semibold py-4">Product</th>
              <th className="text-left text-gray-600 font-semibold py-4">Buyer</th>
              <th className="text-left text-gray-600 font-semibold py-4">Bid Price</th>
              <th className="text-left text-gray-600 font-semibold py-4">Actions</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {bids.map((bid, index) => (
              <tr key={bid._id} className="border-b border-gray-100 hover:bg-gray-50">
                {/* SL No */}
                <td className="py-4">
                  <span className="text-gray-800 font-medium">{index + 1}</span>
                </td>

                {/* Product */}
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="w-12 h-12 rounded bg-gray-300">
                        <img
                          src={image || "https://via.placeholder.com/150"}
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

                {/* Buyer */}
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
                        <img
                          src={bid.buyer_ImageURL || "https://i.pravatar.cc/150"}
                          alt={bid.buyer_Name || "Buyer"}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                          crossOrigin="anonymous"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-800">{bid.buyer_Name}</div>
                      <div className="text-sm text-gray-600">{bid.buyer_Email}</div>
                    </div>
                  </div>
                </td>

                {/* Bid Price */}
                <td className="py-4">
                  <span className="text-lg font-bold text-gray-900">${bid.bid_Price}</span>
                </td>

                {/* Actions */}
                <td className="py-4">
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleAcceptOffer(bid._id)}
                      className="btn btn-sm btn-outline text-green-600 hover:bg-green-600 hover:text-white border-green-600"
                    >
                      Accept Offer
                    </button>
                    <button
                      onClick={() => handleRejectOffer(bid._id)}
                      className="btn btn-sm btn-outline text-red-600 hover:bg-red-600 hover:text-white border-red-600"
                    >
                      Reject Offer
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Empty State */}
      {bids.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No bids yet for this product.</p>
        </div>
      )}
    </div>
  );
};

export default BidsTable;
