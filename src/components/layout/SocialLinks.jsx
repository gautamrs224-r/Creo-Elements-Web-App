import { FaLinkedinIn, FaInstagram } from "react-icons/fa";

function SocialLinks() {
  return (
    <div className="flex items-center gap-4">
      <a
        href="#"
        className="text-gray-700 transition-colors hover:text-black"
        aria-label="LinkedIn"
      >
        <FaLinkedinIn size={18} />
      </a>

      <a
        href="#"
        className="text-gray-700 transition-colors hover:text-black"
        aria-label="Instagram"
      >
        <FaInstagram size={18} />
      </a>
    </div>
  );
}

export default SocialLinks;