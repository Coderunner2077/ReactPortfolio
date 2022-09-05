export const formatError = error => {
    let message = (error.response && error.response.data && error.response.data["message"]) ? error["response"].data["message"] : error.message;
    if (message.match(/\[[a-zA-Z]+\]/)) {
        message = message.replace(/\[[a-zA-Z]+\]/g, "");
    }
    if (message.match(/Network/))
        message = "flash.error.network";
    return message
};