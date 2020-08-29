import React from 'react';
import { Input, Button, List } from 'antd';

import 'antd/dist/antd.css';

const data = [
  'item 1',
  'item 2',
  'item 3',
];

function TodoList() {
  return (
    <div style={{ margin: '10px' }}>
      <div>
        <Input
          placeholder='to do'
          style={{ width: '250px', marginRight: '10px' }}
        />
        <Button type='primary'>增加</Button>
      </div>
      <div style={{ margin: '10px', width: '300px' }}>
        <List
          bordered
          dataSource={data}
          renderItem={item => (<List.Item>{item}</List.Item>)}
        />
      </div>
    </div>
  )
}

export default TodoList;
