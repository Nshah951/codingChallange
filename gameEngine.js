// import notificationService from "./notification/notificationService.js";

export default class gameEngine {
    constructor(notificationService) {
        this.notificationService = notificationService;
    }

    playerLeveledUp(userId, level) {
        const event = {
            type: "Level_up",
            userId: userId,
            level: level
        };

        this.notificationService.processEvent(event);
    }

    itemAcquired(userId, item) {
        const event = {
            type: "Item_Acquired",
            userId: userId,
            item: item
        };

        this.notificationService.processEvent(event);
    }

    challengeCompleted(userId, challenge) {
        const event = {
            type: "challenge_completed",
            userId: userId,
            challenge: challenge
        };

        this.notificationService.processEvent(event);
    }
}