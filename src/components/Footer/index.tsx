// components/Footer.tsx
import { FaMapMarkerAlt, FaPhone, FaFax } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="container py-6 px-4 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:flex-wrap gap-5">
        <div className="flex-2 max-w-[260px]">
          <img
            src="https://woodmart.b-cdn.net/handmade/wp-content/uploads/sites/3/2017/06/wood-logo-dark.svg"
            className="w-[220px] mt-8"
            alt="Woodmart Logo"
          />
          <p className="text-gray-600 text-sm mt-5">
            Condimentum adipiscing vel neque dis nam parturient orci at
            scelerisque neque dis nam parturient.
          </p>
          <div className="mt-4 space-y-2">
            <p className="flex items-center text-gray-400">
              <FaMapMarkerAlt className="mr-2" />
              451 Wall Street, UK, London
            </p>
            <p className="flex items-center text-gray-400">
              <FaPhone className="mr-2" />
              Phone: (064) 332-1233
            </p>
            <p className="flex items-center text-gray-400">
              <FaFax className="mr-2" />
              Fax: (099) 453-1357
            </p>
          </div>
        </div>

        <div className="flex-2 max-w-[270px]">
          <h3 className="font-[600] text-lg text-[#333] mb-4 lora">Recent Posts</h3>
          <ul className="space-y-2">
            <li className="text-gray-600 flex">
              <img
                src="https://woodmart.b-cdn.net/handmade/wp-content/uploads/sites/3/2017/06/blog-post-hand-made-3-opt-75x60.jpg"
                alt=""
              />
              <div className="flex flex-col justify-between pl-3">
                <span className="text-sm">
                  Minimalist Japanese-inspired furniture
                </span>
                <span className="text-xs text-slate-400">
                  June 22, 2017 No Comments
                </span>
              </div>
            </li>
            <div className="h-[1px] bg-slate-300"></div>
            <li className="text-gray-600 flex">
              <img
                src="https://woodmart.b-cdn.net/handmade/wp-content/uploads/sites/3/2017/06/blog-post-hand-made-2-opt-75x60.jpg"
                alt=""
              />
              <div className="flex flex-col justify-between pl-3">
                <span className="text-sm">
                  New home decor from John Doerson
                </span>
                <span className="text-xs text-slate-400">
                  June 16, 2017 No Comments
                </span>
              </div>
            </li>
          </ul>
        </div>

        <div className="flex-1 min-w-[180px]">
          <h3 className="font-[600] text-lg  text-[#333] mb-4 lora ">Our Stores</h3>
          <ul className="space-y-4 text-gray-600 text-sm">
            <li>
              <a href="#" className="hover:underline">
                New York
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                London SF
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Cockfosters BP
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Los Angeles
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Chicago
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Las Vegas
              </a>
            </li>
          </ul>
        </div>

        <div className="flex-1 min-w-[180px]">
          <h3 className="font-[600] text-lg text-[#333] mb-4 lora">Useful Links</h3>
          <ul className="space-y-4 text-gray-600 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Latest News
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Our Sitemap
              </a>
            </li>
          </ul>
        </div>

        <div className="flex-1 min-w-[180px]">
          <h3 className="font-[600] text-lg text-[#333] mb-4 lora">Footer Menu</h3>
          <ul className="space-y-4 text-gray-600 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Instagram profile
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                New Collection
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Woman Dress
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Latest News
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline italic">
                Purchase Theme
              </a>
            </li>
          </ul>
        </div>
      </div>
       <div className="h-[1px] mt-8 bg-slate-200"></div>
      <div className="mt-8 text-start text-gray-600 flex justify-between text-xs">
        <p className="flex">
          <p className="font-bold">WOODMART</p> © 2024 CREATED BY  <p className="ml-[3px] text-red-600"> X </p><p className="font-bold">TEMOS STUDIO</p>. PREMIUM E-COMMERCE SOLUTIONS.
        </p>
        <img src="https://woodmart.xtemos.com/wp-content/uploads/2017/01/payments.png" alt="" />
      </div>
    </footer>
  );
};

export default Footer;
