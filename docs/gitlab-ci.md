GitLab CI/CD 备忘清单
===

本备忘单总结了 [GitLab CI/CD](https://docs.gitlab.com/ee/ci/yaml/#default) 常用的配置说明，以供快速参考

入门
---

### 介绍

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
<!--rehype:wrap-class=col-span-2-->

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

全局关键词
---

### default
<!--rehype:wrap-class=row-span-3-->

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

示例

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

在 `11.4` 中移至 `GitLab` 免费版，使用 `include` 将外部 `YAML` 文件包含在您的 `CI/CD` 配置中

```yml
include:
  - local: '/temp/.gitlab-ci-template.yml'
```

### include:local

使用 `include:local` 包含与 `.gitlab-ci.yml` 文件位于同一存储库中的文件

```yml
include:
  - local: '/temp/.gitlab-ci-template.yml'
```

### include:project
<!--rehype:wrap-class=row-span-2-->

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

使用带有完整 `URL` 的 `include:remote` 来包含来自不同位置的文件

```yml
include:
  - remote: 'https://gitlab.com/example-project/-/raw/main/.gitlab-ci.yml'
```

### include:template

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
    - echo "Run script with $DEPLOY_VARIABLE as an argument"
    - echo "Run another script if $IS_A_FEATURE exists"

job2:
  script:
    - echo "Run script with $DEPLOY_VARIABLE as an argument"
    - echo "Run another script if $IS_A_FEATURE exists"
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
<!--rehype:wrap-class=row-span-2-->

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
    - echo "运行导致退出代码 1 的脚本。此作业失败"
    - exit 1
  allow_failure:
    exit_codes: 137

test_job_2:
  script:
    - echo "运行导致退出代码 137 的脚本。允许此作业失败"
    - exit 137
  allow_failure:
    exit_codes:
      - 137
      - 255
```

### before_script

在每个作业的 `script` 命令之前运行，但在工件恢复之后运行

```yml
job:
  before_script:
    - echo "在任何“script:”命令之前执行此命令。"
  script:
    - echo "此命令在作业的“before_script”命令之后执行"
```

### coverage

### dast_configuration

### dependencies

### extends

### inherit

#### inherit:default

#### inherit:variables

### interruptible

### pages

### parallel

#### parallel:matrix

### resource_group

### retry

#### retry:when

### script

### secrets

#### secrets:vault

#### secrets:file

### services

#### service:pull_policy

### stage

#### stage: .pre

#### stage: .post

### tags

### timeout

### trigger

#### trigger:include

#### trigger:project

#### trigger:strategy

#### trigger:forward

### variables

#### variables:description

#### variables:expand

### when

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

### cache:key

#### `cache:key:files`

#### `cache:key:prefix`

### cache:untracked

### cache:when

### cache:policy

environment
---

### environment:name

### environment:url

### environment:on_stop

### environment:action

### environment:auto_stop_in

### environment:kubernetes

### environment:deployment_tier

### Dynamic environments

image
---

### image:name

### image:entrypoint

### image:pull_policy

needs
---

### needs:artifacts

### needs:project

### needs:pipeline:job

### needs:optional

### needs:pipeline

only / except
---

### only:refs / except:refs

### only:variables / except:variables

### only:changes / except:changes

### only:kubernetes / except:kubernetes

release
---

### release:tag_name

### release:tag_message

### release:name

### release:description

### release:ref

### release:milestones

### release:released_at

### release:assets:links

rules
---

### rules:if

### rules:changes

#### rules:changes:paths

#### rules:changes:compare_to

### rules:exists

### rules:allow_failure

### rules:variables
