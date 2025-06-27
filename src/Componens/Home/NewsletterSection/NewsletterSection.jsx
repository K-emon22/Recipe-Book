import React, {useState} from "react";
import Swal from "sweetalert2";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      Swal.fire({
        icon: "warning",
        title: "Please enter your email",
        confirmButtonColor: "#6366f1",
      });
      return;
    }

    if (!validateEmail(email)) {
      Swal.fire({
        icon: "error",
        title: "Invalid email",
        text: "Please enter a valid email address.",
        confirmButtonColor: "#6366f1",
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Subscribed!",
      text: `Thank you for subscribing with ${email}`,
      confirmButtonColor: "#6366f1",
    });

    setEmail("");
  };

  return (
    <div className="mt-15 mx-[2%] lg:mx-[5%] rounded-lg text-center bg-gradient-to-r from-gray-700 to-gray-900 py-20">
      <h2 className="text-3xl text-white font-bold mb-4">
        📬 Subscribe to our Newsletter
      </h2>
      <p className="text-gray-400 mb-6">
        Get weekly recipes, tips, and exclusive deals right to your inbox.
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full px-4 py-2 rounded-md text-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          required
        />
        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-md"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsletterSection;
