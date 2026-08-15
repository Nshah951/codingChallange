import notificationOutput from "./notification/notificationClient.js";
import notificationService from "./notification/notificationService.js";
import socialEvents from "./globalEvents/socialSystem.js";
import gameEngine from "./gameEngine.js";

//user preference

const userPreference = {
    1:{
        gameEvents: true,
        socialEvents: true
    },
    2:{
        gameEvents: true,
        socialEvents: false
    },
    3:{
        gameEvents: true,
        socialEvents: true
    }
}

const NotificationOutput = new notificationOutput();

const NotificationService = new notificationService(userPreference, NotificationOutput);

const game = new gameEngine(NotificationService);
const SocialEvents = new socialEvents(NotificationService);


game.playerLeveledUp(1, 7);



game.itemAcquired(
    2,
    "Sword of Azeroth"
);

game.challengeCompleted(
    3,
    "Dragon Slayer"
);

SocialEvents.friendRequestSent(3, 1);

SocialEvents.friendRequestAccepted(1, 3);


console.log("\n--- PREFERENCE TEST ---\n");

// User 2 has socialEvents = false
SocialEvents.friendRequestSent(3, 2);
