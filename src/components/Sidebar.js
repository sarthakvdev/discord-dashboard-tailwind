import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';

const Sidebar = () => (
    <div className="sidebar-main">
        <SidebarIcon icon={<FaFire size={25} />} text="Fireside chat" />
        <Divider />
        <SidebarIcon icon={<BsPlus size={25} />} text="Add Server" />
        <SidebarIcon icon={<BsFillLightningFill size={25} />} text="explore" />
        <SidebarIcon icon={<FaPoo size={25} />} text="Magic Poop" />
        <Divider />
        <SidebarIcon icon={<BsGearFill size={25} />} text="Settings" />
     </div>
);

const SidebarIcon = ({ icon, text }) => (
    <div className="sidebar-icon group">
        {icon}
        <span className="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
);

const Divider = () => <hr className="sidebar-hr" />;

export default Sidebar;