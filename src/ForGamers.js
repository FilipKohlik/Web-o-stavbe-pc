import { render } from '@testing-library/react';
import React, { Component } from 'react'



export  class ForGamers extends Component {
    render() {
      return (
        <div className="ForGamers">
            <h1>Pro hráče</h1>
            <h2>Na této stránce najdete návod na to, jak si postavit herní PC. U každé součástky budete mít sekci pro hráče, kde budete mít rady na výběr komponentu.</h2>
        </div>
    )
}
}
export default ForGamers