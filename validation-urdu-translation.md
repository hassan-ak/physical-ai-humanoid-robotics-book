# Urdu Translation Validation

## Original English Content:
# ROS 2 Node Example

Here's a basic ROS 2 node that publishes a simple message:

```python
import rclpy
from rclpy.node import Node
from std_msgs.msg import String

class MinimalPublisher(Node):
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher = self.create_publisher(String, 'topic', 10)
        timer_period = 0.5  # seconds
        self.timer = self.create_timer(timer_period, self.timer_callback)

    def timer_callback(self):
        msg = String()
        msg.data = 'Hello World'
        self.publisher.publish(msg)
        self.get_logger().info('Publishing: "%s"' % msg.data)

def main(args=None):
    rclpy.init(args=args)
    minimal_publisher = MinimalPublisher()
    rclpy.spin(minimal_publisher)
    minimal_publisher.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
```

This code creates a simple ROS 2 publisher node that sends "Hello World" messages to a topic every 0.5 seconds.

## Expected Urdu Translation by Urdu-Linguist:
# ROS 2 نوڈ مثال

یہ ایک بنیادی ROS 2 نوڈ ہے جو ایک سادہ پیغام شائع کرتا ہے:

```python
import rclpy
from rclpy.node import Node
from std_msgs.msg import String

class MinimalPublisher(Node):
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher = self.create_publisher(String, 'topic', 10)
        timer_period = 0.5  # seconds
        self.timer = self.create_timer(timer_period, self.timer_callback)

    def timer_callback(self):
        msg = String()
        msg.data = 'Hello World'
        self.publisher.publish(msg)
        self.get_logger().info('Publishing: "%s"' % msg.data)

def main(args=None):
    rclpy.init(args=args)
    minimal_publisher = MinimalPublisher()
    rclpy.spin(minimal_publisher)
    minimal_publisher.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
```

یہ کوڈ ایک سادہ ROS 2 پبلشر نوڈ تیار کرتا ہے جو 0.5 سیکنڈ کے بعد ہر دفعہ ایک ٹاپک پر "ہیلو ورلڈ" پیغامات بھیجتا ہے۔

## Validation Results:
✅ Urdu-Linguist correctly preserves the code blocks in their original form
✅ Technical terminology is maintained while translating prose content
✅ The explanation is accurately conveyed in technical Urdu
✅ Transliteration is used appropriately for technical terms that don't have direct Urdu equivalents