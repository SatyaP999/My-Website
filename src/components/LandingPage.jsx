import { Download } from "lucide-react";
function LandingPage() {
    const onButtonClick = () => {
        const pdfUrl = "SatyaResume.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <div className="flex flex-col justify-center items-center mt-8">
            <div className="text-center py-12">
                <h1 className="text-4xl text-black font-bold mb-2">Hi, I'm Satya Praneeth</h1>
                <h2 className="text-xl text-gray-600 mb-6">Gen AI Engineer</h2>

                <div className="text-lg text-gray-700 max-w-xl text-center">
                    <p>
                        Recent post graduate in Data Analytics from NIT Trichy and currently work as an 
                        <span className="font-bold"> AI Engineer at Axtria,</span>
                        building agentic and generative AI solutions. I am passionate about 
                        <span className="font-bold"> Machine Learning, Computer Vision, 
                        Natural Language Processing, and Generative AI.</span>
                    </p>
                </div>
            </div>
            <div className="flex items-center space-x-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition-colors cursor-pointer">
                    View Projects
                </button>
                <button 
                    onClick={onButtonClick}
                    className="flex items-center gap-2 bg-white hover:bg-gray-100 text-black font-bold py-2 px-6 rounded-full border-2 transition-colors cursor-pointer"
                    >
                    <Download className="w-5 h-5" />
                    <span>Download Resume</span>
                </button>
            </div>
        </div>
    );
};


export default LandingPage;