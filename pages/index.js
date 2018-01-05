import { Component } from 'react';

export default class Page extends Component {
  static async getInitialProps({ req, res }) {
    console.log(`res is defined? ${!!res}`)
    console.log(`res.redirect is defined? ${!!res.redirect}`)
    return {};
  }
  render() {
    return (
      <div>
        <p>Welcome to next.js!</p>
      </div>
    )
  }
}