import wpl from "../../assets/wp.png";
import ShoppingHeader from "../../components/shopping-view/header";

function Support() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ShoppingHeader />
      
      <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Contact Support</h2>
        
        {/* Contact Details Section */}
        <div className="space-y-4 text-gray-700">
          <div>
            <h3 className="text-lg font-semibold">Our Numbers</h3>
            <p>+91 7869054792</p>
            <p>+91 8305999351</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold">Our Address</h3>
            <p>Institute of Engineering & Technology DAVV Khandwa Road Indore, India</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold">Our Email</h3>
            <p>nexusofficial.in@gmail.com</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold">Our Location</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.265645287314!2d75.87720717508107!3d22.681152879414526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcc03e36712d%3A0xb6f3c2bf734a7c!2sInstitute%20of%20Engineering%20%26%20Technology%2C%20DAVV!5e0!3m2!1sen!2sin!4v1730293905522!5m2!1sen!2sin"
              width="100%"
              height="200"
              allowFullScreen=""
              loading="lazy"
              title="Company Location"
              className="rounded-md shadow-sm"
            ></iframe>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a href="https://wa.me/917869054792?text=Hello I want to Book A Service?" target="_blank">
            <img src={wpl} width="60" alt="okkk"/>
            </a>

    </div>
  );
}

export default Support;
