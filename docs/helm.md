Helm 备忘清单
===

这是 [Helm](https://helm.sh/) 的快速参考备忘单。Helm 是 Kubernetes 的包管理器，用于查找、安装、升级、回滚和发布 Chart。示例以 Helm 4 为主，并标注常见的 Helm 3 差异。

快速入门
---
<!--rehype:body-class=cols-2-->

### 安装与检查

```bash
# macOS
$ brew install helm

# Windows
$ winget install Helm.Helm

# 查看版本、帮助和客户端环境
$ helm version
$ helm help
$ helm env
```

Helm 使用当前 `kubectl` 上下文访问集群。执行部署前可先运行：

```bash
$ kubectl config current-context
$ kubectl cluster-info
```

### 核心概念

| 名称 | 说明 |
| --- | --- |
| Chart | 一组 Kubernetes 资源模板组成的应用包 |
| Repository | 存放和分发 Chart 的仓库 |
| Release | Chart 安装到集群后形成的实例 |
| Revision | Release 每次安装、升级或回滚产生的版本 |
| Values | 用于覆盖 Chart 默认配置的值 |

### 最短工作流

```bash
# 添加仓库并刷新索引
$ helm repo add bitnami https://charts.bitnami.com/bitnami
$ helm repo update

# 搜索、查看配置并安装
$ helm search repo bitnami/nginx
$ helm show values bitnami/nginx > values.yaml
$ helm install my-nginx bitnami/nginx -f values.yaml

# 查看、升级和卸载
$ helm status my-nginx
$ helm upgrade my-nginx bitnami/nginx -f values.yaml
$ helm uninstall my-nginx
```

仓库与 Chart
---
<!--rehype:body-class=cols-2-->

### 仓库管理

```bash
$ helm repo add stable https://example.com/charts
$ helm repo add private https://example.com/charts \
    --username <username> --password <password>
$ helm repo list
$ helm repo update
$ helm repo update stable
$ helm repo remove stable
```

`--force-update` 可覆盖同名仓库配置：

```bash
$ helm repo add stable https://new.example.com/charts --force-update
```

### 搜索 Chart

```bash
# 搜索已添加的本地仓库索引
$ helm search repo nginx
$ helm search repo nginx --versions
$ helm search repo nginx --version '^15.0.0'
$ helm search repo nginx --devel

# 搜索 Artifact Hub
$ helm search hub nginx
```

### 查看 Chart

```bash
$ helm show chart bitnami/nginx
$ helm show values bitnami/nginx
$ helm show readme bitnami/nginx
$ helm show crds bitnami/nginx
$ helm show all bitnami/nginx
```

指定 Chart 版本：

```bash
$ helm show values bitnami/nginx --version 15.0.0
```

### 下载 Chart

```bash
$ helm pull bitnami/nginx
$ helm pull bitnami/nginx --version 15.0.0
$ helm pull bitnami/nginx --untar
$ helm pull bitnami/nginx --untar --untardir ./charts
$ helm pull bitnami/nginx --verify
```

安装与升级
---
<!--rehype:body-class=cols-2-->

### 安装 Release

```bash
$ helm install <release> <chart>
$ helm install my-app ./mychart
$ helm install my-app ./mychart-0.1.0.tgz
$ helm install my-app bitnami/nginx --version 15.0.0
$ helm install my-app bitnami/nginx -n production --create-namespace
```

让 Helm 自动生成 Release 名称：

```bash
$ helm install bitnami/nginx --generate-name
$ helm install bitnami/nginx --generate-name --name-template 'web-{{ now | unixEpoch }}'
```

### 常用安装参数

```bash
$ helm install my-app ./chart \
    --namespace production \
    --create-namespace \
    --values values.yaml \
    --set image.tag=1.2.3 \
    --wait \
    --timeout 10m \
    --rollback-on-failure
```

| 参数 | 作用 |
| --- | --- |
| `-n, --namespace` | 指定命名空间 |
| `--create-namespace` | 命名空间不存在时创建 |
| `-f, --values` | 读取自定义 Values 文件，可多次指定 |
| `--set` | 从命令行设置值，可多次指定 |
| `--wait` | 等待资源达到就绪状态 |
| `--timeout` | 设置单次 Kubernetes 操作超时 |
| `--rollback-on-failure` | 失败时回滚或删除安装，并自动启用等待 |
| `--dry-run=client` | 仅在客户端模拟，不连接集群 |
| `--dry-run=server` | 在服务端模拟和校验，需要连接集群 |

Helm 3 使用 `--atomic` 表示失败时自动回滚；Helm 4 已将它替换为含义更清晰的 `--rollback-on-failure`。

### 升级 Release

```bash
$ helm upgrade my-app ./chart
$ helm upgrade my-app bitnami/nginx --version 15.0.0
$ helm upgrade my-app ./chart -f values.yaml --set image.tag=1.2.4
$ helm upgrade my-app ./chart --reuse-values
$ helm upgrade my-app ./chart --reset-values
```

Release 不存在时安装，存在时升级：

```bash
$ helm upgrade --install my-app ./chart \
    -n production --create-namespace \
    -f values.yaml --wait --rollback-on-failure
```

### 预览变更

```bash
# 仅在本地渲染模板
$ helm template my-app ./chart -f values.yaml

# 模拟安装或升级，并输出调试信息
$ helm install my-app ./chart --dry-run=client --debug
$ helm upgrade my-app ./chart --dry-run=client --debug

# 使用服务端模拟与校验
$ helm install my-app ./chart --dry-run=server --debug
```

模拟命令可能输出 Secret 内容，不要把结果直接写入公开日志；Helm 4 可添加 `--hide-secret` 隐藏 Secret。

Values 配置
---
<!--rehype:body-class=cols-2-->

### 设置 Values

```bash
# 单个或多个值
$ helm install my-app ./chart --set replicaCount=3
$ helm install my-app ./chart --set image.repository=nginx,image.tag=1.27

# 强制按字符串处理
$ helm install my-app ./chart --set-string service.annotations.version=01

# 从文件内容赋值
$ helm install my-app ./chart --set-file config=./app.conf

# JSON 数组或对象
$ helm install my-app ./chart --set-json 'tolerations=[{"key":"dedicated"}]'

# 数组和特殊字符
$ helm install my-app ./chart --set 'ports[0]=80,ports[1]=443'
$ helm install my-app ./chart --set 'nodeSelector.kubernetes\.io/role=worker'
```

### Values 优先级

优先级从低到高：Chart 默认 `values.yaml`、父 Chart Values、`-f` 文件、`--set` 参数。后出现的同类参数覆盖前面的值。

```bash
$ helm upgrade --install my-app ./chart \
    -f values-common.yaml \
    -f values-production.yaml \
    --set image.tag=1.2.3
```

### 获取生效的 Values

```bash
# 用户提供的值
$ helm get values my-app
$ helm get values my-app -n production -o yaml

# 合并 Chart 默认值后的全部值
$ helm get values my-app -n production --all
```

Release 管理
---
<!--rehype:body-class=cols-2-->

### 列出 Release

```bash
$ helm list
$ helm list -n production
$ helm list --all-namespaces
$ helm list --all
$ helm list --pending
$ helm list --failed
$ helm list --deployed
$ helm list --filter '^my-'
$ helm list -o json
```

### 查看状态与部署内容

```bash
$ helm status my-app -n production
$ helm get all my-app -n production
$ helm get manifest my-app -n production
$ helm get notes my-app -n production
$ helm get hooks my-app -n production
$ helm get metadata my-app -n production
```

### 历史与回滚

```bash
$ helm history my-app -n production
$ helm history my-app -n production --max 20

# 回滚到指定 Revision
$ helm rollback my-app 2 -n production
$ helm rollback my-app 2 -n production --wait --timeout 10m

# 回滚到上一个 Revision
$ helm rollback my-app 0 -n production
```

执行回滚前先用 `helm history` 确认目标 Revision。

### 测试与卸载

```bash
$ helm test my-app -n production
$ helm test my-app -n production --logs
$ helm uninstall my-app -n production
$ helm uninstall my-app -n production --keep-history
$ helm uninstall my-app -n production --dry-run
```

Chart 开发
---
<!--rehype:body-class=cols-2-->

### 创建 Chart

```bash
$ helm create mychart
$ helm lint ./mychart
$ helm lint ./mychart -f values-production.yaml --strict
$ helm template my-app ./mychart
$ helm install my-app ./mychart --dry-run --debug
```

常见目录结构：

```text
mychart/
├── Chart.yaml          # Chart 元数据和依赖
├── values.yaml         # 默认配置
├── charts/             # 依赖 Chart
├── crds/               # CustomResourceDefinition
├── templates/          # Kubernetes 模板
└── templates/NOTES.txt # 安装后的提示
```

### 依赖管理

```bash
$ helm dependency list ./mychart
$ helm dependency update ./mychart
$ helm dependency build ./mychart
```

- `update` 根据 `Chart.yaml` 解析依赖，更新 `Chart.lock` 和 `charts/`。
- `build` 根据现有 `Chart.lock` 重建 `charts/`，适合可复现构建。

### 模板调试

```bash
# 输出所有渲染结果
$ helm template my-app ./mychart --debug

# 只渲染指定模板
$ helm template my-app ./mychart \
    --show-only templates/deployment.yaml

# 模拟 Kubernetes 版本或 API
$ helm template my-app ./mychart --kube-version 1.34.0
$ helm template my-app ./mychart --api-versions example.com/v1
```

模板中常用对象：

```yaml
{{ .Release.Name }}
{{ .Release.Namespace }}
{{ .Chart.Name }}
{{ .Chart.AppVersion }}
{{ .Values.image.repository }}
{{ include "mychart.fullname" . }}
{{ required "image.tag is required" .Values.image.tag }}
{{ .Values.config | toYaml | nindent 2 }}
```

### 打包与验证

```bash
$ helm package ./mychart
$ helm package ./mychart --destination ./dist
$ helm package ./mychart --version 1.2.3 --app-version 2.0.0
$ helm package ./mychart --dependency-update

# 使用 provenance 文件验证包
$ helm verify ./mychart-1.2.3.tgz
$ helm install my-app ./mychart-1.2.3.tgz --verify
```

OCI Registry
---
<!--rehype:body-class=cols-2-->

### 登录与退出

```bash
$ helm registry login registry.example.com
$ helm registry login registry.example.com \
    --username <username> --password-stdin
$ helm registry logout registry.example.com
```

登录地址只填写主机名和可选端口，不添加 `https://` 或仓库路径。

### 推送 Chart

```bash
$ helm package ./mychart
$ helm push mychart-1.2.3.tgz oci://registry.example.com/helm
```

推送目标不包含 Chart 名称和版本；Helm 会从包内元数据生成它们。

### 拉取、查看和安装 OCI Chart

```bash
$ helm pull oci://registry.example.com/helm/mychart --version 1.2.3
$ helm show values oci://registry.example.com/helm/mychart --version 1.2.3
$ helm install my-app oci://registry.example.com/helm/mychart --version 1.2.3
$ helm upgrade --install my-app \
    oci://registry.example.com/helm/mychart --version 1.2.3
```

实用命令
---
<!--rehype:body-class=cols-2-->

### 全局参数

```bash
$ helm <command> --namespace production
$ helm <command> --kube-context <context>
$ helm <command> --kubeconfig ./kubeconfig
$ helm <command> --debug
$ helm <command> --qps 20 --burst-limit 50
```

### 自动补全

```bash
# Bash
$ source <(helm completion bash)

# Zsh
$ source <(helm completion zsh)

# Fish
$ helm completion fish | source

# PowerShell
PS> helm completion powershell | Out-String | Invoke-Expression
```

### 插件管理

```bash
$ helm plugin list
$ helm plugin install <plugin-url>
$ helm plugin update <plugin-name>
$ helm plugin uninstall <plugin-name>
```

插件由第三方代码组成，安装前应检查来源、权限和兼容版本。

### 常见排错

```bash
# 检查当前集群和 Helm 环境
$ kubectl config current-context
$ helm env

# 查看失败状态、历史和渲染后的资源
$ helm status my-app -n production
$ helm history my-app -n production
$ helm get manifest my-app -n production

# 检查集群事件和工作负载
$ kubectl get events -n production --sort-by=.lastTimestamp
$ kubectl get pods -n production
$ kubectl describe pod <pod-name> -n production
```

### 安全部署范式

```bash
$ helm upgrade --install my-app ./chart \
    --namespace production \
    --create-namespace \
    --values values-production.yaml \
    --wait \
    --timeout 10m \
    --rollback-on-failure \
    --history-max 10
```

- 在生产环境固定 `--version` 和镜像标签，避免隐式升级。
- 先执行 `helm lint` 和 `helm template`，再部署到集群。
- 使用 `--rollback-on-failure` 前确认失败后自动回滚或删除符合预期；Helm 3 对应参数为 `--atomic`。
- 不要把密码直接放入 `--set`、Shell 历史或 CI 日志。
- 卸载不会保证删除 PVC、CRD 和外部资源，操作后应单独检查。

参考资料
---

- [Helm 官方文档](https://helm.sh/docs/) _(helm.sh)_
- [Helm 命令参考](https://helm.sh/docs/helm/) _(helm.sh)_
- [Chart 模板指南](https://helm.sh/docs/chart_template_guide/) _(helm.sh)_
- [OCI Registry 使用指南](https://helm.sh/docs/topics/registries/) _(helm.sh)_
- [Kubernetes 备忘清单](./kubernetes.md)
