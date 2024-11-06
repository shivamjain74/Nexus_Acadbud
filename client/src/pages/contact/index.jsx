import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ShoppingHeader from '../../components/shopping-view/header';

function Contact() {
  const form = useRef();
  const [messageStatus, setMessageStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_3h4o0gh', 'template_dskq8xr', form.current, {
        publicKey: 'Lc0UWYSpVe4kgZKyx',
      })
      .then(
        () => {
          setMessageStatus('Your message has been sent successfully To Nexus_Acadbud!');
          form.current.reset();
        },
        (error) => {
          setMessageStatus('Failed to send message, please try again.');
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div>
        <ShoppingHeader/>
        
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-25">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Contact Us</h2>

      <form ref={form} onSubmit={sendEmail}>
        <label className="block mb-2 text-gray-700">Name</label>
        <input
          type="text"
          name="from_name"
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <label className="block mb-2 text-gray-700">Email</label>
        <input
          type="email"
          name="from_email"
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <label className="block mb-2 text-gray-700">Message</label>
        <textarea
          name="message"
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          rows="4"
          required
        ></textarea>

        <input
          type="submit"
          value="Send"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300 cursor-pointer"
        />
      </form>

      {/* Confirmation Message */}
      {messageStatus && (
        <p className="mt-4 text-center text-green-500 font-semibold">{messageStatus}</p>
      )}
    </div>
    </div>
  );
}

export default Contact;
