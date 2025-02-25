# 1 应用部署方式的演变
## 1.1 应用部署方式的演变

- 在部署应用程序的方式上，主要经历了三个时代：
- ① 传统部署：
   - 互联网早期，会直接将应用部署在物理机上。
   - 优点：简单，不需要其他的技术参与。
   - 缺点：不能为应用程序定义资源的使用边界，很难合理的分配计算机资源，而且程序之间容易产生影响。
- ② 虚拟化部署：
   - 可以在一台物理机上运行多个虚拟机，每个虚拟机都是独立的一个环境。
   - 优点：程序环境不会相互产生影响，提供了一定程序上的安全性。
   - 缺点：增加了操作系统，浪费了部分资源。
- ③ 容器化部署：
   - 和虚拟化类似，但是共享了操作系统。
   - 优点：
      - ① 可以保证每个容器拥有自己的文件系统、CPU 、内存和进程空间等。
      - ② 运行应用程序所需要的资源都被容器包装，并和底层基础架构解耦。
      - ③ 容器化的应用程序可以跨云服务商、跨 Linux 操作系统发行版进行部署。
## 1.2 容器化部署方式产生的问题及解决方案

- 容器化部署方式带来了很多的便利，但是也会带来一些问题，比如：
   - 一旦容器故障停机了，怎么让另外一个容器立刻启动去替补停机的容器。
   - 当并发访问量变大的时候，怎么做到横向扩展容器数量。
   - ……
- 这些容器管理的问题统称为 `容器编排问题` ，为了解决这些容器编排问题，就产生了一些容器编排的软件：
   - Swarm：Docker 自己的容器编排工具。
   - Mesos：Apache 的一个资源统一管控的工具，需要和 Marathon 结合。
   - Kubernetes：Google 开源的容器编排工具。
# 2 kubernetes 简介

- Kubernetes，是一个全新的基于容器技术的分布式架构领先方案，是 Google 严格保密十几年的秘密武器-- Borg 系统的一个开源版本，于 2014 年 9 月发布第一个版本，2015 年 7 月发布第一个正式版本。
- Kubernetes 的本质是一组服务器集群，它可以在集群的每个节点上运行特定的程序，来对节点中的容器进行管理。它的目的就是实现资源管理的自动化，主要提供了如下的功能：
   - 自我修复：一旦某一个容器崩溃，能够在1秒左右迅速启动新的容器。
   - 弹性伸缩：可以根据需要，自动对集群中正在运行的容器数量进行调整。
   - 服务发现：服务可以通过自动发现的形式找到它所依赖的服务。
   - 负载均衡：如果一个服务启动了多个容器，能够自动实现请求的负载均衡。
   - 版本回退：如果发现新发布的程序版本有问题，可以立即回退到原来的版本。
   - 存储编排：可以根据容器自身的需求自动创建存储卷。
   - ……
# 3 kubernetes 组件
## 3.1 Kubernetes 组件介绍

- 一个 kubernetes 集群主要由控制节点（master）、工作节点（node）构成，每个节点上都会安装不同的组件。
- 控制节点（master）：集群的控制平面，负责集群的决策。
   - API Server：集群操作的唯一入口，接收用户输入的命令，提供认证、授权、API注册和发现等机制。
   - Scheduler：负责集群资源调度，按照预定的调度策略将 Pod 调度到相应的 node 节点上。
   - ControllerManager：负责维护集群的状态，比如程序部署安排、故障检测、自动扩展和滚动更新等。
   - Etcd：负责存储集群中各种资源对象的信息。
- 工作节点（node）：集群的数据平面，负责为容器提供运行环境。
   - Kubelet：负责维护容器的生命周期，即通过控制 Docker ，来创建、更新、销毁容器。
   - KubeProxy：负责提供集群内部的服务发现和负载均衡。
   - Docker：负责节点上容器的各种操作。

![](https://cdn.nlark.com/yuque/0/2020/jpeg/513185/1608888638188-86fad61e-547c-43d9-8424-1d17a0c6d5a2.jpeg?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_35%2Ctext_6K645aSn5LuZ%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10#averageHue=%23bddbef&from=url&id=tjEBF&originHeight=578&originWidth=1216&originalType=binary&ratio=2&rotation=0&showTitle=false&status=done&style=none&title=)
## 3.2 kubernetes 组件调用关系的应用示例

- 以部署一个 Nginx 服务来说明 Kubernetes 系统各个组件调用关系：

- ① 首先需要明确，一旦 Kubernetes 环境启动之后，master 和 node 都会将自身的信息存储到etcd数据库中。
- ② 一个Nginx服务的安装请求首先会被发送到 master 节点上的 API Server 组件。
- ③ API Server 组件会调用 Scheduler 组件来决定到底应该把这个服务安装到那个 node 节点上。此时，它会从 etcd 中读取各个 node 节点的信息，然后按照一定的算法进行选择，并将结果告知 API Server 。
- ④ API Server 调用 Controller-Manager 去调用 Node 节点安装 Nginx 服务。
- ⑤ Kubelet 接收到指令后，会通知 Docker ，然后由 Docker 来启动一个 Nginx 的 Pod 。Pod 是 Kubernetes 的最小操作单元，容器必须跑在 Pod 中。
- ⑥ 一个 Nginx 服务就运行了，如果需要访问 Nginx ，就需要通过 kube-proxy 来对 Pod 产生访问的代理，这样，外界用户就可以访问集群中的 Nginx 服务了。
# 4 kubernetes 概念

- Master：集群控制节点，每个集群要求至少有一个 Master 节点来负责集群的管控。
- Node：工作负载节点，由 Master 分配容器到这些 Node 工作节点上，然后 Node 节点上的 Docker 负责容器的运行。
- Pod：Kubernetes 的最小控制单元，容器都是运行在 Pod 中的，一个 Pod 中可以有一个或多个容器。
- Controller：控制器，通过它来实现对 Pod 的管理，比如启动 Pod 、停止 Pod 、伸缩 Pod 的数量等等。
- Service：Pod 对外服务的统一入口，其下面可以维护同一类的多个 Pod 。
- Label：标签，用于对 Pod 进行分类，同一类 Pod 会拥有相同的标签。
- NameSpace：命名空间，用来隔离 Pod 的运行环境。
#  
