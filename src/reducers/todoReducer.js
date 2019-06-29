import uuid from "uuid/v4";
const initialState = {
  items: [
    {
      id: uuid(),
      name: "Read a bit",
      complete: true
    },
    {
      id: uuid(),
      name: "Do laundry",
      complete: false
    }
  ]
};
export default function(state = initialState, { type, payload }) {
  switch (type) {
    case "ADD_TODO":
      return {
        ...state,
        items: [...state.items, payload]
      };
    case "DELETE_TODO":
      return {
        ...state,
        items: state.items.filter(item => item.id !== payload)
      };
    default:
      return { ...state };
  }
}
