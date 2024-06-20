Spring Boot 备忘清单
===

此快速参考备忘单提供了使用 Spring Boot 的用法

注：开发 springboot 需要要基本的 java 基础和 maven 基础。

入门
---

### 介绍

Spring Boot 是一个用于简化 Spring 应用程序开发的框架。它提供了一种简单的方式来创建、运行和部署 Spring 应用程序，并简化了配置和依赖管理。  

### 项目创建与配置
<!--rehype:wrap-class=col-span-2-->

- 使用 [`Spring Initializr`](https://start.spring.io) 创建项目
- 国内可以使用阿里云的 [`Spring Initializr`](https://start.aliyun.com/) 创建项目，选择依赖项（如Web、JPA、Security）和 Spring Boot 版本
- 添加所需的依赖项到 `pom.xml`(Maven) 或 `build.gradle`(Gradle) 文件中
- 在 `src/main/resources` 目录下创建 `application.properties`或`application.yml` 文件，配置应用程序属性，例如数据库连接信息、端口号等

配置
---

### 配置文件说明
<!--rehype:wrap-class=row-span-2-->

在Spring Boot应用程序中，通常使用YAML格式（`.yml`文件）来配置应用程序的属性和设置。相比于传统的`.properties`文件，YAML格式更加清晰易读，并且支持层级结构和列表等复杂数据类型。以下是一些常用的Spring Boot YAML配置字段及其说明：

- `server.port`: 配置应用程序的端口号。
- `spring.application.name`: 配置应用程序的名称。
- `spring.datasource.url`: 配置数据库连接的URL。
- `spring.datasource.username`: 配置数据库连接的用户名。
- `spring.datasource.password`: 配置数据库连接的密码。
- `logging.level`: 配置日志记录的级别，如`DEBUG`、`INFO`、`WARN`、`ERROR`等。
- `management.endpoints.web.exposure.include`: 配置哪些管理端点（如`health`、`info`）可以通过Web访问。
- `spring.jpa.hibernate.ddl-auto`: 配置Hibernate的DDL模式，如`update`、`create`、`create-drop`等。

### 1. 应用程序配置

```yaml
spring:
  application:
    name: my-application
```

`spring.application.name`: 应用程序的名称。在集成服务发现和配置管理时特别有用，也会影响Actuator端点的路径。

### 2. 服务器端口配置

```yaml
server:
  port: 8080
```

`server.port`: 应用程序监听的HTTP端口号。默认为8080，可以根据需要进行配置。

### 3. 数据源配置
<!--rehype:wrap-class=col-span-2-->

```yaml
spring:
  datasource:
    url: jdbc:mysql://localhost:3306/mydatabase
    username: root
    password: password
    driver-class-name: com.mysql.cj.jdbc.Driver
```

#### 说明

- `spring.datasource.url`: 数据库连接URL。
- `spring.datasource.username` 和 `spring.datasource.password`: 数据库的用户名和密码。
- `spring.datasource.driver-class-name`: 数据库驱动类名。

### 4. **JPA 配置**

```yaml
spring:
  jpa:
    show-sql: true
    hibernate:
      ddl-auto: update
```

#### 说明

- `spring.jpa.show-sql`: 是否在控制台显示SQL语句。
- `spring.jpa.hibernate.ddl-auto`: Hibernate自动建表策略，如`update`、`create`、`validate`等。

### 5. 日志配置

```yaml
logging:
  level:
    org.springframework: INFO
    com.example: DEBUG
```

#### 说明

- `logging.level`: 日志级别配置，可以针对不同的包或类设置不同的日志级别。

### 6. Spring Security 配置

```yaml
spring:
  security:
    user:
      name: user
      password: password
    basic:
      enabled: true
```

#### 说明

- `spring.security.user.name` 和 `spring.security.user.password`: 基本认证的用户名和密码。
- `spring.security.basic.enabled`: 是否启用基本认证。

### 7. Actuator 配置

```yaml
management:
  endpoints:
    web:
      exposure:
        include: health, info
```

#### 说明

- `management.endpoints.web.exposure.include`: 暴露给外部的Actuator端点，可以设置为`*`来暴露所有端点。

### 8. 多环境配置

```yaml
spring:
  profiles:
    active: dev
```

#### 说明

- `spring.profiles.active`: 指定当前激活的环境配置文件，可以根据需要选择`dev`、`prod`等不同的配置文件。

### 9. **自定义属性配置**

```yaml
myapp:
  custom:
    property: value
```

#### 说明

- 自定义应用程序属性，可以在应用程序中通过`@Value`注解或`Environment`对象访问。

依赖管理
---

### 依赖管理介绍

- 在 Spring Boot 中，依赖管理是非常重要的一部分。
- 它通过简化依赖项的引入和版本管理，大大简化了项目的构建和维护过程。
- Spring Boot采用了 Starter 依赖项的概念，通过提供预配置的依赖项集合来简化项目的初始化和配置。

### Starter 依赖项
<!--rehype:wrap-class=row-span-2  col-span-2-->

Spring Boot 的 Starter 依赖项是预先配置的一组依赖项集合，它们以 `spring-boot-starter-*` 的命名格式提供。这些 Starter 依赖项可以按照功能领域进行分类，例如：

- `spring-boot-starter-web`: 支持构建Web应用程序，包括Spring MVC和内嵌的Servlet容器（如Tomcat）。
- `spring-boot-starter-data-jpa`: 支持使用Spring Data JPA访问数据库，包括Hibernate和JPA实现。
- `spring-boot-starter-security`: 支持Spring Security，用于身份验证和授权。
- `spring-boot-starter-test`: 支持单元测试和集成测试，包括JUnit、Mockito等。
- `spring-boot-starter-actuator`: 支持集成Actuator，用于监控和管理应用程序。

引入Starter依赖项可以快速添加特定功能，Spring Boot会自动配置所需的组件和设置，减少手动配置工作量。

### 自动依赖解析和版本管理
<!--rehype:wrap-class=row-span-2-->

Spring Boot的BOM（Bill of Materials）集中管理各个 Starter 依赖项的版本，通过在`pom.xml`（Maven）或 `build.gradle`（Gradle）中引入 BOM，可以简化依赖项版本管理。例如，在 Maven 项目中：

```xml
<dependencyManagement>
  <dependencies>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-dependencies</artifactId>
      <version>2.6.0</version>
      <type>pom</type>
      <scope>import</scope>
    </dependency>
  </dependencies>
</dependencyManagement>
```

这样一来，当你在项目中引入 Spring Boot 的 Starter 依赖项时，不需要显式声明版本号，Maven 会自动使用 BOM 中指定的版本。

### 自定义依赖管理

尽管Spring Boot提供了丰富的Starter依赖项和依赖管理功能，但有时你可能需要自定义特定的依赖项或版本。在这种情况下，你可以在`pom.xml`或`build.gradle`中显式声明所需的依赖项，而不使用Starter依赖项。

例如，在Maven项目中，你可以这样声明一个依赖项：

```xml
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-web</artifactId>
  <version>2.6.0</version>
</dependency>
```

这样做可以覆盖Spring Boot BOM中指定的版本，允许你使用特定版本的依赖项。

### 排除和冲突解决

在实际项目中，可能会遇到依赖项之间的冲突或不兼容性问题。Spring Boot允许你通过`<exclusions>`标签来排除Starter依赖项中的某些传递性依赖，以解决冲突问题。

例如，在Maven项目中排除传递性依赖：

```xml
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-web</artifactId>
  <exclusions>
    <exclusion>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-tomcat</artifactId>
    </exclusion>
  </exclusions>
</dependency>
```

这种排除机制使得你可以更精确地控制项目中依赖项的版本和组合，以避免不必要的冲突。

Spring Boot 核心功能
---
<!--rehype:body-class=cols-2-->

### 依赖注入（Dependency Injection）

依赖注入是Spring框架的核心概念之一，它通过控制反转（IoC，Inversion of Control）的方式管理对象之间的依赖关系，从而实现松耦合、可测试和可维护的代码结构。Spring Boot通过自动配置的方式支持依赖注入，以下是一些关键点：

#### 自动装配（Auto-configuration）

Spring Boot根据类路径中的依赖项自动配置应用程序上下文。这包括自动扫描和注册带有特定注解（如`@Component`、`@Service`、`@Repository`等）的Bean，以及自动解析和注入这些Bean之间的依赖关系。

#### Bean的声明和管理

开发者可以使用`@Autowired`注解在需要依赖注入的地方注入其他Bean，Spring Boot会自动解析和注入所需的依赖。例如：

```java
@RestController
public class MyContr {
  private final MyService myService;
  
  @Autowired
  public MyContr(MyService myService) {
      this.myService = myService;
  }
  
  // Controller methods
}
```

在上面的例子中，`MyController`中的`MyService`依赖通过构造函数注入。

#### 条件化注入

Spring Boot支持根据条件选择性地注入Bean。例如，可以使用 `@Conditional` 注解或 `@ConditionalOnProperty` 注解根据特定的条件决定是否创建和注入Bean。

### 面向切面编程（Aspect-Oriented Programming）

面向切面编程是一种软件开发方法，用于分离横切关注点（cross-cutting concerns），例如日志、事务管理、安全性等，以便更好地模块化和管理应用程序。Spring Boot通过整合Spring AOP框架支持面向切面编程，以下是相关的说明：

#### 切面（Aspect）

切面是一个模块化的类，它包含了横切关注点的逻辑。在Spring Boot中，可以使用`@Aspect`注解标记一个类作为切面，并通过`@Before`、`@After`、`@Around`等注解定义切面的具体行为。

#### 切点（Pointcut）

切点定义了在应用程序中哪些位置应用切面逻辑。切点表达式使用`execution`关键字指定要拦截的方法调用。例如：

```java
@Aspect
@Component
public class LoggingAspect {
    
    @Before("execution(* com.example.service.*.*(..))")
    public void beforeServiceMethods(JoinPoint joinPoint) {
        // Advice logic before service method execution
    }
    
    // Other advices (e.g., @After, @Around) can be defined similarly
}
```

#### 通知（Advice）

通知是在切点处执行的具体逻辑，包括`@Before`、`@AfterReturning`、`@AfterThrowing`、`@Around`等。例如，在上面的例子中，`beforeServiceMethods`方法就是一个`@Before`通知，它在目标方法执行之前执行。

#### 配置和启用

Spring Boot通过自动配置和注解扫描使得使用AOP变得非常简单。通常情况下，只需在切面类上加上`@Aspect`注解，并确保它被Spring Boot的组件扫描机制扫描到即可。

Web 开发
---

### 1. 创建一个新的 Spring Boot 项目
<!--rehype:wrap-class=row-span-3-->

你可以使用 Spring Initializr 创建一个新的 Spring Boot 项目。访问 [start.spring.io](https://start.spring.io/) 并按照以下配置创建项目：

- **Project**: Maven 或 Gradle（选择你的构建工具）
- **Language**: Java
- **Spring Boot**: 选择最新的稳定版本
- **Project Metadata**:
  - **Group**: com.example（或者你喜欢的 Group ID）
  - **Artifact**: helloworld（或者你喜欢的 Artifact ID）
  - **Dependencies**: 选择 "Spring Web"

点击 "Generate" 下载项目的 zip 文件。

### 2. 将项目导入到你的 IDE 中

解压下载的文件并导入到你喜欢的 IDE 中（如 IntelliJ IDEA、Eclipse 等）。

### 3. 实现 Hello World Controller
<!--rehype:wrap-class=row-span-3-->

在 IDE 中打开你的项目，导航到 `src/main/java/com/example/helloworld`。你会看到一个名为 `HelloworldApplication.java` 的类文件，这是 Spring Boot 应用程序的入口类。

在这个类的同级目录下创建一个新的 Java 类文件，例如 `HelloController.java`，并添加以下内容：

```java
package com.example.helloworld;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/")
    public String hello() {
        return "Hello, World!";
    }
}
```

### 4. 运行应用程序

使用 Maven 或 Gradle 构建项目并启动应用程序。可以通过 IDE 的运行功能或者命令行执行以下命令：

```bash
mvn spring-boot:run
```

或者

```bash
./gradlew bootRun
```

### 5. 访问 Hello World 页面

在浏览器中访问 `http://localhost:8080/`，你应该能够看到显示 "Hello, World!" 的页面。

这样，你就成功创建了一个简单的 Spring Boot Web 应用程序，并实现了一个基本的 "Hello, World!" 示例。

## **数据访问**

### 1.创建过程和 web 项目示例一样

注意：需要选择 jpa 和对应数据库的驱动

### 2. 配置数据库连接

默认情况下，Spring Boot 使用 H2 Database 作为内嵌数据库。如果你想使用其他数据库，可以在 `application.properties`（或 `application.yml`）文件中配置数据库连接信息。

例如，使用 H2 Database 的默认配置：

```properties
# application.properties

spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=username
spring.datasource.password=password
spring.jpa.database-platform=org.hibernate.dialect.H2Dialect

# Hibernate ddl auto (create, create-drop, validate, update)
spring.jpa.hibernate.ddl-auto=update
```

### 3.  创建实体类 `User`

在 `src/main/java/com/example/userdemo` 目录下创建一个名为 `User` 的实体类：

```java
package com.example.userdemo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    private String username;

    private Integer age;

    private String sex;

    // Constructors, getters, and setters 省略

}
```

### 4. 创建 UserRepository 接口

在同样的目录下创建一个接口 `UserRepository`，继承自 `JpaRepository<User, Long>`，这样 Spring Data JPA 将会自动实现一些基本的数据库操作方法。

```java
package com.example.userdemo;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
```

### 5. 创建一个简单的控制器来测试

创建一个简单的控制器 `UserController`，用来处理 HTTP 请求，并操作 `UserRepository` 来访问数据库。

```java
package com.example.userdemo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    //  获取所有用户
    @GetMapping("/")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // 通过 id 获取用户
    @GetMapping("/{id}")
    public User getUserById(@PathVariable("id") Long id) {
        return userRepository.findById(id).orElse(null);
    }

    // POST 创建新用户
    @PostMapping("/")
    public User addUser(@RequestBody User user) {
        return userRepository.save(user);
    }

    // PUT 更新用户
    @PutMapping("/{id}")
    public User updateUser(@PathVariable("id") Long id, @RequestBody User userDetails) {
        User user = userRepository.findById(id).orElse(null);
        if (user != null) {
            user.setUsername(userDetails.getUsername());
            user.setAge(userDetails.getAge());
            user.setSex(userDetails.getSex());
            return userRepository.save(user);
        }
        return null;
    }

    // DELETE 删除用户 
    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable("id") Long id) {
        userRepository.deleteById(id);
    }
}
```

### 6. 运行应用程序并测试

使用 Maven 或 Gradle 构建并运行你的应用程序。然后，可以使用 Postman 或浏览器访问以下 API 来测试你的应用程序：

- **GET** `http://localhost:8080/users/` 获取所有用户
- **GET** `http://localhost:8080/users/{id}` 根据用户ID获取用户信息
- **POST** `http://localhost:8080/users/` 添加新用户（Body 中包含 JSON 数据）
- **PUT** `http://localhost:8080/users/{id}` 更新用户信息（Body 中包含 JSON 数据）
- **DELETE** `http://localhost:8080/users/{id}` 删除用户

## **测试**

### 1. 创建一个简单的项目 创建过程同 web 项目创建

在 `src/main/java/com/example/demo` 目录下创建一个名为 `HelloController.java` 的类：

```java
package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/hello")
    public String hello() {
        return "Hello, World!";
    }
}
```

### 2. 编写测试类

在 `src/test/java/com/example/demo` 目录下创建一个名为 `HelloControllerTest.java` 的测试类：

```java
package com.example.demo;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.web.SpringJUnitWebConfig;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;

@SpringBootTest
@AutoConfigureMockMvc
public class HelloControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    public void helloTest() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/hello"))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().string("Hello, World!"))
                .andDo(print());
    }
}
```

### 3. 解释测试类的关键点

- **@SpringBootTest**: 这个注解告诉 Spring Boot 在测试时启动整个 Spring 应用程序上下文。
- **@AutoConfigureMockMvc**: 这个注解确保在测试中自动配置 MockMvc 实例，用于模拟 HTTP 请求。
- **@Autowired private MockMvc mockMvc**: 注入 MockMvc 实例，用于执行 HTTP 请求并验证响应。
- **@Test public void helloTest()**: 这是一个 JUnit 测试方法，用来测试 `HelloController` 中的 `hello()` 方法。
- **mockMvc.perform(...)**: 执行一个 GET 请求到 `/hello` 接口。
- **andExpect(MockMvcResultMatchers.status().isOk())**: 预期响应的状态码是 200 OK。
- **andExpect(MockMvcResultMatchers.content().string("Hello, World!"))**: 预期响应的内容是 "Hello, World!"。
- **andDo(print())**: 打印请求和响应的详细信息，方便调试。

### 4. 运行测试

运行测试，确保程序正确.

## **部署与扩展**

Spring Boot 应用程序的打包过程通常涉及将应用程序及其依赖项打包成一个可执行的 JAR 文件或者 WAR 文件。下面我将简要介绍一下 Spring Boot 应用程序的打包过程。

### 1. 打包方式

Spring Boot 应用程序可以打包为以下几种方式之一：

1. **可执行 JAR 文件**：
   - 最常见的方式是将 Spring Boot 应用程序打包成一个可执行的 JAR 文件（Java Archive）。
   - JAR 文件中包含了所有的依赖项，可以通过 `java -jar` 命令来运行。

2. **WAR 文件**：
   - 如果你需要将 Spring Boot 应用程序部署到外部的 Servlet 容器（如 Tomcat、Jetty 等），你可以将应用程序打包成一个 WAR 文件（Web Application Archive）。
   - WAR 文件适合传统的 Java Web 应用程序部署方式。

### 2. 打包工具

通常使用以下两种构建工具来打包 Spring Boot 应用程序：

- **Maven**：使用 Maven 的 `mvn package` 命令可以将应用程序打包为 JAR 或 WAR 文件。在 `pom.xml` 文件中，Spring Boot 应用程序通常会依赖于 `spring-boot-starter-parent` 父项目，这简化了 Maven 配置和依赖管理。

### 3. 打包过程概述

在你的 Spring Boot 项目中，通常有一个入口类（如 `Application.java` 或者根据你的项目命名）。这个类使用 `@SpringBootApplication` 注解标记，它包含了 `main` 方法用来启动应用程序。

当你运行 Maven 的构建命令时，它们会执行以下几个主要步骤来打包你的应用程序：

1. **依赖项解析和下载**：构建工具会检查你项目中的依赖项，下载缺失的依赖并构建整个依赖树。

2. **编译代码**：构建工具会编译你的 Java 代码、资源文件等。

3. **运行测试**：通常会执行单元测试和集成测试，确保代码质量和功能正确性。

4. **打包应用程序**：
   - 对于可执行 JAR 文件：构建工具会将编译后的类文件、资源文件和依赖项打包到一个 JAR 文件中。同时，它会生成一个 MANIFEST.MF 文件，指定应用程序的入口点（main class）。
   - 对于 WAR 文件：构建工具会将编译后的类文件、资源文件和依赖项打包成一个 WAR 文件，包括 WEB-INF 目录和其他必要的内容。

5. **输出结果**：构建工具会在指定的目录下生成打包好的 JAR 或 WAR 文件，通常位于 `target` 目录下（Maven）。

### 4. 示例

假设你有一个简单的 Spring Boot 应用程序，并且已经配置好了 Maven 或 Gradle。运行以下命令即可进行打包：

- **Maven**：`mvn clean package`

构建工具会执行以上步骤，生成可执行的 JAR 文件或 WAR 文件，你可以根据需要进行部署和运行。

## **常见问题与解决方案**

- 处理依赖冲突和版本问题，了解如何排除和解决依赖冲突。
- 调优和性能优化建议，如何优化数据库查询、减少资源消耗。
- 处理常见的错误和异常，如数据库连接问题、服务器端错误等的调试和解决策略。
