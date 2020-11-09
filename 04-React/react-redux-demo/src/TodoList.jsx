import React from 'react'
import { Input, Button, List } from 'antd'
export default class TodoList extends React.Component {
    
    render () {
        const listData = [
            '早上8点开会',
            '9点需求讨论',
            '晚上5点对接 代码 review'
        ]
        return (
            <>
                <div style={{ padding: '30px 20px'}}>
                    <Input placeholder="Basic usage" style={{ width: '200px', marginRight: '10px'}} />
                    <Button type="primary">增加</Button>
                </div>
                <div>
                    <List
                        header={<div>Header</div>}
                        footer={<div>Footer</div>}
                        bordered
                        dataSource={listData}
                        renderItem={item => (
                            <List.Item>
                            {item}
                            </List.Item>
                        )}
                    />
                </div>
            </>
        )
    }
}