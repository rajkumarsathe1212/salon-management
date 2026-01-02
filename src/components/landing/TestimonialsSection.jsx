
// src/components/landing/TestimonialsSection.jsx

const testimonials = [
    {
        quote: "Since switching to SalonManager, our online bookings increased by 40%. The commission tracking alone has saved me hours every month.",
        name: "Lisa K.",
        title: "Owner, The Royal Trim",
    },
    {
        quote: "The Client CRM is a game-changer. I can instantly see a client's history and preferences, making every service personalized and exceptional.",
        name: "Marcus D.",
        title: "Lead Stylist, Style Hub",
    },
    {
        quote: "Affordable, powerful, and easy to use. It manages our inventory and POS, allowing my staff to focus entirely on the customer experience.",
        name: "Sophie R.",
        title: "Manager, Glow Spa",
    },
];

export default function TestimonialsSection() {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Trusted by Leading Salons</h2>
                <p className="text-lg text-gray-600 mb-12">Hear directly from the owners who are growing their business with us.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-xl border-t-4 border-indigo-500/50 hover:shadow-2xl transition duration-300">
                            <svg className="h-6 w-6 text-indigo-500 mb-4 mx-auto" fill="currentColor" viewBox="0 0 24 24"><path d="M13 14.725c0 1.05-.183 2.05-.542 3.012l-1.637 4.382c-.358.962-1.258 1.631-2.28 1.631h-4.5c-1.104 0-2-.896-2-2v-16c0-1.104.896-2 2-2h10c1.104 0 2 .896 2 2v9c0 .736-.402 1.378-1 .175zm-6 3.275c0 .552.448 1 1 1h4.5c.264 0 .518-.105.707-.293l.002-.002c.08-.08.145-.175.191-.285.344-.852.55-1.78.55-2.77 0-3.314-2.686-6-6-6h-4v9c0 1.654 1.346 3 3 3zm11 0c0 .552.448 1 1 1h4.5c.264 0 .518-.105.707-.293l.002-.002c.08-.08.145-.175.191-.285.344-.852.55-1.78.55-2.77 0-3.314-2.686-6-6-6h-4v9c0 1.654 1.346 3 3 3z"/></svg>

                            <blockquote className="italic text-gray-700 mb-4">"{testimonial.quote}"</blockquote>
                            <p className="font-bold text-gray-900">{testimonial.name}</p>
                            <p className="text-sm text-indigo-600">{testimonial.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
