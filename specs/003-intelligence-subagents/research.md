# Research: Intelligence Layer (Subagents and Skills)

## Agent System Prompts

### Robotics-Architect Subagent
- **Personality**: Technical expert with deep knowledge of ROS 2 Humble, NVIDIA Isaac Sim, and Humanoid Kinematics
- **Constraints**:
  - Must provide accurate technical information based on latest documentation
  - Generate code examples in ROS 2 Python (rclpy) following established standards
  - Focus on practical implementation details
  - Reference NVIDIA Isaac Sim 2023.1+ features specifically
- **Prompt Template**:
  ```
  You are a Robotics-Architect AI assistant specializing in ROS 2 Humble, NVIDIA Isaac Sim, and Humanoid Kinematics. Your role is to generate technically accurate content and code examples for robotics education. Always provide practical, implementation-ready solutions based on the latest documentation. Follow ROS 2 Python (rclpy) standards and ensure all code examples are complete, tested, and properly documented.
  ```

### Urdu-Linguist Subagent
- **Personality**: Technical translator with expertise in converting complex robotics concepts to natural Urdu
- **Constraints**:
  - Maintain technical precision while using natural Urdu language
  - Preserve mathematical formulas and code snippets in original form
  - Use transliteration for robotics-specific terms when direct translation is inadequate
  - Support i18n/ur directory for Urdu content generation
- **Prompt Template**:
  ```
  You are an Urdu-Linguist AI assistant specializing in technical translation. Your role is to convert complex robotics concepts into natural, accurate Urdu while maintaining technical precision. Preserve code snippets and mathematical formulas in their original form. Use transliteration for robotics-specific terms when direct translation is inadequate. Generate content for the i18n/ur directory following internationalization standards.
  ```

### Content-Stylist Subagent
- **Personality**: Content editor focused on maintaining 'Startup Founder' tone and proper MDX formatting
- **Constraints**:
  - Maintain consistent 'Startup Founder' voice throughout content
  - Ensure proper MDX component usage (Action Bar, Callouts)
  - Follow technical writing standards for educational content
  - Preserve technical accuracy while improving readability
- **Prompt Template**:
  ```
  You are a Content-Stylist AI assistant responsible for maintaining the 'Startup Founder' tone and ensuring proper MDX component usage. Apply consistent branding voice, format content with appropriate MDX components (Action Bar, Callouts), and ensure educational content is accessible while maintaining technical accuracy.
  ```

## Skill Knowledge Base: Robotics-Hardware-Glossary

### NVIDIA Jetson Orin Nano
- **Model**: Jetson Orin Nano Developer Kit
- **GPU**: 1024-core NVIDIA Ampere architecture GPU
- **CPU**: Quad-core Arm Cortex-A78AE v8.2 64-bit CPU
- **DL Accelerator**: 4x Tensor Cores
- **Memory**: 4GB or 8GB LPDDR5
- **Storage**: MicroSD card slot, eMMC support
- **Power**: 7W to 15W consumption modes
- **Connectivity**: Gigabit Ethernet, M.2 Key E slot for Wi-Fi/Bluetooth
- **Sensors**: MIPI CSI-2 interfaces for camera modules
- **ROS Support**: Full ROS 2 Humble Hawksbill compatibility

### Unitree G1
- **Type**: Humanoid Robot Platform
- **Height**: 1.45m
- **Weight**: 32kg
- **Degrees of Freedom**: 32 (16 per leg, 4 per arm)
- **Actuators**: High-torque servo actuators
- **Sensors**: IMU, force sensors, cameras
- **Battery Life**: 2+ hours operation time
- **Control**: Real-time control system
- **Programming**: SDK for ROS 2 integration
- **Capabilities**: Walking, balancing, basic manipulation

### Intel RealSense D435i
- **Type**: Stereo Depth Camera with IMU
- **Depth Technology**: Active stereo vision
- **Depth Accuracy**: ±2% at 1m distance
- **Depth Range**: 0.25m to 9.1m
- **Resolution**: 1280×720 at 30/60 FPS
- **FOV**: 87°×58°±5° (H×V±5°)
- **IMU**: Gyroscope and accelerometer
- **Connectivity**: USB 3.2 Gen 1 Type-C
- **Operating Range**: 0°C to 40°C
- **ROS Support**: RealSense ROS 2 package

## Workflow Orchestration

### Agent Interaction Flow
1. **Content Generation Phase**:
   - Content creator initiates content creation request
   - Robotics-Architect generates technical MDX content with ROS 2 examples
   - Output includes properly formatted MDX with code blocks and diagrams

2. **Translation Phase**:
   - Urdu-Linguist processes English MDX content
   - Preserves code blocks and technical diagrams
   - Translates prose content to Urdu
   - Places output in i18n/ur directory structure
   - Performs delta-translations to update only changed content

3. **Styling Phase**:
   - Content-Stylist reviews and applies consistent formatting
   - Ensures 'Startup Founder' tone throughout
   - Applies proper MDX components (Callouts, Action Bars)
   - Final quality check before publishing

### Technical Implementation
- **Orchestration Service**: agent-service.js coordinates the workflow
- **State Management**: Track content through each phase
- **Error Handling**: Fallback to cached results when external dependencies fail
- **Caching**: Store intermediate results to improve performance

## Code Block Standards for ROS 2 Python (rclpy)

### Standard Template
```python
import rclpy
from rclpy.node import Node
from std_msgs.msg import String  # Import appropriate message types

class MyRobotController(Node):
    def __init__(self):
        super().__init__('robot_controller')
        # Initialize publishers, subscribers, and parameters
        self.publisher = self.create_publisher(String, 'topic_name', 10)
        self.timer = self.create_timer(0.5, self.timer_callback)

    def timer_callback(self):
        # Implementation logic here
        msg = String()
        msg.data = 'Hello from robot controller'
        self.publisher.publish(msg)

def main(args=None):
    rclpy.init(args=args)
    node = MyRobotController()
    try:
        rclpy.spin(node)
    except KeyboardInterrupt:
        pass
    finally:
        node.destroy_node()
        rclpy.shutdown()

if __name__ == '__main__':
    main()
```

### Standards
- Always include proper imports at the top
- Use descriptive class and function names
- Include comments explaining non-obvious logic
- Follow PEP 8 style guidelines
- Include error handling where appropriate
- Use appropriate message types from ROS 2 standard packages
- Include main() function with proper shutdown sequence

## MDX Component Integration

### Action Bar Component Mapping
- **English to Urdu Translation Button**:
  - Triggers Urdu-Linguist subagent
  - Processes current page content
  - Generates Urdu version in i18n/ur directory
  - Updates navigation to include Urdu version

### Implementation Plan
- **Placeholder Components**: Create stub components for Action Bar functionality
- **API Endpoints**: Define endpoints for triggering agent workflows
- **State Management**: Track translation status and cache results
- **UI Integration**: Integrate with existing Docusaurus theme

## Directory Structure Implementation

### .claude/agents/ directory
- Contains JSON configuration files for each subagent
- Each file specifies personality, constraints, and behavior patterns
- Follows Claude Code agent configuration standards

### .claude/skills/ directory
- Contains MDX files with specialized knowledge
- Skills are referenced by subagents during execution
- Follows Claude Code skill format specifications