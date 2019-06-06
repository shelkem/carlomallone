import Head from 'next/head'
import Style from './style'

export default ({ children, title = 'Full-Stack Web + Blockchain Development | Carlo Mallone' }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel='stylesheet' href='/stylesheets/style.css' />
      <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900|Judson:400,700" rel="stylesheet" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/all.css" integrity="sha384-3AB7yXWz4OeoZcPbieVW64vVXEwADiYyAEhwilzWsLw+9FgqpyjjStpPnpBO8o8S" crossorigin="anonymous" />

      <meta name="description" content="I am an Italian Senior Software Engineer, born November 26th, 1983. I have 7 years of experience in both back-end and front-end web development. I am a team player and love to write good code that can make a difference. I am goal driven, detail oriented employee, always trying to put the users first. I like to be involved in both the technical and business side of the projects I join, to better understand its needs and opportunities, and deliver the best work possible." />
      <meta name="keywords" content="Carlo Mallone, Software Engineer, Web Developer, Ruby On Rails, Redux, Redux-Sagas, React.js, CSS, HTML, Solidity, Blockchain" />

      <meta name="author" content="Full-Stack Web + Blockchain Development | Carlo Mallone" />
      <meta name="copyright" content="" />
      <meta name="application-name" content="Carlo Mallone Website" />

      <meta property="og:title" content="Full-Stack Web + Blockchain Development | Carlo Mallone" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://d2ffutrenqvap3.cloudfront.net/items/0m2H2V1u462N360U0H2d/ogcm.png" />
      <meta property="og:url" content="http://www.carlomallone.com" />
      <meta property="og:description" content="I am an Italian Senior Software Engineer, born November 26th, 1983. I have 7 years of experience in both back-end and front-end web development. I am a team player and love to write good code that can make a difference. I am goal driven, detail oriented employee, always trying to put the users first. I like to be involved in both the technical and business side of the projects I join, to better understand its needs and opportunities, and deliver the best work possible." />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Full-Stack Web + Blockchain Development | Carlo Mallone" />
      <meta name="twitter:description" content="I am an Italian Senior Software Engineer, born November 26th, 1983. I have 7 years of experience in both back-end and front-end web development. I am a team player and love to write good code that can make a difference. I am goal driven, detail oriented employee, always trying to put the users first. I like to be involved in both the technical and business side of the projects I join, to better understand its needs and opportunities, and deliver the best work possible." />
      <meta name="twitter:image" content="https://d2ffutrenqvap3.cloudfront.net/items/0m2H2V1u462N360U0H2d/ogcm.png" />

    </Head>
    <div className="app">
      {children}
    </div>
    <Style />
  </div>
)
