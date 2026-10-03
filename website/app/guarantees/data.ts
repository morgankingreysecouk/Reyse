export type Guarantee = {
  title: string;
  promise: string;
  context: string;
  example: string;
  measured?: string;
  terms: string[];
};

export const guarantees: Guarantee[] = [
  {
    title: "The Delivery Guarantee",
    promise:
      "Your site opened up to AI tools and your business details coded in for Google and AI within 5 working days of onboarding. If we're late, we pay you for every extra working day.",
    context:
      "This covers the first thing you're trusting us with: that we'll start on time without you having to chase. Plenty of agents have paid a marketing company, sat through an onboarding call and then heard nothing for weeks. This makes that cost us money, so it doesn't happen.",
    example:
      "Your onboarding finishes on a Monday. By the following Monday, two things are done. AI tools like ChatGPT can read your website, which a lot of sites block by accident. And the behind-the-scenes code that tells Google and AI tools exactly who you are, what you do and where you are (known as schema and an llm.txt file) is in place. If either isn't done, we pay you for each working day it takes after that, without you having to ask.",
    measured:
      "We confirm the date and time your onboarding finished in writing, by email or WhatsApp, so there's no doubt about when the 5 days start.",
    terms: [
      "On Done For You, we make these changes ourselves and they're live within the 5 days. On Done With You, your developer installs them, so the guarantee is that you'll have every fix and every piece of code, ready to install, within the 5 days.",
      "The 5 days start once you've given us the access we need, which we always keep to the minimum (see the No Overreach Guarantee). If we're waiting on access, the clock pauses until we have it, and we'll tell you if that's happening.",
      "Some website platforms don't let anyone add this code directly, so changes have to go through the company that runs your site. If yours works that way, we'll tell you at onboarding and agree a realistic date with you before the clock starts.",
      "Done means you can check it yourself. We'll show you how, using the same free tools we cover in our free SEO course, so you don't have to take our word for it.",
      "We pay a set amount for each late working day, agreed with you in writing at onboarding. It's paid to you directly, not as a credit, unless you'd rather have a credit.",
    ],
  },
  {
    title: "The Growth Guarantee",
    promise:
      "Give us honest starting figures for your phone and website enquiries. If you haven't won at least one extra client within 3 months, we pay for a month of your Google or Meta ads.",
    context:
      "The whole point of this is a busier business, not nicer reports. Phone calls and website enquiries behave differently and get missed in different ways, so we track them separately from day one. If 3 months of work hasn't brought you at least one extra client, we don't think you should carry that risk on your own.",
    example:
      "At onboarding, you tell us how many enquiries you get in a typical month, split between phone calls and your website, and roughly how many of those turn into new instructions. We set up a dedicated tracked phone number and tracking on your website's enquiry forms, so every real lead gets counted rather than guessed. If after 3 full months you haven't won at least one more instruction through those channels than your starting figures would predict, we pay for the next month of your Google or Meta advertising. That's real money spent on your business, at no cost to you.",
    measured:
      "Against the starting figures you give us at onboarding: calls to the tracked number, enquiries through the tracked website forms, and the instructions that come from them.",
    terms: [
      "We set up the call and enquiry tracking this needs, on either plan, and it has to be running for the full 3 months. If it wasn't, the 3 months start again once it is.",
      "The tracked number is set up so it doesn't clash with the phone number listed for you elsewhere online. Google checks that your details match everywhere, and we won't put that at risk just to measure a guarantee.",
      "An extra client means a new instruction won through a tracked call or website enquiry during the 3 months, on top of what your starting figures would predict.",
      "We agree the ad budget with you in advance, set at a sensible level for a business your size.",
      "It applies once, based on your starting figures. If you set new starting figures later, for a new branch for example, a new 3 months applies to those.",
      "The property market has quiet seasons. We'll agree at onboarding how those are allowed for, so the comparison is fair both ways.",
    ],
  },
  {
    title: "The No Lock-In Guarantee",
    promise: "No minimum term. Leave whenever you like, with no exit fee.",
    context:
      "A lot of agencies tie you into a 6 or 12-month contract because results take time and they want paying either way. We'd rather keep you because the work is good. If it isn't, you shouldn't be stuck with us.",
    example:
      "You join in March. In May you decide it's not for you, for whatever reason. There's no minimum term to see out, no exit fee and no sales call trying to change your mind. We wrap things up properly and hand back full control of everything we set up.",
    terms: [
      "This applies from day one, on both Done With You and Done For You. No minimum term, no notice-period penalty and no exit fee.",
      "Anything we set up in your name stays yours when you leave, like your Google Business Profile and the code on your website. We don't hold anything back.",
      "What stops is our work. Anything we were running for you, like the automated posts on your business profiles, will need someone else to run it, or it will stop.",
    ],
  },
  {
    title: "The Visibility Guarantee",
    promise:
      "If you're not showing up in at least one AI tool's answers within 3 months, we pay for a professional photo shoot of your next listing.",
    context:
      "AI search is the newest and least understood part of what we do, so it's where you most need us to have something on the line. We chose a photo shoot because it's something every agent pays for anyway, so it's worth real money to you.",
    example:
      "At onboarding, we ask ChatGPT, Gemini, Copilot and Siri a set of questions a real buyer or seller in your area would ask, like \"Who's the best estate agent in [your town]?\" We record exactly what comes back, including if you're not mentioned at all. After 3 months, we ask the same questions again. If your agency still isn't named in any of the answers, we book and pay for a professional photographer for your next listing.",
    measured:
      "Against the same set of questions agreed at onboarding, asked again at 3 months, so nobody can pick a flattering question after the fact. AI tools give a slightly different answer each time, so we ask each question several times on each platform and save every answer for you to see.",
    terms: [
      "It depends on the AI groundwork being in place: the content rewrites and the code that helps AI understand your business. On Done For You, we do that ourselves. On Done With You, it depends on your developer installing what we've given you, and we'll check it's been done.",
      "\"Showing up\" means your agency is named or clearly recommended in an answer to at least one of the agreed questions, not just that your website is being read somewhere in the background.",
      "\"Next listing\" means the next property you take on after the 3 months, so the shoot is always for something new, not a property that's already been photographed or is under offer.",
      "AI tools change how they work without warning. If one changes in the middle of a test in a way that affects the result, we'll run the test again and show you both sets of answers.",
    ],
  },
  {
    title: "The Transparency Guarantee",
    promise: "A written update every week for your first 8 weeks. If we miss one, we pay you £50 that day.",
    context:
      "The early weeks, before results show, are when trust usually breaks down. Silence starts to look like nothing's happening. This makes silence cost us money, so we have every reason to keep you updated.",
    example:
      "Your onboarding finishes on a Friday. Every Friday for the next 8 weeks, you get a written update in plain English: what we've done, what's changed and what's next. If a Friday passes without one, we pay you £50 the same day, without you having to ask.",
    terms: [
      "This covers your first 8 weeks, when results are hardest to see. After that, Done For You clients get a monthly report instead.",
      "An update counts once it's sent, in whichever format you chose at onboarding: WhatsApp, email or your dashboard. You don't need to have read it.",
      "If a Friday is a bank holiday, the update comes the next working day. We'll tell you in advance, and it doesn't count as a miss.",
    ],
  },
  {
    title: "The Charity Flip Guarantee",
    promise:
      "Miss any guarantee and we also donate to the charity you chose when you joined, on top of whatever that guarantee already pays out.",
    context:
      "You pick a charity when you join us. If we fall short on anything on this page, we donate to it. It's a second consequence for us, separate from what we pay you, and it goes to a cause you care about. While Reyse is free, it's the same charity you gave to when you joined, so this flips it round: this time, we're the ones giving.",
    example:
      "Say we miss the 5-day deadline in the Delivery Guarantee. You're paid for the late days, and we also make a donation to your charity. One doesn't replace the other. Both happen.",
    terms: [
      "It's always on top of the other guarantee's payout. It never replaces it.",
      "You choose the charity when you join, and it stays the same while you're with us.",
      "We tell you the donation amount at onboarding, so you know exactly what it is before it's ever needed.",
      "You'll get proof of every donation we make.",
    ],
  },
  {
    title: "The No Overreach Guarantee",
    promise: "We only ask for the access we need, and we explain why before we ask.",
    context:
      "Handing your logins to a company you've just met is one of the most uncomfortable parts of starting with anyone new, and it's a big reason agents put off getting started. So we keep what we ask for to the minimum.",
    example:
      "If we only need to see how your website is performing, we ask for view-only access to your Google Analytics, not full admin rights to everything just in case. And before we ask for any access at all, we tell you exactly what it's for and what it lets us do.",
    terms: [
      "This applies for as long as you're with us. If new work needs new access later, we explain it first, the same way.",
      "When we no longer need access for active work, we remove ourselves and let you know, so you can check.",
      "If you're ever unsure why we've asked for something, ask us to explain it again before you give it.",
    ],
  },
  {
    title: "The No Surprise Changes Guarantee",
    promise: "Nothing we change goes live on your website or profiles until you've said yes.",
    context:
      "You've got a business to run while this work happens in the background. The last thing you need is to find your website or Google profile looking different because we changed something without telling you.",
    example:
      "Say we want to change the title your homepage shows in Google results, to help it rank. We show you the exact new wording first, and it only goes live once you've said yes.",
    terms: [
      "This mainly matters on Done For You, where we make changes for you. It covers anything the public can see: your website's wording, the code behind it, your business profile details and your listing descriptions.",
      "The one exception is anything you've agreed at onboarding to automate, like the regular posts on your business profiles. Even then, we show you what it will post before it starts.",
      "Saying yes can be as simple as a WhatsApp message. No forms.",
    ],
  },
  {
    title: "The No Jargon Guarantee",
    promise: "Every report in plain English, with every technical term explained.",
    context:
      "This industry hides behind jargon, which makes it hard to tell whether anything is being done. Our free courses are written to cut through that, and we hold our own reports to the same standard.",
    example:
      "If a report mentions \"schema markup\" or \"canonical tags\", it explains what they are in the same sentence, in everyday language. You shouldn't need to look up a word to understand the work being done for you.",
    terms: [
      "If anything in a report still isn't clear, tell us and we'll rewrite that part in whatever way makes sense to you, as many times as you need.",
      "It applies to everything: written reports, dashboard summaries and anything we discuss on a call.",
    ],
  },
  {
    title: "The No Copy-Paste Strategy Guarantee",
    promise: "No generic templates. Everything is built for your business.",
    context:
      "A lot of SEO sold to small businesses is the same checklist applied to a plumber, a dentist and an estate agent, with the name swapped. Property has its own quirks, like the same home appearing on several portals, stock that changes every week and local market data, and a generic plan doesn't allow for any of them.",
    example:
      "Your structured data, your local area pages and your content review are all based on your actual listings, your towns and your competitors, not a \"local business\" package borrowed from another industry.",
    terms: [
      "This one has no conditions. It's how we work with everyone.",
      "If anything we deliver ever looks templated to you, tell us. We'll show you how it was built for you, or redo it if it wasn't.",
    ],
  },
  {
    title: "The No Competitor Access Guarantee",
    promise: "One agency per area. While you're with us, your competitors can't buy this.",
    context:
      "Everything else on this page is worth less if the agency down the road can get exactly the same help from us six months later. This makes sure they can't.",
    example:
      "If you're our client in your town, we won't take on a competing estate or letting agency in the same area while you're with us. Not for a trial, not for a one-off audit, and not under a different name.",
    terms: [
      "It lasts for as long as you're a client.",
      "We agree your area with you at onboarding, based on where you actually operate and compete, rather than a radius drawn on a map.",
      "If you leave, your area opens up again after a reasonable notice period, and we'll tell you before it does.",
    ],
  },
];
