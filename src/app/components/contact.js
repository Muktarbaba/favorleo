'use client';

const Contact = () => {
  return (
    <section id="contact" className="bg-dark text-white py-20 px-4">
      <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row gap-10">
        {/* Left Side - Contact Details */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl  font-semibold text-green mb-6">Get In Touch</h2>
          <p className="mb-6 text-gray-300">
            I&apos;d love to hear from you. Whether you have a question or just want to say hi,
            feel free to drop a message!
          </p>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-400">Email</p>
              <p className="text-lg font-medium">favorleoart@gmail.com</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Phone</p>
              <p className="text-lg font-medium">+234 7033 7306 47</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Location</p>
              <p className="text-lg font-medium">Abuja-keffi expressway, Karu, Abuja 900101</p>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="md:w-1/2">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your full name"
                className="w-full px-4 py-2 bg-lightd  rounded focus:outline-none focus:ring-2 focus:ring-green"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-sm text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 bg-lightd  rounded focus:outline-none focus:ring-2 focus:ring-green"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 text-sm text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                placeholder="Your message..."
                className="w-full px-4 py-2 bg-lightd  rounded focus:outline-none focus:ring-2 focus:ring-green"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-green text-white px-6 py-2 rounded hover:bg-green-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
