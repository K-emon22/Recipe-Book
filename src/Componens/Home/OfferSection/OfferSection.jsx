import Swal from "sweetalert2";

const OfferSection = () => {
  const handleClaimOffer = () => {
    Swal.fire({
      title: "🎉 Offer Claimed!",
      text: "You’ve successfully claimed 20% off your first recipe submission.",
      icon: "success",
      confirmButtonColor: "#570df8",
      confirmButtonText: "Awesome!",
    });
  };

  return (
    <section className="mt-10   bg-gradient-to-r from-[#570df8]/80 to-[#570df8] mx-[2%] lg:mx-[5%] border border-gray-800 px-6 py-12 rounded-2xl text-center shadow-xl">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
        🎁 Special Limited-Time Offer
      </h2>
      <p className="text-lg text-gray-200 mb-6">
        Submit your first recipe and enjoy{" "}
        <span className="bg-yellow-500 px-2 py-0.5 rounded font-semibold">
          20% off
        </span>{" "}
        instantly!
      </p>
      <button
        onClick={handleClaimOffer}
        className="bg-[#570df8] text-white font-semibold px-8 py-3 rounded-full border-2 border-black/30 border-t-white/20 
    duration-300 transform active:translate-y-0.5
    shadow-[0_3px_0_#3d08a3,0_6px_0_#2e067d,0_10px_14px_-4px_rgba(0,0,0,0.25)] 
    hover:scale-[1.03] hover:shadow-[0_2px_0_#3d08a3,0_4px_0_#2e067d,0_8px_12px_-4px_rgba(0,0,0,0.2)] transition-all"
      >
        Claim Your Offer
      </button>
    </section>
  );
};

export default OfferSection;
