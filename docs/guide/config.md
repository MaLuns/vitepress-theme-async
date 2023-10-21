# 主题配置

## 语言 Language

主题内置文本语言切换，等待支持。

## 主题模式 ThemeMode

参考 vitepress 配置。

## 网站图标 Favicon

用于 logo、icon 安装图标配置。

- `logo`：顶部 logo
- `dark_logo`：顶部 logo，暗黑模式时显示
- `icon16`：icon 16\*16
- `icon32`：icon 32\*32
- `appleTouchIcon`：iOS 添加到桌面时显示图标
- `visibilitychange`：是否在离开窗口时切换标题显示
- `hidden`：离开窗口时显示图标
- `showText`：激活窗口时显示文字
- `hideText`：离开窗口显示文字

## 用户信息 User

用户基本信息，用于博主名称、头像、友链交换规则、站点运行计时等等。

- `name`：昵称，用于侧栏或其他区域标识
- `first_name`：名，用于顶部将姓和名分别显示
- `last_name`：姓，
- `email`：邮箱
- `domain`：域名
- `avatar`：头像
- `dark_avatar`：头像，黑暗主题时显示
- `describe`：网站简介
- `ruleText`：友链交换规则

## 侧栏 Sidebar

### 社交图标

默认内置 Font-Awesome Brand 图标，可根据您的需求添加，您可以通过在头部引入自定义图标资源来获取更多图标。

- `name`：链接名称
- `icon`：图标 class
- `url`：链接

```yaml [修改示例]
sidebar:
  social: # 社交地址
    - name: github
      icon: fab fa-github
      url: https://github.com
    - name: gitee
      icon: iconfont cg-gitee
      url: https://gitee.com
```

如果您不想放置任何链接，仅需在 `sidebar` 中设置：

```yaml
sidebar:
  social:
```

### 打字动画

- `typedTextPrefix`：为固定前缀
- `typedText`：为打字效果切换条目，可设置多条，按顺序切换。

```yaml
sidebar:
  typedTextPrefix: I`m
  typedText: ["Web Developer"]
```

### 侧栏信息

侧栏信息是一个数组，里面元素 key-val 形式的。

```yaml
sidebar:
  info: # 个人信息
    - key: 地址
      val: 火星
    - key: 年龄
      val: 18
```

## 横幅 Banner

每个页面横幅都可以自定义不同背景图、标语等，当您需要视频背景的时候，您的视频格式需要为 MP4、WebM 、Ogg 等格式。

- `type`：横幅类型 img、slideshow、video
- `bgurl`：背景图地址，如果 type 是 slideshow，必须为数组。如果 type 是 img 时，可为字符串或数组，如果数组长度为 2 则会根据主题自动切换。
- `bannerTitle`：横幅上标题
- `bannerText`：横幅描述
- `position`： 同 CSS object-position
- `fit`：同 CSS object-fit

```yaml{4} [修改示例]
banner:
  index:
    type: img
    bgurl: https://pic1.zhimg.com/v2-b3c2c6745b9421a13a3c4706b19223b3_r.jpg?source=1940ef5c
    bannerTitle: 树深时见鹿，<br>溪午不闻钟。
    bannerText: Hi my new friend!
```

## 页脚 Footer

页脚所有配置预览：

```yaml
footer:
  powered:
    enable: true
  beian:
    enable: false
    icp:
  copyrightYear:
  live_time:
    enable: false
    prefix: footer.tips
    start_time: 04/10/2022 17:00:00
  custom_text:
```

### 起始年份

```yaml
footer:
  copyrightYear: 2020
```

### 驱动

自豪地显示当前使用的博客框架 Vitepress 与主题 Async 的名字及版本。

如：`由 Vitepress 驱动 v5.4.2 | 主题 - Async v1.1.7`

让更多人知道 Vitepress 与主题 Vitepress-Theme-Async，这有利于开源社区进一步发展。

```yaml {3}
footer:
  powered:
    enable: true
```

### 备案

国内用户可以提供备案号，开启备案显示。

备案信息默认链接为：<https://beian.miit.gov.cn/>

- `enable`: 开启备案
- `icp`: 备案号

```yaml
footer:
  beian:
    enable: true
    icp: 苏ICP备xxxxxxxx号
```

### 运行时间

默认关闭。

`本博客已萌萌哒地运行 442 天`

- `enable`: 开启运行计时
- `prefix`: 计时文案，如果需要自定义，请覆盖语言文件里 footer.tips ，个性化语言 [参考这里](#语言-language)
- `start_time`: 计时开始时间，浏览器支持的日期格式即可

```yaml
footer:
  live_time:
    enable: false
    prefix: footer.tips
    start_time: 04/10/2022 17:00:00
```

### 自定义文本

`custom_text` 为自定义页脚，可以包含 HTML。
譬如有时使用其他服务商进行托管页面，或一些 ICP 之外的备案信息。

```yaml
footer:
  custom_text: Hosted by <a href="https://github.com" rel="noopener" target="_blank">Github Pages</a>
```

## 文章 Article

这里是一些关于文章相关配置合集。

### 打赏 Reward

开启后，将在每篇文章 `post` 末尾显示打赏按钮。

- `enable`: 开启打赏
- `url`: 您的打赏链接（当您开启打赏链接时，将自动跳转您的外部链接而不是展开二维码）
- `comment`: 在打赏按钮下显示您想说的话
- `methods`: 数组，打赏方式

#### 打赏二维码

- `name`: 打赏方式
- `path`: 图片路径

```yaml{3-6} [修改示例]
reward:
  enable: true
  comment: I'm so cute. Please give me money.
  methods:
    - name: 支付宝
      path: 二维码地址
```

您也可以在某篇文章的首部单独设置是否开启打赏。

```yaml
reward: true
```

### 版权信息

设置您的文章的分享版权

> [关于许可协议](https://creativecommons.org/licenses/)
> 默认使用 署名-非商业性使用-相同方式共享 4.0，即 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh)。

- `license`：设置证书 (by | by-nc | by-nc-nd | by-nc-sa | by-nd | by-sa | zero)
- `language`：设置语言 (deed.zh | deed.en | deed.ja ｜ ...)
- `post`：在每篇文章末尾显示
- `clipboard`：是否在复制文章时，在剪贴板中追加版权信息（默认关闭）

```yaml{5} [修改示例]
creative_commons:
  license: by-nc-sa
  language: deed.zh
  post: false
  clipboard: true
```
