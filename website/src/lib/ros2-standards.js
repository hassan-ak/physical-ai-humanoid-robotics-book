/**
 * ROS 2 Python Code Standards Utilities
 * Utility functions for generating and validating ROS 2 Python (rclpy) code examples
 * following the standards specified in the Robotics-Hardware-Glossary skill
 */

/**
 * Generate standard ROS 2 Python node template with OOP approach
 */
export function generateRclpyNodeTemplate(options = {}) {
  const {
    nodeName = 'minimal_publisher',
    packageName = 'my_robot_pkg',
    imports = ['rclpy', 'rclpy.node', 'std_msgs.msg'],
    additionalImports = [],
    classMethods = [],
    hasPublisher = true,
    hasSubscriber = false,
    hasService = false,
    hardwareTarget = null,
    physicalAIRelevance = null
  } = options;

  // Construct imports
  let importStatements = '';
  if (imports.includes('rclpy')) {
    importStatements += 'import rclpy\n';
  }
  if (imports.includes('rclpy.node')) {
    importStatements += 'from rclpy.node import Node\n';
  }
  if (imports.includes('std_msgs.msg')) {
    importStatements += 'from std_msgs.msg import String\n';
  }

  // Add any additional imports
  additionalImports.forEach(imp => {
    importStatements += `import ${imp}\n`;
  });

  // Create the class definition
  let classDefinition = `class ${nodeName.charAt(0).toUpperCase() + nodeName.slice(1)}(Node):
    def __init__(self):
        super().__init__('${nodeName}')

        # Initialize ${hardwareTarget || 'robot'}-specific parameters
        self.declare_parameter('loop_frequency', 1.0)
        self.loop_frequency = self.get_parameter('loop_frequency').value

`;

  if (hasPublisher) {
    classDefinition += `        self.publisher = self.create_publisher(String, 'topic', 10)\n`;
  }
  if (hasSubscriber) {
    classDefinition += `        self.subscription = self.create_subscription(String, 'topic', self.listener_callback, 10)\n`;
  }

  classDefinition += `        timer_period = 0.5  # seconds
        self.timer = self.create_timer(timer_period, self.timer_callback)
`;

  if (physicalAIRelevance) {
    classDefinition += `        self.get_logger().info("${physicalAIRelevance.replace(/"/g, "'")}")\n`;
  }

  if (hasSubscriber) {
    classDefinition += `
    def listener_callback(self, msg):
        self.get_logger().info(f'I heard: "{msg.data}"')
`;
  }

  classDefinition += `
    def timer_callback(self):
        msg = String()
        msg.data = 'Hello World'
`;

  if (hasPublisher) {
    classDefinition += `        self.publisher.publish(msg)\n`;
  }

  classDefinition += `        self.get_logger().info('Publishing: "%s"' % msg.data)

def main(args=None):
    rclpy.init(args=args)
    ${nodeName} = ${nodeName.charAt(0).toUpperCase() + nodeName.slice(1)}()

    try:
        rclpy.spin(${nodeName})
    except KeyboardInterrupt:
        pass
    finally:
        ${nodeName}.destroy_node()
        rclpy.shutdown()

if __name__ == '__main__':
    main()`;

  return {
    template: `${importStatements ? importStatements + '\n' : ''}${classDefinition}`,
    nodeName,
    packageName,
    hardwareTarget,
    physicalAIRelevance,
    generatedAt: new Date().toISOString(),
    standardCompliance: 'ROS 2 Humble, OOP rclpy'
  };
}

/**
 * Generate ROS 2 publisher node example
 */
export function generateRclpyPublisher(options = {}) {
  const {
    nodeName = 'minimal_publisher',
    topicName = 'chatter',
    messageType = 'std_msgs.msg.String',
    hardwareTarget = null,
    physicalAIRelevance = 'This publisher node demonstrates real-time sensor data broadcasting from a humanoid robot platform'
  } = options;

  return generateRclpyNodeTemplate({
    nodeName,
    imports: ['rclpy', 'rclpy.node', messageType.includes('std_msgs') ? 'std_msgs.msg' : messageType.replace('::', '.')],
    hasPublisher: true,
    hasSubscriber: false,
    hardwareTarget,
    physicalAIRelevance
  });
}

