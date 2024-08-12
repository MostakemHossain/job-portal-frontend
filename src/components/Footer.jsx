import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-12">
            <div className="container mx-auto px-4">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Overview */}
                    <div>
                        <h1 className="text-2xl font-bold">
                            Career<span className="text-blue-500">Compass</span>
                        </h1>
                        <p className="text-gray-400">
                            JobPortal is your premier destination for connecting job seekers with top employers. Our mission is to bridge the gap between talent and opportunity.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Browse Jobs</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Post a Job</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Companies</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Resources</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Terms & Conditions</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Newsletter Subscription */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h3>
                        <p className="text-gray-400 mb-4">Stay updated with the latest job postings and news.</p>
                        <form className="flex flex-col sm:flex-row">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 rounded-md focus:outline-none text-gray-800"
                            />
                            <button
                                type="submit"
                                className="mt-4 sm:mt-0 sm:ml-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 my-8"></div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400">© {new Date().getFullYear()} JobPortal. All rights reserved.</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a href="#" className="text-gray-400 hover:text-white">
                            <FaFacebookF size={20} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <FaTwitter size={20} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <FaLinkedinIn size={20} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <FaInstagram size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
