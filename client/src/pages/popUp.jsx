import { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import axios from "axios";

function PopUp({ handleClose }) {
  const { id } = useContext(UserContext);  
  const [title, setTitle] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();  
    console.log(id);
    try {
      const res = await axios.post(`http://localhost:4000/addEvent/${id}`, {
        title, 
        start, 
        end 
      });
      if (res.data) {
        handleClose();  // Close popup and refresh events
      }
    } catch (error) {
      console.error('Error adding event:', error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-gradient-to-r from-orange-200 to-red-200 text-black p-6 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Add New Event</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Title</label>
            <input 
              type="text"
              value={title} 
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Start Date & Time</label>
            <input
              type="datetime-local"  // 'datetime-local' allows both date and time input
              value={start}
              onChange={(e) => setStart(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">End Date & Time</label>
            <input
              type="datetime-local"  // 'datetime-local' for both date and time input
              value={end}
              onChange={(e) => setEnd(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={handleClose}
              className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PopUp;
