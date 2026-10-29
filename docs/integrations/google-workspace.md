---
outline: deep
---

# Google Workspace

Google Workspace connects Starfish to your Gmail, Calendar, Drive (with Docs, Sheets, Slides and Forms) and Google Chat. Ask the AI to read, create and manage content across these services from one connection.

## How to Connect

1. Open **Marketplace** in the Starfish sidebar.
2. Find **Google Workspace** and click **Connect**.
3. Choose how to sign in:
   - **Sign in with Starfish's Google app**: no setup. Click **Connect with Google**.
   - **Use my own Google app**: connect through an OAuth client in your own Google Cloud project. See [Use your own Google app](#use-your-own-google-app). For a business Google Workspace account, use your own Google app.
4. Choose the services to connect (see below), then click **Connect**.
5. Your browser opens. Sign in with your Google account, review the requested access and approve. Then return to Starfish.

### Choose services and access

For **Gmail**, **Drive** (Drive files, Docs, Sheets, Slides, Forms), **Calendar** and **Chat**, pick **Off**, **Read only** or **Read & Write**. Starfish asks Google only for the access you pick.

**Allow sending & deleting** is a separate switch, off by default. While it is off, the assistant can read, prepare and edit, but never send or delete. Turn it on to let the assistant send email and Chat messages and delete items. It always shows you who and where, and asks before sending.

## Use your own Google app

The connect window walks you through these steps, with a link for each:

1. Create a Google Cloud project.
2. In that project, turn on the APIs you use: Gmail, Drive, Calendar, Chat, Docs, Sheets, Slides, Forms.
3. Open **Branding**, click **Get started**, and enter an app name and your email. For **Audience**, pick **Internal** if you use Google Workspace. Otherwise pick **External**, then add your own email under **Audience → Test users**.
4. Open **Clients**, click **Create client**, choose **Desktop app**, and click **Create**.
5. Copy the **Client ID** and **Client secret** into Starfish.

There is no redirect URI to add: Starfish completes the sign-in through a local callback on your Mac.

With **External** in testing, Google ends the sign-in after 7 days, so you reconnect weekly. Google Chat needs a Google Workspace account, and sending or changing Chat messages also needs the Chat API configuration filled in.

## What You Can Do

### Gmail

- List and search emails by sender, subject, date or label
- Read full email threads and attachments
- Prepare replies, and send them when sending is allowed

### Calendar

- List upcoming events across calendars
- Create and update events (new events use your Mac's time zone)
- Check availability

### Drive, Docs, Sheets, Slides and Forms

- Find, read and summarise files
- Create and edit documents, spreadsheets and presentations
- Read form responses

### Chat

- List Chat spaces and members
- Read messages, and send messages when sending is allowed

## Example Prompts

- "Show me my unread emails from the last 24 hours"
- "Create a calendar event for tomorrow at 2pm called 'Sprint Review'"
- "Find the Q1 budget spreadsheet in Drive and summarize the totals"
- "What meetings do I have this week?"

## Troubleshooting

### Connection dropped after a week

With your own Google app set to **External** in testing, Google ends the sign-in after 7 days. Reconnect, or set the audience to **Internal** if you use Google Workspace.

### "Invalid client"

Check that you copied the Client ID and Client secret exactly, with no extra spaces. The Client ID ends in `.apps.googleusercontent.com`.

### Some tools don't work

The service may be **Off** in your connection, or, with your own Google app, its API may not be turned on in your Cloud project. Reconnect and adjust the services, or turn on the API in Google Cloud.

### Your Google Workspace admin blocks the sign-in

Some organisations allow only approved apps. Use your own Google app, or ask your admin.

## Notes

- **Where your sign-in is kept.** Your Google access tokens are stored on your Mac, readable only by your macOS user account. A Client ID and secret you enter are encrypted with your Mac's Keychain. With Starfish's Google app, Starfish's sign-in service completes the sign-in and renews your access, and does not store your tokens. See [Google user data](/legal/privacy#google-user-data).
- **You control access.** **Disconnect** in the Marketplace deletes the stored tokens from your Mac. You can also revoke access at any time at [myaccount.google.com/permissions](https://myaccount.google.com/permissions).
- **Usage limits.** Your use is subject to Google's standard API quotas.
- Some integrations depend on platform approvals that can change.
