

// Modal
export interface IModalProperties {
    title?: string;
    body: string | JSX.Element;
}

export interface IModalTitle {
    title: string
}

// Alert
export interface IAlertMessage {
    type: "error" | "success";
    message: string;
}