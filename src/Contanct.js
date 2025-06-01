import { useState } from 'react';

function ContactSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    // Reset the form
    setFormData({ name: '', email: '', message: '' });

    // Optional: close the modal
    setIsOpen(false);
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Ready to elevate your business with technology?</h2>
      <p className="mb-6">Contact us today to discuss your project and discover how we can help.</p>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-white text-blue-600 font-semibold px-6 py-2 rounded-full shadow-md hover:bg-gray-100 transition"
      >
        Let's Talk
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md text-left">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full mb-3 px-4 py-2 border rounded text-black bg-white"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full mb-3 px-4 py-2 border rounded text-black bg-white"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full mb-3 px-4 py-2 border rounded text-black bg-white"
                required
              ></textarea>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 text-gray-600 hover:underline"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactSection;
