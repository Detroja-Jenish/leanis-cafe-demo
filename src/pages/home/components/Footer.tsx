const Footer = () => {
    return (
        <>
            <footer className="bg-[#f8f4ee] text-[#3c2f2f] py-10 px-6 md:px-20">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Brand & Description */}
                    <div>
                        <h2 className="text-2xl font-bold mb-2">Leanis Cafe</h2>
                        <p className="text-sm leading-relaxed">
                            Where brunch meets elegance. Enjoy hand-crafted coffees, fluffy pancakes, and warm hospitality in the heart of the city.
                            A perfect start to your every morning.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#menu" className="hover:underline">Menu</a></li>
                            <li><a href="#reservation" className="hover:underline">Reservations</a></li>
                            <li><a href="#about" className="hover:underline">About Us</a></li>
                            <li><a href="#contact" className="hover:underline">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact & Socials */}
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                        <p className="text-sm mb-1">Viehmarktstraße 11, 54290 Trier, Germany</p>
                        <p className="text-sm mb-4">Open Daily: 9:00 AM – 6:00 PM</p>
                        <div className="flex space-x-4">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-facebook-icon lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                            </a>
                            <a href="mailto:hello@leaniscafe.com">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" /><rect x="2" y="4" width="20" height="16" rx="2" /></svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="text-center text-xs text-gray-500 mt-10">
                    © {new Date().getFullYear()} Leanis Cafe. All rights reserved.
                </div>
            </footer>

        </>
    )
}

export default Footer