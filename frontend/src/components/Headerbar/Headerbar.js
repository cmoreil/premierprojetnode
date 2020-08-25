import React from "react";
import { Button } from "react-bootstrap";

export class Headerbar extends React.Component {

  render() {
    return (
      <header className="Headerbar">
        <div>
        <svg class="bi bi-people-circle" width="6em" height="6em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 008 15a6.987 6.987 0 005.468-2.63z"/>
            <path fill-rule="evenodd" d="M8 9a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/>
            <path fill-rule="evenodd" d="M8 1a7 7 0 100 14A7 7 0 008 1zM0 8a8 8 0 1116 0A8 8 0 010 8z" clip-rule="evenodd"/>
        </svg>
          <h1>MicroBloggos</h1>
          </div>
          <div className="Navbar">
            <Button className= "Button" href="/">Home</Button>{' '}
            <Button className= "Button" href="/login">Se connecter</Button>{' '}
            <Button className= "Button" href="/register">S'inscrire</Button>{' '}
            <Button className= "Button" href="/dashboard">Mon espace</Button>{' '}
        </div>
        <div>
          <p className="Intro">Commentez en toute liberté (mais en moins de 140 signes) !</p>
        </div>
      </header>
    );
  }
}