/**
 * Generate ROS 2 subscriber node example
 */
export function generateRclpySubscriber(options = {}) {
  const {
    nodeName = 'minimal_subscriber',
    topicName = 'chatter',
    messageType = 'std_msgs.msg.String',
    hardwareTarget = null,
    physicalAIRelevance = 'This subscriber node demonstrates perception processing in a humanoid robot control system'
  } = options;

  return generateRclpyNodeTemplate({
    nodeName,
    imports: ['rclpy', 'rclpy.node', messageType.includes('std_msgs') ? 'std_msgs.msg' : messageType.replace('::', '.')],
    hasPublisher: false,
    hasSubscriber: true,
    hardwareTarget,
    physicalAIRelevance
  });
}

/**
 * Generate ROS 2 service server/client examples
 */
export function generateRclpyService(options = {}) {
  const {
    serviceName = 'add_two_ints',
    serviceType = 'example_interfaces.srv.AddTwoInts',
    hardwareTarget = null,
    physicalAIRelevance = 'This service demonstrates actuator control commands in a humanoid robot system'
  } = options;

  const serviceServer = `import rclpy
from rclpy.node import Node
from example_interfaces.srv import AddTwoInts

class ${serviceName.charAt(0).toUpperCase() + serviceName.slice(1)}Service(Node):
    def __init__(self):
        super().__init__('${serviceName}_service')
        self.srv = self.create_service(AddTwoInts, '${serviceName}', self.add_two_ints_callback)
        ${physicalAIRelevance ? `self.get_logger().info("${physicalAIRelevance.replace(/"/g, "'")}")` : ''}

    def add_two_ints_callback(self, request, response):
        response.sum = request.a + request.b
        self.get_logger().info('Request: {{}} + {{}} = {{}}'.format(request.a, request.b, response.sum))
        return response

def main(args=None):
    rclpy.init(args=args)
    service_node = ${serviceName.charAt(0).toUpperCase() + serviceName.slice(1)}Service()

    try:
        rclpy.spin(service_node)
    except KeyboardInterrupt:
        pass
    finally:
        service_node.destroy_node()
        rclpy.shutdown()

if __name__ == '__main__':
    main()`;

  const serviceClient = `import sys
import rclpy
from rclpy.node import Node
from example_interfaces.srv import AddTwoInts

class ${serviceName.charAt(0).toUpperCase() + serviceName.slice(1)}Client(Node):
    def __init__(self):
        super().__init__('${serviceName}_client')
        self.cli = self.create_client(AddTwoInts, '${serviceName}')
        while not self.cli.wait_for_service(timeout_sec=1.0):
            self.get_logger().info('Service not available, waiting again...')
        self.request = AddTwoInts.Request()

    def send_request(self, a, b):
        self.request.a = a
        self.request.b = b
        future = self.cli.call_async(self.request)
        return future

def main(args=None):
    rclpy.init(args=args)
    client = ${serviceName.charAt(0).toUpperCase() + serviceName.slice(1)}Client()

    future = client.send_request(int(sys.argv[1]), int(sys.argv[2]))

    try:
        rclpy.spin_until_future_complete(client, future)
        response = future.result()
        client.get_logger().info('Result: {{}}'.format(response.sum))
    except Exception as e:
        client.get_logger().error('Service call failed: {{}}'.format(e))
    finally:
        client.destroy_node()
        rclpy.shutdown()

