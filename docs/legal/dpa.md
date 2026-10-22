---
outline: [2, 3]
---

# Data Processing Agreement

::: danger Draft for legal review
This Data Processing Agreement is a draft. It has not been reviewed by a lawyer and must not be signed or relied on until it has been. Items in square brackets, such as [CONTACT EMAIL], are placeholders for the lawyer or the owner to decide. Items marked [CONFIRM: ...] are facts we could not verify from our own systems.
:::

**Last updated: 2026-10-17**

This Data Processing Agreement ("DPA") forms part of the [Terms of Service](/legal/terms) (the "Terms") between the customer named in the signature block ("Customer", "you") and **Starfish Ad Age LLC**, trading as Starfish Solutions, 140 E Tyler Street, Longview, Texas 75601, USA ("Starfish", "we"). Words defined in the Terms (such as Services, Your Content, Your AI Key, AI Providers and Connected Apps) have the same meaning here. If this DPA and the Terms conflict on the processing of personal data, this DPA wins.

## 1. What this DPA covers, and what it does not

Starfish is a Mac app. Most of what it does happens on your Mac, and most outside services it talks to are services **you** contract with. This DPA covers only the personal data that Starfish processes on servers it runs or pays for ("**Cloud Data**"):

| Covered (Starfish is your processor) | Not covered |
|---|---|
| Your workspace in our cloud when you turn on cloud sync (Settings → Sync → Cloud sync, off by default) | Data that stays on your Mac (local database, files, recordings, keys). We cannot see it. |
| Teams data: members, roles, invitations and shared projects | **AI requests.** They go from your Mac to Vercel AI Gateway on Your AI Key, and from there to the AI Providers. Vercel and the AI Providers are **your** processors under your own agreements with them, not our subprocessors. We have no access to those requests or to your Vercel account. |
| Published pages (Sites) and shared Studio pages | **Connected Apps** (Google, TikTok, ClickUp, QuickBooks, GitHub and others). The App talks to them from your Mac using your accounts. They are your own providers. |
| Starfish Anywhere device and tunnel records, and the phone traffic passing through the tunnel | Websites the App fetches or opens for you. |
| Sign-in steps for some Connected Apps that pass through our functions | Your account, sign-in and billing records. For these Starfish is a controller, as described in the [Privacy Policy](/legal/privacy). |
| Feedback and bug reports you choose to send, including any chat transcript you attach | |

## 2. Roles

- **You are the controller** of Cloud Data, or act for the controller (for example your client, when you are an agency).
- **Starfish is your processor** (a "service provider" or "processor" under US state privacy laws) for Cloud Data.
- If you act for another controller, you confirm you have that controller's authority to give us these instructions, and Starfish is your sub-processor for that data.

## 3. Details of the processing

