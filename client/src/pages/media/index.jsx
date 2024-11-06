import ShoppingHeader from "../../components/shopping-view/header";
import image1 from "../../assets/m1.jpg";
import image2 from "../../assets/m2.jpg";
import image3 from "../../assets/m3.jpg";
import image4 from "../../assets/m4.jpg";
import image5 from "../../assets/m7.jpg";
import image6 from "../../assets/m8.jpg";
import image7 from "../../assets/m5.jpg";
import image8 from "../../assets/m6.jpg";
import image9 from "../../assets/m9.jpg";
import image10 from "../../assets/m10.jpg";

const images = [image1, image2, image3, image4, image5, image6,image7,image8,image9,image10];

function Media() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <ShoppingHeader />
      <div className="text-center text-2xl font-semibold pt-6 pb-4">Nexus Gallery</div>
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {images.map((img, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2 overflow-hidden">
            <img
              src={img}
              alt={`Gallery ${index + 1}`}
              className="w-full h-48 object-cover rounded-lg transform transition duration-300 hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Media;
