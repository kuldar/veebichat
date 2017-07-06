import React, { Component } from 'react'
import { gql, graphql } from 'react-apollo'
import t from '../lib/i18n'

const emptyState = {
  name: '',
  email: '',
  isDesigner: false,
  isDeveloper: false,
  isSubmitted: false,
  isReady: false,
  error: ''
}

class SlackForm extends Component {

  constructor(props) {
    super(props)
    this.state = emptyState
  }

  async handleChange (e) {
    const { name, value } = e.target
    if (name === 'name') await  this.setState({ name: value })
    if (name === 'email') await this.setState({ email: value })
    await this.setState({ isReady: (this.state.name !== '' && this.state.email !== '') })
  }

  handleCheckbox (e) {
    if (e.currentTarget.id === 'isDesigner') this.setState({ isDesigner: !this.state.isDesigner })
    if (e.currentTarget.id === 'isDeveloper') this.setState({ isDeveloper: !this.state.isDeveloper })
  }

  handleSubmit = async (e) => {
    e.preventDefault()

    if (!this.state.isReady || e.target.elements.gimmeHoney.checked) return false

    // Create member
    await this.props.createMember({ variables: this.state })
    .catch((error) => {
      console.log(error)
      return false
    })
    
    this.props.handleNewMember({ name: this.state.name })

    // Reset state
    this.setState(emptyState)

    // Reset form
    e.target.elements.name.value = ''
    e.target.elements.email.value = ''
  }

  render() {
    return (
        <form
          className='joinForm'
          onSubmit={this.handleSubmit.bind(this)}
          onChange={this.handleChange.bind(this)}>

          <div className='joinFormFieldset'>
            <label className='joinFormLabel' htmlFor='name'>{t[this.props.locale].nameLabel}</label>
            <input
              className='joinFormInput userInput'
              placeholder={t[this.props.locale].namePlaceholder}
              name='name'
              id='name'
              type='text' />
          </div>

          <div className='joinFormFieldset'>
            <label className='joinFormLabel' htmlFor='email'>{t[this.props.locale].emailLabel}</label>
            <input
              className='joinFormInput emailInput'
              placeholder={t[this.props.locale].emailPlaceholder}
              name='email'
              id='email'
              type='email' />
          </div>

          <input
            type='checkbox'
            name='gimmeHoney'
            style={{ display: 'none' }}
            tabIndex='-1'
            autoComplete='off' />

          <div onClick={this.handleCheckbox.bind(this)} id='isDesigner' className={`joinFormCheckboxFieldset ${this.state.isDesigner ? 'isChecked' : null}`}>
            <div className='joinFormCheckbox'></div>
            <div className='joinFormCheckboxLabel'>{t[this.props.locale].interestedInDesign}</div>
          </div>

          <div onClick={this.handleCheckbox.bind(this)} id='isDeveloper' className={`joinFormCheckboxFieldset ${this.state.isDeveloper ? 'isChecked' : null}`}>
            <div className='joinFormCheckbox'></div>
            <div className='joinFormCheckboxLabel'>{t[this.props.locale].interestedInDevelopment}</div>
          </div>

          { 
            (this.state.error !== '')
            ? <div>{this.state.error}</div>
            : null 
          }

          <button className={`joinFormBtn ${ this.state.isReady ? '' : 'isDisabled' }`} type='submit'>{ this.state.isReady ? t[this.props.locale].joinChat : t[this.props.locale].plsFillFields }</button>
        </form>
    )

  }
}

const createMember = gql`
  mutation createMember(
    $name: String!,
    $email: String!,
    $isDesigner: Boolean,
    $isDeveloper: Boolean
  ) {
    createMember(
      name: $name,
      email: $email, 
      isDesigner: $isDesigner,
      isDeveloper: $isDeveloper
    ) {
      id
      name
      email
      isDesigner
      isDeveloper
    }
  }
`
export default graphql(createMember, { name: 'createMember' })(SlackForm)