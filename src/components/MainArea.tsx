import { useStore } from "../store/store";
import { FaPlus } from "react-icons/fa";

const MainArea = () => {
  const {
    //they are todo components
    todoText,
    lists,
    workspace,
    //--------------------------------
    selectedList,
    selectedWorkspace,
    //--------------------------------

    //Functions to manipulate components
    setSelectedList,
    setSelectedWorkspace,
    setTodotext,
    //--------------------------------

    //handling the add todo
    handleAddTodo,
  } = useStore();

  return (
    // main outer div
    <div className="flex-1 p-6">
      {/* inner div for all input stuff  */}
      <div className="mb-4">
        {/* input  */}
        <input
          type="text"
          value={todoText}
          onChange={(e) => setTodotext(e.target.value)}
          placeholder="Add a new todo"
          className="w-full p-2 border border-gray-300 rounded-lg"
        />

        {/* div for selection  */}
        <div className="flex items-center mt-2">
          <select
            value={selectedList}
            onChange={(e) => setSelectedList(e.target.value)}
            className="p-2 mr-2 border border-gray-300 rounded-lg"
          >
            <option value="" disabled>
              Select List
            </option>

            {lists.map((list, index) => (
              <option key={index} value={list.name}>
                {list.emoji}
                {list.name}
              </option>
            ))}
          </select>

          <select
            value={selectedWorkspace}
            onChange={(e) => setSelectedWorkspace(e.target.value)}
            className="p-2 mr-2 border border-gray-300 rounded-lg"
          >
            <option value="" disabled>
              Select Workspace
            </option>

            {workspace.map((work, index) => (
              <option key={index} value={work.name}>
                {work.emoji}
                {work.name}
              </option>
            ))}
          </select>

          <button
            className="flex items-center px-4 py-2 ml-4 text-white bg-black rounded-lg"
            onClick={handleAddTodo}
          >
            <FaPlus /> Add Todo
          </button>

        </div>
      </div>
    </div>
  );
};

export default MainArea;
