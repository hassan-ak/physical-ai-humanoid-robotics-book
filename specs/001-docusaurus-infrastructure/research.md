# Research: AI-Native Docusaurus Infrastructure & Vercel Deployment

## Framework Setup Research

### Decision: Docusaurus with TypeScript in website/ subdirectory
**Rationale**: Docusaurus is the leading documentation framework with excellent TypeScript support, plugin ecosystem, and deployment options. Creating it in a 'website/' subdirectory allows for clear separation from future backend services while maintaining a clean project structure.

**Alternatives considered**:
- GitBook: Less flexible for custom components and theming
- Nextra: Good but less mature ecosystem than Docusaurus
- Custom Next.js: More work for similar functionality

## Swizzling Logic Research

### Decision: Wrap @theme/DocItem/Layout to inject Action Bar
**Rationale**: Docusaurus swizzling of the DocItem/Layout component is the most reliable way to inject content at the top of every documentation page. This component is the main layout wrapper for documentation content, making it the ideal place to add the Action Bar component.

**Alternatives considered**:
- Swizzling DocItem/Content: Less reliable as it's more specific to the content area
- Using MDX layouts: Would require manual addition to each file
- Theme inheritance: Less direct than swizzling

## Action Bar Component Research

### Decision: React component with hooks for personalization and translation
**Rationale**: Using React with TypeScript provides type safety and component reusability. The component will use React hooks to manage state for personalization and translation features, with clear placeholder functionality that can be extended later.

**Alternatives considered**:
- Pure JavaScript: Less type safety
- Custom elements: Less React ecosystem integration
- Static HTML injection: Less dynamic functionality

## i18n Configuration Research

### Decision: Docusaurus built-in i18n with en/ur locale support
**Rationale**: Docusaurus has excellent built-in internationalization support with file-based translation system. Supporting English and Urdu locales using the standard Docusaurus i18n approach provides a solid foundation for future language additions.

**Alternatives considered**:
- Third-party i18n libraries: Would add complexity without clear benefits
- Custom translation system: Reinventing the wheel
- External translation services: Premature for initial implementation

## Vercel Integration Research

### Decision: Hybrid deployment with vercel.json configuration
**Rationale**: Vercel's hybrid deployment model supports both static frontend content and serverless API functions. The vercel.json configuration will route frontend content appropriately while reserving capability for future Python FastAPI functions via API routes.

**Alternatives considered**:
- Static-only deployment: Would require separate backend hosting
- Netlify: Less backend integration capability
- Self-hosting: More operational overhead

## Zero-Defect Validation Research

### Decision: GitHub Actions with automated link checking and MDX validation
**Rationale**: Using GitHub Actions provides reliable, automated validation on every push/PR. Combining tools like Remark/Rehype for MDX validation with custom link checking scripts ensures content quality before deployment.

**Alternatives considered**:
- Manual validation: Error-prone and time-consuming
- Different CI systems: GitHub Actions is most integrated with GitHub workflow
- Build-time validation: Would slow down builds unnecessarily