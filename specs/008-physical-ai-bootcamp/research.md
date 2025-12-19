# Research Summary: Physical AI Bootcamp Restructure

## Decision: Premium Tech-Startup Aesthetic for Homepage
**Rationale**: To create a compelling first impression that attracts potential students and conveys the professional nature of the Physical AI bootcamp. The premium aesthetic will include modern design elements, clear value propositions, and startup-focused messaging that resonates with entrepreneurs and engineers.

## Decision: Pre-phase Content Structure (BOM, Setup, Mindset)
**Rationale**: Organizing the Pre-phase content into three distinct sections provides a logical progression for students:
- BOM (Bill of Materials): What hardware/software is needed
- Setup: How to install/configure the development environment
- Mindset: The entrepreneurial approach to robotics development

## Decision: Week-Based Navigation Over Chapter-Based
**Rationale**: Weeks provide a clearer timeline and progression for a bootcamp-style learning experience. Students can easily track their progress through the 13-week program with a clear beginning, middle, and end, rather than abstract chapter numbers that don't convey time commitment.

## Decision: i18n Routing Validation Strategy
**Rationale**: To ensure seamless experience between English and Urdu versions, we'll implement comprehensive routing validation that checks:
- Proper URL structure for both locales
- Correct content availability in both languages
- Consistent navigation behavior
- Proper fallback mechanisms

## Homepage Layout Design (src/pages/index.tsx)

Based on premium tech-startup aesthetic principles, the homepage will include:

1. **Hero Section**: Compelling headline focusing on "Humanoid Robotics" with startup tone, featuring:
   - Large, impactful headline
   - Subheadline explaining the value proposition
   - Primary CTA button
   - Secondary CTA button
   - Background imagery/video of humanoid robots

2. **Features/Benefits Section**: Highlighting key benefits of the bootcamp:
   - Learn from industry experts
   - Hands-on projects with real hardware
   - Startup-focused curriculum
   - Community and networking opportunities

3. **Curriculum Preview**: Overview of the 13-week journey:
   - Pre-phase → Weeks 1-13 → Capstone structure
   - Key topics covered in each phase
   - Expected outcomes

4. **Testimonials/Success Stories**: Social proof from past students

5. **Call-to-Action**: Final push to enroll or learn more

## Pre-phase Content Mapping

### BOM (Bill of Materials) Section
- Hardware requirements: Jetson Orin, sensors, actuators, etc.
- Software requirements: Ubuntu 22.04, ROS 2 Humble, development tools
- Recommended accessories and alternatives
- Budget considerations and purchasing guidance

### Setup Section
- Step-by-step Ubuntu 22.04 installation guide
- Jetson Orin configuration and optimization
- ROS 2 Humble setup with Isaac packages
- Development environment configuration
- Testing and validation procedures

### Mindset Section
- Startup approach to robotics development
- Iterative development principles
- Problem-solving methodologies
- Innovation and entrepreneurship in robotics

## Navigation Structure Overhaul

The navigation will be restructured from chapter-based to week-based with the following hierarchy:
- Pre-phase → Week 1 → Week 2 → ... → Week 13 → Capstone

This will involve:
- Updating sidebars.js to reflect the new structure
- Modifying docusaurus.config.ts for proper routing
- Ensuring consistent navigation experience across all content
- Updating breadcrumbs and next/previous links

## i18n Routing Validation Checklist

- [ ] English URLs properly formatted (e.g., /docs/pre-phase/setup)
- [ ] Urdu URLs properly formatted (e.g., /ur/docs/pre-phase/setup)
- [ ] Language switcher functionality works correctly
- [ ] Content properly loaded in both languages
- [ ] Navigation links work in both locales
- [ ] Search functionality works in both languages
- [ ] Proper fallback when content not available in target language
- [ ] Consistent styling and layout across languages