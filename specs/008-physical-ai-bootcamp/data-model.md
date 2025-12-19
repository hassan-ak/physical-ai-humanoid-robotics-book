# Data Model: Physical AI Bootcamp Restructure

## Entity: HomepageContent
- **name**: String (e.g., "Bootcamp Homepage")
- **sections**: Array<HomepageSection> (hero, features, curriculum, testimonials, cta)
- **hero_title**: String (main headline)
- **hero_subtitle**: String (subheadline explaining value prop)
- **cta_primary**: String (primary call-to-action text)
- **cta_secondary**: String (secondary call-to-action text)
- **features**: Array<FeatureItem> (key benefits of the bootcamp)
- **curriculum_preview**: Array<CurriculumItem> (overview of 13-week journey)
- **validation_rules**: Must include compelling value proposition and clear CTAs

## Entity: HomepageSection
- **name**: String (section identifier)
- **title**: String (section header)
- **content**: String (section body content)
- **component_type**: String (e.g., "HeroSection", "Features", "CTA")
- **order**: Number (display order)
- **validation_rules**: Must have clear purpose and consistent styling

## Entity: PrePhaseContent
- **name**: String (e.g., "Pre-phase Setup Guide")
- **type**: String (bom|setup|mindset)
- **title**: String (display title)
- **description**: String (brief description)
- **content_sections**: Array<ContentSection> (detailed content)
- **dependencies**: Array<String> (prerequisites)
- **validation_rules**: Must provide comprehensive guidance for each type

## Entity: ContentSection
- **title**: String (section header)
- **content**: String (main content)
- **steps**: Array<Step> (if procedural)
- **resources**: Array<Resource> (related materials)
- **validation_rules**: Must be clear, actionable, and complete

## Entity: NavigationItem
- **id**: String (unique identifier)
- **title**: String (display title)
- **path**: String (URL path)
- **children**: Array<NavigationItem> (nested items)
- **order**: Number (display order)
- **locale**: String (language code)
- **validation_rules**: Must have valid path and consistent ordering

## Entity: LocalizationPair
- **key**: String (content identifier)
- **english_content**: String (English version)
- **urdu_content**: String (Urdu translation)
- **status**: String (draft|reviewed|published)
- **validation_rules**: Must maintain technical accuracy in both languages

## Entity: CurriculumWeek
- **week_number**: Number (1-13)
- **title**: String (week title)
- **description**: String (brief description)
- **learning_objectives**: Array<String> (what students will learn)
- **content_path**: String (path to week's content)
- **prerequisites**: Array<String> (required knowledge/skills)
- **validation_rules**: Must build logically from previous weeks

## Entity: FeatureItem
- **title**: String (feature title)
- **description**: String (feature explanation)
- **icon**: String (icon identifier)
- **validation_rules**: Must be clear and compelling

## Entity: CurriculumItem
- **phase**: String (pre-phase|week-1-13|capstone)
- **title**: String (phase title)
- **duration**: String (time commitment)
- **skills_covered**: Array<String> (skills taught)
- **outcome**: String (expected result)
- **validation_rules**: Must clearly communicate value and progression

## State Transitions
- Content progresses from draft → reviewed → published
- Navigation structure moves from chapter-based → week-based
- Student journey advances from pre-phase → weekly content → capstone
- Localization status evolves from english_only → urdu_in_progress → fully_localized