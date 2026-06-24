---
outline: deep
---

# GoHighLevel

GoHighLevel connects your CRM and marketing platform to Starfish. Manage contacts, pipelines, conversations, blogs, and social media posts -- all from your AI workspace.


## How to Connect

1. Open **Settings > Integrations** in Starfish.
2. Find **GoHighLevel** and click **Connect**.
3. Choose how to connect:
   - **Private Integration Token (PIT)** -- connects a single sub-account. Generate a token in GoHighLevel under **Settings > Integrations > Private Integrations**, then paste it into Starfish.
   - **Agency OAuth** -- connects at the agency level and reaches every sub-account from one connection. You authorize it once in your browser, and the assistant requests access to each sub-account as needed. (Requires a GoHighLevel Marketplace app -- see Notes.)
4. Choose an **access level**:
   - **Read** -- look things up only; the assistant can't change anything.
   - **Read + Write** -- full access; create and update records and send messages. Destructive actions (like deleting a contact) always ask you to confirm first.
5. Save the token (PIT) or complete the browser authorization (Agency OAuth). The integration status will show **Connected**.

## What You Can Do

- **Contacts** -- Create, search, update, and tag contacts
- **Pipelines** -- View pipelines, search opportunities, update deal stages
- **Conversations** -- Search conversations, read messages, send new messages
- **Calendars** -- View calendar events and appointment notes
- **Blogs** -- Create and update blog posts, manage authors and categories
- **Email** -- Create and manage email templates, and create, update, and schedule email campaigns
- **Social Media** -- Create and edit social media posts, view account stats
- **Payments** -- View orders and list transactions
- **Invoices & Products** -- Create and manage invoices, estimates, products, and pricing
- **Calendars & Appointments** -- View, create, and manage events and appointments
- **Custom Fields** -- Read location-level custom fields
- **Tasks** -- List and manage contact tasks

## Example Prompts

- "Find all contacts tagged 'VIP' in GoHighLevel"
- "Create a new contact with name 'John Smith' and email 'john@example.com'"
- "What opportunities are in the 'Negotiation' stage of the Sales pipeline?"
- "Send a message to the conversation with contact 'Jane Doe' saying 'Your appointment is confirmed'"
- "Create a blog post titled 'Top 10 Marketing Tips' with a draft status"

## Notes

- The integration covers both the v2 and v3 GoHighLevel APIs, so newer capabilities (such as email campaigns) are available alongside the established ones.
- With a **Private Integration Token**, the assistant works with the single sub-account that token belongs to; to cover several sub-accounts this way you need a separate token for each.
- **Agency OAuth** reaches every sub-account from one connection. It requires a GoHighLevel Marketplace app configured with the redirect URL `http://localhost:8094/oauth/callback`, which you authorize once in your browser.
- Social media posting requires that your GoHighLevel account has connected social accounts.
