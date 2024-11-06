import React from "react";
import ShoppingHeader from "../../components/shopping-view/header";

function TermsAndConditions() {
  return (
    <>
    <ShoppingHeader/>
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Terms & Conditions</h1>
        
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            Welcome to <strong>Nexus-Acadbud</strong>. By accessing or using our platform, you agree to comply with and be bound by the following terms and conditions. Please review them carefully before using our services.
          </p>

          <h2 className="text-xl font-semibold mt-6">1. Acceptance of Terms</h2>
          <p>
            By accessing the Nexus-Acadbud platform, you acknowledge that you have read, understood, and agreed to be bound by these Terms & Conditions. If you do not agree to these terms, you may not access or use our services.
          </p>

          <h2 className="text-xl font-semibold mt-6">2. Services Provided</h2>
          <p>
            Nexus-Acadbud connects customers with skilled workers for various services, including construction and repair work. We aim to provide a reliable platform with quality service and affordable prices, especially suited for the student community. However, Nexus-Acadbud does not assume responsibility for the actual service provided by the independent contractors listed on our platform.
          </p>

          <h2 className="text-xl font-semibold mt-6">3. User Responsibilities</h2>
          <p>
            Users are responsible for maintaining the confidentiality of their account information. Any activity under your account is your responsibility. You agree to provide accurate and complete information when creating an account and to update your information if there are any changes.
          </p>

          <h2 className="text-xl font-semibold mt-6">4. Payment Terms</h2>
          <p>
            All payments for services booked through Nexus-Acadbud are due in full at the time of booking, unless otherwise agreed upon. Pricing is subject to change based on the market and type of service required. Please review the pricing details at the time of booking to avoid misunderstandings.
          </p>

          <h2 className="text-xl font-semibold mt-6">5. Cancellations and Refunds</h2>
          <p>
            Users may cancel their bookings according to the cancellation policy outlined on the platform. Refunds will be processed based on the terms outlined at the time of booking. Nexus-Acadbud reserves the right to refuse refunds if the cancellation terms are not met.
          </p>

          <h2 className="text-xl font-semibold mt-6">6. Limitation of Liability</h2>
          <p>
            Nexus-Acadbud shall not be liable for any indirect, incidental, or consequential damages arising from the use of our platform. Our liability is limited to the extent permitted by law, and we do not guarantee the quality of services provided by third-party contractors.
          </p>

          <h2 className="text-xl font-semibold mt-6">7. Changes to Terms</h2>
          <p>
            Nexus-Acadbud reserves the right to update or modify these Terms & Conditions at any time. Any changes will be posted on our website, and continued use of our services indicates your acceptance of the updated terms.
          </p>

          <h2 className="text-xl font-semibold mt-6">8. Contact Information</h2>
          <p>
            If you have any questions or concerns regarding these Terms & Conditions, please contact us at support@nexus-acadbud.com or via the contact form on our website.
          </p>

          <p className="mt-6 text-gray-500 text-sm">
            Last updated on: 30/10/2024
          </p>
        </div>
      </div>
    </div>
    </>
  );
}

export default TermsAndConditions;
