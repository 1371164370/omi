webpackJsonp([6],{50:function(n,t){n.exports="## GlobalStore \u662f\u4ec0\u4e48\uff1f\n\nGlobalStore \u662f Omis \u5185\u7f6e\u7684\u4e2d\u5fc3\u5316\u6570\u636e\u4ed3\u5e93\uff0c\u4ed6\u89e3\u51b3\u548c\u63d0\u4f9b\u4e86\u4e0b\u9762\u95ee\u9898\u548c\u80fd\u529b\uff1a\n\n* \u7ec4\u4ef6\u6811\u6570\u636e\u5171\u4eab\n* \u6570\u636e\u53d8\u66f4\u6309\u9700\u66f4\u65b0\u4f9d\u8d56\u7684\u7ec4\u4ef6\n\n![](https://github.com/Tencent/omi/raw/master/assets/store.cn.jpg)\n\n## \u4e00\u6bb5\u4ee3\u7801\u5b8c\u5168\u4e0a\u624b GlobalStore\n\n```jsx\nimport { render, h } from 'omi'\n\nconst Counter = function (props, store) {\n  return <p>\n    Clicked: {this.$.data.count} times\n    {' '}\n    <button onClick={store.add}>+</button>\n    <button onClick={store.sub}>-</button>\n    <button onClick={store.addIfOdd}>\n      Add if odd\n      </button>\n    <button onClick={store.addAsync}>\n      Add async\n      </button>\n  </p>\n}\n\nCounter.use = ['count']\n\nCounter.store = _ => {\n  return {\n    add() {\n      _.$.add()\n    },\n    sub() {\n      _.$.sub()\n    },\n    addIfOdd() {\n      if (_.$.data.count % 2 !== 0) {\n        _.$.add()\n      }\n    },\n    addAsync() {\n      setTimeout(() => _.$.add(), 1000)\n    }\n  }\n}\n\nrender(<Counter />, 'body', {\n  data: {\n    count: 0\n  },\n  sub() {\n    this.data.count--\n  },\n  add() {\n    this.data.count++\n  }\n})\n```\n\n* \u901a\u8fc7 `use` \u58f0\u660e\u4f9d\u8d56\u7684 path\n* `globalStore` \u901a\u8fc7 render \u7684\u7b2c\u4e09\u4e2a\u53c2\u6570\u4ece\u6839\u8282\u70b9\u6ce8\u5165\u5230\u6240\u6709\u7ec4\u4ef6\uff0c\u901a\u8fc7`$`\u8bbf\u95ee\u3002\n\n\u4e0b\u9762\u4e3e\u4e00\u4e2a\u590d\u6742\u7684 `use` \u4f8b\u5b50\u3002\n\nStore \u91cc\u7684 data:\n\n```json\n{\n  count: 0,\n  arr: ['china', 'tencent'],\n  motto: 'I love omi.',\n  userInfo: {\n    firstName: 'dnt',\n    lastName: 'zhang',\n    age: 18\n  }\n}\n```\n\nStatic use:\n\n```jsx\nComp.use = [\n  'count', //\u76f4\u63a5\u5b57\u7b26\u4e32\uff0c\u53ef\u901a\u8fc7 this.using[0] \u8bbf\u95ee\n  'arr[0]', //\u4e5f\u652f\u6301 path\uff0c\u53ef\u901a\u8fc7 this.using[1] \u8bbf\u95ee\n  //\u652f\u6301 json\n  {\n    //alias\uff0c\u53ef\u901a\u8fc7 this.using.reverseMotto \u8bbf\u95ee\n    reverseMotto: [\n      'motto', //path\n      target => target.split('').reverse().join('')  //computed\n    ]\n  },\n  { name: 'arr[1]' }, //{ alias: path }\uff0c\u53ef\u901a\u8fc7 this.using.name \u8bbf\u95ee\n  {\n    //alias\uff0c\u53ef\u901a\u8fc7 this.using.fullName \u8bbf\u95ee\n    fullName: [\n      ['userInfo.firstName', 'userInfo.lastName'], //path array\n      (firstName, lastName) => firstName + lastName //computed\n    ]\n  },\n]\n```\n\n\u4e0b\u9762\u770b\u770b JSX \u4e2d\u4f7f\u7528:\n\n```jsx\n...\n...\n<div>\n  <button onClick={this.sub}>-</button>\n  <span>{this.using[0]}</span>\n  <button onClick={this.add}>+</button>\n  <div>\n    <span>{this.using[1]}</span>\n    <button onClick={this.rename}>rename</button>\n  </div>\n  <div>{this.using.reverseMotto}</div><button onClick={this.changeMotto}>change motto</button>\n  <div>{this.using.name}</div>\n  <div>{this.using[3]}</div>\n  <div>\n    {this.using.fullName}\n    <button onClick={this.changeFirstName}>change first name</button>\n  </div>\n</div>\n...\n...\n```\n\n\u5982\u679c\u4e0d\u5e26\u6709 alias \uff0c\u4f60\u4e5f\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7 `_.$.data.xxx` \u8bbf\u95ee\u3002\n\n\n\u5f53 `$.data` \u53d1\u751f\u53d8\u5316\uff0c\u4f9d\u8d56\u53d8\u66f4\u6570\u636e\u7684\u7ec4\u4ef6\u4f1a\u8fdb\u884c\u66f4\u65b0\uff0c\u4e3e\u4f8b\u8bf4\u660e Path \u547d\u4e2d\u89c4\u5219:\n\n| Proxy Path(\u7531\u6570\u636e\u66f4\u6539\u4ea7\u751f) | static use \u4e2d\u7684 path | \u662f\u5426\u66f4\u65b0 |\n| ---------- | ---------- | -------- |\n| abc        | abc        | \u66f4\u65b0     |\n| abc[1]     | abc        | \u66f4\u65b0     |\n| abc.a      | abc        | \u66f4\u65b0     |\n| abc        | abc.a      | \u4e0d\u66f4\u65b0   |\n| abc        | abc[1]     | \u4e0d\u66f4\u65b0   |\n| abc        | abc[1].c   | \u4e0d\u66f4\u65b0   |\n| abc.b      | abc.b      | \u66f4\u65b0     |\n\n\u4ee5\u4e0a\u53ea\u8981\u547d\u4e2d\u4e00\u4e2a\u6761\u4ef6\u5c31\u53ef\u4ee5\u8fdb\u884c\u66f4\u65b0\uff01\n\n\u603b\u7ed3\uff1a \u53ea\u8981\u6ce8\u5165\u7ec4\u4ef6\u7684 path \u7b49\u4e8e use \u91cc\u58f0\u660e \u6216\u8005\u5728 use \u91cc\u58f0\u660e\u7684\u5176\u4e2d path \u5b50\u8282\u70b9\u4e0b\u5c31\u4f1a\u8fdb\u884c\u66f4\u65b0\uff01\n\n### \u89e3\u6784\u8d4b\u503c\n\n```jsx\nconst Comp = function() {\n  const [menus, sideBarShow, lan] = this.using\n\n  return (\n    <div class={`list${sideBarShow ? ' show' : ''}`}>\n      {menus[lan].map((menu, index) => (\n        <my-list menu={menu} index={index} />\n      ))}\n    </div>\n  )\n}\n\nComp.use = [\n  'menus',\n  'sideBarShow',\n  'lan'\n]\n```\n\n\u8fd9\u91cc\u4e3e\u4e86\u4e2a\u4f8b\u5b50\u4f7f\u7528 ES2015+ \u8bed\u6cd5  `const [xx, xxx] = xxxx` \u7684\u8bed\u6cd5\u5feb\u901f\u8d4b\u503c\u3002\n\n## \u52a8\u6001 use\n\n\u5982\u679c\u4f60\u4e0d\u5e0c\u671b\u540c\u6837\u7684\u7ec4\u4ef6\u62e5\u6709\u540c\u6837\u7684\u4f9d\u8d56\uff0c\u53ef\u4ee5\u4f7f\u7528\u52a8\u6001\u7684 use\uff1a\n\n\n```js\nComp.store = _ => {\n  _.use = [\n    'a.b',\n    'c[1].d',\n    `e.f.${xxx}.d[${index}]`\n  ]\n}\n```\n\n\u975e\u5e38\u7075\u6d3b\uff01\n"}});
//# sourceMappingURL=6.e19277b4.chunk.js.map