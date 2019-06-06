const Style = () => {
  return <style jsx>{`
    body {
      padding: 0;
      margin: 0;
      font: 16px 'Lato', sans-serif;
      line-height: 1.4;
    }

    a {
    color: #f87f02;
    }

    h1, h2, h3, h4, h5, h6 {
    margin: 0;
    text-align: center;
    }

    h1, h2, h3 {
    font-family: 'Judson', serif;
    font-weight: 700;
    }

    h4, h5, h6 {
    text-transform: uppercase;
    }

    h1 {
    font-size: 64px;
    margin-top: 60px;
    }

    h2 {
    font-weight: 400;
    font-size: 26px;
    }

    h3 {
    margin-top: 80px;
    font-size: 20px;
    }

    h4 {
    font-size: 17px;
    text-align: left;
    margin-top: 45px;
    }

    p {
    text-align: left;
    }

    .horizontal-list, .grid, ul.icons {
    display: flex;
    justify-content: center;
    }

    ul.horizontal-list, .horizontal-list li,
    ul.icons, ul.icons li {
    list-style: none;
    margin: 0;
    padding: 0;
    }

    ul.icons {
    margin-top: 100px;
    text-align: center;
    }

    ul.icons li {
    flex-grow: 1;
    }

    ul.icons li i {
    color: #f87f02;
    font-size: 2em;
    }

    .horizontal-list li + li::before {
    content: " | ";
    margin: 0 5px;
    width: 10px;
    display: inline-block;
    }

    .grid .col-1-2 {
    width: 50%;
    }

    #container {
    width: 100%;
    max-width: 700px;
    margin: 0 auto;
    box-sizing: border-box;
    }

    #intro {
    text-align: center;
    }

    #intro p {
    margin-top: 40px;
    }

    #contacts {
    margin-top: 10px;
    }

    #experience h4 span,
    #education h4 span {
    font-weight: 400;
    text-transform: none;
    font-size: 16px;
    }

    #experience h4 span::before,
    #education h4 span::before {
    content: " | ";
    margin: 0 5px;
    width: 5px;
    display: inline-block;
    }

    #experience p {
    margin-top: 25px;
    }

    #experience p + h4::before {
    content: '';
    display: block;
    width: 100px;
    height: 1px;
    background-color: #AAA;
    margin: 45px auto 35px;
    }

    #footer {
    border-top: 1px solid #AAA;
    margin-top: 140px;
    margin-bottom: 60px;
    }

    @media print {
    h1 {
    margin-top: 10px;
    }

    ul.icons,
    #footer {
    display: none;
    }
    }

    #overlay {
    transition: all 0.4s;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    }

    #overlay #letters {
    color: #000000;
    font-size: 128px;
    font-family: 'Judson', serif;
    font-weight: 700;
    display: flex;
    position: relative;
    }

    .overlay-animated {
    -webkit-animation-fill-mode: both;
    -moz-animation-fill-mode: both;
    -ms-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-duration: 3s;
    -moz-animation-duration: 3s;
    -ms-animation-duration: 3s;
    animation-duration: 3s;
    animation-name: overlay-animated;
    -webkit-animation-name: overlay-animated;
    -moz-animation-name: overlay-animated;
    }

    .c, .m {
    padding: 50px 100px;
    -webkit-animation-fill-mode: both;
    -moz-animation-fill-mode: both;
    -ms-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-duration: 3s;
    -moz-animation-duration: 3s;
    -ms-animation-duration: 3s;
    animation-duration: 3s;
    border: 7px solid #f87f02;
    transition: all 0.4s;
    }

    .c {
    padding-right: 0 !important;
    border-right: 0 !important;
    animation-name: c-animated;
    -webkit-animation-name: c-animated;
    -moz-animation-name: c-animated;
    }

    .m {
    padding-left: 0 !important;
    border-left: 0 !important;
    animation-name: m-animated;
    -webkit-animation-name: m-animated;
    -moz-animation-name: m-animated;
    }

    @keyframes overlay-animated {
    90 % {
    background- color: #FFFFFF;
    }

    100% {
    background-color: transparent;
    }
    }

    @keyframes c-animated {
    50 % {
    border- top-color: transparent;
    }

    60% {
    border-top-color: transparent;
    }

    70% {
    border-top-color: transparent;
    border-bottom-color: transparent;
    }

    80% {
    border-top-color: transparent;
    border-bottom-color: transparent;
    border-left-color: transparent;
    font-size: 128px;
    opacity: 1;
    }

    100% {
    border-top-color: transparent;
    border-bottom-color: transparent;
    border-left-color: transparent;
    font-size: 64px;
    opacity: 0;
    }
    }

    @keyframes m-animated {
    50 % {
    border- top-color: transparent;
    }

    60% {
    border-top-color: transparent;
    border-right-color: transparent;
    }

    70% {
    border-top-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
    }

    80% {
    border-top-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
    font-size: 128px;
    opacity: 1;
    }

    100% {
    border-top-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
    font-size: 64px;
    opacity: 0;
    }
    }

    @media screen and (max-width: 767px) {
    ul.icons {
    margin-top: 40px;
    }

    h1 {
    margin-top: 30px;
    line-height: 1;
    }

    h1 span {
    font-size: 48px;
    }

    .c, .m {
    padding: 0px 50px;
    }

    #container {
    padding: 0 30px;
    }

    .grid, ul#contacts {
    flex-direction: column;
    }

    .grid .col-1-2 {
    width: 100%;
    }

    .horizontal-list li + li::before {
      display: none;
    }

    p {
      text-align: justify;
    }
  `}</style>
};
export default Style;
