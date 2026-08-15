# codingChallange
Real-time notification system coding challenge

# Notification System

A simple event-driven notification system built with Node.js and ES6 modules.

The system allows different parts of an application, such as the game engine and social system, to generate events without needing to know how notifications are delivered.

A centralized `NotificationService` processes those events, checks user preferences, creates notifications, and passes them to the notification client.

## Features

- Player level-up notifications
- Item acquired notifications
- Challenge completion notifications
- Friend request notifications
- Friend request acceptance notifications
- New follower notifications
- User notification preferences
- Category-based notification filtering
- Unknown event handling
- Unknown user handling
- Separation between notification logic and delivery
- ES6 module architecture

## Architecture

```text
                    GAME EVENTS
                        |
                        v
                  +-------------+
                  | GameEngine  |
                  +-------------+
                        |
                        |
                        v
               +-------------------+
               | Notification      |
               | Service            |
               +-------------------+
                  |             |
                  |             |
          Event Mapping    User Preferences
                  |             |
                  +------+------+
                         |
                         v
                  +-------------+
                  | Notification|
                  +-------------+
                         |
                         v
              +---------------------+
              | NotificationClient  |
              +---------------------+
                         |
                         v
                    console.log()
