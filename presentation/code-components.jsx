import React from "react"
import CodeSlide from "spectacle-code-slide"
import BaseCodeSlide from "../baseCodeSlide.jsx"

export class BasicHooksExample extends BaseCodeSlide {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <CodeSlide
        {...this.props}
        transition={[]}
        lang="js"
        code={require("raw-loader!../assets/code/fooBarFunctionalComponent.code")}
        ranges={[
          { loc: [0, 0], title: "Functional Component" },
          { loc: [0, 1], title: "Import React and useState" },
          { loc: [2, 3], title: "React Functional Component (RFC)" },
          { loc: [3, 4], title: "useState hook" },
          { loc: [11, 19], title: "Rendering..." },
          { loc: [5, 10], title: "setCurrent is same as setState" }
        ]}
      />
    )
  }
}

export class BasicClassExample extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <CodeSlide
        {...this.props}
        transition={[]}
        lang="js"
        code={require("raw-loader!../assets/code/fooBarClassComponent.code")}
        ranges={[
          { loc: [0, 0], title: "Class Component" },
          { loc: [0, 1], title: "Importing React" },
          { loc: [3, 10], title: "Set Initial State" },
          { loc: [17, 27], title: "Render Method" },
          { loc: [18, 19], title: "State Destructing" },
          { loc: [21, 27], title: "Greeting and toggle button" },
          { loc: [11, 16], title: "Toggle current State Foo or Bar" }
        ]}
      />
    )
  }
}

export class BasicEffectsClassExample extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <CodeSlide
        {...this.props}
        transition={[]}
        lang="js"
        code={require("raw-loader!../assets/code/basicEffectsClassComponent.code")}
        ranges={[
          { loc: [0, 0], title: "Side Effects on Class Component" },
          { loc: [8, 11], title: "change document title once it is mounted" },
          { loc: [12, 15], title: "and once it gets updated" },
          { loc: [12, 15], title: "and once it gets updated" },
          { loc: [17, 25], title: "Update Counter on Click" }
        ]}
      />
    )
  }
}

export class BasicEffectsFunctionExample extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <CodeSlide
        {...this.props}
        transition={[]}
        lang="js"
        code={require("raw-loader!../assets/code/basicEffectsFunctionalComponent.code")}
        ranges={[
          { loc: [0, 0], title: "Side Effects on Function Component" },
          { loc: [0, 1], title: "Import useEffect hook" },
          { loc: [3, 4], title: "use State for updating the count" },
          { loc: [5, 8], title: "ComponentDidMount & ComponentDidUpdate" },
          { loc: [9, 17], title: "Rendering..." }
        ]}
      />
    )
  }
}

export class AdvancedEffectsClassExample extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <CodeSlide
        {...this.props}
        transition={[]}
        lang="js"
        code={require("raw-loader!../assets/code/advancedEffectsClassComponent.code")}
        ranges={[
          { loc: [0, 0], title: "Class Component Cleanup" },
          { loc: [0, 6], title: "Add Listener on Mount" },
          { loc: [7, 13], title: "Cleanup on Unmout" }
        ]}
      />
    )
  }
}

export class AdvancedEffectsFunctionExample extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <CodeSlide
        {...this.props}
        transition={[]}
        lang="js"
        code={require("raw-loader!../assets/code/advancedEffectsFunctionalComponent.code")}
        ranges={[
          { loc: [0, 0], title: "useEffect Function Component Cleanup" },
          { loc: [5, 18], title: "useEffect Hook" },
          { loc: [3, 4], title: "use State for updating the count" },
          { loc: [5, 8], title: "Update store onChange" },
          { loc: [10, 12], title: "Subscribe to Store" },
          { loc: [13, 17], title: "Remove Store Listener (Cleanup)" },
          { loc: [19, 23], title: "Show loading or Open Store" }
        ]}
      />
    )
  }
}

export class CustomHookComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <CodeSlide
        {...this.props}
        transition={[]}
        lang="js"
        code={require("raw-loader!../assets/code/customHookComponent.code")}
        ranges={[
          { loc: [0, 0], title: "Custom Hook" },
          { loc: [0, 1], title: "useHook naming Convention" },
          { loc: [1, 2], title: "Username State" },
          { loc: [2, 3], title: "Email State" },
          { loc: [4, 21], title: "Return Value" }
        ]}
      />
    )
  }
}