if __name__ == '__main__':
    main()`;

  return {
    server: serviceServer,
    client: serviceClient,
    serviceName,
    serviceType,
    hardwareTarget,
    physicalAIRelevance,
    generatedAt: new Date().toISOString(),
    standardCompliance: 'ROS 2 Humble, OOP rclpy'
  };
}

/**
 * Generate URDF-related Python examples for robot description
 */
export function generateUrdfPythonExamples(options = {}) {
  const {
    robotName = 'humanoid_robot',
    hardwareTarget = 'Unitree G1',
    physicalAIRelevance = 'This URDF loader demonstrates how Physical AI systems understand robot kinematic structure'
  } = options;

  const urdfLoaderExample = `import rclpy
from rclpy.node import Node
from rcl_interfaces.msg import ParameterDescriptor
import xml.dom.minidom

class UrdfLoaderNode(Node):
    def __init__(self):
        super().__init__('urdf_loader')

        # Declare URDF parameter
        self.declare_parameter(
            'robot_description',
            descriptor=ParameterDescriptor(description='URDF description of the robot')
        )

        # Load URDF for ${hardwareTarget}
        self.load_urdf_from_file('${robotName}.urdf')
        ${physicalAIRelevance ? `self.get_logger().info("${physicalAIRelevance.replace(/"/g, "'")}")` : ''}

    def load_urdf_from_file(self, urdf_file):
        try:
            with open(urdf_file, 'r') as file:
                urdf_string = file.read()

            # Parse URDF
            dom = xml.dom.minidom.parseString(urdf_string)
            robot_nodes = dom.getElementsByTagName('robot')

            if robot_nodes.length > 0:
                robot_name = robot_nodes[0].getAttribute('name')
                self.get_logger().info('Loaded URDF for robot: {{}}'.format(robot_name))

                # Process joints and links for kinematic calculations
                self.process_kinematic_chains(dom)
        except Exception as e:
            self.get_logger().error('Failed to load URDF: {{}}'.format(e))

    def process_kinematic_chains(self, dom):
        # Process the kinematic structure of the ${hardwareTarget}
        joints = dom.getElementsByTagName('joint')
        self.get_logger().info('Found {{}} joints in ${hardwareTarget} kinematic chain'.format(joints.length))

def main(args=None):
    rclpy.init(args=args)
    urdf_loader = UrdfLoaderNode()

    try:
        rclpy.spin(urdf_loader)
    except KeyboardInterrupt:
        pass
    finally:
        urdf_loader.destroy_node()
        rclpy.shutdown()

