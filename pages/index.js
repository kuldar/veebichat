import React, { Component } from 'react'
import Link from 'next/link'
import App from '../components/App'
import SlackForm from '../components/SlackForm'
import withData from '../lib/withData'
import t from '../lib/i18n'
import Cookie from 'js-cookie'
import { CSSTransitionGroup } from 'react-transition-group'

const FaqItem = (props) => {
  return (
    <div className='faqItem'>
      <div  className='faqItemEmoji'>{props.emoji}</div>
      <div className='faqItemContent'>
        <div className='faqItemTitle'>{props.title}</div>
        <div className='faqItemBody'>{props.body}</div>
      </div>
    </div>
  )
}

const greeting = (locale) => {
  let d = new Date()
  let time = d.getHours()

  if (time > 5 && time <= 12) { return t[locale].greetings.morning }
  if (time > 12 && time <= 15) { return t[locale].greetings.noon }
  if (time > 15 && time <= 21) { return t[locale].greetings.evening }
  if (time > 21 || time <= 5) { return t[locale].greetings.night }
}

class index extends Component {

  constructor(props) {
    super(props)
    this.state = {
      locale: Cookie.get('veebiLocale') ? Cookie.get('veebiLocale') : 'et',
      member: Cookie.get('veebiChatMember') ? JSON.parse(Cookie.get('veebiChatMember')) : false,
      inviteSent: false
    }
  }

  handleNewMember = (member) => {
    this.setState({
      member: member,
      inviteSent: true
    })
    Cookie.set('veebiChatMember', member)
  }

  handleNewSignup = () => {
    this.setState({ member: false })
  }

  setLocale = (e) => {
    e.preventDefault()
    let locale = e.target.id
    this.setState({ locale })
    Cookie.set('veebiLocale', locale)
  }

  render() {
    return (
      <App>
        <div className='sidebar'>
          <CSSTransitionGroup
            className='sidebarTransitionGroup'
            transitionName='sidebarTransition'
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={0}>
            {
              this.state.member
              ? <div key='sidebar' className='sidebarMember'>
                  <div className="sidebarMemberGreeting">
                    {greeting(this.state.locale)}, <br/><strong>{this.state.member.name}</strong> 👋
                  </div>
                  {
                    this.state.inviteSent
                    ? <div className='sidebarMemberMessage'>{t[this.state.locale].newMemberMessage}</div>
                    : <div>
                        <a className='sidebarMemberLoginBtn' href='https://veebichat.slack.com'>{t[this.state.locale].logIntoSlack}</a>
                        <i className='sidebarMemberSignupLinkIcon'>👈</i> <a onClick={this.handleNewSignup.bind(this)} className='sidebarMemberSignupLink' href='#'>{t[this.state.locale].joinWithNewEmail}</a>
                      </div>
                  }
                </div>
              : <SlackForm
                  key='slackForm'
                  locale={this.state.locale}
                  handleNewMember={this.handleNewMember.bind(this)} />
            }
          </CSSTransitionGroup>
        </div>
        <div className='main'>
          <div className='faq'>
            <div className='locale'>
              <a className={`localeLang ${ this.state.locale === 'et' ? 'isActive' : '' }`} href='#' id='et' onClick={this.setLocale.bind(this)}>🇪🇪</a>
              <a className={`localeLang ${ this.state.locale === 'en' ? 'isActive' : '' }`} href='#' id='en' onClick={this.setLocale.bind(this)}>🇪🇺</a>
            </div>
            <div className='pageTitle'>
              {t[this.state.locale].pageTitle[0]} <span className='isHighlighted'>{t[this.state.locale].pageTitle[1]}</span> {t[this.state.locale].pageTitle[2]}
            </div>
            { t[this.state.locale].faq.map( (faq, i) => <FaqItem key={i} {...faq} />)}
            <div className='questions'>{t[this.state.locale].questions} <a href={`mailto:${t[this.state.locale].contactEmail}`}>{t[this.state.locale].contactEmail}</a></div>
            <a href='http://github.com/kuldar/veebichat' className='githubLink'>{t[this.state.locale].githubLink}</a> 🔧
          </div>
        </div>
      </App>
    )
  }
}

export default withData(index)