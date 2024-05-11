import React from "react";

function Footer() {
  return (
    <div>
      {/* Footer starts */}
      <footer className=" text-white py-4">
        <div className="container mx-auto text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-6 py-8">
            <div>
              <h3 className="text-lg font-semibold">About</h3>
              <ul className="mt-4 cursor-pointer">
                <li>
                 <a href="/about">
                 <span> About Us</span>
                 </a>
                </li>
                <li>
                  <span>Careers</span>
                </li>
                <li>
                  <span>Mission</span>
                </li>
                <li>
                  <span>Blog</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Help Center</h3>
              <ul className="mt-4 cursor-pointer text-white">
                <li>
                  <span>Instagram</span>
                </li>
                <li>
                  <span>Twitter</span>
                </li>
                <li>
                  <span>Facebook</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Legal</h3>
              <ul className="mt-4 text-white">
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Licensing</a>
                </li>
                <li>
                  <a href="#">Terms &amp; Conditions</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Download</h3>
              <ul className="mt-4 text-white">
                <li>
                  <a href="#" className="text-white">iOS</a>
                </li>
                <li>
                  <a href="#">Android</a>
                </li>
                <li>
                  <a href="#">Windows</a>
                </li>
                <li>
                  <a href="#">MacOS</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-gray-700 px-4 py-6 flex justify-center items-center">
            <p className="text-sm">© BudgetGadget™ 2024</p>
            <div className="ml-6 space-x-4">
              <a href="#" className="text-white">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-white">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="text-white">
                <i className="fab fa-dribbble"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
      {/* footer ends */}
    </div>
  );
}

export default Footer;
