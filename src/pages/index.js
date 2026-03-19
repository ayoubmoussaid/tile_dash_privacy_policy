import * as React from "react"

const pageStyles = {
  color: "#232129",
  padding: "96px 24px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  maxWidth: "800px",
  margin: "0 auto",
  lineHeight: "1.6",
}

const headingStyles = {
  marginTop: "48px",
  marginBottom: "24px",
  fontSize: "32px",
  fontWeight: "bold",
}

const subheadingStyles = {
  marginTop: "32px",
  marginBottom: "16px",
  fontSize: "24px",
  fontWeight: "600",
}

const h3Styles = {
  ...subheadingStyles,
  fontSize: "20px",
}

const paragraphStyles = {
  marginBottom: "16px",
}

const linkStyles = {
  color: "#1976d2",
  wordBreak: "break-all",
}

const tableStyles = {
  width: "100%",
  borderCollapse: "collapse",
  marginBottom: "24px",
  fontSize: "14px",
}

const thStyles = {
  border: "1px solid #ddd",
  padding: "10px 12px",
  textAlign: "left",
  backgroundColor: "#f5f5f5",
  fontWeight: "600",
}

const tdStyles = {
  border: "1px solid #ddd",
  padding: "10px 12px",
  textAlign: "left",
}

const hrStyles = {
  border: "none",
  borderTop: "1px solid #ddd",
  margin: "40px 0",
}