if __name__ == '__main__':
    main()`;

  return {
    example: urdfLoaderExample,
    robotName,
    hardwareTarget,
    physicalAIRelevance,
    generatedAt: new Date().toISOString(),
    standardCompliance: 'ROS 2 Humble, OOP rclpy, URDF integration'
  };
}

/**
 * Validate ROS 2 Python code against standards
 */
export function validateRclpyCode(code) {
  const issues = [];

  // Check for proper rclpy initialization
  if (!code.includes('rclpy.init(')) {
    issues.push({
      type: 'missing-init',
      message: 'ROS 2 Python code should initialize with rclpy.init()'
    });
  }

  // Check for proper node inheritance
  if (!code.includes('Node') && code.includes('rclpy.node')) {
    issues.push({
      type: 'missing-node-inheritance',
      message: 'ROS 2 Python nodes should inherit from Node class'
    });
  }

  // Check for proper shutdown
  if (!code.includes('rclpy.shutdown(') && !code.includes('rclpy.shutdown()')) {
    issues.push({
      type: 'missing-shutdown',
      message: 'ROS 2 Python code should properly shutdown with rclpy.shutdown()'
    });
  }

  // Check for proper exception handling
  if (!code.includes('try:') && !code.includes('except:')) {
    issues.push({
      type: 'missing-exception-handling',
      message: 'ROS 2 Python code should include exception handling, especially for rclpy.spin()'
    });
  }

  // Check for OOP patterns (classes with methods)
  const classPattern = /class\s+\w+\s*\([^)]*Node[^)]*\)\s*:/;
  if (!classPattern.test(code)) {
    issues.push({
      type: 'non-oop-pattern',
      message: 'ROS 2 Python code should use OOP patterns with Node inheritance'
    });
  }

  return {
    isValid: issues.length === 0,
    issues,
    codeLength: code.length,
    hasRclpyInit: code.includes('rclpy.init('),
    hasNodeInheritance: /class\s+\w+\s*\([^)]*Node[^)]*\)/.test(code),
    hasProperShutdown: code.includes('rclpy.shutdown(') || code.includes('rclpy.shutdown()'),
    hasExceptionHandling: code.includes('try:') || code.includes('except:'),
    validatedAt: new Date().toISOString()
  };
}

/**
 * Generate code annotation explaining Physical AI relevance
 */
export function generatePhysicalAIAnnotation(codeBlock, hardwareTarget = null, useCase = null) {
  const timestamp = new Date().toISOString();

  let annotation = `# Physical AI Relevance Annotation - ${timestamp}\n`;

  if (hardwareTarget) {
    annotation += `# This code runs on ${hardwareTarget} for embodied intelligence applications\n`;
  }

  if (useCase) {
    annotation += `# ${useCase}\n`;
  }

  annotation += `# Demonstrates how digital AI systems interface with physical humanoid platforms\n`;
  annotation += `# Code follows ROS 2 Humble standards for robotics applications\n`;

  // Insert the annotation at the beginning of the code block
  const lines = codeBlock.split('\n');
  lines.splice(0, 0, annotation);

  return lines.join('\n');
}

/**
 * Apply standard formatting to ROS 2 Python code
 */
export function formatRclpyCode(code) {
  // This would normally use a Python formatter like black
  // For now, we'll just ensure basic formatting standards

  // Ensure proper imports are at the top
  const importMatch = code.match(/^(import\s+.+|from\s+.+\s+import\s+.+)/gm);
  if (importMatch) {
    // Remove duplicate imports
    const uniqueImports = [...new Set(importMatch)];
    const codeWithoutImports = code.replace(/^(import\s+.+|from\s+.+\s+import\s+.+)\s*/gm, '');
    return uniqueImports.join('\n') + '\n\n' + codeWithoutImports.trim();
  }

  return code;
}

/**
 * Generate standardized ROS 2 Humble Python example for specific hardware
 */
export function generateHardwareSpecificExample(hardware, exampleType = 'basic') {
  switch (hardware.toLowerCase()) {
    case 'jetson orin nano':
      if (exampleType === 'basic') {
        return generateRclpyPublisher({
          nodeName: 'jetson_sensor_publisher',
          topicName: 'sensor_data',
          hardwareTarget: 'Jetson Orin Nano',
          physicalAIRelevance: 'This publisher demonstrates how Jetson Orin Nano processes and broadcasts sensor data in a Physical AI system'
        });
      }
      break;

    case 'unitree g1':
      if (exampleType === 'basic') {
        return generateRclpyPublisher({
          nodeName: 'g1_motor_controller',
          topicName: 'motor_commands',
          hardwareTarget: 'Unitree G1',
          physicalAIRelevance: 'This publisher demonstrates motor control commands for the Unitree G1 humanoid platform in Physical AI applications'
        });
      }
      break;

    case 'realsense d435i':
      if (exampleType === 'basic') {
        return generateRclpyPublisher({
          nodeName: 'realsense_depth_publisher',
          topicName: 'depth_image',
          hardwareTarget: 'Intel RealSense D435i',
          physicalAIRelevance: 'This publisher demonstrates depth image processing from RealSense D435i for 3D perception in Physical AI systems'
        });
      }
      break;
  }

  // Default example if hardware not recognized
  return generateRclpyNodeTemplate({
    hardwareTarget: hardware,
    physicalAIRelevance: `This code example demonstrates ${hardware} integration in Physical AI systems`
  });
}