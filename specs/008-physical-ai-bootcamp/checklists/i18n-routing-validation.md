# i18n Routing Validation Checklist: Physical AI Bootcamp

**Purpose**: Validate internationalization routing between English and Urdu versions of the new landing page and Pre-phase content
**Created**: 2025-12-19
**Feature**: [Link to spec](../spec.md)

## Routing Validation

- [ ] English homepage accessible at `/` and `/en/`
- [ ] Urdu homepage accessible at `/ur/`
- [ ] English Pre-phase content accessible at `/docs/pre-phase/`
- [ ] Urdu Pre-phase content accessible at `/ur/docs/pre-phase/`
- [ ] Language switcher correctly toggles between `/` and `/ur/`
- [ ] All internal links preserve language context when switching pages
- [ ] Navigation links work correctly in both English and Urdu versions
- [ ] Breadcrumbs maintain correct language context
- [ ] Search functionality works in both languages
- [ ] Action Bar components render correctly in both languages

## Content Validation

- [ ] Homepage content properly localized in Urdu with technical accuracy
- [ ] Pre-phase content fully translated to Urdu (BOM, Setup, Mindset sections)
- [ ] Technical terminology consistently translated (e.g., "Humanoid Robotics", "Jetson Orin", "Ubuntu 22.04")
- [ ] Navigation labels properly translated in Urdu
- [ ] Call-to-action buttons translated appropriately
- [ ] No English text appearing in Urdu version (except proper nouns/technical terms)
- [ ] No broken links or missing content in either language version

## Functional Validation

- [ ] Homepage hero section renders properly in both languages
- [ ] Action Bar component functions in both languages
- [ ] Navigation sidebar works correctly in both languages
- [ ] All interactive elements functional in both languages
- [ ] Forms and input fields (if any) work in both languages
- [ ] RTL (right-to-left) styling properly applied for Urdu version
- [ ] Images and media elements display correctly in both versions
- [ ] Responsive design maintained in both language versions

## Performance Validation

- [ ] Both English and Urdu versions load within acceptable timeframes (< 3 seconds)
- [ ] No performance degradation in either language version
- [ ] Assets properly loaded in both language contexts
- [ ] No console errors in browser when loading either language version

## Edge Case Validation

- [ ] Fallback behavior when content not available in target language
- [ ] URL routing handles language switching gracefully
- [ ] Session/language preference persistence works correctly
- [ ] Mixed content scenarios handled appropriately
- [ ] Special characters in Urdu content render correctly

## Notes

- All validation items should pass before deployment
- Test on multiple browsers and devices
- Verify accessibility features work in both languages
- Ensure SEO metadata properly localized for each language