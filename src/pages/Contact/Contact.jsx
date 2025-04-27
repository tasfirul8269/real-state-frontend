import { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import 'animate.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12 
          animate__animated animate__fadeInDown">
          Contact Us
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate__animated animate__fadeInLeft animate__delay-1s">
            <div className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-lg">
              <FaMapMarkerAlt className="text-blue-600 text-2xl mt-1" />
              <div>
                <h2 className="text-xl font-semibold text-gray-800">Our Office</h2>
                <p className="text-gray-600">123 Business Street<br />New York, NY 10001</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-lg">
              <FaPhone className="text-blue-600 text-2xl mt-1" />
              <div>
                <h2 className="text-xl font-semibold text-gray-800">Phone</h2>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-lg">
              <FaEnvelope className="text-blue-600 text-2xl mt-1" />
              <div>
                <h2 className="text-xl font-semibold text-gray-800">Email</h2>
                <p className="text-gray-600">contact@company.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form 
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg shadow-lg 
              animate__animated animate__fadeInRight animate__delay-1s"
          >
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm 
                    focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm 
                    focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm 
                    focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center px-6 py-3 border border-transparent 
                  rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                  transition-all duration-300 hover:scale-105"
              >
                <FaPaperPlane className="mr-2" />
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;