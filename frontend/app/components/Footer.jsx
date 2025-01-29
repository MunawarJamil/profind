export default function Footer() {
  return (
    <footer id="footer" className="bg-gray-900 text-white py-12">
      <div className="container mx-auto text-center">
        <div className="flex flex-col gap-10 md:flex-row justify-between px-20">
          <div>
            <h3 className="text-xl font-bold  mb-4">ProFind</h3>
            <p>
              {" "}
            
              
                <a href="#" className="text-blue-400">
                  Login
                </a>{" "}
                <span> to explore more</span>
              </p>
            
          </div>
          <div>
            <h3 className="text-xl font-bold   mb-4">
              Quick Links
            </h3>
            <ul className="flex gap-6 justify-center">
              <li>
                <a href="#">
                  Home
                </a>
              </li>
              <li>
                <a href="#" >
                  About
                </a>
              </li>
              <li>
                <a href="#" >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* <div>
            <h3 className="text-xl font-bold  mb-4">Follow Us</h3>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-white hover:text-purple-500">
                Twitter
              </a>
              <a href="#" className="text-white hover:text-purple-500">
                Facebook
              </a>
              <a href="#" className="text-white hover:text-purple-500">
                Instagram
              </a>
            </div>
          </div> */}
        </div>
        <div className=" mt-2 border-t border-gray-700 pt-8">
          <p>&copy; 2023 ProFind. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
