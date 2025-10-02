import { FaReact, FaPython } from "react-icons/fa";
import fastapi from "../assets/FastAPI.svg";
import langchain from "../assets/langchain.svg"
function TechStackCard() {
    return (
        <div className="flex  space-x-6 m-4">
            <div className="flex flex-col justify-center bg-gray-100 rounded-2xl p-4 w-38 items-center space-y-2">
                <FaPython size={50} className="text-yellow-500" />
                <p className="text-sm font-bold">
                    Python
                </p>
            </div>

            <div className="flex flex-col justify-center bg-gray-100 rounded-2xl p-4 w-38 items-center space-y-2">
                <FaReact size={50} className="text-blue-500" />
                <p className="text-sm font-bold">
                    React
                </p>
            </div>

            <div className="flex flex-col justify-center bg-gray-100 rounded-2xl p-4 w-38 items-center space-y-2">
                <img 
                    src={fastapi}
                    alt="FastAPI"
                    className="w-15 h-15"
                />
                <p className="text-sm font-bold">
                    FsstAPI
                </p>
            </div>

            <div className="flex flex-col justify-center bg-gray-100 rounded-2xl p-4 w-38 items-center space-y-2">
                <img 
                    src={langchain}
                    alt="Langchain"
                    className="w-15 h-15"
                />
                <p className="text-sm font-bold">
                    LangChain
                </p>
            </div>
        </div>
    );
};

export default TechStackCard;