| | |
|---|---|
| **Subject matter** | Providing the Services under the Terms. |
| **Nature and purpose** | Storing, syncing between your Macs, sharing with your Team, publishing pages you publish, running Starfish Anywhere, passing sign-in codes for some Connected Apps, and handling feedback you send. |
| **Duration** | The term of your Subscription, plus the deletion periods in [Section 11](#11-deletion-and-return-at-the-end). |
| **Categories of data subjects** | You and your End Users; your Team members; your clients and their staff and customers; meeting participants; people named or shown in your chats, files and pages; people who view a page you publish. |
| **Categories of personal data** | Whatever you put in Your Content: names, contact details, messages, documents, meeting transcripts and audio recordings, images, CRM, analytics and ad-account data that you or the App bring into a chat or project. Team member names, emails and optional avatar links. Device names and identifiers for Starfish Anywhere. |
| **Sensitive data** | Not permitted. The Terms (Section 10) prohibit Sensitive Personal Information and protected health information. Starfish is not a HIPAA business associate. [CONFIRM with counsel: whether to add an express GDPR Article 9 exclusion.] |
| **Frequency** | Continuous while cloud sync, Teams, Sites or Starfish Anywhere is in use. |

## 4. Instructions

- We process Cloud Data only on your documented instructions. Your instructions are the Terms, this DPA, and how you configure and use the Services (for example turning cloud sync on, sharing a project, publishing a page or sending feedback).
- We do not sell Cloud Data, share it for cross-context behavioural advertising, use it to train models, or use it for any purpose other than providing the Services. We do not combine it with data from other customers or sources, except as the Services need (for example a project you share with your Team).
- If the law requires us to process Cloud Data otherwise, we will tell you first unless the law forbids it.
- We will tell you if we believe an instruction breaks applicable data protection law.

## 5. Confidentiality

Everyone at Starfish who can access Cloud Data is bound by a duty of confidentiality [CONFIRM: written confidentiality terms in employment and contractor agreements]. Staff access Cloud Data only to provide support you ask for, to investigate abuse or security issues, or where the law requires.

## 6. Security measures

We use the following technical and organisational measures. Each one exists in our current infrastructure.

**Cloud sync and Teams (AWS, us-west-2, Oregon, USA)**

- Database: Amazon RDS for PostgreSQL in private, isolated subnets with no internet route. The App reaches it only through our API.
- Encryption at rest: the database, its backups and the file store are encrypted with a customer-managed AWS KMS key, with yearly automatic key rotation. The session-revocation and invite-mail tables use AWS-managed encryption.
- File store: Amazon S3 with all public access blocked, TLS required for every request, and file versioning on.
- Encryption in transit: TLS for every request between the App and our services.
- Access control: every API request must carry a valid Starfish sign-in token, checked against Supabase's public keys; signed-out sessions can be revoked. Each account can reach only its own data and, for shared projects, its Team's data.
- Least privilege: the database account our API uses cannot delete rows, which protects against accidental mass deletion. Our functions sign in to the database with short-lived IAM tokens; the database master credential is kept in AWS Secrets Manager for break-glass use only.
- Backups: automated database backups with point-in-time recovery for 14 days. Deletion protection is on for the production database.
- Logs: API and function logs are kept for one month.

**Starfish Anywhere (Cloudflare)**

- Off by default. Phones pair with a one-time code that lasts 10 minutes, and each phone gets its own secret; your Mac keeps only a hashed form. Up to 5 phones.
- Setup, keys, sync, Connected App sign-in and code publishing are blocked from the phone.
- Note: Cloudflare terminates TLS in transit, so tunnel traffic is not end-to-end encrypted between phone and Mac.

**On your Mac (your responsibility, listed for completeness)**

- Your AI Key and the most sensitive connected-app secrets are encrypted with the macOS Keychain. The AI assistant is blocked from reading the Keychain, browser password stores and the App's secret files.

**Not yet in place** [CONFIRM: owner to decide and date each]:

- [CONFIRM: independent security certification or audit (for example SOC 2) — none today.]
- [CONFIRM: written incident response plan.]
- [CONFIRM: staff security training and access reviews.]
- [CONFIRM: multi-factor authentication on all admin accounts for AWS, Supabase, Cloudflare and Resend.]
- [CONFIRM: penetration testing.]
- Feedback screenshots and transcripts are stored at public-read links today. [BLOCKER: make them private before this DPA is offered.]

We may update these measures as long as the overall level of protection does not decrease.

## 7. Subprocessors

You authorise Starfish to use the following subprocessors for Cloud Data:

| Subprocessor | Purpose | Location |
|---|---|---|
| Amazon Web Services, Inc. | Cloud sync database and file store, Teams, published Sites, invite mail queue, API and logs | USA (Oregon, us-west-2) |
| Supabase, Inc. | Sign-in, App settings, helper functions (Connected App sign-in steps for Google, ClickUp and TikTok, QuickBooks change alerts, account deletion), shared Studio pages, feedback intake | [SUPABASE REGION — CONFIRM] |
| Cloudflare, Inc. | Starfish Anywhere tunnels and device records | USA, global network [CONFIRM: data location settings] |
| Resend (Plus Five Five, Inc.) | Team invite emails | USA [CONFIRM] |
| Notion Labs, Inc. | Internal tracking of feedback and bug reports you choose to send | USA [CONFIRM] |

[CONFIRM: which provider sends Supabase sign-in emails (password reset, email confirmation) — Supabase's own mailer or a custom SMTP provider. Add it here if it is a separate company.]

**Not subprocessors:**

- **Vercel and the AI Providers.** You contract with them directly through Your AI Key; Starfish never receives AI traffic.
- **Connected Apps**, including the platforms whose sign-in steps pass through our Supabase functions. You contract with each platform directly.
- **Stripe** handles billing for Starfish as a controller; it does not receive Your Content. [CONFIRM: billing is not live in the App yet.]
- **GitHub** serves App update downloads and speech-model downloads; it sees your IP address and App version but no Your Content.

### Changes to subprocessors

We will give you at least [30] days' notice before a new subprocessor processes Cloud Data, by [NOTICE METHOD — CONFIRM: email to the account owner, or an update to this page with an email subscription]. You may object on reasonable data protection grounds within that period. If we cannot reasonably accommodate the objection, you may end the affected Services and receive a refund of prepaid fees for the period after termination. [CONFIRM: objection and refund terms.] Each subprocessor is bound by written terms that protect Cloud Data at least as well as this DPA, and we remain responsible for its performance.

## 8. Assistance with data subject requests

- We will tell you, without undue delay, about any request we receive directly from a data subject about Cloud Data, and will not answer it ourselves unless you tell us to or the law requires.
- You can answer most requests yourself in the App: export your cloud data, delete items, turn cloud sync off and delete the cloud copy (Settings → Sync), or delete the whole account (Settings → General → Account → Delete Starfish account).
- For anything the App cannot do, we will help at [CONTACT EMAIL] within [10] business days. [CONFIRM: whether assistance beyond reasonable effort is chargeable.]
- We cannot help with data held by Vercel, the AI Providers or Connected Apps. Requests about that data go to those services.

We will also give reasonable help with data protection impact assessments and consultations with authorities, as far as they concern Cloud Data and the information is available to us.

## 9. Personal data breaches

- We will notify you without undue delay, and in any case within [72] hours, after we become aware of a personal data breach affecting Cloud Data.
- The notice will describe, as far as known: what happened, the categories and rough number of data subjects and records, likely consequences, and what we have done or will do. We will add details as we learn them.
- Notice goes to [NOTICE ADDRESS — CONFIRM: the account email of the Customer's owner, or a security contact you give us].
- Notifying you is not an admission of fault.

## 10. Audits and information

- On request, we will give you the information reasonably needed to show compliance with this DPA, including this document, our subprocessor list and a written answer to a reasonable security questionnaire, no more than once a year [CONFIRM].
- If that is not enough, or a regulator requires it, you may audit our compliance with [30] days' written notice, during business hours, at your cost, under confidentiality, and without access to other customers' data. [CONFIRM: audit scope, frequency, and whether third-party certifications will replace on-site audits.]
- Audits of AWS, Supabase, Cloudflare and other subprocessors are satisfied by their own published certifications and reports.

## 11. Deletion and return at the end {#11-deletion-and-return-at-the-end}

- **Return.** While you can sign in, you can download your cloud data yourself, as described in [Getting a copy of your data](/legal/privacy#getting-a-copy-of-your-data) in the Privacy Policy. After your Subscription ends, you may ask for a copy within the period in [Section 17 of the Terms](/legal/terms#_17-suspension-and-termination).
- **Deletion.** You can delete your cloud copy at any time (Settings → Sync → Delete my cloud data) or delete your account (Settings → General → Account → Delete Starfish account). After the Subscription ends and the return period has passed, we delete or de-identify remaining Cloud Data within [30 DAYS — CONFIRM], unless the law requires us to keep it.
- **Backups.** Deleted data can remain in database backups for up to 14 days and is then gone. [CONFIRM: how long earlier S3 file versions remain after deletion.]
- **Teams.** Projects you shared with a Team stay with that Team, because its other members use them, unless the Team owner deletes them.
- On request, we will confirm deletion in writing.

## 12. International transfers

- Cloud Data is stored in the United States (AWS Oregon; Supabase [REGION]; Cloudflare's global network).
- Where Cloud Data of people in the EU, EEA, UK or Switzerland is transferred to the United States, the parties agree to the [EU Standard Contractual Clauses, Module Two (controller to processor) and Module Three (processor to processor), and the UK International Data Transfer Addendum], which are incorporated by reference. [CONFIRM with counsel: modules, optional clauses, governing law and supervisory authority; whether Starfish will join the EU-U.S. Data Privacy Framework; whether Starfish will be offered in the EU or UK at all.]
- Subprocessor transfers rely on each subprocessor's own transfer mechanism.

## 13. US state privacy laws

For the CCPA as amended by the CPRA, and similar laws in other US states:

- Starfish is your **service provider** (or **processor**) and processes Cloud Data only for the business purposes in this DPA.
- Starfish will not **sell** or **share** Cloud Data, will not retain, use or disclose it outside the direct business relationship with you or for any purpose other than the business purposes in this DPA, and will not combine it with personal information from other sources except as the law allows a service provider to.
- Starfish will comply with these laws and give Cloud Data the same level of privacy protection they require, and will tell you if it can no longer meet its obligations.
- You may take reasonable and appropriate steps to stop and remediate unauthorised use of Cloud Data, including by contacting us at [CONTACT EMAIL].
- Starfish certifies that it understands and will comply with these restrictions.

## 14. Your responsibilities

- You have a lawful basis, and any notices and consents needed, for the Cloud Data you put into the Services, including the consent of meeting participants where the law requires it.
- You choose and contract with Vercel, the AI Providers and Connected Apps, and you are responsible for their terms, including your Vercel plan level (see [Terms §7.2](/legal/terms#plan-level)).
- You keep your Macs, accounts and Your AI Key secure.

## 15. Liability and term

- Each party's liability under this DPA is subject to the limits in the Terms (Section 21). [CONFIRM with counsel: whether any carve-out applies.]
- This DPA lasts as long as Starfish processes Cloud Data for you.

## Signatures

| | Customer | Starfish Ad Age LLC |
|---|---|---|
| Name | | [SIGNATORY — CONFIRM] |
| Title | | |
| Date | | |
| Signature | | |

[DPA REQUEST AND SIGNATURE PROCESS — CONFIRM: for example, email [CONTACT EMAIL] for a countersigned copy.]
