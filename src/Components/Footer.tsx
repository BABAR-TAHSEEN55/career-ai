const Footer = () => {
  return (
    <footer>
      {/* About */}
      <div className="text-white  flex justify-evenly items-center py-10 ">
        <div className="flex flex-col ">
          <h1>Logo</h1>
          <p className="max-w-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
            eveniet ab dolores iste magnam culpa sit repellat, quasi veniam
            recusandae?
          </p>
        </div>
        {/* Platform */}
        <div>
          <h2 className="mb-4 font-bold">Platform</h2>
          <div className="flex flex-col gap-2 ">
            <a
              href=""
              className="text-white/70 hover:text-white transition duration-300"
            >
              Features
            </a>
            <a
              href=""
              className="text-white/70 hover:text-white transition duration-300"
            >
              Features
            </a>
            <a
              href=""
              className="text-white/70 hover:text-white transition duration-300"
            >
              Features
            </a>
          </div>
        </div>
        {/* Resources */}
        <div>
          <h2 className="mb-4 font-bold">Resources</h2>
          <div className="flex flex-col gap-2">
            <a
              href=""
              className="text-white/70 hover:text-white transition duration-300"
            >
              Blog
            </a>
            <a
              href=""
              className="text-white/70 hover:text-white transition duration-300"
            >
              Documentation
            </a>
            <a
              href=""
              className="text-white/70 hover:text-white transition duration-300"
            >
              Community
            </a>
            <a
              href=""
              className="text-white/70 hover:text-white transition duration-300"
            >
              Support
            </a>
          </div>
        </div>
        {/* Company */}
        <div>
          <h2 className="mb-4 font-bold">Company</h2>
          <div className="flex flex-col gap-2">
            <a href="">About</a>
            <a
              href=""
              className="text-white/70 hover:text-white transition duration-300"
            >
              Career
            </a>
            <a
              href=""
              className="text-white/70 hover:text-white transition duration-300"
            >
              Contact
            </a>
            <a
              href=""
              className="text-white/70 hover:text-white transition duration-300"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
      <div className="container w-full h-[2px] bg-white/30" />{" "}
      <div className="text-white container py-8 flex  justify-between items-center">
        <p>© 2025 All rights reserved</p>
        <div className="text-sm flex space-x-8">
          <p>Terms of Services</p>
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
