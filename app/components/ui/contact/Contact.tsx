import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-10">
      <div className="w-[89%] max-w-[1400px] m-auto">
        <div className="grid gird-cols-1 lg:grid-cols-3 gap-6">
          <div>
            <div className="md:flex md:flex-row lg:justify-start lg:flex-col lg:text-left md:justify-between">
              <div className="mb-6">
                <h1 className="text-base font-medium mb-2">Email Address:</h1>
                <a
                  className="text-gray-400 text-sm"
                  href="mailto:support.yourdomain@email.com"
                >
                  support@moonlamps.com
                </a>
              </div>
              <div className="mb-6">
                <h1 className="text-base font-medium mb-2">Telephone:</h1>
                <a className="text-gray-400 text-sm" href="tel:+(123) 456-789">
                  (123-456-789)
                </a>
              </div>
              <div className="mb-6">
                <h1 className="text-base font-medium mb-2"> Address:</h1>
                <h2 className="text-gray-400 text-sm">
                  Argentina | moon street 123
                </h2>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2">
            <form>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="border border-gray-300 text-gray-900 text-sm block w-full py-3 px-1"
                    placeholder="Your name:"
                  />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="border border-gray-300 text-gray-900 text-sm block w-full py-3 px-1"
                    placeholder="Your email:"
                  />
                </div>
                <input
                  type="subject"
                  name="subject"
                  id="subject"
                  className="border border-gray-300 text-gray-900 text-sm block w-full py-3 px-1"
                  placeholder="Subject:"
                />
                <textarea
                  className="border border-gray-300 text-gray-900 text-sm block w-full py-3 px-1"
                  placeholder="Your message:"
                  name="message"
                  id="message"
                  rows={3}
                  style={{ resize: "none" }}
                />
                <div className="text-right">
                
                <button className="px-4 py-2 rounded-md uppercase cursor-pointer bg-primary text-white" type="submit">Submit</button>

                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
