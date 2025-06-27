
import React, { useEffect } from "react";

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mx-[2%] lg:mx-[5%] px-4 py-12 text-gray-800 space-y-6">
      <h1 className="text-4xl font-bold text-indigo-700">Terms and Conditions</h1>

      <h1 className="text-base text-gray-700">
        By accessing or using our website and services, you agree to be bound by the following terms and conditions. Please read them carefully.
      </h1>

      <h1 className="text-2xl font-semibold text-gray-900 mt-10">1. Use of the Website</h1>
      <h1 className="text-base text-gray-700">
        You must be at least 13 years old to use this website. You agree not to misuse the website or its content in any unlawful or harmful way.
      </h1>

      <h1 className="text-2xl font-semibold text-gray-900 mt-10">2. User Content</h1>
      <h1 className="text-base text-gray-700">
        Any content you submit (like recipes, comments, etc.) must be your own and not violate any third-party rights. We reserve the right to remove content at our discretion.
      </h1>

      <h1 className="text-2xl font-semibold text-gray-900 mt-10">3. Intellectual Property</h1>
      <h1 className="text-base text-gray-700">
        All content, branding, and design belong to the site owner. You may not copy, reproduce, or distribute any content without permission.
      </h1>

      <h1 className="text-2xl font-semibold text-gray-900 mt-10">4. Limitation of Liability</h1>
      <h1 className="text-base text-gray-700">
        We are not liable for any damages resulting from your use or inability to use our services. Use the site at your own risk.
      </h1>

      <h1 className="text-2xl font-semibold text-gray-900 mt-10">5. Changes to Terms</h1>
      <h1 className="text-base text-gray-700">
        We may update these terms at any time. Continued use of the site means you accept the changes.
      </h1>

      <h1 className="text-2xl font-semibold text-gray-900 mt-10">6. Contact</h1>
      <h1 className="text-base text-gray-700">
        If you have questions about these terms, please contact us at{" "}
        <span className="underline text-indigo-600">support@example.com</span>.
      </h1>
    </div>
  );
};

export default Terms;