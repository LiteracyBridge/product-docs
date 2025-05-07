---
title: Introduction - Audio Content Manager (ACM)
---

# Audio Content Manager (ACM)

The Audio Content Manager (ACM) imports and packages audio contents into a specialized format that can be loaded onto Talking Book devices.
Key functionalities of the ACM are:

- Import audio contents as listed in the [program specification](/program-spec/introduction#contents).
- Create content packages for deployments.

## Audio Files

> [!TIP]
> To create a deployment successfully, it is important to understand the audio groupings!

The ACM organizes audio files into two main categories: **Messages (Contents)** and **Prompts**.

## Messages (Contents) {#messages}

As explained in the [program specification](../program-spec/introduction.md#contents):
> A message or content is an audio recording that discusses a specific topic. Messages are grouped into one or more playlists or subjects.

A message (content) can be of any duration, unlike [prompts](#prompt) which are short.

> [!TIP]
> The terms **messages** and **contents** are used interchangeably in the [ACM](./introduction.md) and [program specification](../program-spec/introduction.md).

## Prompt {#prompt}

> [!TIP]
> **Prompt** is a short audio, usually less than a minute, that is played to the user as a guide in navigating the Talking Book.

Prompt is further divided into three (3):  **Playlist Prompt**, **System Prompt** and  **Custom Greeting**.

> [!CAUTION]
> When creating a deployment, the ACM indicates missing prompts files, which must be imported.

#### Playlist Prompt

A playlist or subject prompt is a short audio, usually less than a minute, that plays when a user navigates to a playlist. There are two types of playlist prompts: **short (invitation)** and **long**. Both are required for creating a deployment.

For example, consider a playlist titled *"Creating Mobile Money Account"* The invitation prompt might say, *"Mobile Money Account,"* while the long prompt could say, *"To listen to messages about creating a mobile money account, press the tree."*
When the user selects the playlist, the Talking Book first plays the invitation prompt, followed by the long prompt.

#### System Prompt

A system prompt is short audio which assists the user in navigating the Talking Book. For example, "Press the right hand to choose a subject" and "To try another subject press the right hand" for navigating a playlists, "begin speaking now and press the star when you're finished." for recording feedback, etc.

#### Custom Greetings

When the Talking Book is turned on, it plays an audio which says, "Welcome to the Talking Book, press the right hand to choose a subject." You can replace this with your own audio by uploading a custom greeting.
