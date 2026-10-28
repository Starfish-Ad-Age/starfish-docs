---
outline: deep
---

# Work on your other Mac

In Developer mode, work in folders on another Mac from this one. Starfish reads, changes and creates files there and runs commands, such as builds, dev servers and git, the same as in a local project folder. The files stay on the other Mac.

Both Macs need Starfish open and signed in to the same account. They can be anywhere; they do not need to be on the same network.

## Share folders on the other Mac

On the Mac that has the folders:

1. Open **Settings → Remote** and turn on remote access. See [Turn it on](/phone/overview#turn-it-on).
2. Under **Share folders with my other computers**, turn on **Share folders**.
3. Under **Which folders**, choose **Only these folders** and add folders with **Choose…**, or **All project folders** to share every Developer project folder and Local Access folder on this Mac.

Click **Stop sharing** next to a folder to stop sharing it, or turn **Share folders** off to stop all sharing.

## Connect this Mac

1. On the Mac with the folders, click **Let another computer connect**. A code appears. It works once and expires in 10 minutes.
2. On this Mac, open **Settings → Remote** and click **Connect to a computer**. Choose the other Mac and type its code.
3. Both screens show a number. On this Mac, click **Yes, connect** only when both numbers are the same. On the other Mac, click **Allow**.

You pair once. The other Mac then appears under **Computers**. Click **Forget** to remove it. On the Mac with the folders, click **Remove** next to a computer to stop it from connecting.

## Work in a shared folder

Type **/project** or open the folder picker. Shared folders are listed under **On** and the name of the other Mac. Pick one, and the chat works there. The chat shows **on** and the computer's name next to the folder.

- Approval cards start with **On** and the computer's name, so you know where a step runs. Your approval setting works as in a local folder.
- Push and pull run on the other Mac with its own sign-ins, to the remotes the project already has.
- A chat works in one shared folder at a time. Choosing a folder on this Mac replaces it.

While another Mac works in your shared folders, a bar at the top says so. Click **Stop sharing** in the bar to end it at once. **Activity from other computers** in **Settings → Remote** lists what was done.

What the other Mac reads is stored in its chats.

## The dot

Each shared folder and computer shows a dot:

- **Green** -- connected.
- **Amber** -- connecting.
- **Red** -- offline, needs an update, not paired anymore, or signed in to a different account.
- **Grey** -- sharing stopped.

If a chat's folder is no longer shared, or the computer is not paired, sending a message says so. Choose another folder with **/project**.

## What stays on the other Mac

- The files never leave the other Mac, except what Starfish reads into the chat.
- Commands run inside the shared folder and cannot change files outside it.
- The other Mac's passwords and sign-ins are not passed to the chat or to this Mac.
