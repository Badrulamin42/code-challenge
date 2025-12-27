# Module Overview

Module Name: Scoreboard Service

Purpose:
The Scoreboard Service manages the real-time updating and retrieval of user scores for a website scoreboard. It ensures data integrity, prevents unauthorized score manipulation, and provides live updates to all connected clients.

# Functional Requirements
Feature	Description
Update Score	API endpoint to increment a user’s score after completing an action.
Get Top Scores	API endpoint to retrieve the top 10 scores.
Live Updates	Notify connected clients when the scoreboard changes (WebSocket / SSE).
Security	Ensure users cannot modify scores without valid authentication & authorization.


# API Specification

# 1. Update Score

        Endpoint: POST /score/update
        Body:

        {
        "userId": "string",
        "actionId": "string",
        "scoreIncrement": 10
        }


        Headers:

        Authorization: Bearer JWTtoken

        Response:

        {
        "success": true,
        "newScore": 120
        }


        Validation / Security:

        JWT token required (verify user identity)

        actionId validated to ensure action is legitimate

        Server calculates new score (client cannot arbitrarily set score)


# 2. Get Top Scores

        Endpoint: GET /score/top

        Response:

        [
        { "userId": "user1", "score": 150 },
        { "userId": "user2", "score": 140 },
        ...
        ]

        Live Updates

        use WebSockets library

        Event Example:

        {
        "event": "scoreUpdated",
        "userId": "user1",
        "newScore": 150
        }


        Clients subscribe to scoreUpdated events and refresh the scoreboard automatically.