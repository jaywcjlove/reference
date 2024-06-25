RxJS 备忘清单
===

RxJS（Reactive Extensions for JavaScript）是一个强大的库，用于处理异步事件和数据流。以下是 RxJS 的一些关键概念、操作符和方法的总结。

## 入门

### 安装 RxJS

```bash
npm install rxjs
```

### 导入所需的 Observable 和操作符

```javascript
import { Observable, of, from, interval, fromEvent } from 'rxjs';
import { 
  map, 
  filter, 
  switchMap, 
  mergeMap, 
  catchError, 
  debounceTime, 
  distinctUntilChanged, 
  take,
  tap,
  concatMap,
  delay,
  retryWhen,
  scan,
  combineLatest,
  concat,
  merge,
  forkJoin,
  withLatestFrom,
  startWith,
  reduce
} from 'rxjs/operators';
```

## 创建 Observable

### of - 创建一个立即发送指定值并完成的 Observable

```javascript
const obs = of(1, 2, 3);
obs.subscribe(console.log);
// 输出: 1 2 3
```

### from - 从 Promise、数组、可迭代对象创建 Observable

```javascript
const obs = from([1, 2, 3]);
obs.subscribe(console.log);
// 输出: 1 2 3
```

### interval - 创建一个定时发送递增整数的 Observable

```javascript
const obs = interval(1000);
obs.subscribe(console.log);
// 每秒输出一次递增的数字
```

### fromEvent - 从 DOM 事件创建 Observable

```javascript
const button = document.querySelector('button');
const obs = fromEvent(button, 'click');
obs.subscribe(event => console.log('Button clicked!', event));
```

## 操作符

### map - 对 Observable 发出的每个值应用一个函数

```javascript
const obs = of(1, 2, 3).pipe(
  map(x => x * 2)
);
obs.subscribe(console.log);
// 输出: 2 4 6
```

### filter - 过滤 Observable 发出的值

```javascript
const obs = of(1, 2, 3).pipe(
  filter(x => x % 2 === 0)
);
obs.subscribe(console.log);
// 输出: 2
```

### switchMap - 将 Observable 每个值映射成 Observable 并订阅，前一个订阅将被取消

```javascript
const obs = interval(1000).pipe(
  switchMap(() => of('Hello'))
);
obs.subscribe(console.log);
// 每秒输出一次 "Hello"
```

### mergeMap - 类似 switchMap，但允许多个内部 Observable 并发执行

```javascript
const obs = interval(1000).pipe(
  mergeMap(() => of('Hello'))
);
obs.subscribe(console.log);
// 每秒输出一次 "Hello"
```

### catchError - 捕获 Observable 链中的错误

```javascript
const obs = of(1, 2, 3).pipe(
  map(x => {
    if (x === 2) throw 'Error!';
    return x;
  }),
  catchError(err => of('Caught an error: ' + err))
);
obs.subscribe(console.log);
// 输出: 1 Caught an error: Error!
```

### debounceTime - 延迟处理，直到源 Observable 停止发出数据一定时间

```javascript
const obs = fromEvent(document, 'mousemove').pipe(
  debounceTime(300)
);
obs.subscribe(event => console.log('Mouse moved!', event));
```

### distinctUntilChanged - 忽略连续重复的值

```javascript
const obs = of(1, 1, 2, 2, 3, 3).pipe(
  distinctUntilChanged()
);
obs.subscribe(console.log);
// 输出: 1 2 3
```

### take - 只发出前 n 个值

```javascript
const obs = interval(1000).pipe(
  take(3)
);
obs.subscribe(console.log);
// 输出: 0 1 2
```

## 组合操作符

### combineLatest - 当两个 Observable 都发出新的值时，发出它们的组合

```javascript
const obs1 = interval(1000);
const obs2 = of('A', 'B', 'C');
const combined = combineLatest([obs1, obs2]);
combined.subscribe(console.log);
// 每秒输出一次两个 observables 的最新值
```

### concat - 按顺序连接多个 Observable

```javascript
const obs1 = of(1, 2, 3);
const obs2 = of(4, 5, 6);
const combined = concat(obs1, obs2);
combined.subscribe(console.log);
// 输出: 1 2 3 4 5 6
```

### merge - 将多个 Observable 合并为一个

```javascript
const obs1 = interval(1000).pipe(map(x => 'A' + x));
const obs2 = interval(500).pipe(map(x => 'B' + x));
const combined = merge(obs1, obs2);
combined.subscribe(console.log);
// 每秒输出 "A" 和 "B" 开头的递增数字
```

### forkJoin - 等待所有 Observable 完成，然后发出它们的最后一个值的数组

```javascript
const obs1 = of(1, 2, 3);
const obs2 = of('A', 'B', 'C');
const combined = forkJoin([obs1, obs2]);
combined.subscribe(console.log);
// 输出: [3, 'C']
```

## 错误处理

### retryWhen - 在 Observable 发出错误时重试

```javascript
const obs = throwError('Something went wrong!').pipe(
  retryWhen(errors =>
    errors.pipe(
      delayWhen(() => interval(1000))
    )
  )
);
obs.subscribe(console.log, console.error);
// 输出: Something went wrong! (每秒重试一次)
```

## 实用操作符

### tap - 用于记录、测量或执行副作用操作

```javascript
const obs = of(1, 2, 3).pipe(
  tap(x => console.log(`Before: ${x}`)),
  map(x => x * 2),
  tap(x => console.log(`After: ${x}`))
);
obs.subscribe();
// 输出: Before: 1, After: 2, Before: 2, After: 4, Before: 3, After: 6
```

### startWith - 在 Observable 序列前添加值

```javascript
const obs = of(1, 2, 3).pipe(
  startWith(0)
);
obs.subscribe(console.log);
// 输出: 0 1 2 3
```

### scan - 对 Observable 发出的每个值应用累加器函数

```javascript
const obs = of(1, 2, 3).pipe(
  scan((acc, value) => acc + value, 0)
);
obs.subscribe(console.log);
// 输出: 1 3 6
```

### reduce - 对 Observable 发出的值进行累加

```javascript
const obs = of(1, 2, 3).pipe(
  reduce((acc, value) => acc + value, 0)
);
obs.subscribe(console.log);
// 输出: 6
```

### delay - 延迟 Observable 发出数据的时间

```javascript
const obs = of('Hello').pipe(
  delay(2000)
);
obs.subscribe(console.log);
// 输出: 'Hello' (延迟2秒)
```

## 调度器

调度器（Scheduler）控制着 RxJS 操作的执行时机。常见的调度器有：

- `asyncScheduler`：异步执行任务。
- `queueScheduler`：按队列顺序执行任务。
- `animationFrameScheduler`：在浏览器的下一次重绘前执行任务。

### 示例

```javascript
const obs = of(1, 2, 3).pipe(
  observeOn(asyncScheduler)
);

console.log('Before subscribe');
obs.subscribe(console.log);
console.log('After subscribe');
// 输出: Before subscribe, After subscribe, 1, 2, 3
```

## 另见

- [RxJS 官方文档](https://rxjs.dev/)
- [RxJS 学习资源](https://rxjs.dev/guide/overview)
- [RxJS 操作符参考](https://rxjs.dev/guide/operators)
