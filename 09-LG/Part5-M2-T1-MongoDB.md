### MongoDB 
#### NoSQL 介绍
- Not only SQL (非关系型数据库)

#### NOSQL 分类
- 键值数据库
    - 存储数据时不采用任何模式 极易添加数据
    - Redis, Flare
- 文档型数据库
    - 满足海量数据的存储和访问, 对字段要求不严格
    - MongoDB, CouchDB

#### MongoDB 概念
- 由 C++ 语言编写, 是一个基于分布式文件存储的开源数据库系统
- 是一个介于关系数据库和非关系数据库之间的产品, 是非关系数据库中功能最丰富, 最像关系数据库

#### 适用场景
- 需要处理低价值的数据, 且对数据处理有较高要求
    - 比如微博数据 不需要太高的事务性 但是对存取性能有很高的要求, 
    - 银行系统的数据 就不合适,

- 需要借助缓存层来处理数据
    - 因为 MongoDB 能高效的处理数据, 所以适合作为缓存层使用, 可以避免底层存储的资源过载

- 需要高度的伸缩性
    - 对于关系型数据库而言, 当表的大小达到一个数量级后, 性能会急剧下降, 这时可以使用多台 MongoDB 服务器搭建一个集群环境, 实现最大程度的拓展 而且不影响性能



