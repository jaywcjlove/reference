GitLab CI/CD 备忘清单
===

本备忘单总结了 [GitLab CI/CD](https://docs.gitlab.com/ee/ci/yaml/#default) 常用的配置说明，以供快速参考

入门
---

### 介绍

创建并运行您的第一个 GitLab `CI/CD` 管道，在开始之前，请确保您拥有：

- GitLab 中您想要使用 CI/CD 的项目
- 项目的维护者或所有者角色

如果您没有项目，可以在 <https://gitlab.com> 上免费创建一个公共项目

- 在存储库的根目录下创建一个 `.gitlab-ci.yml` 文件。该文件是您定义 `CI/CD` 作业的地方
- 转到`Settings` > `CI/CD` 并展开运行程序，只要您至少有一个运行器处于活动状态，旁边有一个绿色圆圈，您就有一个运行器可以处理您的工作
<!--rehype:className=style-timeline-->

### 示例

```yml
default:
  image: node:16

windows_job:
  only:
    - master
  tags:
    - windows
  script:
    - echo Hello, %USERNAME%!

linux_job:
  tags:
    - linux
  script:
    - echo "Hello, $USER!"
```

`tags` 用于在不同的平台上运行作业，`only` 控制 `master` 分支提交触发

关键字
---

### 关键字

关键字 | 描述
:-- | --
[default](#default) | 工作关键字的自定义默认值 [#](https://docs.gitlab.com/ee/ci/yaml/#default)
[include](#include) | 从其他 YAML 文件导入配置 [#](https://docs.gitlab.com/ee/ci/yaml/#include)
[stages](#stages) | 管道阶段的名称和顺序 [#](https://docs.gitlab.com/ee/ci/yaml/#stages)
[variables](#variables) | 为管道中的所有作业定义 CI/CD 变量 [#](https://docs.gitlab.com/ee/ci/yaml/#variables)
[workflow](#workflow) | 控制运行什么类型的管道 [#](https://docs.gitlab.com/ee/ci/yaml/#workflow)

### 关键字
<!--rehype:wrap-class=col-span-2 row-span-2-->

关键字 | 描述
:-- | --
[after_script](#after_script) | 覆盖一组在作业之后执行的命令 [#](https://docs.gitlab.com/ee/ci/yaml/#after_script)
[allow_failure](#allow_failure) | 允许作业失败。失败的作业不会导致管道失败 [#](https://docs.gitlab.com/ee/ci/yaml/#allow_failure)
[artifacts](#artifacts) | 成功时附加到作业的文件和目录列表 [#](https://docs.gitlab.com/ee/ci/yaml/#artifacts)
[before_script](#before_script) | 覆盖在作业之前执行的一组命令 [#](https://docs.gitlab.com/ee/ci/yaml/#before_script)
[cache](#cache) | 应在后续运行之间缓存的文件列表 [#](https://docs.gitlab.com/ee/ci/yaml/#cache)
[coverage](#coverage) | 给定作业的代码覆盖率设置 [#](https://docs.gitlab.com/ee/ci/yaml/#coverage)
[dast_configuration](#dast_configuration) | 在作业级别使用 DAST 配置文件中的配置 [#](https://docs.gitlab.com/ee/ci/yaml/#dast_configuration)
[dependencies](#dependencies) | 通过提供要从中获取工件的作业列表来限制将哪些工件传递给特定作业 [#](https://docs.gitlab.com/ee/ci/yaml/#dependencies)
[environment](#environment) | 作业部署到的环境的名称 [#](https://docs.gitlab.com/ee/ci/yaml/#environment)
[except](#only--except) | 控制何时不创建作业 [#](https://docs.gitlab.com/ee/ci/yaml/#only--except)
[extends](#extends) | 此作业继承自的配置条目 [#](https://docs.gitlab.com/ee/ci/yaml/#extends)
[image](#image) | 使用 Docker 镜像 [#](https://docs.gitlab.com/ee/ci/yaml/#image)
[inherit](#inherit) | 选择所有作业继承的全局默认值 [#](https://docs.gitlab.com/ee/ci/yaml/#inherit)
[interruptible](#interruptible) | 定义作业是否可以在被较新的运行冗余时取消 [#](https://docs.gitlab.com/ee/ci/yaml/#interruptible)
[needs](#needs) | 在阶段排序之前执行作业 [#](https://docs.gitlab.com/ee/ci/yaml/#needs)
[only](#only--except) | 控制何时创建作业 [#](https://docs.gitlab.com/ee/ci/yaml/#only--except)
[pages](#pages) | 上传作业的结果以与 GitLab Pages 一起使用 [#](https://docs.gitlab.com/ee/ci/yaml/#pages)
[parallel](#parallel) | 应并行运行多少个作业实例 [#](https://docs.gitlab.com/ee/ci/yaml/#parallel)
[release](#release) | 指示运行器生成释放对象 [#](https://docs.gitlab.com/ee/ci/yaml/#release)
[resource_group](#resource_group) | 限制作业并发 [#](https://docs.gitlab.com/ee/ci/yaml/#resource_group)
[retry](#retry) | 发生故障时可以自动重试作业的时间和次数 [#](https://docs.gitlab.com/ee/ci/yaml/#retry)
[rules](#rules) | 用于评估和确定作业的选定属性以及是否创建的条件列表 [#](https://docs.gitlab.com/ee/ci/yaml/#rules)
[script](#script) | 由运行器执行的 Shell 脚本 [#](https://docs.gitlab.com/ee/ci/yaml/#script)
[secrets](#secrets) | CI/CD 保密工作需要 [#](https://docs.gitlab.com/ee/ci/yaml/#secrets)
[services](#services) | 使用 Docker 服务映像 [#](https://docs.gitlab.com/ee/ci/yaml/#services)
[stage](#stage) | 定义作业阶段 [#](https://docs.gitlab.com/ee/ci/yaml/#stage)
[tags](#tags) | 用于选择跑步者的标签列表 [#](https://docs.gitlab.com/ee/ci/yaml/#tags)
[timeout](#timeout) | 定义优先于项目范围设置的自定义作业级超时 [#](https://docs.gitlab.com/ee/ci/yaml/#timeout)
[trigger](#trigger) | 定义下游管道触发器 [#](https://docs.gitlab.com/ee/ci/yaml/#trigger)
[variables](#variables) | 在作业级别定义作业变量 [#](https://docs.gitlab.com/ee/ci/yaml/#variables)
[when](#when) | 何时运行作业 [#](https://docs.gitlab.com/ee/ci/yaml/#when)

### 全局关键词

- [after_script](#after_script)
- [artifacts](#artifacts)
- [before_script](#before_script)
- [cache](#cache)
- [image](#image)
- [interruptible](#interruptible)
- [retry](#retry)
- [services](#services)
- [tags](#tags)
- [timeout](#timeout)
<!--rehype:className=cols-3-->

全局关键词
---

### default
<!--rehype:wrap-class=row-span-3-->

```yml
default:
  image: ruby:3.0

rspec:
  script: bundle exec rspec

rspec 2.7:
  image: ruby:2.7
  script: bundle exec rspec
```

在此示例中，`ruby:3.0` 是管道中所有作业的默认图像值。`rspec 2.7` 作业不使用默认值，因为它使用特定于作业的图像部分覆盖了默认值

### include

```yml
include:
  - local: '/temp/.gitlab-ci-template.yml'
```

在 `11.4` 中移至 `GitLab` 免费版，使用 `include` 将外部 `YAML` 文件包含在您的 `CI/CD` 配置中

### include:local

```yml
include:
  - local: '/temp/.gitlab-ci-template.yml'
```

使用 `include:local` 包含与 `.gitlab-ci.yml` 文件位于同一存储库中的文件

### include:project
<!--rehype:wrap-class=row-span-3-->

要在同一个 GitLab 实例上包含来自另一个私有项目的文件，请使用 `include:project` 和 `include:file`

```yml
include:
  - project: 'group/my-project'
    file: '/temp/.gitlab-ci-template.yml'
  - project: 'group/subgroup/my-project-2'
    file:
      - '/temp/.builds.yml'
      - '/temp/.tests.yml'
```

您还可以指定一个 `ref`：

```yml
include:
  - project: 'group/my-project'
    ref: main    # Git branch
    file: '/templates/.gitlab-ci.yml'
  - project: 'group/my-project'
    ref: v1.0.0   # Git Tag
    file: '/templates/.gitlab-ci.yml'
  - project: 'group/my-project'
    ref: 787123b  # Git SHA
    file: '/templates/.gitlab-ci.yml'
```

### include:remote

```yml
include:
  - remote: 'https://gitlab.com/example-project/-/raw/main/.gitlab-ci.yml'
```

使用带有完整 `URL` 的 `include:remote` 来包含来自不同位置的文件

### include:template
<!--rehype:wrap-class=row-span-2-->

使用 `include:template` 来包含 `.gitlab-ci.yml` 模板

```yml
# 文件来自 GitLab 模板集合
include:
  - template: Auto-DevOps.gitlab-ci.yml
```

多个 `include:template` 文件：

```yml
include:
  - template: Android-Fastlane.gitlab-ci.yml
  - template: Auto-DevOps.gitlab-ci.yml
```

### stages

使用阶段来定义包含作业组的阶段。如果 `.gitlab-ci.yml` 文件中未定义阶段，则默认管道阶段为：

- [.pre](#stage-pre)
- build
- test
- deploy
- [.post](#stage-post)
<!--rehype:className=cols-2-->

---

```yml
stages:
  - build
  - test
  - deploy
```

workflow
---

### workflow:name

您可以在 workflow: 中使用 name 来定义管道的名称

```yml
workflow:
  name: '分支管道：$CI_COMMIT_BRANCH'
```

根据管道条件具有不同管道名称的配置：

```yml
variables:
  PIPELINE_NAME: '默认管道名称'

workflow:
  name: '$PIPELINE_NAME'
  rules:
    - if: '$CI_PIPELINE_SOURCE == "merge_request_event"'
      variables:
        PIPELINE_NAME: 'MR pipeline: $CI_COMMIT_BRANCH'
    - if: '$CI_MERGE_REQUEST_LABELS =~ /pipeline:run-in-ruby3/'
      variables:
        PIPELINE_NAME: 'Ruby 3 pipeline'
```

### workflow:rules:variables
<!--rehype:wrap-class=col-span-2 row-span-2-->

您可以在 `workflow:rules` 中使用变量来定义特定管道条件的变量

```yml
variables:
  DEPLOY_VARIABLE: "default-deploy"

workflow:
  rules:
    - if: $CI_COMMIT_REF_NAME == $CI_DEFAULT_BRANCH
      variables:
        DEPLOY_VARIABLE: "deploy-production"  # 覆盖全局定义的 DEPLOY_VARIABLE
    - if: $CI_COMMIT_REF_NAME =~ /feature/
      variables:
        IS_A_FEATURE: "true"                  # 定义一个新变量
    - when: always                            # 在其他情况下运行管道

job1:
  variables:
    DEPLOY_VARIABLE: "job1-default-deploy"
  rules:
    - if: $CI_COMMIT_REF_NAME == $CI_DEFAULT_BRANCH
      variables:                                   # 覆盖定义的 DEPLOY_VARIABLE
        DEPLOY_VARIABLE: "job1-deploy-production"  # 在工作层面。
    - when: on_success                             # 在其他情况下运行作业
  script:
    - echo "以 $DEPLOY_VARIABLE 作为参数运行脚本"
    - echo "如果 $IS_A_FEATURE 存在则运行另一个脚本"

job2:
  script:
    - echo "以 $DEPLOY_VARIABLE 作为参数运行脚本"
    - echo "如果 $IS_A_FEATURE 存在则运行另一个脚本"
```

### workflow:rules

工作流(workflow)中的 `rules` 关键字类似于作业中定义的 [`rules`](#rules)，但控制是否创建整个管道

- [rules: if](#rulesif)
- [rules: changes](#ruleschanges)
- [rules: exists](#rulesexists)
- [when](#when)
- [variables](#workflowrulesvariables)
<!--rehype:className=cols-2-->

```yml
workflow:
  rules:
    - if: $CI_COMMIT_TITLE =~ /-draft$/
      when: never
    - if: $CI_PIPELINE_SOURCE == "merge_request_event"
    - if: $CI_COMMIT_BRANCH == $CI_DEFAULT_BRANCH
```

Job 关键词
---

### after_script

在每个作业（包括失败的作业）**之后**运行的命令数组

```yml
job:
  script:
    - echo "示例脚本部分"
  after_script:
    - echo "在“script”部分完成后执行此命令"
```

### allow_failure
<!--rehype:wrap-class=row-span-4-->

确定管道是否应在作业失败时继续运行

```yml
job1:
  stage: test
  script:
    - execute_script_1

job2:
  stage: test
  script:
    - execute_script_2
  allow_failure: true

job3:
  stage: deploy
  script:
    - deploy_to_staging
  environment: staging
```

#### allow_failure:exit_codes

控制何时允许作业失败。对于任何列出的退出代码，作业是 `allow_failure: true`，对于任何其他退出代码，`allow_failure` false

```yml
test_job_1:
  script:
    - echo "退出代码 1 的脚本。此作业失败"
    - exit 1
  allow_failure:
    exit_codes: 137

test_job_2:
  script:
    - echo "退出代码 137 的脚本允许此作业失败"
    - exit 137
  allow_failure:
    exit_codes:
      - 137
      - 255
```

### dast_configuration
<!--rehype:wrap-class=row-span-2-->

```yml
stages:
  - build
  - dast

include:
  - template: DAST.gitlab-ci.yml

dast:
  dast_configuration:
    site_profile: "Example Co"
    scanner_profile: "Quick Passive Test"
```

指定要在 CI/CD 配置中使用的站点配置文件和扫描仪配置文件。 两个配置文件必须首先在项目中创建。 作业的阶段必须快

### before_script

在每个作业的 `script` 命令之前运行，但在工件恢复之后运行

```yml
job:
  before_script:
    - echo "在任何“script:”命令之前执行此命令"
  script:
    - echo "“before_script”命令之后执行"
```

### coverage

```yml
job1:
  script: rspec
  coverage: '/Code coverage: \d+\.\d+/'
```

使用自定义正则表达式的覆盖率来配置如何从作业输出中提取代码覆盖率

### extends
<!--rehype:wrap-class=row-span-2-->

```yml
.tests:
  script: rake test
  stage: test
  only:
    refs:
      - branches

rspec:
  extends: .tests
  script: rake rspec
  only:
    variables:
      - $RSPEC
```

使用 `extends` 重用配置部分。 它是 YAML 锚点的替代品，并且更加灵活和可读

### dependencies
<!--rehype:wrap-class=row-span-2-->

```yml
build osx:
  stage: build
  script: make build:osx
  artifacts:
    paths:
      - binaries/

build linux:
  stage: build
  script: make build:linux
  artifacts:
    paths:
      - binaries/

test osx:
  stage: test
  script: make test:osx
  dependencies:
    - build osx

test linux:
  stage: test
  script: make test:linux
  dependencies:
    - build linux

deploy:
  stage: deploy
  script: make deploy
  environment: production
```

定义要从中获取工件的作业列表。您还可以将作业设置为根本不下载任何工件

### inherit
<!--rehype:wrap-class=row-span-2-->

使用 inherit 控制默认关键字和变量的继承

#### inherit:default

使用 `inherit:default` 控制 `default` 关键字的继承

```yml
default:
  retry: 2
  image: ruby:3.0
  interruptible: true

job1:
  script: echo "此作业不继承任何默认关键字"
  inherit:
    default: false

job2:
  script: echo "此作业仅继承列出的两个默认关键字。它不继承“可中断”"
  inherit:
    default:
      - retry
      - image
```

#### inherit:variables

使用 inherit:variables 控制全局变量关键字的继承

```yml
variables:
  VARIABLE1: "这是变量 1"
  VARIABLE2: "这是变量 2"
  VARIABLE3: "这是变量 3"

job1:
  script: echo "该作业不继承任何全局变量"
  inherit:
    variables: false

job2:
  script: echo "此作业仅继承列出的两个全局变量。它不继承“VARIABLE3”"
  inherit:
    variables:
      - VARIABLE1
      - VARIABLE2
```

### interruptible

```yml
stages:
  - stage1
  - stage2
  - stage3

step-1:
  stage: stage1
  script:
    - echo "可以取消"
  interruptible: true

step-2:
  stage: stage2
  script:
    - echo "不能取消"

step-3:
  stage: stage3
  script:
    - echo "因为第 2 步无法取消，所以此步骤永远无法取消，即使它被设置为可中断"
  interruptible: true
```

如果在作业完成之前启动较新的管道时应取消作业，则使用可中断的

### pages

```yml
pages:
  stage: deploy
  script:
    - mkdir .public
    - cp -r * .public
    - mv .public public
  artifacts:
    paths:
      - public
  rules:
    - if: $CI_COMMIT_BRANCH == $CI_DEFAULT_BRANCH
  environment: production
```

使用页面定义将静态内容上传到 `GitLab` 的 `GitLab Pages` 作业。然后将内容发布为网站

### parallel
<!--rehype:wrap-class=row-span-2-->

```yml
test:
  script: rspec
  parallel: 5
```

使用 `parallel` 在单个管道中并行多次运行作业

#### parallel:matrix

```yml
deploystacks:
  stage: deploy
  script:
    - bin/deploy
  parallel:
    matrix:
      - PROVIDER: aws
        STACK:
          - monitoring
          - app1
          - app2
      - PROVIDER: ovh
        STACK: [monitoring, backup, app]
      - PROVIDER: [gcp, vultr]
        STACK: [data, processing]
  environment: $PROVIDER/$STACK
```

使用 `parallel:matrix` 在单个管道中并行多次运行作业，但每个作业实例具有不同的变量值

### resource_group

```yml
deploy-to-production:
  script: deploy
  resource_group: production
```

创建一个资源组，以确保作业在同一项目的不同管道之间互斥

### tags

```yml
job:
  tags:
    - ruby
    - postgres
```

使用标签从项目可用的所有运行器列表中选择特定运行器

### retry

```yml
test:
  script: rspec
  retry: 2
```

使用 `retry` 配置作业失败时重试的次数。如果未定义，则默认为 `0`，并且作业不会重试

#### retry:when

```yml
test:
  script: rspec
  retry:
    max: 2
    when: runner_system_failure
```

使用 `retry:when` 和 `retry:max` 来重试特定失败案例的作业。 `retry:max` 是最大重试次数，和`retry`一样，可以是0、1、2

### script

```yml
job1:
  script: "bundle exec rspec"

job2:
  script:
    - uname -a
    - bundle exec rspec
```

使用脚本指定运行器执行的命令

### secrets
<!--rehype:wrap-class=row-span-2-->

此关键字必须与 `secrets:vault` 一起使用

#### secrets:vault

使用 `secrets:vault` 指定 HashiCorp Vault 提供的秘密

```yml
job:
  secrets:
    # 将秘密的路径存储在此 CI/CD 变量中
    DATABASE_PASSWORD:
      # 转换为秘密：`ops/data/production/db`
      # 字段：`password`
      vault: 
        engine:
          name: kv-v2
          path: ops
        path: production/db
        field: password
```

#### secrets:file

使用 `secrets:file` 将秘密配置为存储为文件或变量类型的 CI/CD 变量

```yml
job:
  secrets:
    DATABASE_PASSWORD:
      vault: production/db/password@ops
      file: false
```

### timeout

```yml
build:
  script: build.sh
  timeout: 3 hours 30 minutes

test:
  script: rspec
  timeout: 3h 30m
```

为特定作业配置超时。 如果作业运行时间超过超时时间，则作业失败

### services
<!--rehype:wrap-class=row-span-2-->

使用服务指定额外的 `Docker` 映像以在其中运行脚本

```yml
default:
  image:
    name: ruby:2.6
    entrypoint: ["/bin/bash"]

  services:
    - name: my-postgres:11.7
      alias: db-postgres
      entrypoint: ["/usr/local/bin/db-postgres"]
      command: ["start"]

  before_script:
    - bundle install

test:
  script:
    - bundle exec rake spec
```

#### service:pull_policy

运行器用于获取 `Docker` 映像的拉取策略

```yml
job1:
  script: echo "A single pull policy."
  services:
    - name: postgres:11.6
      pull_policy: if-not-present

job2:
  script: echo "Multiple pull policies."
  services:
    - name: postgres:11.6
      pull_policy: [always, if-not-present]
```

### stage
<!--rehype:wrap-class=row-span-2-->

```yml
stages:
  - build
  - test
  - deploy

job1:
  stage: build
  script:
    - echo "这项工作编译代码"

job2:
  stage: test
  script:
    - echo "此作业测试编译后的代码。它在构建阶段完成时运行"

job3:
  script:
    - echo "这项工作也在测试阶段运行"

job4:
  stage: deploy
  script:
    - echo "此作业部署代码。它在测试阶段完成时运行"
  environment: production
```

#### stage: .pre

```yml
stages:
  - build
  - test

job1:
  stage: build
  script:
    - echo "该作业在构建阶段运行"

first-job:
  stage: .pre
  script:
    - echo "该作业在 .pre 阶段运行，在所有其他阶段之前"

job2:
  stage: test
  script:
    - echo "该作业在测试阶段运行"
```

#### stage: .post

```yml
stages:
  - build
  - test

job1:
  stage: build
  script:
    - echo "该作业在构建阶段运行"

last-job:
  stage: .post
  script:
    - echo "该作业在 .post 阶段运行，在所有其他阶段之后"

job2:
  stage: test
  script:
    - echo "该作业在测试阶段运行"
```

### trigger
<!--rehype:wrap-class=row-span-2-->

声明一个作业是一个“触发作业”

```yml
trigger-multi-project-pipeline:
  trigger: my-group/my-project
```

#### trigger:include

```yml
trigger-child-pipeline:
  trigger:
    include: path/to/child-pipeline.gitlab-ci.yml
```

声明作业是启动子管道的“触发器作业”

#### trigger:project

```yml
trigger-multi-project-pipeline:
  trigger:
    project: my-group/my-project
```

声明作业是启动多项目管道的“触发器作业”

#### trigger:strategy

```yml
trigger-multi-project-pipeline:
  trigger:
    project: my-group/my-project
    branch: development
```

强制触发作业等待下游管道完成后再标记为成功

#### trigger:forward

```yml
variables: # 每个作业的默认变量
  VAR: value

# 默认行为：
# - VAR 传递给孩子
# - MYVAR 没有传递给孩子
child1:
  trigger:
    include: .child-pipeline.yml

# 转发管道变量：
# - VAR 传递给孩子
# - MYVAR 传递给孩子
child2:
  trigger:
    include: .child-pipeline.yml
    forward:
      pipeline_variables: true

# 不要转发 YAML 变量：
# - VAR 不会传递给孩子
# - MYVAR 没有传递给孩子
child3:
  trigger:
    include: .child-pipeline.yml
    forward:
      yaml_variables: false
```

### variables

CI/CD 变量是传递给作业的可配置值。使用变量创建自定义变量

```yml
variables:
  DEPLOY_SITE: "https://example.com/"

deploy_job:
  stage: deploy
  script:
    - deploy-script --url $DEPLOY_SITE --path "/"
  environment: production

deploy_review_job:
  stage: deploy
  variables:
    REVIEW_PATH: "/review"
  script:
    - deploy-review-script --url $DEPLOY_SITE --path $REVIEW_PATH
  environment: production
```

#### variables:description

```yml
variables:
  DEPLOY_ENVIRONMENT:
    description: "部署目标。 如果需要，将此变量更改为“canary”或“production”"
    value: "staging"
```

#### variables:expand

```yml
variables:
  VAR1: value1
  VAR2: value2 $VAR1
  VAR3:
    value: value3 $VAR1
    expand: false
```

使用 `expand` 关键字将变量配置为可扩展或不可扩展

### when

使用 `when` 配置作业运行的条件。如果未在作业中定义，则默认值为 `when:on_success`

```yml
stages:
  - build
  - cleanup_build
  - test
  - deploy
  - cleanup

build_job:
  stage: build
  script:
    - make build

cleanup_build_job:
  stage: cleanup_build
  script:
    - cleanup build when failed
  when: on_failure

test_job:
  stage: test
  script:
    - make test

deploy_job:
  stage: deploy
  script:
    - make deploy
  when: manual
  environment: production

cleanup_job:
  stage: cleanup
  script:
    - cleanup after jobs
  when: always
```

---

:- | --
:- | --
`on_success(default)` | 仅当早期阶段的所有作业都成功或具有 `allow_failure: true` 时才运行该作业
`manual` | 仅在手动触发时运行作业
`always` | 无论早期阶段的作业状态如何，都运行作业。也可以用在 `workflow:rules` 中
`on_failure` | 仅当早期阶段的至少一项作业失败时才运行该作业
`delayed` | 将作业的执行延迟指定的持续时间
`never` | 不要运行作业。只能在规则[rules](#rules)部分或工作流中使用：`workflow: rules`
<!--rehype:className=style-list-->

artifacts
---

使用工件指定要将哪些文件另存为作业 artifacts。作业 artifacts 是作业成功、失败或始终附加到作业的文件和目录的列表

### artifacts:paths

路径是相对于项目目录（$CI_PROJECT_DIR）的，不能直接链接到项目目录之外

```yml
job:
  artifacts:
    paths:
      - binaries/
      - .config
```

### artifacts:exclude

防止将文件添加到 artifacts 存档中

```yml
artifacts:
  paths:
    - binaries/
  exclude:
    - binaries/**/*.o
```

### artifacts:expire_in

指定作业 artifacts 在它们过期和被删除之前存储多长时间

```yml
job:
  artifacts:
    expire_in: 1 week
```

---

- '42'
- 42 seconds
- 3 mins 4 sec
- 2 hrs 20 min
- 2h20min
- 6 mos 1 day
- 47 yrs 6 mos and 4d
- 3 weeks and 2 days
- never
<!--rehype:className=cols-2-->

### artifacts:expose_as

使用 `artifacts:expose_as` 关键字在合并请求 UI 中公开作业 artifacts

```yml
test:
  script: ["echo 'test' > file.txt"]
  artifacts:
    expose_as: 'artifact 1'
    paths: ['file.txt']
```

### artifacts:name

定义创建的 `artifacts` 存档的名称。您可以为每个存档指定一个唯一的名称

```yml
job:
  artifacts:
    name: "job1-artifacts-file"
    paths:
      - binaries/
```

### artifacts:public

确定作业工件是否应该公开可用

```yml
job:
  artifacts:
    public: false
```

### artifacts:reports

收集作业中包含的模板生成的 `artifacts`

```yml
rspec:
  stage: test
  script:
    - bundle install
    - rspec --format RspecJunitFormatter --out rspec.xml
  artifacts:
    reports:
      junit: rspec.xml
```

### artifacts:untracked

将所有 Git 未跟踪文件添加为 `artifacts`（连同在 `artifacts:paths` 中定义的路径）

```yml
job:
  artifacts:
    untracked: true
```

### artifacts:when

作业失败或尽管失败时上传 `artifacts`

```yml
job:
  artifacts:
    when: on_failure
```

cache
---

### cache:paths

```yml
rspec:
  script:
    - echo "此作业使用缓存"
  cache:
    key: binaries-cache
    paths:
      - binaries/*.apk
      - .config
```

关键字来选择要缓存的文件或目录

### cache:key
<!--rehype:wrap-class=row-span-2-->

为每个缓存提供唯一的标识键。 使用相同缓存键的所有作业都使用相同的缓存，包括在不同的管道中

```yml
cache-job:
  script:
    - echo "此作业使用缓存"
  cache:
    key: binaries-cache-$CI_COMMIT_REF_SLUG
    paths:
      - binaries/
```

#### `cache:key:files`

```yml
cache-job:
  script:
    - echo "此作业使用缓存"
  cache:
    key:
      files:
        - Gemfile.lock
        - package.json
    paths:
      - vendor/ruby
      - node_modules
```

当一个或两个特定文件更改时，使用 `cache:key:files` 关键字生成新密钥

#### `cache:key:prefix`

```yml
rspec:
  script:
    - echo "此 rspec 作业使用缓存"
  cache:
    key:
      files:
        - Gemfile.lock
      prefix: $CI_JOB_NAME
    paths:
      - vendor/ruby
```

使用 `cache:key:prefix` 将前缀与为 `cache:key:files` 计算的 SHA 结合起来

### cache:untracked

```yml
rspec:
  script: test
  cache:
    untracked: true
    paths:
      - binaries/
```

使用 `untracked: true` 缓存 Git 存储库中所有未跟踪的文件

### cache:when

```yml
rspec:
  script: rspec
  cache:
    paths:
      - rspec/
    when: 'always'
```

使用 `cache:when` 根据作业的状态定义何时保存缓存

:- | --
:- | --
`on_succes(默认)` | 仅当作业成功时才保存缓存
`on_failure` | 仅在作业失败时才保存缓存
`always` | 始终保存缓存

### cache:policy

```yml
prepare-dependencies-job:
  stage: build
  cache:
    key: gems
    paths:
      - vendor/bundle
    policy: push
  script:
    - echo "此作业仅下载依赖项并构建缓存"
    - echo "正在下载依赖..."

faster-test-job:
  stage: test
  cache:
    key: gems
    paths:
      - vendor/bundle
    policy: pull
  script:
    - echo "此作业脚本使用缓存，但不更新它"
    - echo "运行测试..."
```

要更改缓存的上传和下载行为，请使用 `cache:policy` 关键字

environment
---

### environment:name

```yml
deploy to production:
  stage: deploy
  script: git push production HEAD:main
  environment:
    name: production
```

为环境设置名称

### environment:url

```yml
deploy to production:
  stage: deploy
  script: git push production HEAD:main
  environment:
    name: production
    url: https://prod.example.com
```

为环境设置 URL

### environment:on_stop

关闭（停止）环境可以通过在环境下定义的 on_stop 关键字来实现。 它声明运行以关闭环境的不同作业

### environment:action

```yml
stop_review_app:
  stage: deploy
  variables:
    GIT_STRATEGY: none
  script: make delete-app
  when: manual
  environment:
    name: review/$CI_COMMIT_REF_SLUG
    action: stop
```

:- | --
:- | --
`start` _默认值_ | 指示作业启动环境。在作业开始后创建的
`prepare` | 表示作业只是准备环境。它不会触发部署
`stop` | 指示作业停止部署
`verify` | 指示作业仅验证环境。它不会触发部署
`access` | 指示作业仅访问环境。它不会触发部署

### environment:auto_stop_in

```yml
review_app:
  script: deploy-review-app
  environment:
    name: review/$CI_COMMIT_REF_SLUG
    auto_stop_in: 1 day
```

- `168 hours`
- `7 days`
- `one week`
- `never`
<!--rehype:className=cols-2-->

`auto_stop_in` 关键字指定环境的生命周期。 当环境到期时，GitLab 会自动停止它

### environment:kubernetes

```yml
deploy:
  stage: deploy
  script: make deploy-app
  environment:
    name: production
    kubernetes:
      namespace: production
```

使用 `kubernetes` 关键字将部署配置到与您的项目关联的 `Kubernetes` 集群

### environment:deployment_tier

```yml
deploy:
  script: echo
  environment:
    name: customer-portal
    deployment_tier: production
```

- `production`
- `staging`
- `testing`
- `development`
- `other`
<!--rehype:className=cols-2-->

### 动态 environment

```yml
deploy as review app:
  stage: deploy
  script: make deploy
  environment:
    name: review/$CI_COMMIT_REF_SLUG
    url: https://$CI_ENVIRONMENT_SLUG.example.com/
```

image
---

### image:name

```yml
image:
  name: "registry.example.com/my/image:latest"
```
<!--rehype:className=wrap-text-->

作业运行所在的 Docker 镜像的名称。类似于它自己使用的镜像

### image:entrypoint

```yml
image:
  name: super/sql:experimental
  entrypoint: [""]
```

作为容器入口点执行的命令或脚本

### image:pull_policy

```yml
job1:
  script: echo "单一拉动政策"
  image:
    name: ruby:3.0
    pull_policy: if-not-present

job2:
  script: echo "多重拉动政策"
  image:
    name: ruby:3.0
    pull_policy: [always, if-not-present]
```

运行器用于获取 Docker 映像的拉取策略

needs
---

### needs:artifacts

当作业使用需求时，它不再默认下载先前阶段的所有工件，因为有需求的作业可以在早期阶段完成之前开始

```yml
test-job1:
  stage: test
  needs:
    - job: build_job1
      artifacts: true

test-job2:
  stage: test
  needs:
    - job: build_job2
      artifacts: false

test-job3:
  needs:
    - job: build_job1
      artifacts: true
    - job: build_job2
    - build_job3
```

### needs:project
<!--rehype:wrap-class=col-span-2-->

使用 `needs:project` 从其他管道中的最多五个作业下载工件。工件是从指定参考的最新成功管道下载的。要指定多个作业，请将每个作业作为单独的数组项添加到 needs 关键字下

```yml
build_job:
  stage: build
  script:
    - ls -lhR
  needs:
    - project: namespace/group/project-name
      job: build-1
      ref: main
      artifacts: true
    - project: namespace/group/project-name-2
      job: build-2
      ref: main
      artifacts: true
```

### needs:pipeline:job

```yml
create-artifact:
  stage: build
  script: echo "sample artifact" > artifact.txt
  artifacts:
    paths: [artifact.txt]

child-pipeline:
  stage: test
  trigger:
    include: child.yml
    strategy: depend
  variables:
    PARENT_PIPELINE_ID: $CI_PIPELINE_ID
```

子管道可以从其父管道中的作业或同一父子管道层次结构中的另一个子管道下载工件

### needs:optional
<!--rehype:wrap-class=col-span-2 row-span-2-->

要需要管道中有时不存在的作业，请将 `optional: true` 添加到需求配置中。如果未定义，则可选：默认为 `false`

```yml
build-job:
  stage: build

test-job1:
  stage: test

test-job2:
  stage: test
  rules:
    - if: $CI_COMMIT_BRANCH == $CI_DEFAULT_BRANCH

deploy-job:
  stage: deploy
  needs:
    - job: test-job2
      optional: true
    - job: test-job1
  environment: production

review-job:
  stage: deploy
  needs:
    - job: test-job2
      optional: true
  environment: review
```

### needs:pipeline

您可以使用 `needs:pipeline` 关键字将管道状态从上游管道镜像到桥接作业

```yml
upstream_bridge:
  stage: test
  needs:
    pipeline: other/project
```

only / except
---

### only:refs / except:refs
<!--rehype:wrap-class=row-span-2-->

```yml
job1:
  script: echo
  only:
    - main
    - /^issue-.*$/
    - merge_requests

job2:
  script: echo
  except:
    - main
    - /^stable-branch.*$/
    - schedules
```

使用 `only:refs` 和 `except:refs` 关键字来控制何时根据分支名称或管道类型将作业添加到管道

### only:variables / except:variables

```yml
deploy:
  script: cap staging deploy
  only:
    variables:
      - $RELEASE == "staging"
      - $STAGING
```

根据 CI/CD 变量的状态，使用 only:variables 或 except:variables 关键字来控制何时将作业添加到管道

### only:changes / except:changes
<!--rehype:wrap-class=row-span-2-->

```yml
docker build:
  script: docker build -t my-image:$CI_COMMIT_REF_SLUG .
  only:
    refs:
      - branches
    changes:
      - Dockerfile
      - docker/scripts/*
      - dockerfiles/**/*
      - more_scripts/*.{rb,py,sh}
      - "**/*.json"
```

当 `Git` 推送事件修改文件时，使用 `changes` 关键字仅运行作业，或使用 `except` 跳过作业

### only:kubernetes / except:kubernetes

```yml
deploy:
  only:
    kubernetes: active
```

使用 `only:kubernetes` 或 `except:kubernetes` 来控制当 `Kubernetes` 服务在项目中处于活动状态时是否将作业添加到管道中

release
---

### release 参考

:- | --
:- | --
[release:tag_name](#releasetag_name) | 发布的 Git 标签
[release:tag_message](#releasetag_message) | 指定的消息进行注释
[release:name](#releasename) | 发布名称
[release:description](#releasedescription) | 版本的详细描述
[release:ref](#releaseref) | 发布的 ref
[release:milestones](#releasemilestones) | 每个里程碑的标题
[release:released_at](#releasereleased_at) | 发布准备就绪的日期和时间

### release:tag_name

```yml
job:
  script: echo "为新标签运行发布作业"
  release:
    tag_name: $CI_COMMIT_TAG
    description: 'Release description'
  rules:
    - if: $CI_COMMIT_TAG
```

必需的。发布的 Git 标签

### release:tag_message

```yml
release_job:
  stage: release
  release:
    tag_name: $CI_COMMIT_TAG
    description: 'Release description'
    tag_message: 'Annotated tag message'
```

如果标签不存在，则新创建的标签将使用 `tag_message` 指定的消息进行注释

### release:name

```yml
release_job:
  stage: release
  release:
    name: 'Release $CI_COMMIT_TAG'
```

发布名称。如果省略，它会填充 `release:tag_name` 的值

### release:description

```yml
job:
  release:
    tag_name: ${MAJOR}_${MINOR}_${REVISION}
    description: './path/to/CHANGELOG.md'
```

版本的详细描述

### release:ref

发布的 ref，如果发布：`tag_name` 尚不存在

### release:milestones

与版本关联的每个里程碑的标题

### release:released_at

```yml
released_at: '2021-03-15T08:00:00Z'
```

发布准备就绪的日期和时间

### release:assets:links

```yml
assets:
  links:
    - name: 'asset1'
      url: 'https://example.com/assets/1'
    - name: 'asset2'
      url: 'https://example.com/assets/2'
      filepath: '/pretty/url/1' # 可选的
      link_type: 'other' # 可选的
```

使用 `release:assets:links` 在发布中包含资产链接

rules
---

### rules:if

```yml
job:
  script: echo "Hello, Rules!"
  rules:
    - if: $CI_MERGE_REQUEST_SOURCE_BRANCH_NAME =~ /^feature/ && $CI_MERGE_REQUEST_TARGET_BRANCH_NAME != $CI_DEFAULT_BRANCH
      when: never
    - if: $CI_MERGE_REQUEST_SOURCE_BRANCH_NAME =~ /^feature/
      when: manual
      allow_failure: true
    - if: $CI_MERGE_REQUEST_SOURCE_BRANCH_NAME
```

使用 `rules:if` 子句指定何时将作业添加到管道

### rules:changes
<!--rehype:wrap-class=row-span-2-->

```yml
docker build:
  script: docker build -t my-image:$CI_COMMIT_REF_SLUG .
  rules:
    - if: $CI_PIPELINE_SOURCE == "merge_request_event"
      changes:
        - Dockerfile
      when: manual
      allow_failure: true
```

使用 `rules:changes` 通过检查对特定文件的更改来指定何时将作业添加到管道

#### rules:changes:paths

```yml
docker-build-1:
  script: docker build -t my-image:$CI_COMMIT_REF_SLUG .
  rules:
    - if: $CI_PIPELINE_SOURCE == "merge_request_event"
      changes:
        - Dockerfile

docker-build-2:
  script: docker build -t my-image:$CI_COMMIT_REF_SLUG .
  rules:
    - if: $CI_PIPELINE_SOURCE == "merge_request_event"
      changes:
        paths:
          - Dockerfile
```

使用 `rules:changes` 指定仅在更改特定文件时将作业添加到管道，并使用 `rules:changes:paths` 指定文件

#### rules:changes:compare_to

```yml
docker build:
  script: docker build -t my-image:$CI_COMMIT_REF_SLUG .
  rules:
    - if: $CI_PIPELINE_SOURCE == "merge_request_event"
      changes:
        paths:
          - Dockerfile
        compare_to: 'refs/heads/branch1'
```

使用 `rules:changes:compare_to` 指定要比较哪个 `ref` 来比较 `rules:changes:paths` 下列出的文件的更改

### rules:exists

```yml
job:
  script: docker build -t my-image:$CI_COMMIT_REF_SLUG .
  rules:
    - exists:
        - Dockerfile
```

当存储库中存在某些文件时，使用 `exists` 运行作业

### rules:allow_failure

```yml
job:
  script: echo "Hello, Rules!"
  rules:
    - if: $CI_MERGE_REQUEST_TARGET_BRANCH_NAME == $CI_DEFAULT_BRANCH
      when: manual
      allow_failure: true
```

在规则中使用 `allow_failure: true` 允许作业失败而不停止管道

### rules:variables

```yml
job:
  variables:
    DEPLOY_VARIABLE: "default-deploy"
  rules:
    - if: $CI_COMMIT_REF_NAME == $CI_DEFAULT_BRANCH
      variables:                              # 覆盖定义的 DEPLOY_VARIABLE
        DEPLOY_VARIABLE: "deploy-production"  # 在工作层面
    - if: $CI_COMMIT_REF_NAME =~ /feature/
      variables:
        IS_A_FEATURE: "true"                  # 定义一个新变量
  script:
    - echo "以 $DEPLOY_VARIABLE 作为参数运行脚本"
    - echo "如果 $IS_A_FEATURE 存在则运行另一个脚本"
```

在规则中使用变量来为特定条件定义变量

另见
---

- [.gitlab-ci.yml 关键字参考](https://docs.gitlab.com/ee/ci/yaml/)
