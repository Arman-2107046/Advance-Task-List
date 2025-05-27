import { FaPlus } from "react-icons/fa";
import { useStore } from "../store/store";

const Sidebar = () => {
  const { lists, workspace, openListModal, openWorkspaceModal } = useStore();

  return (
    <div className="w-60 bg-[#F9F9F9] flex flex-col">
      <div className="flex-1 overflow-y-auto">
        <div className="p-4">
          <h3 className="flex items-center text-lg font-semibold">Lists</h3>

          {/* Render Lists  */}

          <ul>
            {lists.map((list, index) => (
              <li key={index} className="p-2 hover:bg-[#ccc]">
                <span className="mr-2 ">{list.emoji}</span>
                {list.name}
              </li>
            ))}
          </ul>

          <button
            onClick={openListModal}
            className="flex items-center justify-center mt-[1rem]"
          >
            <FaPlus className="mr-2" />
            List
          </button>
        </div>
        <div className="p-4">
          <h3 className="flex items-center text-lg font-semibold">
            Workspaces
          </h3>

          {/* Render Workspaces  */}

          <ul>
            {workspace.map((work, index) => (
              <li key={index} className="p-2 hover:bg-[#ccc]">
                <span className="mr-2 ">{work.emoji}</span>
                {work.name}
              </li>
            ))}
          </ul>

          <button
            onClick={openWorkspaceModal}
            className="flex items-center justify-center mt-[1rem] rounded-lg cursor-pointer"
          >
            <FaPlus className="mr-2" />
            Workspace
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
