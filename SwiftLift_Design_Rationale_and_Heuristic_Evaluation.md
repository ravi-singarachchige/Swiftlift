# SwiftLift Part II — design rationale and heuristic evaluation

CPSC 481, Tutorial 07, Group 4
Ravindith Singarachchige, Cody Casselman, Tehreem Sajid, Jaisumer Sandhu, Zehra Zaidi

This note is written so it can be pasted into the final portfolio. It explains the changes made after Group 3’s heuristic evaluation of the horizontal prototype, then evaluates the revised interface.

## What changed, and why

Group 3’s two highest ratings were catastrophes. On Payment complete, a back arrow returned to an active Pay button, so a rider could buy the same ticket twice (F9, severity 4, error prevention). On refunds, the only status was “Pending,” with no date and no sense of whether anything was happening (F10, severity 4, visibility of system status). Both are fixed in the working prototype.

After a successful demo payment the screen is titled **Payment complete**. The back arrow is gone. The only exits are **Show ticket**, **Save demo receipt**, and **Done**. The order is cleared, so opening Buy Tickets again does not still show Pay for the same selection. Before the charge, a confirmation names the amount and the card. Cancel returns to the summary and keeps the tickets that were selected. A short “Processing payment…” state blocks a second tap. If the demo card is declined or the payment service does not answer, no ticket is created and the selection stays, with a message that says what to do next.

A refund is no longer a single word. Each request shows **Submitted**, **Approved**, and **Refunded**, with the date of each step that has happened and an expected date for each step that has not. The money is described as returning to the original card, and the copy says a refund is not instant. Sample requests are already on the Refunds tab so the three stages can be reviewed without waiting. A new request starts at Submitted. Once it is submitted, the ticket cannot be boarded and cannot be refunded again, and the confirmation screen has no back arrow into the review step.

The other peer findings were applied as follows.

| ID | Severity | Change in the prototype |
| --- | --- | --- |
| F9 | 4 | No back arrow after payment. Confirmation, then a processing state. A declined or timed-out card does not issue a ticket. |
| F10 | 4 | Refund tracker with dates and an expected completion date. |
| F6 | 3 | Home is a tab and is highlighted on Home. The current tab is highlighted on every section. |
| F5 | 3 | Buy uses a cart icon. Profile uses a person icon. The route icon stays on route screens. |
| F1 | 3 | Tickets and Profile open the same history. Refund sits on the unused ticket. |
| F7 | 3 | Help is on Profile, can be searched, and includes boarding, fares, refunds, routes, payment, and a phone number. |
| F16 | 2 | Find a route uses larger type, visible From and To labels, and a stacked layout so the fields fit a narrow phone. |
| F8 | 2 | Saved Visa is selected by default. A different card, Apple Pay, and Google Pay are explicit choices. The full card number is never typed. |
| F4 | 2 | Print route is gone. Save route keeps the trip. Copy route shares it. |
| F12 | 2 | Home and Work are saved places, editable, and available on Home and on Find a route. |
| F13 | 2 | Saving a route opens a trip notice, puts the trip on Home, and adds it to Notifications. |
| F2 | 1 | The label is Buy Tickets on the tab, the home card, the page title, and the route screen. |
| F3 | 1 | The boarding action is Show ticket, with a tip to hold the code to the scanner. |
| F11 | 1 | Dark mode is a switch in Settings. |
| F14 | 1 | Log in and Sign up are on Profile after Log out. The sample account is river_rider / demo1234. |
| F15 | 1 | Settings includes the saved card and Change saved card. |

Group 3 also asked whether the layout only worked on an iPhone 16. The route form is now a column, chips wrap, and the desktop frame can be set to Compact, Standard, or Large. On a narrow window the prototype fills the screen.

The colour palette and the card layout are unchanged. Group 3 said both were working, and they still match the Part I sketches.

## Design rationale

