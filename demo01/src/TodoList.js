import React from 'react';
import { Input, Button, List } from 'antd';
import store from './store';

import 'antd/dist/antd.css';

function TodoList() {
  console.log(store.getState());
  return (
    <div style={{ margin: '10px' }}>
      <div>
        <Input
          placeholder={store.getState().inputValue}
          style={{ width: '250px', marginRight: '10px' }}
        />
        <Button type='primary'>增加</Button>
      </div>
      <div style={{ margin: '10px', width: '300px' }}>
        <List
          bordered
          dataSource={store.getState().list}
          renderItem={item => (<List.Item>{item}</List.Item>)}
        />
      </div>
    </div>
  )
}

export default TodoList;
