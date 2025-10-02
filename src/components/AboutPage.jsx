import TechStackCard from "./TechStackCard";
function AboutPage() {
    return (
        <div className="text-black flex flex-col justify-center items-center mt-8">
            <div className="text-center py-12">
                <h4 className="font-bold">
                    What I do
                </h4>
                <div className="text-lg text-gray-700 max-w-xl text-center">
                    <p>
                    An AI Engineer specializing in Machine Learning, Deep Learning, Computer Vision, NLP, and Generative AI. 
                    I focus on building intelligent, end-to-end proofs of concept in Agentic and Generative AI at Axtria, leveraging React, 
                    FastAPI, OpenAI, and LangChain to create scalable prototypes and automate workflows. Dedicated to transforming ideas into 
                    impactful solutions, I thrive on innovation, collaboration, and delivering seamless AI-driven experiences.
                    </p>
                </div>

            </div>
            <div>
                <h3 className="font-bold">
                    Tech I work with
                </h3>
                <div>
                    <TechStackCard />
                </div>

            </div>
        </div>
    );
};

export default AboutPage;