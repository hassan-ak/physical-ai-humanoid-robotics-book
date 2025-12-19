# Research: Digital Twin Physics Simulation and Humanoid Modeling

## Decision: Sim-to-Real Bridge for Unitree G1
**Rationale**: Understanding how Gazebo physics parameters translate to real-world behavior is crucial for creating accurate digital twins. For the Unitree G1 humanoid robot, friction parameters in simulation must accurately reflect real-world contact dynamics.

**Key Parameters**:
- Contact parameters: mu1 and mu2 (friction coefficients)
- kp and kd (contact stiffness and damping)
- max_vel and min_depth (penetration limits)

**Real-world mapping**:
- Static friction coefficient in simulation should match real-world coefficient of robot's foot material on various surfaces
- Damping parameters should reflect energy loss during contact in the real system

## Decision: Robot State Publisher and Joint State Publisher Interaction
**Rationale**: The Robot State Publisher and Joint State Publisher work together to visualize robots in RViz and Gazebo by providing coordinate transforms.

**Technical Logic**:
- Joint State Publisher: Subscribes to joint_states topic, publishes individual joint positions
- Robot State Publisher: Subscribes to joint_states, computes forward kinematics to publish tf transforms
- The tf tree allows RViz/Gazebo to properly visualize the robot's pose in 3D space

## Decision: Simulation Terms Glossary for Urdu Localization
**Rationale**: Creating a standardized glossary ensures consistent technical terminology in Urdu localization.

**Glossary Items**:
- Rigid Body Dynamics: سخت جسم کی متحرکات (Sakht Jism ki Muharrikat)
- Visual geometry: بصری جیومیٹری (Basri Jyometri)
- Collision geometry: اصطدام جیومیٹری (Istadam Jyometri)
- Physics Engine: طاقت کا انجن (Quwwat ka Injin)
- Joint Limits: مشترکہ حدیں (Mushtarika Hadain)
- Inertial Properties: لادل کی خصوصیات (Ladl ki Khasusiat)

## Decision: Simulation Loop Diagram Structure
**Rationale**: Mermaid.js flowcharts will help visualize the simulation loop for educational purposes.

**Planned Diagram Flow**:
```
Simulation Loop:
Physics Update -> Sensor Data Generation -> Controller Processing -> Actuator Commands -> Physics Update (cycle)
```

This flowchart will help students understand the iterative nature of robot simulation where physics simulation drives sensor data, which influences controller decisions, which affect actuator commands, which feed back into the physics simulation.