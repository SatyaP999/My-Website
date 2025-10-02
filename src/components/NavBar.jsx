
import {
    FaLinkedin,
    FaGithub,
    FaMedium,
    FaUser,
    FaProjectDiagram,
    FaEnvelope,
    FaKaggle
} from "react-icons/fa";



function NavBar({ activeTab, setActiveTab }) {
    return (
        <div className="flex items-center justify-between px-6 py-2 bg-white">
            <button
                className="cursor-pointer"
                onClick={() => setActiveTab("landing")}
            >
                <p className="text-black font-extrabold">
                    Satya Praneeth
                </p>
            </button>

            <div className="text-black text-sm font-extralight flex space-x-6 bg-gray-100 px-4 py-2 rounded-full">
                <button
                    onClick={() => setActiveTab("about")}
                    className={`flex items-center px-4 py-1 rounded-full transition ${activeTab === "about" ? "bg-white text-blue-600" : "bg-gray-100 hover:text-blue-600"
                        }`}
                >
                    <FaUser size={12} />
                    <p className="mx-1">About</p>
                </button>

                <button
                    onClick={() => setActiveTab("projects")}
                    className={`flex items-center px-4 py-1 rounded-full transition ${activeTab === "projects" ? "bg-white text-blue-600" : "bg-gray-100 hover:text-blue-600"
                        }`}
                >
                    <FaProjectDiagram size={12} />
                    <p className="mx-1">Projects</p>
                </button>

                <button
                    onClick={() => setActiveTab("contact")}
                    className={`flex items-center px-4 py-1 rounded-full transition ${activeTab === "contact" ? "bg-white text-blue-600" : "bg-gray-100 hover:text-blue-600"
                        }`}
                >
                    <FaEnvelope size={12} />
                    <p className="mx-1">Contact</p>
                </button>
            </div>
            <div className="flex space-x-4">
                <a
                    href="https://www.linkedin.com/in/satya-praneeeth-pola-539592162"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedin size={20} />
                </a>
                <a
                    href="https://github.com/SatyaP999"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub size={20} />
                </a>
                <a
                    href="https://medium.com/@satya.pola45"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaMedium size={20} />
                </a>
                <a
                    href="https://www.kaggle.com/satya12389"
                    target="_blank"
                    el="noopener noreferrer"
                >
                    <FaKaggle size={20} />
                </a>
            </div>
        </div>
    );
};

export default NavBar;