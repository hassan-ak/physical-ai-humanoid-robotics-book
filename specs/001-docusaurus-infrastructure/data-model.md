# Data Model: AI-Native Docusaurus Infrastructure & Vercel Deployment

## Entities

### Documentation Page
- **Fields**:
  - id: string (unique identifier)
  - title: string (page title)
  - slug: string (URL-friendly path)
  - content: string (MDX content)
  - module: string (course module identifier)
  - chapter: number (chapter number in module)
  - locale: string (language code, e.g., 'en', 'ur')
  - metadata: object (additional page metadata)
  - createdAt: datetime
  - updatedAt: datetime

### Course Module
- **Fields**:
  - id: string (unique identifier)
  - title: string (module title)
  - description: string (module description)
  - order: number (sequence in curriculum)
  - chapters: array of Documentation Page IDs
  - createdAt: datetime
  - updatedAt: datetime

### User Profile Data
- **Fields**:
  - id: string (user identifier)
  - softwareBackground: string (user's software experience level)
  - hardwareBackground: string (user's hardware experience level)
  - preferredLanguage: string (default language preference)
  - learningPreferences: object (personalization settings)
  - createdAt: datetime
  - updatedAt: datetime

### Action Bar Configuration
- **Fields**:
  - pageId: string (reference to Documentation Page)
  - showPersonalize: boolean (whether to show personalization button)
  - showUrduTranslate: boolean (whether to show Urdu translation button)
  - personalizationState: object (current personalization settings)
  - translationState: object (current translation settings)

## Relationships
- Course Module contains many Documentation Pages
- User Profile Data connects to personalization features
- Action Bar Configuration connects to Documentation Pages

## Validation Rules
- Documentation Page slug must be unique within a locale
- Course Module order must be sequential without gaps
- User Profile Data must include both software and hardware background
- Documentation Page must belong to exactly one Course Module

## State Transitions
- Documentation Page: draft → review → published → archived
- Course Module: planned → active → completed → archived