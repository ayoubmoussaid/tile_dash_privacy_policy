import * as React from "react"

import {
  pageStyles,
  headingStyles,
  subheadingStyles,
  h3Styles,
  paragraphStyles,
  linkStyles,
  tableStyles,
  thStyles,
  tdStyles,
  hrStyles,
} from "../styles/policy"

const ExternalLink = ({ href, children }) => (
  <a href={href} style={linkStyles} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
)

const SnapfallPage = () => {
  return (
    <main style={pageStyles}>

      <h1 style={headingStyles}>Privacy Policy</h1>
      <p style={paragraphStyles}><strong>Snapfall</strong></p>
      <p style={paragraphStyles}>Last updated: October 27, 2026</p>

      <h2 style={subheadingStyles}>Introduction</h2>
      <p style={paragraphStyles}>
        This Privacy Policy explains how Snapfall ("the App", "we", "us", or "our") handles
        information when you use our mobile game. Snapfall has no accounts of its own and does
        not send your game data to us. The only services that receive data are Google AdMob,
        which shows ads, and Google Play Games Services, which runs the optional leaderboards.
        By using the App, you agree to the practices described in this policy.
      </p>

      <h2 style={subheadingStyles}>Information We Collect</h2>

      <h3 style={h3Styles}>1. Data Stored on Your Device</h3>
      <p style={paragraphStyles}>
        To let you continue a game and keep your progress, the App saves the following locally
        on your device:
      </p>
      <ul>
        <li style={paragraphStyles}>Your current game, so you can continue where you left off</li>
        <li style={paragraphStyles}>Best scores and game statistics</li>
        <li style={paragraphStyles}>Daily challenge results and level stars</li>
        <li style={paragraphStyles}>
          Settings (music, sound effects, volume, vibration, reduced motion, board skin) and
          tutorial progress
        </li>
      </ul>
      <p style={paragraphStyles}>
        This data is not sent to us. It stays on your device until you uninstall the App or
        clear its data. Android's own backup service may copy it according to your device's
        backup settings.
      </p>

      <h3 style={h3Styles}>2. Leaderboards (Google Play Games Services)</h3>
      <p style={paragraphStyles}>
        The App offers online leaderboards through Google Play Games Services. Using them is
        optional: the game works fully without signing in. If you are signed in to Play Games,
        the following is shared with Google:
      </p>
      <ul>
        <li style={paragraphStyles}>Your Play Games profile (gamer name and avatar)</li>
        <li style={paragraphStyles}>
          The scores you achieve in Classic mode and in the Daily challenge
        </li>
      </ul>
      <p style={paragraphStyles}>
        Your gamer name and scores are visible to other players on the leaderboards. Play Games
        profiles and leaderboard data are managed by Google under{" "}
        <ExternalLink href="https://policies.google.com/privacy">
          Google's Privacy Policy
        </ExternalLink>
        . You can change your gamer name, profile visibility, or delete your Play Games data in
        the Google Play Games app or your Google Account settings.
      </p>

      <h3 style={h3Styles}>3. Advertising (Google AdMob)</h3>
      <p style={paragraphStyles}>
        The App is free and shows ads provided by Google AdMob: occasional ads between Classic
        games, and optional rewarded videos that you choose to watch for an in-game bonus (for
        example, extra moves). To show and measure ads and to prevent fraud, Google AdMob may
        collect and use:
      </p>
      <ul>
        <li style={paragraphStyles}>Device identifiers (e.g., advertising ID)</li>
        <li style={paragraphStyles}>IP address</li>
        <li style={paragraphStyles}>General location data derived from your IP address (not precise location)</li>
        <li style={paragraphStyles}>Interactions with ads and app usage data relevant to ad serving</li>
      </ul>
      <p style={paragraphStyles}>
        In the European Economic Area, the United Kingdom, and Switzerland, the App asks for your
        consent through Google's consent form before personalized ads are shown. You can change
        your choice at any time in the App under Settings &gt; About &gt; Ad privacy choices.
        Elsewhere, you can manage ad personalization in your device's settings under
        "Google" &gt; "Ads", where you can also reset or delete your advertising ID. Ads in the
        App are limited to content rated suitable for general audiences with parental guidance
        (PG). Learn more about{" "}
        <ExternalLink href="https://policies.google.com/technologies/partner-sites">
          how Google uses information from apps that use its services
        </ExternalLink>
        .
      </p>

      <h3 style={h3Styles}>4. What We Do Not Collect</h3>
      <p style={paragraphStyles}>
        The App does not ask for your name, email address, phone number, contacts, photos, or
        precise location. It does not include analytics or crash-reporting services, and we do
        not operate any server that receives your data.
      </p>

      <h2 style={subheadingStyles}>How Information Is Used</h2>
      <ul>
        <li style={paragraphStyles}>To save your progress and settings on your device</li>
        <li style={paragraphStyles}>To show leaderboards, if you use Play Games</li>
        <li style={paragraphStyles}>To display advertisements that keep the App free</li>
      </ul>

      <h2 style={subheadingStyles}>Data Sharing</h2>
      <p style={paragraphStyles}>
        We do not sell your personal information. Data is shared only with the following
        third-party services that the App relies on:
      </p>
      <table style={tableStyles}>
        <thead>
          <tr>
            <th style={thStyles}>Service</th>
            <th style={thStyles}>Provider</th>
            <th style={thStyles}>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyles}>Google AdMob</td>
            <td style={tdStyles}>Google</td>
            <td style={tdStyles}>Advertising and ad consent</td>
          </tr>
          <tr>
            <td style={tdStyles}>Google Play Games Services</td>
            <td style={tdStyles}>Google</td>
            <td style={tdStyles}>Optional sign-in and leaderboards</td>
          </tr>
        </tbody>
      </table>
      <p style={paragraphStyles}>
        These services are governed by{" "}
        <ExternalLink href="https://policies.google.com/privacy">
          Google's Privacy Policy
        </ExternalLink>
        .
      </p>

      <h2 style={subheadingStyles}>Data Retention</h2>
      <ul>
        <li style={paragraphStyles}>
          <strong>Local data</strong> persists on your device until you uninstall the App or
          clear its data.
        </li>
        <li style={paragraphStyles}>
          <strong>Leaderboard scores and Play Games profile data</strong> are kept by Google
          according to its policies, until you delete them through Google Play Games or your
          Google Account.
        </li>
        <li style={paragraphStyles}>
          <strong>Advertising data</strong> is retained by Google according to its policies.
        </li>
      </ul>

      <h2 style={subheadingStyles}>Children's Privacy</h2>
      <p style={paragraphStyles}>
        The App is not directed at children under the age of 13, and we do not knowingly collect
        personal information from children. If you believe a child has provided personal
        information through the App, please contact us so we can take appropriate action.
      </p>

      <h2 style={subheadingStyles}>Your Rights</h2>
      <p style={paragraphStyles}>You can:</p>
      <ul>
        <li style={paragraphStyles}>
          <strong>Delete your game data</strong> by clearing the App's data or uninstalling it
        </li>
        <li style={paragraphStyles}>
          <strong>Stop sharing scores</strong> by signing out of Google Play Games, and delete
          your Play Games data from the Play Games app or your Google Account
        </li>
        <li style={paragraphStyles}>
          <strong>Change ad consent</strong> in the App under Settings &gt; About &gt; Ad privacy
          choices (where applicable), or opt out of personalized ads in your device settings
          under "Google" &gt; "Ads"
        </li>
      </ul>

      <h2 style={subheadingStyles}>Security</h2>
      <p style={paragraphStyles}>
        Your game data is stored on your device. Communication between the App and Google's
        services is encrypted in transit. However, no method of electronic storage or
        transmission is 100% secure.
      </p>

      <h2 style={subheadingStyles}>Changes to This Privacy Policy</h2>
      <p style={paragraphStyles}>
        We may update this Privacy Policy from time to time, for example if the App starts using
        a new service. Any changes will be reflected by an updated "Last updated" date at the
        top of this page, before the version of the App they apply to is released.
      </p>

      <h2 style={subheadingStyles}>Contact Us</h2>
      <p style={paragraphStyles}>
        If you have any questions or concerns about this Privacy Policy, please contact us at:
      </p>
      <p style={paragraphStyles}>
        <strong>Email:</strong>{" "}
        <a href="mailto:quotes.vault@outlook.com" style={linkStyles}>
          quotes.vault@outlook.com
        </a>
      </p>

      <hr style={hrStyles} />

      <p style={{...paragraphStyles, fontStyle: "italic", color: "#666"}}>
        This privacy policy applies to the Snapfall Android application published by RainmanDev.
      </p>
    </main>
  )
}

export default SnapfallPage

export const Head = () => <title>Privacy Policy - Snapfall</title>
