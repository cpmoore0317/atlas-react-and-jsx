import React from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import HelpfulResource from "./components/HelpfulResource";

function App() {
  return (
    <div className="app">
      <Header />
      <Section title="What is React?">
        React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage the state of complex web applications efficiently.
      </Section>
      <Section title="Benefits of React">
        <ul>
          <li>Reusable components</li>
          <li>Virtual DOM for efficient updates</li>
          <li>Strong community support</li>
          <li>Easy to learn and use</li>
          <li>Rich ecosystem of libraries and tools</li>
        </ul>
      </Section>
      <Section title="Helpful Resources">
        <HelpfulResource
          link="https://reactjs.org/docs/getting-started.html"
          label="Official React Documentation"
        />
        <HelpfulResource
          link="https://www.freecodecamp.org/news/the-react-handbook-b71c27b0a795/"
          label="FreeCodeCamp React Handbook"
        />
        <HelpfulResource
          link="https://egghead.io/courses/the-beginner-s-guide-to-react"
          label="Egghead.io Beginner's Guide to React"
        />
      </Section>
    </div>
  );
}

export default App;
