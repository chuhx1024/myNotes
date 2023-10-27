<template>
    <a-table :columns="columns" :data-source="data">
      <a slot="name" slot-scope="text">{{ text }}</a>
      <span slot="customTitle"><a-icon type="smile-o" /> 我是自定名字</span>
      <span slot="tags" slot-scope="tags">
        <a-tag
          v-for="tag in tags"
          :key="tag"
          :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'"
        >
          {{ tag.toUpperCase() }}
        </a-tag>
      </span>
      <span slot="action" slot-scope="text, record">
        <a>Invite 一 {{ record.name }}</a>
        <a-divider type="vertical" />
        <a @click="handleDel(record.id)">Delete</a>
        <a-divider type="vertical" />
        <a class="ant-dropdown-link"> More actions <a-icon type="down" /> </a>
      </span>
    </a-table>
</template>
<script>
  export default {
    data() {
      return {
        data: [
            {
                key: '1',
                name: 'John Brown',
                age: 32,
                address: 'New York No. 1 Lake Park',
                tags: ['nice', 'developer'],
            },
            {
                key: '2',
                name: 'Jim Green',
                age: 42,
                address: 'London No. 1 Lake Park',
                tags: ['loser'],
            },
            {
                key: '3',
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
                tags: ['cool', 'teacher'],
            },
        ];,
        columns:  [
            {
                dataIndex: 'name',
                key: 'name',
                slots: { title: 'customTitle' },
                scopedSlots: { customRender: 'name' },
            },
            {
                title: '年龄',
                dataIndex: 'age',
                key: 'age',
            },
            {
                title: 'Address',
                dataIndex: 'address',
                key: 'address',
            },
            {
                title: '标签',
                key: 'tags',
                dataIndex: 'tags',
                scopedSlots: { customRender: 'tags' },
            },
            {
                title: '操作',
                key: 'action',
                scopedSlots: { customRender: 'action' },
            },
        ];
        status: 0
      };
    },
    computed: {
        formatStatus () {
            const obj = {
              0: '已完成',
              1: '进行中'
            }
            return obj[this.status]
        },
    },
    watch: {
      status (oldVal, newVal) {
        alert('status 数据改变了!')
      }
    }
    methods: {
        handleDel(id) {
            // 发送AJAX ....
        }
    }
  };
</script>
  
  
  