import notification from "./notification.js";

export default class notificationOutput{
    send(notification){
        console.log(`${notification.userId}:${notification.message}`);
    }
}

