import React, { Component } from 'react'
import { gql, graphql } from 'react-apollo'


class SlackForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      isDesigner: false,
      isDeveloper: false,
    }
  }

  handleChange (e) {
    const { name, value, checked } = e.target
    if (name === 'name') this.setState({ name: value })
    if (name === 'email') this.setState({ email: value })
    if (name === 'isDesigner') this.setState({ isDesigner: checked })
    if (name === 'isDeveloper') this.setState({ isDeveloper: checked })
  }

  handleSubmit (e) {
    e.preventDefault()

    // Create member
    this.props.createMember({ variables: this.state })

    // Reset state
    this.setState({
      name: '',
      email: '',
      isDesigner: false,
      isDeveloper: false,
    })

    // Reset form
    e.target.elements.name.value = ''
    e.target.elements.email.value = ''
    e.target.elements.isDesigner.checked = false
    e.target.elements.isDeveloper.checked = false
  }

  render() {
    return (
      <div>
        logo.svg
        <form onSubmit={this.handleSubmit.bind(this)} onChange={this.handleChange.bind(this)}>
          <input placeholder='name' name='name' />
          <input placeholder='email' name='email' />
          <label><input type='checkbox' name='isDesigner' />Designer</label>
          <label><input type='checkbox' name='isDeveloper' />Developer</label>
          <button type='submit'>Submit</button>
        </form>
      </div>
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