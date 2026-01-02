
// src/app/(public)/contact/page.jsx
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Get in Touch</h1>
          <p className="text-lg text-gray-600">
            We're here to answer your questions and help you get started.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 bg-white p-8 rounded-xl shadow-2xl">
          
          {/* Left Column: Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <h2 className="text-2xl font-bold text-indigo-600 mb-4">Contact Info</h2>
            
            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-indigo-500 flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-800">Email</p>
                <a href="mailto:support@salonmanager.com" className="text-gray-600 hover:text-indigo-600">support@salonmanager.com</a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-indigo-500 flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-800">Phone</p>
                <a href="tel:+1-555-123-4567" className="text-gray-600 hover:text-indigo-600">+1 (555) 123-4567</a>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-indigo-500 flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-800">Office</p>
                <p className="text-gray-600">100 Technology Drive, Suite 200</p>
                <p className="text-gray-600">Silicon Valley, CA 94000</p>
              </div>
            </div>
            
          </div>
          
          {/* Right Column: Contact Form */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" id="name" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" id="email" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3" />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                <input type="text" id="subject" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" rows="4" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3"></textarea>
              </div>
              
              <button 
                type="submit" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition shadow-lg"
              >
                <Send className="h-5 w-5 mr-2" /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
