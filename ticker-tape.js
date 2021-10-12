const template = document.createElement('template');
/*
 * Note to self:
 * There are certainly better solutions to this problem
 * than the brute force method I employed below.
 * I'm short on time so I can't investigate better
 * solutions right now.
 */
// template.innerHTML = `
//   <style>
//     @keyframes tick {
//       0% {content: '...Color.com is awesome...';}
//       4% {content: '..Color.com is awesome....';}
//       8% {content: '.Color.com is awesome.....';}
//       12% {content: 'Color.com is awesome......';}
//       16% {content: 'olor.com is awesome......C';}
//       20% {content: 'lor.com is awesome......Co';}
//       24% {content: 'or.com is awesome......Col';}
//       28% {content: 'r.com is awesome......Colo';}
//       32% {content: '.com is awesome......Color';}
//       36% {content: 'com is awesome......Color.';}
//       40% {content: 'om is awesome......Color.c';}
//       44% {content: 'm is awesome......Color.co';}
//       48% {content: ' is awesome......Color.com';}
//       52% {content: 'is awesome......Color.com ';}
//       56% {content: 's awesome......Color.com i';}
//       60% {content: ' awesome......Color.com is';}
//       64% {content: 'awesome......Color.com is ';}
//       68% {content: 'wesome......Color.com is a';}
//       72% {content: 'esome......Color.com is aw';}
//       76% {content: 'some......Color.com is awe';}
//       80% {content: 'ome......Color.com is awes';}
//       84% {content: 'me......Color.com is aweso';}
//       88% {content: 'e......Color.com is awesom';}
//       92% {content: '......Color.com is awesome';}
//       94% {content: '.....Color.com is awesome.';}
//       96% {content: '....Color.com is awesome..';}
//       100% {content: '...Color.com is awesome...';}
//     }
//     .container::after {
//       content: '';
//       font-family: sans-serif;
//       font-size: 4rem;
//       animation: tick 5s linear infinite;
//     }
//   </style>
//   <div class="container"></div>
// `;

template.innerHTML = `
  <style>
    @keyframes tick {
      0% {transform: translateX(0%);}
      25% {transform: translateX(75%);}
      50% {transform: translateX(0%);}
      75% {transform: translateX(-75%);}
      100% {transform: translateX(0%);}
    }
    .container {
      background-image: linear-gradient(90deg, var(--blue), var(--light));
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      width: 100%;
      animation: tick 10s linear infinite;
    }
  </style>
  <div class="container">
    <h1>...Color.com is awesome...</h1>
  </div>
`;

class TickerTape extends HTMLElement {
  constructor() {
    super();
    const tempNode = template.content.cloneNode(true);
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(tempNode);
  }
}

customElements.define('ticker-tape', TickerTape);
