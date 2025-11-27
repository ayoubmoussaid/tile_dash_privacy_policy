import * as React from "react"

const pageStyles = {
  color: "#232129",
  padding: "96px",
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

const paragraphStyles = {
  marginBottom: "16px",
}

const linkStyles = {
  color: "#1976d2",
  wordBreak: "break-all",
}

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Privacy Policy - Tile Dash</title>
      
      <h1 style={headingStyles}>Privacy Policy for Tile Dash</h1>
      <p style={paragraphStyles}><strong>Last updated: 27 November 2025</strong></p>
      
      <p style={paragraphStyles}>
        This Privacy Policy describes Our policies and procedures on the collection, use and disclosure 
        of Your information when You use the Service and tells You about Your privacy rights and how the 
        law protects You.
      </p>

      <h2 style={subheadingStyles}>Interpretation and Definitions</h2>
      <ul>
        <li style={paragraphStyles}>
          <strong>Account</strong> means a unique account created for You to access our Service or parts 
          of our Service.
        </li>
        <li style={paragraphStyles}>
          <strong>Application</strong> means the software program provided by the Company downloaded by 
          You on any electronic device, named Tile Dash.
        </li>
        <li style={paragraphStyles}>
          <strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this 
          Agreement) refers to the developer of Tile Dash.
        </li>
        <li style={paragraphStyles}>
          <strong>Service</strong> refers to the Application.
        </li>
        <li style={paragraphStyles}>
          <strong>You</strong> means the individual accessing or using the Service, or the company, or 
          other legal entity on behalf of which such individual is accessing or using the Service, as 
          applicable.
        </li>
      </ul>

      <h2 style={subheadingStyles}>Collecting and Using Your Personal Data</h2>
      
      <h3 style={{...subheadingStyles, fontSize: "20px"}}>Types of Data Collected</h3>
      
      <h4 style={{...subheadingStyles, fontSize: "18px"}}>Personal Data</h4>
      <p style={paragraphStyles}>
        While using Our Service, We may ask You to provide Us with certain personally identifiable 
        information that can be used to contact or identify You.
      </p>

      <h4 style={{...subheadingStyles, fontSize: "18px"}}>Usage Data</h4>
      <p style={paragraphStyles}>
        Usage Data is collected automatically when using the Service. This may include information such 
        as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the 
        pages of our Service that You visit, the time and date of Your visit, the time spent on those 
        pages, unique device identifiers and other diagnostic data.
      </p>

      <h4 style={{...subheadingStyles, fontSize: "18px"}}>Advertising</h4>
      <p style={paragraphStyles}>
        We use AdMob by Google to display advertisements in our Application. AdMob may use cookies and 
        other tracking technologies to serve ads based on your prior visits to our App or other websites.
      </p>
      <p style={paragraphStyles}>
        <strong>Google AdMob:</strong> You can learn more about how Google uses the collected information 
        here:{" "}
        <a 
          href="https://policies.google.com/technologies/partner-sites" 
          style={linkStyles}
          target="_blank"
          rel="noopener noreferrer"
        >
          https://policies.google.com/technologies/partner-sites
        </a>
      </p>

      <h2 style={subheadingStyles}>Disclosure of Your Personal Data</h2>
      <p style={paragraphStyles}>
        We may disclose Your personal information in the following situations:
      </p>
      <ul>
        <li style={paragraphStyles}>
          <strong>With Service Providers:</strong> We may share Your personal information with Service 
          Providers to monitor and analyze the use of our Service, to show advertisements to You to 
          support and maintain Our Service.
        </li>
        <li style={paragraphStyles}>
          <strong>For Business Transfers:</strong> We may share or transfer Your personal information in 
          connection with, or during negotiations of, any merger, sale of Company assets, financing, or 
          acquisition of all or a portion of Our business to another company.
        </li>
      </ul>

      <h2 style={subheadingStyles}>Security of Your Personal Data</h2>
      <p style={paragraphStyles}>
        The security of Your Personal Data is important to Us, but remember that no method of transmission 
        over the Internet, or method of electronic storage is 100% secure. While We strive to use 
        commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute 
        security.
      </p>

      <h2 style={subheadingStyles}>Contact Us</h2>
      <p style={paragraphStyles}>
        If you have any questions about this Privacy Policy, You can contact us:
      </p>
      <p style={paragraphStyles}>
        By email:{" "}
        <a href="mailto:quotes.vault@outlook.com" style={linkStyles}>
          quotes.vault@outlook.com
        </a>
      </p>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Privacy Policy - Tile Dash</title>
