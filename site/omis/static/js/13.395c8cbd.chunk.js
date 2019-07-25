webpackJsonp([13],{43:function(n,t){n.exports="## What's Omis \uff1f\n\nOmis (pronounced /\u02c8om\u026as/) is Functional Style, Easy Store and Hyperscript Component Framework in 3KB.\n\n* Functional style but non-functional programming\n* Structure-Style-Behavior Separation\n* Hyperscript is visually more friendly\n* Each component can have a store and be de-centralized\n* Support global store to share data and update on demand\n* Each component store has an update method that executes the method to customize local refresh components\n\n[\u2192 Omis Codepen Demos](https://codepen.io/collection/XjLaRo/)\n\n## Add Omi in One Minute\n\n```jsx\nimport { render, h } from 'omi'\n\nconst Counter = (props, store) => {\n  return (\n    <div>\n      <button onClick={store.sub}>-</button>\n      <span>{store.count}</span>\n      <button onClick={store.add}>+</button>\n    </div>\n  )\n}\n\nCounter.store = _ => {\n  return {\n    count: 1,\n    add() {\n      this.count++\n      this.update()\n    },\n    sub() {\n      this.count--\n      this.update()\n    }\n  }\n}\n\nCounter.css = `\nspan{\n  color: red;\n}\n`\n\nrender(<Counter />, 'body')\n```\n\nYou can also use hyperscript **with no build tooling**:\n\n```js\nconst Counter = (props, store) => {\n  return (\n    h('div', {}, [\n      h('button', { onClick: store.sub }, '-'),\n      h('span', {}, store.count),\n      h('button', { onClick: store.add }, '+')\n    ])\n  )\n}\n```\n\nYou're already getting started! Congratulations!\n"}});
//# sourceMappingURL=13.395c8cbd.chunk.js.map