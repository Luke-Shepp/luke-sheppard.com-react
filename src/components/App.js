import React from 'react';
import './App.css';
import Link from "./Link";
import GitHubLogo from "./GitHubLogo";
import LinkedInLogo from "./LinkedInLogo";

const App = () => {
    return (
        <div>
            <h1>Luke Sheppard</h1>
            <h2>
                <span className="developer">Developer</span> and Japanese Car Enthusiast
            </h2>
            <div className="links">
                <Link href="https://github.com/Luke-Shepp">
                    <GitHubLogo />
                    <p>GitHub</p>
                </Link>
                <Link href="https://uk.linkedin.com/in/luke-sheppard-523bb4142">
                    <LinkedInLogo />
                    <p>LinkedIn</p>
                </Link>
            </div>
        </div>
    );
}

export default App;
