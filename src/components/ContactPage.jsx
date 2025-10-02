function ContactPage() {
    const onButtonCilck = (recipientEmail) => {
        // window.location.href = `mailto:${recipientEmail}`
        window.open(
            `https://mail.google.com/mail/?view=cm&fs=1&to=${recipientEmail}`,
            "_blank"
          );
    };
    return (
        <div className="justify-center items-center">
            <div className="flex flex-col justify-center items-center mt-8">
                <h1 className="text-4xl text-black font-bold mb-2 py-12">
                    Let's Work Together
                </h1>
                <p className="text-lg text-gray-700 max-w-xl text-center">
                    I’m always excited to connect! Whether it’s a project, collaboration, or AI discussion,
                    feel free to reach out. Let’s create something impactful together.
                </p>
            </div>

            <div className="items-center space-x-4 mt-4">
                <button 
                    onClick={() => onButtonCilck("satya.pola45@gmail.com")}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition-colors cursor-pointer">
                    Get In Touch
                </button>
            </div>
        </div>
    );
};

export default ContactPage;