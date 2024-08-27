import React from "react";
import Header from "./components/Header";
import Section from "./components/Section";

function App() {
  return (
    <div className="app">
      <Header />
      <Section title="What is React?">
        <p>React is a JavaScript library for building user interfaces. It allows developers to create large web applications that can update and render efficiently in response to data changes. React is known for its component-based architecture and the use of a virtual DOM to optimize performance.</p>
      </Section>
      <Section title="Benefits of React">
        <ul>
          <li>Component-based architecture for reusability and modularity</li>
          <li>Virtual DOM for efficient updates and rendering</li>
          <li>Strong community support and a large ecosystem of libraries</li>
          <li>Flexibility to use with other libraries and frameworks</li>
          <li>Declarative syntax makes code easier to understand and debug</li>
        </ul>
      </Section>
    </div>
  );
}

export default App;
