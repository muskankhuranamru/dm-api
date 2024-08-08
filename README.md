<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

<p align="center">A Direct Messaging API built with NestJS, TypeScript, and PostgreSQL for user-to-user communication.</p>

## Description

This project is a Direct Messaging API built with NestJS, TypeScript, and PostgreSQL. The API allows users to send, receive, and manage direct messages, making it ideal for applications requiring user-to-user communication.

## Technologies Used

- **NestJS:** A progressive Node.js framework for building efficient and scalable server-side applications.
- **TypeScript:** A superset of JavaScript that adds static types, helping to catch errors early.
- **PostgreSQL:** A powerful, open-source object-relational database system used for storing user and message data.

## Installation

To install the project dependencies, run:

```bash
$ npm install
```

## Run the App

```bash
# Development mode
$ npm run start

# Watch mode
$ npm run start:dev

# Production mode
$ npm run start:prod
```

## Testing Scenarios
To run the tests, please use GraphQL Playground and test accordingly.

# 1. Create a New User

```bash
mutation {
  createUser(createUserInput: { username: "john_doe", email: "john.doe@example.com" }) {
    id
    username
    email
  }
}
```

# 2. Query All Users

```bash
query {
  users {
    id
    username
    email
  }
}
```

# 3. Query a Single User by ID

```bash
query {
  user(id: 1) {
    id
    username
    email
  }
}

```
# 4. Send a Message

```bash
mutation {
  sendMessage(sendMessageInput: { senderId: 1, recipientId: 2, content: "Hello!" }) {
    id
    content
    sender {
      id
      username
    }
    recipient {
      id
      username
    }
    isAccepted
  }
}

```
# 5. Query Messages by Recipient

```bash
query {
  messages(recipientId: 2) {
    id
    content
    sender {
      id
      username
    }
    recipient {
      id
      username
    }
    isAccepted
  }
}

```
# 6. Accept a Message Request

```bash

mutation {
  acceptMessageRequest(messageId: 1)
}

```
# 7.Reject a Message Request

```bash
mutation {
  rejectMessageRequest(messageId: 1)
}

```

## here are some media of expected output from apis 


<img width="1264" alt="Screenshot 2024-08-09 at 1 02 42 AM" src="https://github.com/user-attachments/assets/23263a2e-a957-484f-bf42-e4175acad898">
<img width="1202" alt="Screenshot 2024-08-09 at 1 02 27 AM" src="https://github.com/user-attachments/assets/319e3cd1-1fc9-40c8-b340-61be65f3476f">
<img width="1254" alt="Screenshot 2024-08-09 at 1 01 44 AM" src="https://github.com/user-attachments/assets/415941ae-b9ee-4d9e-8536-5d0340351368">
<img width="1357" alt="Screenshot 2024-08-09 at 1 01 25 AM" src="https://github.com/user-attachments/assets/96257585-b241-4216-8b91-0624737141f2">

<img width="1331" alt="Screenshot 2024-08-09 at 12 59 41 AM" src="https://github.com/user-attachments/assets/596e8f81-5204-4682-aa13-78d5689c38ac">
<img width="1271" alt="Screenshot 2024-08-09 at 12 49 17 AM" src="https://github.com/user-attachments/assets/40a17bea-2f6e-4820-b948-7d0626560a30">
<img width="1357" alt="Screenshot 2024-08-09 at 12 49 02 AM" src="https://github.com/user-attachments/assets/04364358-9a02-491f-ad05-6f4c2ac3d0f4">
<img width="1362" alt="Screenshot 2024-08-09 at 12 48 44 AM" src="https://github.com/user-attachments/assets/a344e88c-5b7a-429f-a0c3-60367ad1e3ef">
<img width="1231" alt="Screenshot 2024-08-09 at 1 14 14 AM" src="https://github.com/user-attachments/assets/4287312a-0081-4cb2-85f3-5eef4746c2f3">









