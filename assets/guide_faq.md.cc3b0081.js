import{_ as e,C as l,o as p,c as o,k as s,H as t,a,Q as c}from"./chunks/framework.b1940504.js";const F=JSON.parse('{"title":"FAQ","description":"","frontmatter":{},"headers":[],"relativePath":"guide/faq.md","filePath":"guide/faq.md","lastUpdated":1751975501000}'),r={name:"guide/faq.md"},i=s("h1",{id:"faq",tabindex:"-1"},[a("FAQ "),s("a",{class:"header-anchor",href:"#faq","aria-label":'Permalink to "FAQ"'},"​")],-1),d={class:"tip custom-block"},y=s("p",{class:"custom-block-title"},"TIP",-1),E=c(`<p>有任何关于本主题的缺陷报告与功能建议，可以发起 <a href="https://github.com/MaLuns/vitepress-theme-async/issues" target="_blank" rel="noreferrer">Issues</a>。</p><p>如果您有其他相关的想法与问题，可前往 <a href="https://github.com/MaLuns/vitepress-theme-async/discussions" target="_blank" rel="noreferrer">Discussions</a>。</p><h2 id="配置项不生效" tabindex="-1">配置项不生效？ <a class="header-anchor" href="#配置项不生效" aria-label="Permalink to &quot;配置项不生效？&quot;">​</a></h2><p>您可以参考查看 <a href="hhttps://github.com/MaLuns/vitepress-theme-async/blob/main/packages/vitepress-theme-async/types/theme.d.ts" target="_blank" rel="noreferrer">AsyncThemeConfig ｜ vitepress-theme-async</a> 文件及相关注释，确保您配置正确性。</p><ul><li>初始安装后不生效？</li></ul><p>检查配置文件路径、文件名是否正确，然后检查配置文档是否正确。</p><ul><li>版本升级后配置不生效？</li></ul><p>检查安装主题版本，然后查看更新日志里是否发生变更，参考文档配置说明，确保配置正确。</p><h2 id="目录结构是怎么的" tabindex="-1">目录结构是怎么的？ <a class="header-anchor" href="#目录结构是怎么的" aria-label="Permalink to &quot;目录结构是怎么的？&quot;">​</a></h2><h3 id="单仓库" tabindex="-1">单仓库 <a class="header-anchor" href="#单仓库" aria-label="Permalink to &quot;单仓库&quot;">​</a></h3><p>如果仅仅是单个博客站点，目录结构应该是下面样子的</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-mRxTV" id="tab-uPQ-rTK" checked="checked"><label for="tab-uPQ-rTK">目录结构</label><input type="radio" name="group-mRxTV" id="tab--_TFvEO"><label for="tab--_TFvEO">package.json</label></div><div class="blocks"><div class="language- vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">.</span></span>
<span class="line"><span style="color:#e1e4e8;">├─ .vitepress</span></span>
<span class="line"><span style="color:#e1e4e8;">├─ posts</span></span>
<span class="line"><span style="color:#e1e4e8;">│  ├─ test.md</span></span>
<span class="line"><span style="color:#e1e4e8;">│  ├─ demo.md</span></span>
<span class="line"><span style="color:#e1e4e8;">│  └─ ...</span></span>
<span class="line"><span style="color:#e1e4e8;">├─ about.md</span></span>
<span class="line"><span style="color:#e1e4e8;">├─ index.md</span></span>
<span class="line"><span style="color:#e1e4e8;">├─ ...</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">.</span></span>
<span class="line"><span style="color:#24292e;">├─ .vitepress</span></span>
<span class="line"><span style="color:#24292e;">├─ posts</span></span>
<span class="line"><span style="color:#24292e;">│  ├─ test.md</span></span>
<span class="line"><span style="color:#24292e;">│  ├─ demo.md</span></span>
<span class="line"><span style="color:#24292e;">│  └─ ...</span></span>
<span class="line"><span style="color:#24292e;">├─ about.md</span></span>
<span class="line"><span style="color:#24292e;">├─ index.md</span></span>
<span class="line"><span style="color:#24292e;">├─ ...</span></span></code></pre></div><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">&quot;scripts&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#79B8FF;">&quot;dev&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;vitepress dev ./&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#79B8FF;">&quot;build&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;vitepress build ./&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#79B8FF;">&quot;preview&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;vitepress preview ./&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">	},</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">&quot;scripts&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#005CC5;">&quot;dev&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;vitepress dev ./&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#005CC5;">&quot;build&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;vitepress build ./&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#005CC5;">&quot;preview&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;vitepress preview ./&quot;</span></span>
<span class="line"><span style="color:#24292E;">	},</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div></div></div><p>使用脚手架生成程序默认为这种格式</p><div class="language-cmd vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cmd</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">npm create async</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">theme@latest my</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">first</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">blog</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">npm create async</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">theme@latest my</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">first</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">blog</span></span></code></pre></div><h3 id="多仓库" tabindex="-1">多仓库 <a class="header-anchor" href="#多仓库" aria-label="Permalink to &quot;多仓库&quot;">​</a></h3><p>如果是 monorepo 结构，目录结构应该是下面样子的</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-SttcF" id="tab-S__vaU2" checked="checked"><label for="tab-S__vaU2">目录结构</label><input type="radio" name="group-SttcF" id="tab-Rl6cmsj"><label for="tab-Rl6cmsj">package.json</label></div><div class="blocks"><div class="language- vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">.</span></span>
<span class="line"><span style="color:#e1e4e8;">├─ blog</span></span>
<span class="line"><span style="color:#e1e4e8;">│	├─ .vitepress</span></span>
<span class="line"><span style="color:#e1e4e8;">│	├─ posts</span></span>
<span class="line"><span style="color:#e1e4e8;">│	│  ├─ test.md</span></span>
<span class="line"><span style="color:#e1e4e8;">│	│  ├─ demo.md</span></span>
<span class="line"><span style="color:#e1e4e8;">│	│  └─ ...</span></span>
<span class="line"><span style="color:#e1e4e8;">│	├─ about.md</span></span>
<span class="line"><span style="color:#e1e4e8;">│	├─ index.md</span></span>
<span class="line"><span style="color:#e1e4e8;">│	├─ ...</span></span>
<span class="line"><span style="color:#e1e4e8;">├─ other</span></span>
<span class="line"><span style="color:#e1e4e8;">│		├─ ...</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">.</span></span>
<span class="line"><span style="color:#24292e;">├─ blog</span></span>
<span class="line"><span style="color:#24292e;">│	├─ .vitepress</span></span>
<span class="line"><span style="color:#24292e;">│	├─ posts</span></span>
<span class="line"><span style="color:#24292e;">│	│  ├─ test.md</span></span>
<span class="line"><span style="color:#24292e;">│	│  ├─ demo.md</span></span>
<span class="line"><span style="color:#24292e;">│	│  └─ ...</span></span>
<span class="line"><span style="color:#24292e;">│	├─ about.md</span></span>
<span class="line"><span style="color:#24292e;">│	├─ index.md</span></span>
<span class="line"><span style="color:#24292e;">│	├─ ...</span></span>
<span class="line"><span style="color:#24292e;">├─ other</span></span>
<span class="line"><span style="color:#24292e;">│		├─ ...</span></span></code></pre></div><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">&quot;scripts&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#79B8FF;">&quot;dev&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;vitepress dev blog&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#79B8FF;">&quot;build&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;vitepress build blog&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#79B8FF;">&quot;preview&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;vitepress preview blog&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">	},</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">&quot;scripts&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#005CC5;">&quot;dev&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;vitepress dev blog&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#005CC5;">&quot;build&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;vitepress build blog&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#005CC5;">&quot;preview&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;vitepress preview blog&quot;</span></span>
<span class="line"><span style="color:#24292E;">	},</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div></div></div><h2 id="hexo-theme-async-如何迁移" tabindex="-1">hexo-theme-async 如何迁移？ <a class="header-anchor" href="#hexo-theme-async-如何迁移" aria-label="Permalink to &quot;hexo-theme-async 如何迁移？&quot;">​</a></h2><h3 id="文件和配置迁移" tabindex="-1">文件和配置迁移 <a class="header-anchor" href="#文件和配置迁移" aria-label="Permalink to &quot;文件和配置迁移&quot;">​</a></h3><ul><li>首先可以修改配置 <code>postDir</code> 改为 <code>_posts</code></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-diff vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">	themeConfig: {</span></span>
<span class="line diff add"><span style="color:#E1E4E8;">		postDir: </span><span style="color:#9ECBFF;">&#39;_posts&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">	},</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">	themeConfig: {</span></span>
<span class="line diff add"><span style="color:#24292E;">		postDir: </span><span style="color:#032F62;">&#39;_posts&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">	},</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div><ul><li>然后将 hexo 里 <code>source</code> 里文件都复制到你的 vitpress 目录下</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">.</span></span>
<span class="line"><span style="color:#e1e4e8;">├─ .vitepress</span></span>
<span class="line"><span style="color:#e1e4e8;">├─ _posts</span></span>
<span class="line"><span style="color:#e1e4e8;">│  ├─ test.md</span></span>
<span class="line"><span style="color:#e1e4e8;">│  ├─ demo.md</span></span>
<span class="line"><span style="color:#e1e4e8;">│  └─ ...</span></span>
<span class="line"><span style="color:#e1e4e8;">├─ about</span></span>
<span class="line"><span style="color:#e1e4e8;">│  ├─ index.md</span></span>
<span class="line"><span style="color:#e1e4e8;">├─ img</span></span>
<span class="line"><span style="color:#e1e4e8;">│  ├─ xxx.png</span></span>
<span class="line"><span style="color:#e1e4e8;">├─ ...</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">.</span></span>
<span class="line"><span style="color:#24292e;">├─ .vitepress</span></span>
<span class="line"><span style="color:#24292e;">├─ _posts</span></span>
<span class="line"><span style="color:#24292e;">│  ├─ test.md</span></span>
<span class="line"><span style="color:#24292e;">│  ├─ demo.md</span></span>
<span class="line"><span style="color:#24292e;">│  └─ ...</span></span>
<span class="line"><span style="color:#24292e;">├─ about</span></span>
<span class="line"><span style="color:#24292e;">│  ├─ index.md</span></span>
<span class="line"><span style="color:#24292e;">├─ img</span></span>
<span class="line"><span style="color:#24292e;">│  ├─ xxx.png</span></span>
<span class="line"><span style="color:#24292e;">├─ ...</span></span></code></pre></div><ul><li>将 _data 里有自定义样式、语言包迁移到 vitepress 下后，去除 _data、_drafts 文件夹</li></ul><p>将 <code>source/_data/style/index.less</code> 文件放到 <code>.vitepress/theme/</code> 目录下，然后在 <code>.vitepress\\theme\\index.ts</code> 引入样式文件</p><p>将 <code>source/_data/languages.yml</code> 转成 json 后放到 <code>vitepress-theme-async</code> 配置里， <a href="https://vitepress-theme-async.imalun.com/guide/config#%E8%87%AA%E5%AE%9A%E4%B9%89%E8%AF%AD%E8%A8%80" target="_blank" rel="noreferrer">参考 个性化语言包</a></p><ul><li>在源目录下新建 public 文件，将静态文件如 图片、脚本、字体文件等等放到里面</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark has-diff vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">.</span></span>
<span class="line"><span style="color:#e1e4e8;">├─ .vitepress</span></span>
<span class="line"><span style="color:#e1e4e8;">├─ _posts</span></span>
<span class="line"><span style="color:#e1e4e8;">│  ├─ test.md</span></span>
<span class="line"><span style="color:#e1e4e8;">│  ├─ demo.md</span></span>
<span class="line"><span style="color:#e1e4e8;">│  └─ ...</span></span>
<span class="line"><span style="color:#e1e4e8;">├─ about</span></span>
<span class="line"><span style="color:#e1e4e8;">│  ├─ index.md</span></span>
<span class="line diff remove"><span style="color:#e1e4e8;">├─ img </span></span>
<span class="line diff remove"><span style="color:#e1e4e8;">│  ├─ xxx.png  </span></span>
<span class="line diff add"><span style="color:#e1e4e8;">├─ public </span></span>
<span class="line diff add"><span style="color:#e1e4e8;">│  ├─ img </span></span>
<span class="line diff add"><span style="color:#e1e4e8;">│  	 ├─ xxx.png  </span></span>
<span class="line"><span style="color:#e1e4e8;">├─ ...</span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line"><span style="color:#24292e;">.</span></span>
<span class="line"><span style="color:#24292e;">├─ .vitepress</span></span>
<span class="line"><span style="color:#24292e;">├─ _posts</span></span>
<span class="line"><span style="color:#24292e;">│  ├─ test.md</span></span>
<span class="line"><span style="color:#24292e;">│  ├─ demo.md</span></span>
<span class="line"><span style="color:#24292e;">│  └─ ...</span></span>
<span class="line"><span style="color:#24292e;">├─ about</span></span>
<span class="line"><span style="color:#24292e;">│  ├─ index.md</span></span>
<span class="line diff remove"><span style="color:#24292e;">├─ img </span></span>
<span class="line diff remove"><span style="color:#24292e;">│  ├─ xxx.png  </span></span>
<span class="line diff add"><span style="color:#24292e;">├─ public </span></span>
<span class="line diff add"><span style="color:#24292e;">│  ├─ img </span></span>
<span class="line diff add"><span style="color:#24292e;">│  	 ├─ xxx.png  </span></span>
<span class="line"><span style="color:#24292e;">├─ ...</span></span></code></pre></div><ul><li>找到配置文件 _config.async.yaml 然后转成 json 格式后，将其放置 themeConfig 里</li></ul><p>将所有的 key 格式从 xxx_xx 改为 xxxXx 格式后，就可以根据 ts 错误提示对字段进行修改</p><p>如果是没有字段进行补充，如果是提示多余字段，可以在文档搜索下确认没有情况下删除</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-diff vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  themeConfig: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    postDir: </span><span style="color:#9ECBFF;">&#39;_posts&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line diff add"><span style="color:#E1E4E8;">    user: { </span></span>
<span class="line diff add"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&quot;ThemeAsync&quot;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line diff add"><span style="color:#E1E4E8;">      first_name: </span><span style="color:#9ECBFF;">&quot;Theme&quot;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line diff add"><span style="color:#E1E4E8;">      last_name: </span><span style="color:#9ECBFF;">&quot;Async&quot;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line diff add"><span style="color:#E1E4E8;">      email: </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">, </span></span>
<span class="line diff add"><span style="color:#E1E4E8;">      domain: </span><span style="color:#9ECBFF;">&quot;站点域名&quot;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line diff add"><span style="color:#E1E4E8;">      avatar: </span><span style="color:#9ECBFF;">&quot;/img/avatar.jpg&quot;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line diff add"><span style="color:#E1E4E8;">      describe: </span><span style="color:#9ECBFF;">&quot;网站简介。&quot;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line diff add"><span style="color:#E1E4E8;">      rule_text: </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;"> </span></span>
<span class="line diff add"><span style="color:#E1E4E8;">    } </span></span>
<span class="line diff add"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// 更多配置 </span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  themeConfig: {</span></span>
<span class="line"><span style="color:#24292E;">    postDir: </span><span style="color:#032F62;">&#39;_posts&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line diff add"><span style="color:#24292E;">    user: { </span></span>
<span class="line diff add"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&quot;ThemeAsync&quot;</span><span style="color:#24292E;">, </span></span>
<span class="line diff add"><span style="color:#24292E;">      first_name: </span><span style="color:#032F62;">&quot;Theme&quot;</span><span style="color:#24292E;">, </span></span>
<span class="line diff add"><span style="color:#24292E;">      last_name: </span><span style="color:#032F62;">&quot;Async&quot;</span><span style="color:#24292E;">, </span></span>
<span class="line diff add"><span style="color:#24292E;">      email: </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">, </span></span>
<span class="line diff add"><span style="color:#24292E;">      domain: </span><span style="color:#032F62;">&quot;站点域名&quot;</span><span style="color:#24292E;">, </span></span>
<span class="line diff add"><span style="color:#24292E;">      avatar: </span><span style="color:#032F62;">&quot;/img/avatar.jpg&quot;</span><span style="color:#24292E;">, </span></span>
<span class="line diff add"><span style="color:#24292E;">      describe: </span><span style="color:#032F62;">&quot;网站简介。&quot;</span><span style="color:#24292E;">, </span></span>
<span class="line diff add"><span style="color:#24292E;">      rule_text: </span><span style="color:#005CC5;">null</span><span style="color:#24292E;"> </span></span>
<span class="line diff add"><span style="color:#24292E;">    } </span></span>
<span class="line diff add"><span style="color:#24292E;">    </span><span style="color:#D73A49;">...</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// 更多配置 </span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div><h3 id="文件内容" tabindex="-1">文件内容 <a class="header-anchor" href="#文件内容" aria-label="Permalink to &quot;文件内容&quot;">​</a></h3><ul><li><p>如果原来文章里使用了 hexo tag，需要对其进行修改</p></li><li><p>文章里使用了 script、style 等语句块的需要对其 vitepress 里 <a href="https://vitepress.dev/zh/guide/using-vue#script-and-style" target="_blank" rel="noreferrer">&lt;script&gt; 和 &lt;style&gt;</a> 规则进行调整</p></li></ul><h3 id="评论迁移" tabindex="-1">评论迁移 <a class="header-anchor" href="#评论迁移" aria-label="Permalink to &quot;评论迁移&quot;">​</a></h3><p>主题目前没有内置其他评论插件，需要参考插件在 vitepress 使用方式</p><p><a href="https://github.com/twikoojs/twikoo/blob/main/docs/.vitepress/theme/Twikoo.vue" target="_blank" rel="noreferrer">twikoo</a> 在 vitepress 使用示例</p>`,37);function u(h,v,f,m,g,b){const n=l("Badge");return p(),o("div",null,[i,s("div",d,[y,s("ul",null,[s("li",null,[t(n,{text:"dev",vertical:"middle"}),a(" 代表只和开发有关。默认示例站点使用的 dev 分支，所以可能会出现还未发版功能。")])])]),E])}const k=e(r,[["render",u]]);export{F as __pageData,k as default};
