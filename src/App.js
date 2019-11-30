import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withTranslation, Trans } from 'react-i18next';
class App extends React.Component {
  render()
    {
        const { i18n } = this.props;
  return (
    <div className="App">
     <h1 className="App-title">
                { this.props.t('welcome.title', { framework: "react-i18next" }) }
            </h1>
           
            { this.props.t('welcome.intro') }
            <br/>
            <button onClick={() => i18n.changeLanguage('de')}>de</button>
                <button onClick={() => i18n.changeLanguage('en')}>en</button>
    </div>
  );
    }
}

export default withTranslation('common')(App);
