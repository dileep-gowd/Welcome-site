/* eslint-disable react/button-has-type */
// Write your code here
import {Component} from 'react'

import './index.css'
// import {isS} from 'xmlchars/xml/1.0/ed5'

class Welcome extends Component {
  state = {isSubscribed: false}

  subscribeBtn = () => {
    // const {isSubscribed} = this.state
    this.setState(() => ({isSubscribed: true}))
  }

  unSubscribeBtn = () => {
    // const {isSubscribed} = this.state
    this.setState(() => ({isSubscribed: false}))
  }

  render() {
    const {isSubscribed} = this.state
    return (
      <div className="bg-cont">
        <h1>Welcome</h1>
        <p>Thank you! Happy Learning</p>
        {!isSubscribed ? (
          <button onClick={this.subscribeBtn}>Subscribe</button>
        ) : (
          <button onClick={this.unSubscribeBtn}>Subscribed</button>
        )}
      </div>
    )
  }
}

export default Welcome
