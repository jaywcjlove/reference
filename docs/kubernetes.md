Kubernetes 备忘清单
===

查看资源信息
---

### 节点

资源名称: nodes, 缩写: no

```bash
$ kubectl get no          # 显示所有节点信息
# 显示所有节点的更多信息
$ kubectl get no -o wide  
$ kubectl describe no     # 显示节点详情
# 以yaml格式，显示节点详情
$ kubectl get no -o yaml  
# 筛选指定标签的节点
$ kubectl get node --selector=[label_name] 
# 输出 jsonpath 表达式定义的字段信息
$ kubectl get nodes -o jsonpath='{.items[*].status.addresses[?(@.type=="ExternalIP")].address}'
# 显示节点(CPU/内存/存储)使用情况
$ kubectl top node [node_name]
```

### 容器组
<!--rehype:wrap-class=col-span-2-->

资源名称: pods, 缩写: po

```bash
$ kubectl get po              # 显示所有容器组信息
$ kubectl get po -o wide
$ kubectl describe po
$ kubectl get po --show-labels # 查看容器组的labels
$ kubectl get po -l app=nginx
$ kubectl get po -o yaml
$ kubectl get pod [pod_name] -o yaml --export
$ kubectl get pod [pod_name] -o yaml --export > nameoffile.yaml 
# 以yaml格式导出容器组信息到yaml文件
$ kubectl get pods --field-selector status.phase=Running     
# 使用字段选择器筛选出容器组信息
```

### 命名空间

资源名称: `namespaces`, 缩写: `ns`

```bash
$ kubectl get ns
$ kubectl get ns -o yaml
$ kubectl describe ns
```

### 无状态

资源名称: `deployments`, 缩写: `deploy`

```bash
$ kubectl get deploy
$ kubectl describe deploy
$ kubectl get deploy -o wide 
$ kubectl get deploy -o yaml
```

### 服务

资源名称: `services`, 缩写: `svc`

```bash
$ kubectl get svc
$ kubectl describe svc
$ kubectl get svc -o wide 
$ kubectl get svc -o yaml
$ kubectl get svc --show-labels
```

### 守护进程集
<!--rehype:wrap-class=col-span-2-->

资源名称: `daemonsets`, 缩写: `ds`

```bash
$ kubectl get ds
$ kubectl describe ds --all-namespaces
$ kubectl describe ds [daemonset_name] -n [namespace_name]
$ kubectl get ds [ds_name] -n [ns_name] -o yaml
```

### 事件

资源名称: `events`, 缩写: `ev`

```bash
$ kubectl get events 
$ kubectl get events -n kube-system
$ kubectl get events -w
```

### 服务帐户
<!--rehype:wrap-class=col-span-2-->

资源名称: `serviceaccounts`, 缩写: `sa`

```bash
$ kubectl get sa
$ kubectl get sa -o yaml
$ kubectl get serviceaccounts default -o yaml >./sa.yaml
$ kubectl replace serviceaccount default -f ./sa.yaml
```

### 日志

```bash
$ kubectl logs [pod_name]
$ kubectl logs --since=1h [pod_name]
$ kubectl logs --tail=20 [pod_name]
$ kubectl logs \
      -f -c [container_name] [pod_name]
$ kubectl logs [pod_name] > pod.log
```

### 副本集

资源名称: replicasets, 缩写: rs

```bash
$ kubectl get rs
$ kubectl describe rs
$ kubectl get rs -o wide 
$ kubectl get rs -o yaml
```

### 角色

```bash
$ kubectl get roles --all-namespaces
```

---

```
$ kubectl get roles \
      --all-namespaces -o yaml
```

### 保密字典

```bash
$ kubectl get secrets
$ kubectl get secrets --all-namespaces 
$ kubectl get secrets -o yaml
```

### 配置项

资源名称: configmaps, 缩写: cm

```bash
$ kubectl get cm
$ kubectl get cm --all-namespaces
$ kubectl get cm --all-namespaces -o yaml
```

### 路由

资源名称: ingresses, 缩写: ing

```bash
$ kubectl get ing
$ kubectl get ing --all-namespaces
```

### 持久卷