The people this interface is for have not changed since Part I. Liam already knows the route and is trying to pay and board before the bus leaves. Yuga does not know Calgary route numbers and needs to search by place, compare options, and recover when a route is delayed. Both of them are standing in public, often with one hand free, and a mistake sends them back to the clerk line the kiosk was meant to avoid.

That context is why the severity 4 fixes come before new features. A second charge is worse than a plain screen. A refund that only says Pending sends Liam to the counter, which is the failure the task was written to prevent. The tracker does not pretend the money has moved. It says which step has happened, which date is still expected, and which card will be credited. That is the status a rider can act on.

Liam’s other problem, from the Part I walkthrough, was that the ticket was buried under Profile. Show ticket is now on Home, and the ticket list is not a second, different history. Profile and Tickets open one list. Refund is on the unused ticket in that list, not in a separate profile-only screen. The boarding code itself is not the refund button, so a tap at the gate does not start a refund. The refund still has a review step.

Yuga’s route task needed larger type, labels that stay visible, and a way to avoid typing a full address. From and To are labeled. Suggestions appear from a short list of places, including Maxwell Soccer Centre and University of Calgary. Home and Work fill the destination in one tap. If the typed place is not in the sample list, the screen says so and shows a known sample route instead of failing silently. Option 1 is marked Fastest. Route 36 carries the same delay as the Home alert, so the network warning and the trip options are one story. Times are marked as samples. The course brief says not to depend on a paid live feed, and an unlabeled fake ETA would be a worse status problem than a clearly sample one.

Expert shortcuts sit beside the longer path, not instead of it. A new rider can still type a destination and pick a card. A frequent rider can show the ticket, reuse Home or Work, and pay with the saved Visa without retyping it. Apple Pay and Google Pay are labeled as demos of those wallets. They use the saved card. They are there because the peer review asked for them, and because Liam’s task is speed, not because the prototype talks to a real wallet.

Exits were checked against the same rule: leaving a step should not throw away work, and it should not repeat a charge. Back from the summary returns to the quantities. Switching tabs does not clear those quantities. Cancel on the pay confirmation stays on the summary. Clear trip and Log out both ask first. Payment complete and the refund confirmation do not offer a path back into the action that just finished.

Help is task-sized. Search for “refund,” “QR,” or “fare” opens steps for that job. The contact article gives 403-262-1000 and says the prototype cannot dial. The same topics are available from Settings, so help is not only on one screen.

## Heuristic evaluation of the revised interface

Evaluated on the working prototype, not on the earlier slides. Severity uses Nielsen’s scale: 0 is not a problem, 1 is cosmetic, 2 is minor, 3 is major, 4 must be fixed before release.

### H1 Visibility of system status

The current tab, the unread count, the processing state, the pay confirmation, and the refund tracker all report status. The current trip on Home tells Liam which journey was saved.

Residual problem. Delays and travel times are sample data. They are labeled “sample,” but a hurried rider can still read them as live (severity 2). A live feed is out of scope for this course prototype. The label has to stay visible, which it does on the alert, the route list, and the route detail.

### H2 Match between system and the real world

Show ticket, Buy Tickets, Home, and Work match what riders say. Icons match the sections. The boarding screen tells the rider to hold the code up, not to collect a paper ticket.

Residual problem. The interface is English only (severity 2). Yuga was defined in Part I as a visitor with limited English. Plain language, icons, and place suggestions reduce that load. A full translation was not added, because a half-translated interface would break the consistency this redesign just repaired. Language support is the main unfinished match to the original user description.

### H3 User control and freedom

Home is always a tab. Back is on in-progress screens. Pay and refund ask before they commit. Cancel does not drop the ticket selection. Log out and Clear trip ask first. After payment or a refund request, the dangerous back path is removed on purpose.

No further problem at severity 2 or above.

### H4 Consistency and standards

Buy Tickets is the same label everywhere it was previously split between “Buy Tickets” and “Purchase a Ticket.” There is one history. Route 2 and 36 on Home match the notification and the Route 36 option. Cards, red actions, and the bottom tabs are the same on every screen, including dark mode.

