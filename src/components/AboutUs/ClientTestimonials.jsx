import React from 'react';

const ClientTestimonials = () => {
  const testimonials = [
    {
      name: 'Sandra Gomez',
      review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec elit risus. Aliquam malesuada elit eros, malesuada ullamcorper erat vitae eget dolor lobortis. Accumsan fusce quisque quis bibendum quam.',
    },
    {
      name: 'Michael Johnson',
      review:
        'Magna in est adipiscing in phasellus non in justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Our Clients Say!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {testimonial.name}
              </h3>
              <p className="text-gray-600">{testimonial.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;