const IndexPage = () => {
  return (
    <main style={pageStyles}>

      <h1 style={headingStyles}>Privacy Policy</h1>
      <p style={paragraphStyles}><strong>Tile Dash</strong></p>
      <p style={paragraphStyles}>Last updated: March 19, 2026</p>

      <h2 style={subheadingStyles}>Introduction</h2>
      <p style={paragraphStyles}>
        This Privacy Policy explains how Tile Dash ("the App", "we", "us", or "our") collects,
        uses, and protects your information when you use our mobile application. By using the App,
        you agree to the collection and use of information as described in this policy.
      </p>

      <h2 style={subheadingStyles}>Information We Collect</h2>

      <h3 style={h3Styles}>1. Anonymous Authentication</h3>
      <p style={paragraphStyles}>
        When you first open the App, we create an anonymous account using Firebase Authentication.
        This generates a unique user identifier (UID) that is not linked to your real identity,
        email address, phone number, or any other personal information. No sign-up or login is required.
      </p>

      <h3 style={h3Styles}>2. Display Name</h3>
      <p style={paragraphStyles}>
        If you participate in the leaderboard, a randomly generated display name
        (e.g., "Neon Fox #4821") is assigned to you. You may choose to change this display name.
        Display names are stored in Google Firebase Firestore and are visible to other users on
        the leaderboard.
      </p>

      <h3 style={h3Styles}>3. Leaderboard Data</h3>
      <p style={paragraphStyles}>
        When you submit a score to the leaderboard, the following data is stored in Firebase Firestore:
      </p>
      <ul>
        <li style={paragraphStyles}>Your anonymous user ID</li>
        <li style={paragraphStyles}>Your display name</li>
        <li style={paragraphStyles}>Your highest score per game mode</li>
        <li style={paragraphStyles}>A timestamp of when the score was submitted</li>
      </ul>
      <p style={paragraphStyles}>
        Only your personal best score per game mode is retained. This data is visible to other
        users via the in-app leaderboard.
      </p>

      <h3 style={h3Styles}>4. Analytics Data</h3>
      <p style={paragraphStyles}>
        We use Firebase Analytics to collect anonymous usage data to help us improve the App.
        This includes:
      </p>
      <ul>
        <li style={paragraphStyles}>Game events (game starts, game overs, level completions)</li>
        <li style={paragraphStyles}>In-game economy events (item purchases using in-game currency, ad views)</li>
        <li style={paragraphStyles}>General app usage patterns (screen views, session duration)</li>
      </ul>
      <p style={paragraphStyles}>
        This data is aggregated and anonymous. It is not linked to your real-world identity.
      </p>

      <h3 style={h3Styles}>5. Crash Reports</h3>
      <p style={paragraphStyles}>
        We use Firebase Crashlytics to collect anonymous crash reports when the App encounters
        an error. These reports include technical information about your device and the state of
        the App at the time of the crash. This data is used solely to identify and fix bugs.
      </p>

      <h3 style={h3Styles}>6. Advertising</h3>
      <p style={paragraphStyles}>
        The App displays ads provided by Google AdMob. Google AdMob may collect and use data as
        described in{" "}
        <a
          href="https://policies.google.com/privacy"
          style={linkStyles}
          target="_blank"
          rel="noopener noreferrer"
        >
          Google's Privacy Policy
        </a>
        . This may include:
      </p>
      <ul>
        <li style={paragraphStyles}>Device identifiers (e.g., advertising ID)</li>
        <li style={paragraphStyles}>IP address</li>
        <li style={paragraphStyles}>General location data (not precise location)</li>
        <li style={paragraphStyles}>App usage data relevant to ad serving</li>
      </ul>
      <p style={paragraphStyles}>
        You may be shown personalized or non-personalized ads depending on your device settings
        and consent choices. You can manage your ad preferences through your device's settings
        under "Google" &gt; "Ads".
      </p>

      <h3 style={h3Styles}>7. Local Data</h3>
      <p style={paragraphStyles}>
        The App stores preferences and game progress locally on your device using SharedPreferences.
        This includes:
      </p>
      <ul>
        <li style={paragraphStyles}>High scores and in-game currency</li>
        <li style={paragraphStyles}>Unlocked items (music tracks, trails)</li>
        <li style={paragraphStyles}>Settings (sound, music, vibration preferences)</li>
        <li style={paragraphStyles}>Tutorial completion state</li>
      </ul>
      <p style={paragraphStyles}>
        This data never leaves your device unless you submit a score to the leaderboard.
      </p>

      <h2 style={subheadingStyles}>How We Use Your Information</h2>
      <p style={paragraphStyles}>We use the collected information to:</p>
      <ul>
        <li style={paragraphStyles}>Provide and maintain the leaderboard functionality</li>
        <li style={paragraphStyles}>Display advertisements to support the free App</li>
        <li style={paragraphStyles}>Analyze anonymous usage patterns to improve the App</li>
        <li style={paragraphStyles}>Diagnose and fix crashes and technical issues</li>
      </ul>

      <h2 style={subheadingStyles}>Data Sharing</h2>
      <p style={paragraphStyles}>
        We do not sell your personal information. Data is shared only with the following
        third-party services that are essential to the App's functionality:
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
            <td style={tdStyles}>Firebase Authentication</td>
            <td style={tdStyles}>Google</td>
            <td style={tdStyles}>Anonymous user accounts</td>
          </tr>
          <tr>
            <td style={tdStyles}>Firebase Firestore</td>
            <td style={tdStyles}>Google</td>
            <td style={tdStyles}>Leaderboard data storage</td>
          </tr>
          <tr>
            <td style={tdStyles}>Firebase Analytics</td>
            <td style={tdStyles}>Google</td>
            <td style={tdStyles}>Anonymous usage analytics</td>
          </tr>
          <tr>
            <td style={tdStyles}>Firebase Crashlytics</td>
            <td style={tdStyles}>Google</td>
            <td style={tdStyles}>Crash reporting</td>
          </tr>
          <tr>
            <td style={tdStyles}>Google AdMob</td>
            <td style={tdStyles}>Google</td>
            <td style={tdStyles}>Advertising</td>
          </tr>
        </tbody>
      </table>
      <p style={paragraphStyles}>
        These services are governed by{" "}
        <a
          href="https://policies.google.com/privacy"
          style={linkStyles}
          target="_blank"
          rel="noopener noreferrer"
        >
          Google's Privacy Policy
        </a>
        .
      </p>

      <h2 style={subheadingStyles}>Data Retention</h2>
      <ul>
        <li style={paragraphStyles}>
          <strong>Leaderboard data</strong> is retained indefinitely unless you request its deletion.
        </li>
        <li style={paragraphStyles}>
          <strong>Analytics and crash data</strong> is retained according to Firebase's default
          retention policies (typically 14 months for analytics, 90 days for crash data).
        </li>
        <li style={paragraphStyles}>
          <strong>Local data</strong> persists on your device until you uninstall the App or
          clear its data.
        </li>
      </ul>

      <h2 style={subheadingStyles}>Children's Privacy</h2>
      <p style={paragraphStyles}>
        The App does not knowingly collect personal information from children under the age of 13.
        The App uses anonymous authentication only and does not require any personal information
        to use. If you believe a child has provided personal information through the App, please
        contact us so we can take appropriate action.
      </p>

      <h2 style={subheadingStyles}>Your Rights</h2>
      <p style={paragraphStyles}>You have the right to:</p>
      <ul>
        <li style={paragraphStyles}>
          <strong>Request deletion</strong> of your leaderboard data by contacting us at the
          email below
        </li>
        <li style={paragraphStyles}>
          <strong>Reset your anonymous account</strong> by clearing the App's data or
          reinstalling the App
        </li>
        <li style={paragraphStyles}>
          <strong>Opt out of personalized advertising</strong> through your Android device
          settings under "Google" &gt; "Ads"
        </li>
      </ul>

      <h2 style={subheadingStyles}>Security</h2>
      <p style={paragraphStyles}>
        We take reasonable measures to protect the data associated with the App. All communication
        with Firebase services is encrypted in transit. However, no method of electronic storage
        or transmission is 100% secure.
      </p>

      <h2 style={subheadingStyles}>Changes to This Privacy Policy</h2>
      <p style={paragraphStyles}>
        We may update this Privacy Policy from time to time. Any changes will be reflected by an
        updated "Last updated" date at the top of this page. Continued use of the App after
        changes constitutes acceptance of the revised policy.
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
        This privacy policy applies to the Tile Dash Android application published by RainmanDev.
      </p>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Privacy Policy - Tile Dash</title>
