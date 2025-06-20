import { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";

export default function CustomForm() {
  // State to store user input values
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: 0,
    email: "",
  });

  // Handles form submission when all fields are valid
  const onFinish = async (values) => {
    console.log("Success:", values);
    // Send form data to backend API
    try {
      const res = await fetch(
        "http://localhost/Test/backend/routes/addUser.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );

      const result = await res.json();
      console.log("Server response:", result);
    } catch (err) {
      console.error("Failed to send user:", err);
    }
  };

  // Handles form submission failure (validation errors)
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  // Updates userInfo state on input change
  const handleChange = (e) => {
    setUserInfo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Renders the form UI
  return (
    <div className="flex items-start">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="flex flex-col justify-start"
      >
        {/* First Name input field */}
        <Form.Item
          label="First Name"
          name="firstName"
          rules={[{ required: true, message: "Please input your first name!" }]}
        >
          <Input onChange={handleChange} />
        </Form.Item>

        {/* Last Name input field */}
        <Form.Item
          label="Last Name"
          name="lastName"
          rules={[{ required: true, message: "Please input your last name!" }]}
        >
          <Input onChange={handleChange} />
        </Form.Item>

        {/* Phone Number input field */}
        <Form.Item
          label="Phone"
          name="phoneNumber"
          rules={[
            { required: true, message: "Please input your Phone Number!" },
          ]}
        >
          <Input onChange={handleChange} />
        </Form.Item>

        {/* Email input field */}
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please input your Email Address!" },
          ]}
        >
          <Input onChange={handleChange} />
        </Form.Item>

        {/* Remember me checkbox */}
        <Form.Item name="remember" valuePropName="checked" label={null}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        {/* Submit button */}
        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
