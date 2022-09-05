import { modalSlice, alertSlice } from "./reducers";

export const { showModal, hideModal, updateTitle } = modalSlice.actions;

export const { addAlert, deleteAlert, deleteAlerts } = alertSlice.actions;