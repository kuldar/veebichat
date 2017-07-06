import { mainFont, yellowColor, darkYellowColor, purpleColor, lightPurpleColor, darkColor, darkGrayColor, grayColor, lightGrayColor, mediumRadius, boxShadow, innerBoxShadow } from '../lib/variables'

const App = ({ children }) => (
  <main className='app'>
    { children }
    <style global jsx>{`

        @import url('https://fonts.googleapis.com/css?family=Rubik:400,500,700');

        * { box-sizing: border-box; }

        body {
          margin: 0;
          padding: 0;
          background: ${lightGrayColor};
          font-family: ${mainFont};
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .app {
          display: flex;
          flex-direction: column;
          align-items: stretch;
          width: 100%;
        }

        @media (min-width: 50rem) {
          .app {
            flex-direction: row;
          }
        }

        .sidebar {
          display: flex;
          padding: 2rem;
          min-height: auto;
          width: auto;
          max-width: 30rem;
          color: white;
          background-color: ${purpleColor};
          border-radius: ${mediumRadius};
          margin: 1rem;
        }

        @media (min-width: 31.5rem) {
          .sidebar {
            padding: 3rem;
            margin: 2rem auto;
          }
        }

        @media (min-width: 50rem) {
          .sidebar {
            margin: 0;
            padding: 2rem;
            min-height: 100vh;
            width: 50%;
            border-radius: 0;
          }
        }

        @media (min-width: 65rem) {
          .sidebar {
            padding: 3.5rem;
            width: 40%;
          }
        }

        .joinForm {}

        .joinFormFieldset {
          margin-bottom: 2.5rem;
        }

        .joinFormLabel {
          padding: 0 0 0 1.125rem;
          color: white;
          text-transform: uppercase;
          font-weight: 700;
          margin-bottom: 0.75rem;
          display: block;
          line-height: 1;
        }

        .joinFormInput {
          transition: 0.15s;
          color: ${darkColor};
          background: white;
          box-shadow: ${boxShadow};
          border-radius: ${mediumRadius};
          border: none;
          font-family: ${mainFont};
          font-weight: 500;
          display: block;
          width: 100%;
          font-size: 1.25rem;
          line-height: 1;
          outline: none;
          padding: 1rem 1rem 1rem 3.5rem;
          background-repeat: no-repeat;
          background-position: 1.25rem center;
        }

        .joinFormInput:focus,
        .joinFormInput:active {
          box-shadow: ${boxShadow}, ${innerBoxShadow}
        }

        ::placeholder {
          color: ${grayColor};
          font-family: ${mainFont};
          font-weight: 400;
        }

        .emailInput { background-image: url('/static/mailIcon.svg'); }
        .userInput { background-image: url('/static/userIcon.svg'); }

        .joinFormCheckboxFieldset {
          transition: all 0.15s;
          display: flex;
          align-items: center;
          opacity: 0.75;
          margin-bottom: 1.5rem;
          padding: 0 1.5rem;
        }

        .joinFormCheckboxFieldset:last-child {
          margin-bottom: 0;
        }

        .joinFormCheckboxFieldset.isChecked,
        .joinFormCheckboxFieldset:hover {
          opacity: 1;
          cursor: pointer;
        }

        .joinFormCheckbox {
          flex-shrink: 0;
          transition: 0.15s;
          background-color: rgba(255,255,255,0);
          box-shadow: inset 0 0 0 2px white;
          border-radius: ${mediumRadius};
          width: 2.25rem;
          height: 2.25rem;
          margin-right: 1rem;
          background-repeat: no-repeat;
          background-position: center;
          background-image: url('/static/checkIcon.svg');
        }

        .joinFormCheckboxFieldset.isChecked
        .joinFormCheckbox {
          background-color: rgba(255,255,255,1);
          box-shadow: inset 0 0 0 2px white ${boxShadow};
        }

        .joinFormCheckboxLabel {
          transition: all 0.15s;
          font-size: 1.25rem;
        }

        .joinFormBtn {
          margin: 3.5rem 0 0 0;
          background-color: ${yellowColor};
          color: ${darkYellowColor};
          border: none;
          display: block;
          font-size: 1.125rem;
          width: 100%;
          padding: 1rem;
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: -0.5px;
          border-radius: ${mediumRadius};
          box-shadow: ${boxShadow};
          outline: none;
        }

        .joinFormBtn:hover {
          cursor: pointer;
        }

        .joinFormBtn.isDisabled {
          pointer-event: none;
          text-transform: none;
          background-color: transparent;
          color: white;
          box-shadow: inset 0 0 0 2px white;
        }

        .joinFormBtn.isDisabled:hover {
          cursor: not-allowed;
        }

        .joinFormBtn:active {
          position: relative;
          top: 1px;
        }

        .main {
          height: auto;
          flex: 1;
          padding: 2.5rem;
          overflow: scroll;
          margin: 0 auto;
          background-image: url('/static/bgIllustration.svg');
          background-repeat: no-repeat;
          background-position: right -5rem bottom -5rem;
        }

        @media (min-width: 50rem) {
          .main {
            margin: 0;
            height: 100vh;
          }
        }

        @media (min-width: 65rem) {
          .main { padding: 4rem; }
        }

        .faq {
          max-width: 40rem;
        }

        @media (min-width: 50rem) {
          .faq {
            max-width: 50rem;
          }
        }

        .locale {
          font-size: 1.75rem;
          margin-bottom: 1rem;
        }

        .localeLang {
          display: inline-block;
          transition: 0.15s;
          opacity: 0.5;
          filter: grayscale(100%);
          text-decoration: none;
          margin-right: 1.5rem;
          color: white;
          transform: scale(1);
        }

        .localeLang.isActive {
          transform: scale(1.5);
        }

        .localeLang:hover,
        .localeLang.isActive {
          filter: none;
          opacity: 1;
        }

        .pageTitle {
          color: ${darkColor};
          font-weight: 700;
          font-size: 1.5rem;
          letter-spacing: -0.25px;
          line-height: 1.125;
          margin-bottom: 2.5rem;
        }

        @media (min-width: 65rem) {
          .pageTitle {
            font-size: 2rem;
            margin-bottom: 4rem;
            letter-spacing: -0.5px;
          }
        }

        .pageTitle .isHighlighted {
          background-color: ${yellowColor};
          padding: 0 0.5rem;
          transform: rotate(-2deg);
          display: inline-block;
        }

        .faqItem {
          display: flex;
          margin-bottom: 1.5rem;
        }

        @media (min-width: 65rem) {
          .faqItem {
            margin-bottom: 3rem;
          }          
        }

        .faqItem:last-child { margin-bottom: 0; }

        .faqItemEmoji {
          position: relative;
          top: 0.25rem;
          font-size: 1.75rem;
          line-height: 1;
          margin-right: 1rem;
        }

        .faqItemContent {
          flex: 1;
        }

        .faqItemTitle {
          color: ${darkColor};
          font-weight: 700;
          font-size: 1.5rem;
          letter-spacing: -0.25px;
          line-height: 1;
          margin-bottom: 0.75rem;
        }

        @media (min-width: 65rem) {
          .faqItemTitle {
            font-size: 2rem;
            letter-spacing: -0.5px;
          }
        }

        .faqItemBody {
          color: ${darkGrayColor};
          font-size: 1.25rem;
          line-height: 1.5rem;
        }

        .questions {
          font-size: 1.125rem;
          color: ${darkGrayColor};
        }

        .questions a {
          color: ${darkGrayColor}; 
        }

        .githubLink {
          display: inline-block;
          margin-top: 1rem;
          font-size: 1.125rem;
          color: ${darkGrayColor};
        }

        .sidebarMember {}

        .sidebarMemberGreeting {
          font-size: 2rem;
        }

        .sidebarMemberMessage {
          font-size: 1.25rem;
          border-top: 2px solid ${lightPurpleColor};
          padding-top: 1.5rem;
          margin-top: 1.5rem;
        }

        .sidebarMemberLoginBtn {
          text-align: center;
          text-decoration: none;
          margin: 2rem 0;
          background-color: ${yellowColor};
          color: ${darkYellowColor};
          border: none;
          display: block;
          font-size: 1.125rem;
          width: 100%;
          padding: 1rem 1.5rem;
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: -0.5px;
          border-radius: ${mediumRadius};
          box-shadow: ${boxShadow};
          outline: none;
        }

        @media (min-width: 50rem) {
          .sidebarMemberLoginBtn {
            margin: 3.5rem 0;
          }
        }

        .sidebarMemberLoginBtn:hover {
          cursor: pointer;
        }

        .sidebarMemberLoginBtn:active {
          position: relative;
          top: 1px;
        }

        .sidebarMemberSignupLinkIcon {
          margin-right: 1rem;
        }

        .sidebarMemberSignupLink {
          text-decoration: none;
          font-size: 1.25rem;
          letter-spacing: -0.5px;
          border-radius: ${mediumRadius};
          color: white;
        }

        .sidebarMemberSignupLink:hover {
          text-decoration: underline;
        }

        .sidebarTransitionGroup {
          margin: auto 0;
          width: 100%;
          position: relative;
          display: block;
        }

        .sidebarTransition-enter {
          opacity: 0.01;
          transform: scale(1.25);
          transition: all 0.5s;
        }

        .sidebarTransition-enter.sidebarTransition-enter-active {
          opacity: 1;
          transform: scale(1);
        }

        .sidebarTransition-leave {
          top: 0;
          right: 0;
          left: 0;
          position: absolute;
          opacity: 1;
          transform: scale(1);
          transition: all 0.5s;
        }

        .sidebarTransition-leave.sidebarTransition-leave-active {
          opacity: 0.01;
          transform: scale(0.75);
        }

        .sidebarTransition-appear {
          opacity: 0.01;
          transform: scale(1.25);
        }

        .sidebarTransition-appear.sidebarTransition-appear-active {
          transition: all 0.5s;
          opacity: 1;
          transform: scale(1);
        }

      `}
    </style>
  </main>
)

export default App