import notificationOutput from "./notificationClient.js";
import Notification from "./notification.js";


export default class notificationService {
    constructor(userPreference, NotificationOutput) {
        this.userPreference = userPreference;
        this.NotificationOutput = NotificationOutput;
    }
    

    processEvent(event){

         const notificationData = this.createNotificationData(event);
        if (!notificationData) {
            console.log(`Unknown event type: ${event.type}`);
            return;
        }
        
        const {
            userId,
            type,
            category,
            message
        } = notificationData;

        //check if user exists
        const preference = this.userPreference[userId];

        if(!preference){
            console.log(`No preference found.`);
            return;
        }

        //checking user's preference in category
        if(!preference[category]){
            console.log(`${userId} disabled ${category} notification.`);
            return;
        }

        //creating notification

        const notification = new Notification(
            userId,
            type,
            message
        );

        this.NotificationOutput.send(notification);
    }

    createNotificationData(event){
        switch(event.type){
            case "Level_up":
                return{
                    userId: event.userId,
                    category: "gameEvents",
                    type: "Level_up",
                    message: `Hurry!! You leveled up to level ${event.level}.`
                };
            
            case "Item_Acquired":
                return{
                    userId: event.userId,
                    category: "gameEvents",
                    type: "Item_Acquired",
                    message: `You unlocked ${event.item}. Check it out!!` 
                };
            
            case "Request_send":
                return{
                    userId: event.toUserId,
                    category: "socialEvents",
                    type: "Request_send",
                    message: `Player ${event.fromUserId} sent you a request.` 
                };
            
            case "Request_accept":
                return{
                    userId: event.userId,
                    category: "socialEvents",
                    type: "Request_accept",
                    message: `Player ${event.friendId} accepted your request.` 
                };            
            
            
            case "Global_event":
                return{
                    userId: event.userId,
                    category: "gameEvents",
                    type: "Global_event",
                    message: `Check out new events like ${event.message} and win more!!.` 
                };
            
            case "challenge_completed":
                return {
                    userId: event.userId,
                    category: "gameEvents",
                    type: "challenge_completed",
                    message: `Congratulations! You completed ${event.challenge}.`
                };

            default:
                return null;
        }
     }
}