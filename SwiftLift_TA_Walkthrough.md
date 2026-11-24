# SwiftLift — how to use the prototype

CPSC 481, Tutorial 07, Group 4
Ravindith Singarachchige, Cody Casselman, Tehreem Sajid, Jaisumer Sandhu, Zehra Zaidi

Open `index.html` in a browser. It runs with no server, no account creation, and no real payment. You are already signed in as **river_rider**. The saved card is **Visa •••• 4242**.

On a desktop, the phone frame has three widths at the bottom left: **Compact**, **Standard**, and **Large**. On a phone-sized window the frame fills the screen. Nothing in this demo is valid for real transit.

## What is implemented

- Find a route, with suggestions, saved Home and Work, sample delays, save trip, and copy route
- Buy Tickets, with a saved card selected by default, Apple Pay and Google Pay as demos, and a different card (last 4 digits only)
- A decline (0000) and a timeout (9999), with the tickets you picked left in place
- Payment complete, with no way back to the Pay button
- Show ticket (QR). The code is a demo
- One ticket history, shared by Tickets and Profile, with refund on the ticket
- Refund status: Submitted, Approved, Refunded, with dates
- Help search, contact number, dark mode, larger text, log in / log out, change card, edit profile
- Notifications, including the current trip after you save a route

## Walkthrough — type and tap exactly this

### 1. Find a route

1. On Home, confirm the **Home** tab is highlighted.
2. Tap **Find a route**.
3. Leave **From** empty, or type `My Location`.
4. In **To**, type `Max`. Tap the suggestion **Maxwell Soccer Centre**.
5. Tap **Find routes**.
6. Read the three options. The first is marked **Fastest**. Route 36 shows the sample delay.
7. Tap option **3** (**Select**).
8. Tap **Save route**, then **View on Home**.
9. Home now shows **Current trip**. The bell badge increases by one. Open **Notifications** and tap **Current trip** to return to the route.

To try a name the prototype does not know, search for `asdf`. The screen says there is no sample match and shows routes to University of Calgary instead.

### 2. Buy a ticket, including a failed payment

1. Tap **Buy Tickets**.
2. Tap **+** once on **Adult (18–64)**. The line should read **1** and **Total so far $3.75**. Continue stays disabled if the total is $0.00.
3. Tap **Continue**.
4. **Saved Visa •••• 4242** is already selected. Do not type a full card number.
5. Tap **A different card**. In **Last 4 digits**, type `0000`.
6. Tap **Pay $3.75**, then **Pay now**.
7. After “Processing payment…”, read the decline. No ticket was added. The adult ticket is still selected.
8. Tap **Saved Visa •••• 4242**.
9. Tap **Pay $3.75**, then **Pay now**.
10. On **Payment complete**, there is no back arrow. Tap **Show ticket**, then **Done**.

Optional: repeat step 5 with `9999` to see the “payment service did not respond” message. Any other 4 digits, such as `1881`, succeeds.

### 3. Refund status

1. Tap **Tickets**, then **Ticket history & refunds**. Profile opens this same list.
2. Tap **Refunds**.
3. Read the three sample trackers:
   - Adult monthly pass: **Submitted** Nov 24, 2026, expected completion Dec 1, 2026
   - Youth single ticket: **Approved** Nov 22, 2026, expected refund Nov 27, 2026
   - Senior single ticket: **Refunded** Nov 18, 2026, back on Visa •••• 4242
4. Tap **Unused**. Tap **Request refund** on **Adult single ticket** (Aug 24, 2026, $3.60).
5. Tap **Continue**, then **Submit refund request**.
6. The new tracker starts at **Submitted**, with an expected approval and completion date. There is no back arrow into the review step. Tap **Done**.

### 4. Help, display, and login

1. Tap **Profile**, then **Help**.
2. In **Search help**, type `refund`. Open **Board with your QR code** as well if you want the boarding steps.
3. Open **Contact** and tap **Copy 403-262-1000**. The prototype does not place the call.
4. Go back to **Profile**, then **Settings**.
5. Turn on **Dark mode**, then **Larger text**. Turn them off again if you want the original look.
6. Tap **Log out**, then **Log out** on the confirmation.
7. Tap **Log in**. Username: `river_rider`. Password: `demo1234`.
8. In **Settings**, **Change saved card** accepts only 4 digits. Leave it as `4242` unless you want later saved-card payments to decline (`0000`).

## Shortcuts a frequent rider can use

- **Show ticket** on Home opens the active ticket without going through Profile.
- **Home** and **Work** on Home and on Find a route fill a saved place. Edit them under **Profile → Saved places**. The defaults are Sunalta Station and University of Calgary.
- The saved Visa is selected at checkout, so the card number is not typed again.
