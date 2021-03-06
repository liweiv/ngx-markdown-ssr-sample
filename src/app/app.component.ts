import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngx-markdown-ssr-sample';
  markdown = `## Markdown __rulez__!
  ---

  ### Syntax highlight
  \`\`\`typescript
  const language = 'typescript';
  \`\`\`

  ### Lists
  1. Ordered list
  2. Another bullet point
    - Unordered list
    - Another unordered bullet point


  ### Blockquote
  > Blockquote to the max :heart:

  ### KaTeX

  \$e=mc^2\$

  \$\\pm\\sqrt{a^2 + b^2}\$
  `;
}
