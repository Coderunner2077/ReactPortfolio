import { createSlice, combineReducers } from "@reduxjs/toolkit";
import { IModalProperties, IModalTitle, IAlertMessage } from "../types";

// Modal
type ModalState = {
	modal: IModalProperties | null | undefined
};

const initialState: ModalState = {
	modal: null
}

export const modalSlice = createSlice({
	name: "modal",
	initialState,
	reducers: {
		showModal: (state, action) => {
			state.modal = action.payload;
		},
		hideModal: (state) => {
			state.modal = null
		},
		updateTitle: (state, action) => {
			if (state.modal)
				state.modal.title = action.payload.title;
		}
	}
});

// Alert
type AlertState = {
	alerts: IAlertMessage[] | [] | undefined
}

const initialAlertState: AlertState = {
	alerts: []
}

export const alertSlice = createSlice({
	name: "flash",
	initialState: initialAlertState,
	reducers: {
		addAlert: (state, action) => {
			const alerts = state.alerts ?? [];
			state.alerts = [...alerts, ...action.payload];
		},
		deleteAlert: (state, action) => {
			const alerts = state.alerts?.filter((alert, index) => index !== action.payload);
			state.alerts = alerts;
		},
		deleteAlerts: (state) => {
			state.alerts = []
		}
	}
});

const rootReducer = combineReducers({
	modal: modalSlice.reducer,
	flash: alertSlice.reducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;