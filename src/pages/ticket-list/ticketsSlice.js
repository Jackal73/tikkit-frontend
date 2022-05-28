import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tickets: [],
  isLoading: false,
  error: '',
  searchTicketList: [],
  selectedTicket: {}
};

const ticketListSlice = createSlice ({
  name: 'ticketList',
  initialState,
  reducers: {
    fetchTicketLoading: (state) => {
      state.isLoading = true;
    },
    fetchTicketsSuccess: (state, action) => {
      state.tickets = action.payload;
      state.searchTicketList = action.payload;
      state.isLoading = false;
    },
    fetchTicketsFail: (state, { payload }) => {
      state.tickets = false;
      state.error = payload;
    },
    searchTickets: (state, {payload}) => {
      state.searchTicketList = state.tickets.filter(row => {
        if (!payload) return row;

        return row.subject.toLowerCase().includes(payload.toLowerCase());
      });
    },
    fetchSingleTicketLoading: (state) => {
      state.isLoading = true;
    },
    fetchSingleTicketsSuccess: (state, { payload }) => {
      state.selectedTicket = payload;
      state.isLoading = false;
      state.error = "";
    },
    fetchSingleTicketsFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

const { reducer, actions } = ticketListSlice;

export const {
  fetchTicketLoading,
  fetchTicketsSuccess,
  fetchTicketsFail,
  fetchSingleTicketLoading,
  fetchSingleTicketsSuccess,
  fetchSingleTicketsFail,
  searchTickets,
} = actions;

export default reducer;