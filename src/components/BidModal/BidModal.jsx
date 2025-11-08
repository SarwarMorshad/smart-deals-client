// components/BidModal/BidModal.jsx
import { use } from "react";
import AuthContext from "../../context/AuthContext";
import Swal from "sweetalert2";

const BidModal = ({ isOpen, onClose, productId, productTitle, status, image }) => {
  const { user } = use(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.buyerName.value;
    const email = e.target.buyerEmail.value;
    const imageURL = e.target.buyerImageURL.value;
    const bidPrice = parseFloat(e.target.bidPrice.value);
    const contactInfo = e.target.contactInfo.value;

    const newBid = {
      product: productId,
      productTitle: productTitle,
      buyer_Name: name,
      buyer_Email: email,
      buyer_ImageURL: imageURL,
      bid_Price: bidPrice,
      contactInfo: contactInfo,
      status: status,
      image: image,
    };

    try {
      const response = await fetch("http://localhost:3000/bids", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBid),
      });

      const data = await response.json();

      if (data.insertedId) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Your Bid has been Placed Successfully",
          showConfirmButton: false,
          timer: 2000,
        });

        // Reset form
        e.target.reset();

        // Close modal AFTER successful submission
        onClose();
      } else {
        Swal.fire({
          position: "top-center",
          icon: "error",
          title: "Failed to place bid",
          showConfirmButton: true,
        });
      }
    } catch (error) {
      console.error("Error submitting bid:", error);
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: "Error submitting bid",
        text: "Please try again",
        showConfirmButton: true,
      });
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-opacity-70 z-40 backdrop-blur-sm" onClick={onClose}></div>

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-xl p-8 relative">
          {/* Modal Header */}
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
            Give Seller Your Offered Price
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Buyer Name and Email - Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Buyer Name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-700 font-medium">Buyer Name</span>
                </label>
                <input
                  type="text"
                  name="buyerName"
                  defaultValue={user?.displayName}
                  className="input input-bordered w-full bg-gray-50"
                  readOnly
                  disabled
                />
              </div>

              {/* Buyer Email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-700 font-medium">Buyer Email</span>
                </label>
                <input
                  type="email"
                  name="buyerEmail"
                  defaultValue={user?.email}
                  className="input input-bordered w-full bg-gray-50"
                  readOnly
                  disabled
                />
              </div>
            </div>

            {/* Buyer Image URL */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-700 font-medium">Buyer Image URL</span>
              </label>
              <input
                type="url"
                name="buyerImageURL"
                placeholder="https://...your_img_url"
                defaultValue={user?.photoURL || ""}
                className="input input-bordered w-full bg-gray-50 focus:bg-white"
                readOnly
                disabled
              />
            </div>

            {/* Place your Price */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-700 font-medium">Place your Price</span>
              </label>
              <input
                type="number"
                name="bidPrice"
                placeholder="e.g. 25.00"
                className="input input-bordered w-full bg-gray-50 focus:bg-white"
                required
                min="0"
                step="0.01"
              />
            </div>

            {/* Contact Info */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-700 font-medium">Contact Info</span>
              </label>
              <input
                type="text"
                name="contactInfo"
                placeholder="e.g. +1-555-1234"
                className="input input-bordered w-full bg-gray-50 focus:bg-white"
                required
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-3 mt-8">
              <button
                type="button"
                onClick={onClose}
                className="btn btn-outline btn-lg text-purple-600 hover:bg-purple-50 border-purple-600 px-8"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-lg bg-purple-600 hover:bg-purple-700 text-white border-none px-8"
              >
                Submit Bid
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BidModal;
