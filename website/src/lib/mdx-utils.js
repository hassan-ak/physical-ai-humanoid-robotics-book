/**
 * MDX Content Processing Utilities
 * Utility functions for processing and manipulating MDX content
 */

/**
 * Inject Action Bar component after the first main heading
 */
export function injectActionBar(content) {
  // Look for the first main heading (#) and inject Action Bar after it
  return content.replace(/^(#[^#].*?)$(\s*)/m, '$1$2\n<ActionBar />\n\n');
}

/**
 * Validate MDX syntax
 */
export function validateMdxSyntax(content) {
  const issues = [];

  // Check for common MDX syntax issues
  // 1. Unclosed JSX tags
  const jsxTagPattern = /<([A-Z][a-zA-Z0-9]*)[^>]*>(?:(?!<\/\1>).)*$/s;
  if (jsxTagPattern.test(content)) {
    issues.push({
      type: 'unclosed-jsx-tag',
      message: 'Found potentially unclosed JSX tag'
    });
  }

  // 2. Unescaped special characters in code blocks
  const problematicChars = /[<>{}]/g;
  let match;
  while ((match = problematicChars.exec(content)) !== null) {
    // Check if the character is inside a code block
    const beforeMatch = content.substring(0, match.index);
    const codeBlockCount = (beforeMatch.match(/```/g) || []).length;

    // If odd number of code block markers, we're inside a code block
    if (codeBlockCount % 2 === 1) {
      // Check if it's not inside JSX tags
      const beforeJsx = beforeMatch.split('<').length - 1;
      const afterJsx = beforeMatch.split('>').length - 1;
      if (beforeJsx === afterJsx) {
        // Inside code block but not JSX, so this is OK
      } else {
        // Inside JSX within code block, could be problematic
        issues.push({
          type: 'special-char-in-jsx',
          message: `Special character '${match[0]}' found in JSX within code block`,
          position: match.index
        });
      }
    }
  }

  return {
    isValid: issues.length === 0,
    issues,
    content,
    validatedAt: new Date().toISOString()
  };
}

/**
 * Extract code blocks from MDX content
 */
export function extractCodeBlocks(content) {
  const codeBlocks = [];
  const codeBlockRegex = /```(\w+)?\n([\s\S]*?)```/g;
  let match;

  while ((match = codeBlockRegex.exec(content)) !== null) {
    codeBlocks.push({
      language: match[1] || 'plaintext',
      code: match[2],
      startIndex: match.index,
      endIndex: match.index + match[0].length
    });
  }

  return {
    codeBlocks,
    count: codeBlocks.length,
    content
  };
}

/**
 * Extract Mermaid diagrams from MDX content
 */
export function extractMermaidDiagrams(content) {
  const diagrams = [];
  const mermaidRegex = /```mermaid\n([\s\S]*?)```/g;
  let match;

  while ((match = mermaidRegex.exec(content)) !== null) {
    diagrams.push({
      diagram: match[1],
      startIndex: match.index,
      endIndex: match.index + match[0].length
    });
  }

  return {
    diagrams,
    count: diagrams.length,
    content
  };
}

/**
 * Add comments to code blocks explaining Physical AI relevance
 */
export function annotateCodeBlocks(content, annotations) {
  const extracted = extractCodeBlocks(content);
  let updatedContent = content;

  // Process each code block in reverse order to maintain indices
  for (let i = extracted.codeBlocks.length - 1; i >= 0; i--) {
    const block = extracted.codeBlocks[i];

    // Add annotation comment based on context
    const annotation = annotations.find(ann =>
      ann.language === block.language &&
      block.code.includes(ann.contextKeyword)
    );

    if (annotation) {
      const newCodeBlock = `\`\`\`${block.language}\n${annotation.comment}\n${block.code}\n\`\`\``;
      updatedContent = updatedContent.substring(0, block.startIndex) +
                       newCodeBlock +
                       updatedContent.substring(block.endIndex);
    }
  }

  return {
    originalContent: content,
    annotatedContent: updatedContent,
    annotationsApplied: extracted.codeBlocks.length > 0 ? annotations.length : 0,
    modified: content !== updatedContent
  };
}

/**
 * Validate links in MDX content
 */
export function validateLinks(content) {
  const issues = [];
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let match;

  while ((match = linkRegex.exec(content)) !== null) {
    const linkText = match[1];
    const linkUrl = match[2];

    // Check for broken internal links
    if (linkUrl.startsWith('./') || linkUrl.startsWith('../')) {
      // In a real implementation, we'd check if the file exists
      // For now, we'll just record the link for validation
      continue;
    }

    // Check for malformed URLs
    try {
      if (!linkUrl.startsWith('#') && !linkUrl.startsWith('/') && !linkUrl.startsWith('mailto:')) {
        new URL(linkUrl);
      }
    } catch (e) {
      issues.push({
        type: 'malformed-url',
        linkText,
        linkUrl,
        message: `Malformed URL: ${linkUrl}`
      });
    }
  }

  return {
    isValid: issues.length === 0,
    issues,
    linksCount: (content.match(linkRegex) || []).length,
    content,
    validatedAt: new Date().toISOString()
  };
}

/**
 * Process MDX content for Physical AI relevance
 */
export function processPhysicalAIContent(content, options = {}) {
  const {
    annotateCode = true,
    injectActionBar: injectBar = true,
    validateSyntax = true,
    validateLinks: checkLinks = true,
    annotations = []
  } = options;

  let processedContent = content;

  // Inject Action Bar if requested
  if (injectBar) {
    processedContent = injectActionBar(processedContent);
  }

  // Annotate code blocks if requested
  if (annotateCode && annotations.length > 0) {
    const annotated = annotateCodeBlocks(processedContent, annotations);
    processedContent = annotated.annotatedContent;
  }

  // Validate syntax if requested
  if (validateSyntax) {
    const syntaxValidation = validateMdxSyntax(processedContent);
    if (!syntaxValidation.isValid) {
      console.warn('MDX syntax validation issues found:', syntaxValidation.issues);
    }
  }

  // Validate links if requested
  if (checkLinks) {
    const linkValidation = validateLinks(processedContent);
    if (!linkValidation.isValid) {
      console.warn('Link validation issues found:', linkValidation.issues);
    }
  }

  return {
    originalContent: content,
    processedContent,
    transformationsApplied: {
      actionBarInjected: injectBar,
      codeAnnotated: annotateCode && annotations.length > 0,
      syntaxValidated: validateSyntax,
      linksValidated: checkLinks
    },
    processedAt: new Date().toISOString()
  };
}

/**
 * Extract frontmatter from MDX content
 */
export function extractFrontmatter(content) {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n/;
  const match = content.match(frontmatterRegex);

  if (match) {
    const frontmatterContent = match[1];
    const frontmatter = {};

    // Parse simple key-value pairs
    frontmatterContent.split('\n').forEach(line => {
      const colonIndex = line.indexOf(':');
      if (colonIndex > 0) {
        const key = line.substring(0, colonIndex).trim();
        const value = line.substring(colonIndex + 1).trim();

        // Remove quotes if present
        frontmatter[key] = value.replace(/^['"]|['"]$/g, '');
      }
    });

    return {
      frontmatter,
      contentWithoutFrontmatter: content.substring(match[0].length),
      hasFrontmatter: true
    };
  }

  return {
    frontmatter: {},
    contentWithoutFrontmatter: content,
    hasFrontmatter: false
  };
}

/**
 * Generate MDX content with frontmatter
 */
export function generateMdxWithFrontmatter(title, content, additionalFrontmatter = {}) {
  const frontmatter = {
    title: title,
    sidebar_position: additionalFrontmatter.sidebar_position || 1,
    ...additionalFrontmatter
  };

  const frontmatterStr = Object.entries(frontmatter)
    .map(([key, value]) => `${key}: ${typeof value === 'string' ? `"${value}"` : value}`)
    .join('\n');

  return `---\n${frontmatterStr}\n---\n\n${content}`;
}