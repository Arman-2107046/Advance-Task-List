import { MdMoreVert } from "react-icons/md";
import MainArea from "./components/MainArea";
import Sidebar from "./components/Sidebar";
import { useStore } from "./store/store";
import Modal from "./components/Modal";

const App = () => {
  const {
    todos,
    editIndex,
    editText,
    dropdownIndex,
    handleEdit,
    handleUpdate,
    handleDropdownClick,
    deleteTodo,
    setEditIndex,
    setEditText,
  } = useStore();

  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1 p-6">
        <MainArea />

        <div className="mt-6">
          <h2 className="mb-4 text-xl font-semibold ml-[2rem]">Add Todo</h2>

          <ul className="pl-5 list-disc">
            {todos.map((todo, index) => (
              <li key={index} className="mb-2 ml-[2rem]">
                {editIndex === index ? (
                  <div className="flex items-center">
                    <input
                      type="text"
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      className="p-1 mr-2 border border-gray-300 rounded-lg"
                    />

                    <button
                      className="px-2 py-1 mr-2 text-white bg-green-500 rounded-lg"
                      onClick={() => handleUpdate(index)}
                    >
                      Update
                    </button>

                    <button
                      className="px-2 py-1 mr-2 text-white bg-red-500 rounded-lg"
                      onClick={() => setEditIndex(null)}
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <div className="relative flex items-center justify-between">
                    <span className="m-4">
                      <strong>{todo.text}</strong>(List: {todo.list}) Workspace:{" "}
                      {todo.workspace}
                    </span>

                    <div className="flex items-center">
                      <MdMoreVert
                        className="cursor-pointer"
                        size={24}
                        onClick={() => handleDropdownClick(index)}
                      />

                      {dropdownIndex === index && (
                        <div className="absolute right-0 mt-2 border rounded shadow-lg">
                          <button
                            className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                            onClick={() => handleEdit(index)}
                          >
                            Update
                          </button>

                          <button
                            className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                            onClick={() => deleteTodo(index)}
                          >
                            Delete
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Modal />
    </div>
  );
};

export default App;
