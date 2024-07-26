import React, { useState } from 'react';
import './Dashboard.css';
import { Table, Button, Drawer, Form, Input } from 'antd';
import { MoreOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';

const EmployeeTable = () => {
  const [dataSource, setDataSource] = useState([
    {
      key: '1',
      EmployeeName: 'John Brown',
      EmployeeNumber: '9878675645',
      Location: 'Tenkasi',
      Action: <MoreOutlined />,
      Qualification:'BBA',
    },
    {
      key: '2',
      EmployeeName: 'Jim Green',
      EmployeeNumber: '7594789356',
      Location: 'Chennai',
      Action: <MoreOutlined />,
      Qualification:'BBA',
    },
    {
      key: '3',
      EmployeeName: 'Joe Black',
      EmployeeNumber: '9457456783',
      Location: 'Coimbatore',
      Action: <MoreOutlined />,
      Qualification:'BBA',
    },
  ]);

  const [drawerVisible, setDrawerVisible] = useState(false);
  const [form] = Form.useForm();

  interface DataType {
    key: string;
    EmployeeName: string;
    EmployeeNumber: string;
    Location: string;
    Action: React.ReactNode;
    Qualification:String;
  }

  const columns: ColumnsType<DataType> = [
    {
      title: 'S.No',
      dataIndex: 'sno',
      key: 'sno',
      render: (text, record, index) => index + 1,
    },
    {
      title: 'Employee Name',
      dataIndex: 'EmployeeName',
      key: 'EmployeeName',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Employee Number',
      dataIndex: 'EmployeeNumber',
      key: 'EmployeeNumber',
    },
    {
      title: 'Location',
      dataIndex: 'Location',
      key: 'Location',
    },
    {
      title: 'Action',
      dataIndex: 'Action',
      key: 'Action',
    },
    {
    title: 'Qualification',
    dataIndex: 'Qualification',
    key:'Qualification',
    }
  ];

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  const handleSubmit = (values) => {
    const newEmployee = { 
      key: Date.now().toString(),
      EmployeeName: values.EmployeeName,
      EmployeeNumber: values.EmployeeNumber,
      Location: values.Location,
      Action: <MoreOutlined />,
      Qualification: values.Qualification,
    };
    setDataSource([...dataSource, newEmployee]);
    form.resetFields();
    closeDrawer();
  };

  return (
    <>
      <div className='Container-table'>
        <div className='Box'>
          <h1><span>Tech</span> Lambdas</h1>
        </div>
        <div className='Table-form'>
          <p>All Employees</p>
          <Button onClick={showDrawer} style={{background:"rgb(31,203,79)",color:"black"}}>
             Add New
          </Button>

          <Table dataSource={dataSource} columns={columns} pagination={false} />

          <Drawer
            title="Add Employee"
            width={360}
            onClose={closeDrawer}
            visible={drawerVisible}
            footer={
              <div>
                <Button onClick={closeDrawer} style={{ marginRight: 30 }}>
                  Close
                </Button>
                <Button type="primary" onClick={() => form.submit()} style={{background:"rgb(31,203,79)"}}>
                  Submit
                </Button>
              </div>
            }
          >
            <Form
              layout="vertical"
              form={form}
              onFinish={handleSubmit}
              initialValues={{
                EmployeeName: '',
                EmployeeNumber: '',
                Location: '',
                Action:'',
                Qualification:'',
              }}
            >
              <Form.Item
                label="Employee Name"
                name="EmployeeName"
                rules={[{ required: true, message: 'Please input the employee name!' }]}
              >
                <Input placeholder="Enter employee name" />
              </Form.Item>

              <Form.Item
                label="Employee Number"
                name="EmployeeNumber"
                rules={[
                  { required: true, message: 'Please enter the employee number!' },
                  { pattern: /^[0-9]{10}$/, message: 'Please enter a valid 10-digit employee number!' },
                ]}
              >
                <Input placeholder="Enter employee number" />
              </Form.Item>

              <Form.Item
                label="Location"
                name="Location"
                rules={[{ required: true, message: 'Please enter the location!' }]}
              >
                <Input placeholder="Enter location" />
                
              </Form.Item>
              <h1 style={{color:"rgb(31,203,79)"}}>Qualification</h1>
              <Form.Item
                label="Qualification"
                name="Qualification"
                rules={[{ required: true, message: 'Please enter the location!' }]}
              >
                <Input placeholder="Enter Qualification" />
                
              </Form.Item>
            </Form>
          </Drawer>
        </div>
      </div>
    </>
  );
};

export default EmployeeTable;
