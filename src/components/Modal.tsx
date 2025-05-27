import { FaTimes } from "react-icons/fa";
import { useStore } from "../store/store";

const Modal = () => {
  const {
    isListModalOpen,
    isWorkspaceModalOpen,
    modalName,
    modalEmoji,
    modalType,
    // openListModal,
    closeListModal,
    // openWorkspaceModal,
    closeWorkspaceModal,
    setModalName,
    setModalEmoji,
    // setModalType,
    handleSaveModal,
  } = useStore();

  function handleClose() {
    if (modalType === "List") {
      closeListModal();
    } else if (modalType === "Workspace") {
      closeWorkspaceModal();
    }
  }

  function handleSave() {
    handleSaveModal();
  }

  if (!isListModalOpen && !isWorkspaceModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="p-6 bg-white rounded-lg w-80">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">{`Create New ${modalType}`}</h2>

          <button
            onClick={handleClose}
            className="text-gray-600 hover:text-gray-900"
          >
            <FaTimes />
          </button>
        </div>
        <input
          type="text"
          value={modalName}
          onChange={(e) => setModalName(e.target.value)}
          placeholder={`Enter ${modalType} name`}
          className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
        />

        <input
          type="text"
          value={modalEmoji}
          onChange={(e) => setModalEmoji(e.target.value)}
          placeholder={`Enter emoji (optional)`}
          className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
        />

        <button
          onClick={handleSave}
          className="px-4 py-2 text-white bg-black rounded-lg"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Modal;