No further problem at severity 2 or above.

### H5 Error prevention

The duplicate-pay path is closed. Refund review states that the ticket cannot be used afterward. Passes are not offered for in-app refund. Quantity cannot go below zero, and the Continue button is disabled until a ticket is selected. The pay confirmation names the amount and the method.

No further problem at severity 2 or above.

### H6 Recognition rather than recall

Prices sit on the ticket types. The summary repeats the selection before payment. Saved places and the saved card are visible choices. The active ticket is on Home. Refund status is on the ticket in the history, not something the rider has to remember from a confirmation email.

No further problem at severity 2 or above.

### H7 Flexibility and efficiency of use

Show ticket, saved places, and the default saved card are the shortcuts for Liam. Suggestions shorten Yuga’s typing. Apple Pay and Google Pay are extra pay paths for people who expect them.

Residual problem. There is no search that covers the whole app, only Help and the route fields (severity 1). The main tasks are already one tap from the tab bar, so this is cosmetic.

### H8 Aesthetic and minimalist design

The red palette and the cards are the ones Group 3 asked to keep. Sample labels are short. Home now includes the alert, Show ticket, three tasks, and saved places. That is more than the original three tiles.

Residual problem. Home is busier than the horizontal prototype (severity 1). Each block is one of the peer fixes or the Part I boarding shortcut. Removing any of them puts back a problem that was rated higher than clutter.

### H9 Help users recognize, diagnose, and recover from errors

Empty destination: the message says to type a place or tap Home or Work. Unknown place: the message names the place, says there is no sample match, and shows a known route so the task can continue. Card •••• 0000: declined, nothing charged, use the saved Visa or another last-four. Card •••• 9999: the service did not respond, nothing charged, try again or use the saved card. Too many tickets: the limit of 20 is stated. Log in, sign up, email, and the saved card reject empty or malformed input and say what to type instead. The tone is direct. It does not blame the rider.

Residual problem. The prototype cannot show a real loss of network, only the 9999 case (severity 1).

### H10 Help and documentation

Help is on Profile and in Settings. It searches. Each article is a short list of steps. The contact number can be copied. The QR screen also has a one-line tip, so boarding help is on the boarding screen.

No further problem at severity 2 or above.

## Summary of the evaluation

The two severity 4 problems from the peer review are fixed, and the severity 3 problems (no Home tab, misleading icons, split history, no help) are fixed in the same pass. What remains is honest about the prototype. Times and delays are samples, and the interface is still English only. Those are the two issues worth another iteration. Neither one reopens the duplicate-payment or the “Pending” refund. For Liam, show ticket, the saved card, and a payment screen that cannot be paid twice are the parts that match a frequent rider in a hurry. For Yuga, labeled search, suggestions, saved places, and a delay that points at a specific option are the parts that match a visitor. The system would support those two tasks in a demo. It would not yet support them as a live Calgary Transit tool, because the schedule is not live and the language is not Yuga’s.

## What still needs improvement

1. Connect route times and delay notices to a real feed, and keep the “sample” label until that feed exists.
2. Add a language choice for the route task and the ticket names, with the whole screen in one language, not a mix.
3. If Home still feels crowded in the next walkthrough, move saved places to Find a route only. They are already repeated there. They stay on Home for now because the peer review asked for fewer repeated addresses, and Home is where Liam starts.

## Video figure

The prototype is the system to record. A 5–8 minute video should, in order: say who Liam and Yuga are; show Home, including the highlighted Home tab and Show ticket; plan a route to Maxwell Soccer Centre and save it; buy an adult ticket, first with last-four 0000 and then with the saved Visa; show the ticket; open Refunds and submit the August 24 refund; search Help; turn on dark mode; and close with the two remaining issues above (sample times, English only). Every team member should be heard or seen in that recording.
