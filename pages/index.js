import App from '../components/App'
import Header from '../components/Header'
import SlackForm from '../components/SlackForm'
import withData from '../lib/withData'

export default withData((props) => (
  <App>
    <Header pathname={props.url.pathname} />
    <SlackForm />
  </App>
))
