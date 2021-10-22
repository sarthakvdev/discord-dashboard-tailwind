import { useState } from "react";
import { BsHash } from 'react-icons/bs';
import { FaChargingStation, FaChevronDown, FaChevronRight, FaPlus } from 'react-icons/fa';

const topics = ['tailwind-css', 'react'];
const questions = ['jit-compilation', 'purge-files', 'dark-mode'];
const random = ['variants', 'plugins'];

const ChannelBar = () => (
    <div className="channel-bar shadow-lg">
        <div className="channel-block">
            <h5 className="channel-block-name">Channels</h5>
        </div>

        <div className="channel-container">
            <Dropdown header='Topics' options={topics} />
            <Dropdown header='Questions' options={questions} />
            <Dropdown header='Random' options={random} />
        </div>
    </div>
);

const Dropdown = ({ header, options }) => {
    const [expanded, setExpanded] = useState(true);

    return(
        <div className="dropdown">
            <div onClick={() => setExpanded(!expanded)} className="dropdown-header">
                <ChevronIcon expanded={expanded} />
                <h5 className={expanded ? "dropdown-header-text-selected" : "dropdown-header-text"}>
                    {header}
                </h5>
                <FaPlus size='12' className="text-accent text-opacity-80 my-auto ml-auto" />
            </div>
            {expanded && options && 
                options.map(option => <TopicOption option={option} />)}
        </div>
    );
};

const ChevronIcon = ({ expanded }) => {
    const chevClass = 'text-accent text-opacity-800 my-auto mr-1';

    return expanded ? (
        <FaChevronDown size={14} className={chevClass} />
    ) : (
        <FaChevronRight size={14} className={chevClass} />
    );
};

const TopicOption = ({ option }) => {
    return(
        <div className="dropdown-option">
            <BsHash size='24' className="text-gray-100" />
            <h5 className="dropdown-option-text">{option}</h5>
        </div>
    );
};

export default ChannelBar;