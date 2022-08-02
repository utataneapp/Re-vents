import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { sampleData } from "../sampleData";
import { Event } from "../../../type/type";

export const eventsSlice = createSlice({
  name: "events",
  initialState: {
    events: sampleData,
  },
  reducers: {
    createEvent: (state, action: PayloadAction<Event>) => {
      return {
        ...state,
        events: [...state.events, action.payload],
      };
    },
    updateEvent: (state, action: PayloadAction<Event>) => {
      return {
        ...state,
        events: [
          ...state.events.filter((evt) => evt.id !== action.payload.id),
          action.payload,
        ],
      };
    },
    deleteEvent: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        events: [...state.events.filter((evt) => evt.id !== action.payload)],
      };
    },
  },
});

export const { createEvent, updateEvent, deleteEvent } = eventsSlice.actions;
export default eventsSlice.reducer;
