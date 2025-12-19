# Data Model: Intelligence Layer (Subagents and Skills)

## Core Entities

### Subagent
- **id**: string (unique identifier for the subagent)
- **name**: string (display name of the subagent)
- **type**: enum (Robotics-Architect | Urdu-Linguist | Content-Stylist)
- **description**: string (brief description of the subagent's role)
- **personality**: string (detailed personality and behavioral characteristics)
- **constraints**: array of strings (specific constraints and limitations)
- **expertise**: array of strings (areas of expertise)
- **configuration**: object (JSON configuration for the Claude Code agent)

### Skill
- **id**: string (unique identifier for the skill)
- **name**: string (display name of the skill)
- **type**: enum (Technical-Writing-Standards | Robotics-Hardware-Glossary)
- **content**: string (the actual skill content in MDX format)
- **version**: string (version of the skill content)
- **categories**: array of strings (categories the skill belongs to)

### Content
- **id**: string (unique identifier for the content)
- **title**: string (title of the content)
- **language**: string (language code, e.g., 'en', 'ur')
- **format**: string (format of the content, e.g., 'mdx')
- **content**: string (the actual content in MDX format)
- **metadata**: object (additional metadata about the content)
- **status**: enum (draft | reviewed | published | archived)
- **dependencies**: array of strings (other content this depends on)

### AgentWorkflow
- **id**: string (unique identifier for the workflow)
- **name**: string (name of the workflow)
- **steps**: array of objects (ordered steps in the workflow)
  - **step_id**: string (unique identifier for the step)
  - **agent_id**: string (ID of the subagent to execute this step)
  - **input**: string (input data for the step)
  - **output**: string (expected output from the step)
- **status**: enum (pending | running | completed | failed)
- **created_at**: datetime (timestamp when workflow was created)
- **completed_at**: datetime (timestamp when workflow was completed)

## Relationships

### Subagent -> Skill (Many-to-Many)
- Subagents can reference multiple skills during execution
- Skills can be referenced by multiple subagents

### Content -> AgentWorkflow (One-to-Many)
- One piece of content can trigger multiple workflows
- Each workflow processes one piece of content

### AgentWorkflow -> Subagent (Many-to-Many)
- Workflows can involve multiple subagents in sequence
- Subagents can be used in multiple workflows

## Validation Rules

### Subagent Validation
- Name must be unique across all subagents
- Type must be one of the defined enum values
- Personality and constraints must be non-empty strings
- Configuration must be a valid JSON object

### Skill Validation
- Name must be unique across all skills
- Type must be one of the defined enum values
- Content must be valid MDX format
- Version must follow semantic versioning

### Content Validation
- Language must be a valid ISO language code
- Format must be supported (currently 'mdx')
- Status transitions must follow defined rules: draft -> reviewed -> published
- Content must not exceed size limits (10MB)

### AgentWorkflow Validation
- Steps must form a valid sequence without cycles
- Each step must reference a valid subagent
- Status transitions must follow defined rules: pending -> running -> (completed | failed)

## State Transitions

### Content State Transitions
- draft -> reviewed (when reviewed by Content-Stylist)
- reviewed -> published (when approved)
- published -> draft (when content needs updates)
- any -> archived (when content is deprecated)

### AgentWorkflow State Transitions
- pending -> running (when workflow execution starts)
- running -> completed (when all steps succeed)
- running -> failed (when any step fails)
- failed -> pending (when workflow is retried)