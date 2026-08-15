export default class socialEvents{
    constructor(notificationService){
        this.notificationService = notificationService;
    }

        friendRequestSent(fromUserId, toUserId) {
        const event = {
            type: "Request_send",
            fromUserId: fromUserId,
            toUserId: toUserId
        };

        this.notificationService.processEvent(event);
        }

        friendRequestAccepted(userId, friendId) {
            const event = {
                type: "Request_accept",
                userId: userId,
                friendId: friendId
            };

            this.notificationService.processEvent(event);
        }

        globalEvent(){
            const event ={
                message: "Harry Potter's wand"
            };

            this.notificationService.processEvent(event);
        }

        Level_up(userID , level){
            const event={
                userID: userID,
                level: level
            };
        
            this.notificationService.processEvent(event);
        }
}