资源名称: persistentvolumes, 缩写: pv

```bash
$ kubectl get pv 
$ kubectl describe pv
```

### 持久卷声明

资源名称: persistentvolumeclaims, 缩写: pvc

```bash
$ kubectl get pvc
$ kubectl describe pvc
```

### 存储类

资源名称: storageclasses, 缩写: sc

```bash
$ kubectl get sc
$ kubectl get sc -o yaml
```

### 多个资源

```bash
$ kubectl get svc, po
$ kubectl get deploy, no
$ kubectl get all
$ kubectl get all --all-namespaces
```

变更资源属性
---

### 污点

```bash
$ kubectl taint [node_name] [taint_name]
```

### 标签
<!--rehype:wrap-class=col-span-2-->

```bash
$ kubectl label nodes <node-name> <label-key>=<label-value>  #增加
$ kubectl label nodes <node-name> <label-key>- #删除
$ kubectl label nodes <node-name> <label-key>=<label-value> --overwrite #修改
```

### 维护/可调度

```bash
$ kubectl cordon [node_name]   # 节点维护
$ kubectl uncordon [node_name] # 节点可调度
```

### 清空节点

```bash
$ kubectl drain [node_name]    # 清空节点
```

### 节点/容器组

```bash
$ kubectl delete node [node_name] 
$ kubectl delete pod [pod_name]
$ kubectl edit node [node_name]
$ kubectl edit pod [pod_name]
```

### 无状态/命名空间
<!--rehype:wrap-class=col-span-2 row-span-2-->

```bash
$ kubectl edit deploy [deploy_name]
$ kubectl delete deploy [deploy_name]
$ kubectl expose deploy [deploy_name] --port=80 --type=NodePort
$ kubectl scale deploy [deploy_name] --replicas=5
$ kubectl delete ns
$ kubectl edit ns [ns_name]
```

### 服务

```bash
$ kubectl edit svc [svc_name]
$ kubectl delete svc [svc_name]
```

### 守护进程集

```bash
$ kubectl edit ds [ds_name] -n kube-system 
$ kubectl delete ds [ds_name]
```

### 服务账号

```bash
$ kubectl edit sa [sa_name]
$ kubectl delete sa [sa_name]
```

### 注释
<!--rehype:wrap-class=col-span-2-->

```bash
$ kubectl annotatepo [pod_name] [annotation]
$ kubectl annotateno [node_name]
```

添加资源
---

### 创建容器组
<!--rehype:wrap-class=col-span-2-->

```bash
$ kubectl create -f [name_of_file] 
$ kubectl apply -f [name_of_file]
$ kubectl run [pod_name] --image=nginx --restart=Never
$ kubectl run [pod_name] --generator=run-pod/v1 --image=nginx
$ kubectl run [pod_name] --image=nginx --restart=Never
```

### 创建服务

```bash
$ kubectl create svc nodeport [svc_name] \
      --tcp=8080:80
```

### 创建无状态应用

```bash
$ kubectl create -f [name_of_file] 
$ kubectl apply -f [name_of_file]
$ kubectl create deploy [deploy_name] \
      --image=nginx
```

### 输出YAML文件
<!--rehype:wrap-class=col-span-2-->

```bash
$ kubectl create deploy [deploy_name] --image=nginx --dry-run -o yaml > deploy.yaml
$ kubectl get po [pod_name] -o yaml --export > pod.yaml
$ kubectl run nginx --image=nginx:alpine --dry-run -o -yaml > deploy.yaml
```

### 容器交互

```bash
$ kubectl run [pod_name] \
        --image=busybox --rm -it \
        --restart=Never -- sh
```

### 获取帮助

```bash
$ kubectl -h
$ kubectl create -h
$ kubectl run -h
$ kubectl explain deploy.spec
```

请求
---

### API调用

```bash
$ kubectl get --raw /apis/metrics.k8s.io/
```

### 集群信息

```bash
$ kubectl config
$ kubectl cluster-info
$ kubectl get componentstatus
```

另见
---

- [Kubernetes 官方文档 命令行工具 (kubectl)](https://kubernetes.io/zh-cn/docs/reference/kubectl/) _(kubernetes.io)_
