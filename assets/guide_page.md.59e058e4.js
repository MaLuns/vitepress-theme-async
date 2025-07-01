import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.b1940504.js";const u=JSON.parse('{"title":"页面配置","description":"","frontmatter":{},"headers":[],"relativePath":"guide/page.md","filePath":"guide/page.md","lastUpdated":1751366892000}'),p={name:"guide/page.md"},o=l(`<h1 id="页面配置" tabindex="-1">页面配置 <a class="header-anchor" href="#页面配置" aria-label="Permalink to &quot;页面配置&quot;">​</a></h1><p>本主题默认支持并使用以下页面类型。</p><h2 id="frontmatter" tabindex="-1">Frontmatter <a class="header-anchor" href="#frontmatter" aria-label="Permalink to &quot;Frontmatter&quot;">​</a></h2><p>在 <code>md</code> 文件中除了 vitepress 默认可使用字段以外，主题新增了一些可使用配置。</p><ul><li><code>date</code>：文章时间</li><li><code>sticky</code>：首页排序值，值越大越靠前。</li><li><code>banner</code>：文章页横幅背景，参考全局横幅配置。</li><li><code>cover</code>：文章封面图，可为字符串或数组或对象，如果数组长度为 2 则会根据主题自动切换。</li><li><code>singleColumn</code>：单栏显示详情页，为 true 时生效。</li><li><code>author</code>：文章作者，未配置时取全局配置。</li><li><code>categories</code>：文章分类，仅支持单个。</li><li><code>tags</code>：文章标签，支持多个。</li><li><code>pageClass</code>：将额外的类名称添加到特定页面。</li></ul><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">---</span></span>
<span class="line"><span style="color:#85E89D;">sticky</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#85E89D;">banner</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">type</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">img</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">bgurl</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">https://pic1.zhimg.com/v2-b3c2c6745b9421a13a3c4706b19223b3_r.jpg</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">bannerText</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Hi my new friend!</span></span>
<span class="line"><span style="color:#85E89D;">cover</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">https://www.logosc.cn/uploads/resources/2018/11/29/1543459457_thumb.jpg</span></span>
<span class="line"><span style="color:#85E89D;">author</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">张三</span></span>
<span class="line"><span style="color:#85E89D;">singleColumn</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#85E89D;">categories</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">分类一</span></span>
<span class="line"><span style="color:#85E89D;">tags</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">标签一</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">标签二</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#B392F0;">---</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">---</span></span>
<span class="line"><span style="color:#22863A;">sticky</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#22863A;">banner</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">type</span><span style="color:#24292E;">: </span><span style="color:#032F62;">img</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">bgurl</span><span style="color:#24292E;">: </span><span style="color:#032F62;">https://pic1.zhimg.com/v2-b3c2c6745b9421a13a3c4706b19223b3_r.jpg</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">bannerText</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Hi my new friend!</span></span>
<span class="line"><span style="color:#22863A;">cover</span><span style="color:#24292E;">: </span><span style="color:#032F62;">https://www.logosc.cn/uploads/resources/2018/11/29/1543459457_thumb.jpg</span></span>
<span class="line"><span style="color:#22863A;">author</span><span style="color:#24292E;">: </span><span style="color:#032F62;">张三</span></span>
<span class="line"><span style="color:#22863A;">singleColumn</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#22863A;">categories</span><span style="color:#24292E;">: </span><span style="color:#032F62;">分类一</span></span>
<span class="line"><span style="color:#22863A;">tags</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">标签一</span><span style="color:#24292E;">, </span><span style="color:#032F62;">标签二</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#6F42C1;">---</span></span></code></pre></div><h3 id="摘要" tabindex="-1">摘要 <a class="header-anchor" href="#摘要" aria-label="Permalink to &quot;摘要&quot;">​</a></h3><p>在文章中添加 <code>&lt;!--more--&gt;</code> 标签，在此之前的内容将会视为摘要部分。</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark has-diff vp-code-dark"><code><span class="line"><span style="color:#B392F0;">---</span></span>
<span class="line"><span style="color:#85E89D;">title</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Hello Theme Async</span></span>
<span class="line"><span style="color:#85E89D;">date</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2022-09-21 15:08:29</span></span>
<span class="line"><span style="color:#85E89D;">cover</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">https://vitepress-theme-async.imalun.com/imgs/demo.png</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#85E89D;">sticky</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#85E89D;">categories</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">分类二</span></span>
<span class="line"><span style="color:#B392F0;">---</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">Welcome to [vitepress-theme-async](https://vitepress-theme-async.imalun.com/).</span></span>
<span class="line"></span>
<span class="line diff add"><span style="color:#9ECBFF;">&lt;!--more--&gt;</span><span style="color:#E1E4E8;">  </span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line"><span style="color:#6F42C1;">---</span></span>
<span class="line"><span style="color:#22863A;">title</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Hello Theme Async</span></span>
<span class="line"><span style="color:#22863A;">date</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2022-09-21 15:08:29</span></span>
<span class="line"><span style="color:#22863A;">cover</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">https://vitepress-theme-async.imalun.com/imgs/demo.png</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#22863A;">sticky</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#22863A;">categories</span><span style="color:#24292E;">: </span><span style="color:#032F62;">分类二</span></span>
<span class="line"><span style="color:#6F42C1;">---</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">Welcome to [vitepress-theme-async](https://vitepress-theme-async.imalun.com/).</span></span>
<span class="line"></span>
<span class="line diff add"><span style="color:#032F62;">&lt;!--more--&gt;</span><span style="color:#24292E;">  </span></span></code></pre></div><h2 id="归档页-archives" tabindex="-1">归档页 Archives <a class="header-anchor" href="#归档页-archives" aria-label="Permalink to &quot;归档页 Archives&quot;">​</a></h2><p>在 <code>layout</code> 为 <code>archives</code> 视为归档页。</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark has-diff vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">---</span></span>
<span class="line"><span style="color:#85E89D;">title</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">归档</span></span>
<span class="line diff add"><span style="color:#85E89D;">layout</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">archives</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#85E89D;">date</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2019-11-20 10:16:09</span></span>
<span class="line"><span style="color:#E1E4E8;">---</span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line"><span style="color:#24292E;">---</span></span>
<span class="line"><span style="color:#22863A;">title</span><span style="color:#24292E;">: </span><span style="color:#032F62;">归档</span></span>
<span class="line diff add"><span style="color:#22863A;">layout</span><span style="color:#24292E;">: </span><span style="color:#032F62;">archives</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#22863A;">date</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2019-11-20 10:16:09</span></span>
<span class="line"><span style="color:#24292E;">---</span></span></code></pre></div><p>为确保其他页跳转归档页(标签页,分类页)正常，需要配置 <code>归档页</code> 对应地址。</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-fdnvQ" id="tab-2uaSF9n" checked="checked"><label for="tab-2uaSF9n">config.ts</label><input type="radio" name="group-fdnvQ" id="tab-X8wg1-u"><label for="tab-X8wg1-u">theme.d.ts</label></div><div class="blocks"><div class="language-ts vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-diff vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">	themeConfig: {</span></span>
<span class="line"><span style="color:#E1E4E8;">	page: {</span></span>
<span class="line diff add"><span style="color:#E1E4E8;">			archives: </span><span style="color:#9ECBFF;">&#39;/archives&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line diff add"><span style="color:#E1E4E8;">			categories: </span><span style="color:#9ECBFF;">&#39;/categories&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line diff add"><span style="color:#E1E4E8;">			tags: </span><span style="color:#9ECBFF;">&#39;/tags&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">		}</span></span>
<span class="line"><span style="color:#E1E4E8;">	},</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">	themeConfig: {</span></span>
<span class="line"><span style="color:#24292E;">	page: {</span></span>
<span class="line diff add"><span style="color:#24292E;">			archives: </span><span style="color:#032F62;">&#39;/archives&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line diff add"><span style="color:#24292E;">			categories: </span><span style="color:#032F62;">&#39;/categories&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line diff add"><span style="color:#24292E;">			tags: </span><span style="color:#032F62;">&#39;/tags&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">		}</span></span>
<span class="line"><span style="color:#24292E;">	},</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 内置页面跳转地址 || built in page path config</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">type</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">BuiltPageConfig</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">	 * 分类页地址 默认为 /categories</span></span>
<span class="line"><span style="color:#6A737D;">	 * </span><span style="color:#F97583;">@deprecated</span><span style="color:#6A737D;"> 使用 categories</span></span>
<span class="line"><span style="color:#6A737D;">	 */</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#FFAB70;">categorys</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">} </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">	 * 归档页 分类页 标签页地址 eg: /archives /categories /tags</span></span>
<span class="line"><span style="color:#6A737D;">	 */</span></span>
<span class="line"><span style="color:#E1E4E8;">	[</span><span style="color:#B392F0;">k</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PageType</span><span style="color:#E1E4E8;">]</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 内置页面跳转地址 || built in page path config</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">type</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">BuiltPageConfig</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">	 * 分类页地址 默认为 /categories</span></span>
<span class="line"><span style="color:#6A737D;">	 * </span><span style="color:#D73A49;">@deprecated</span><span style="color:#6A737D;"> 使用 categories</span></span>
<span class="line"><span style="color:#6A737D;">	 */</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#E36209;">categorys</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">} </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">	 * 归档页 分类页 标签页地址 eg: /archives /categories /tags</span></span>
<span class="line"><span style="color:#6A737D;">	 */</span></span>
<span class="line"><span style="color:#24292E;">	[</span><span style="color:#6F42C1;">k</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PageType</span><span style="color:#24292E;">]</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div></div></div><h2 id="标签页-tags" tabindex="-1">标签页 Tags <a class="header-anchor" href="#标签页-tags" aria-label="Permalink to &quot;标签页 Tags&quot;">​</a></h2><p>在 <code>layout</code> 为 <code>tags</code> 视为标签页。</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark has-diff vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">---</span></span>
<span class="line"><span style="color:#85E89D;">title</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">标签页</span></span>
<span class="line diff add"><span style="color:#85E89D;">layout</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">tags</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#85E89D;">date</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2019-11-20 10:16:09</span></span>
<span class="line"><span style="color:#E1E4E8;">---</span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line"><span style="color:#24292E;">---</span></span>
<span class="line"><span style="color:#22863A;">title</span><span style="color:#24292E;">: </span><span style="color:#032F62;">标签页</span></span>
<span class="line diff add"><span style="color:#22863A;">layout</span><span style="color:#24292E;">: </span><span style="color:#032F62;">tags</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#22863A;">date</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2019-11-20 10:16:09</span></span>
<span class="line"><span style="color:#24292E;">---</span></span></code></pre></div><h2 id="分类页-categories" tabindex="-1">分类页 Categories <a class="header-anchor" href="#分类页-categories" aria-label="Permalink to &quot;分类页 Categories&quot;">​</a></h2><p>在 <code>layout</code> 为 <code>categories</code> 视为分类页。</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark has-diff vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">---</span></span>
<span class="line"><span style="color:#85E89D;">title</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">分类页</span></span>
<span class="line diff add"><span style="color:#85E89D;">layout</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">categories</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#85E89D;">date</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2019-11-20 10:16:09</span></span>
<span class="line"><span style="color:#E1E4E8;">---</span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line"><span style="color:#24292E;">---</span></span>
<span class="line"><span style="color:#22863A;">title</span><span style="color:#24292E;">: </span><span style="color:#032F62;">分类页</span></span>
<span class="line diff add"><span style="color:#22863A;">layout</span><span style="color:#24292E;">: </span><span style="color:#032F62;">categories</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#22863A;">date</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2019-11-20 10:16:09</span></span>
<span class="line"><span style="color:#24292E;">---</span></span></code></pre></div><h2 id="友接页-links" tabindex="-1">友接页 Links <a class="header-anchor" href="#友接页-links" aria-label="Permalink to &quot;友接页 Links&quot;">​</a></h2><p>在 <code>layout</code> 为 <code>links</code> 时为友链页，页面会根据 <code>links</code> 配置渲染列表。</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-XeTEW" id="tab-hVI0I8Q" checked="checked"><label for="tab-hVI0I8Q">link.md</label><input type="radio" name="group-XeTEW" id="tab-cldktW5"><label for="tab-cldktW5">links.ts</label><input type="radio" name="group-XeTEW" id="tab-peqxTMI"><label for="tab-peqxTMI">config.ts</label><input type="radio" name="group-XeTEW" id="tab-BDBCE4S"><label for="tab-BDBCE4S">theme.d.ts</label></div><div class="blocks"><div class="language-md vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark has-diff vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">---</span></span>
<span class="line"><span style="color:#85E89D;">title</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">友链</span></span>
<span class="line diff add"><span style="color:#85E89D;">layout</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">links</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#85E89D;">date</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2019-11-20 10:16:09</span></span>
<span class="line"><span style="color:#85E89D;">banner</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">bannerText</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">A link to a friend&#39;s website</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">bannerTitle</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">莫愁前路无知己，&lt;br&gt;天下谁人不识君。</span></span>
<span class="line"><span style="color:#E1E4E8;">---</span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line"><span style="color:#24292E;">---</span></span>
<span class="line"><span style="color:#22863A;">title</span><span style="color:#24292E;">: </span><span style="color:#032F62;">友链</span></span>
<span class="line diff add"><span style="color:#22863A;">layout</span><span style="color:#24292E;">: </span><span style="color:#032F62;">links</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#22863A;">date</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2019-11-20 10:16:09</span></span>
<span class="line"><span style="color:#22863A;">banner</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">bannerText</span><span style="color:#24292E;">: </span><span style="color:#032F62;">A link to a friend&#39;s website</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">bannerTitle</span><span style="color:#24292E;">: </span><span style="color:#032F62;">莫愁前路无知己，&lt;br&gt;天下谁人不识君。</span></span>
<span class="line"><span style="color:#24292E;">---</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">	{</span></span>
<span class="line"><span style="color:#E1E4E8;">		name: </span><span style="color:#9ECBFF;">&quot;白云苍狗&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">		url: </span><span style="color:#9ECBFF;">&quot;https://www.imalun.com/&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">		image: </span><span style="color:#9ECBFF;">&quot;https://www.imalun.com/images/avatar.jpg&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">		desc: </span><span style="color:#9ECBFF;">&quot;醒，亦在人间；梦，亦在人间&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">	{</span></span>
<span class="line"><span style="color:#24292E;">		name: </span><span style="color:#032F62;">&quot;白云苍狗&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">		url: </span><span style="color:#032F62;">&quot;https://www.imalun.com/&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">		image: </span><span style="color:#032F62;">&quot;https://www.imalun.com/images/avatar.jpg&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">		desc: </span><span style="color:#032F62;">&quot;醒，亦在人间；梦，亦在人间&quot;</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">]</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-diff vp-code-dark"><code><span class="line diff add"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> links </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./links&#39;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">	themeConfig: {</span></span>
<span class="line diff add"><span style="color:#E1E4E8;">		links: links </span></span>
<span class="line"><span style="color:#E1E4E8;">	},</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line diff add"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> links </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./links&#39;</span><span style="color:#24292E;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">	themeConfig: {</span></span>
<span class="line diff add"><span style="color:#24292E;">		links: links </span></span>
<span class="line"><span style="color:#24292E;">	},</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/** 友情链接 */</span></span>
<span class="line"><span style="color:#F97583;">interface</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Links</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">	 * 昵称</span></span>
<span class="line"><span style="color:#6A737D;">	 */</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#FFAB70;">name</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">	 * 链接</span></span>
<span class="line"><span style="color:#6A737D;">	 */</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#FFAB70;">url</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">	 * 头像</span></span>
<span class="line"><span style="color:#6A737D;">	 */</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#FFAB70;">image</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">	 * 描述</span></span>
<span class="line"><span style="color:#6A737D;">	 */</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#FFAB70;">desc</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/** 友情链接 */</span></span>
<span class="line"><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Links</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">	 * 昵称</span></span>
<span class="line"><span style="color:#6A737D;">	 */</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#E36209;">name</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">	 * 链接</span></span>
<span class="line"><span style="color:#6A737D;">	 */</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#E36209;">url</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">	 * 头像</span></span>
<span class="line"><span style="color:#6A737D;">	 */</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#E36209;">image</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">	 * 描述</span></span>
<span class="line"><span style="color:#6A737D;">	 */</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#E36209;">desc</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div></div></div><p>links 也支持通过 api 加载数据，返回数据格式需要与定义类型保持一致。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-diff vp-code-dark"><code><span class="line diff remove"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> links </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./links&#39;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">	themeConfig: {</span></span>
<span class="line diff remove"><span style="color:#E1E4E8;">		links: links, </span></span>
<span class="line diff add"><span style="color:#E1E4E8;">		links: </span><span style="color:#9ECBFF;">&#39;https://api.xx.xx&#39;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">	},</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line diff remove"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> links </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./links&#39;</span><span style="color:#24292E;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">	themeConfig: {</span></span>
<span class="line diff remove"><span style="color:#24292E;">		links: links, </span></span>
<span class="line diff add"><span style="color:#24292E;">		links: </span><span style="color:#032F62;">&#39;https://api.xx.xx&#39;</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">	},</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div><h2 id="关于页-about" tabindex="-1">关于页 About <a class="header-anchor" href="#关于页-about" aria-label="Permalink to &quot;关于页 About&quot;">​</a></h2><p>在 <code>layout</code> 为 <code>about</code> 时，根据配置生成页面。</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-re1VM" id="tab-zr5H8sp" checked="checked"><label for="tab-zr5H8sp">about.md</label><input type="radio" name="group-re1VM" id="tab-W1kK86q"><label for="tab-W1kK86q">config.ts</label><input type="radio" name="group-re1VM" id="tab-XCWjAww"><label for="tab-XCWjAww">theme.d.ts</label></div><div class="blocks"><div class="language-md vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark has-diff vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">---</span></span>
<span class="line"><span style="color:#85E89D;">title</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">关于我</span></span>
<span class="line diff add"><span style="color:#85E89D;">layout</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">about</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#85E89D;">date</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2019-11-20 10:16:09</span></span>
<span class="line"><span style="color:#E1E4E8;">---</span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line"><span style="color:#24292E;">---</span></span>
<span class="line"><span style="color:#22863A;">title</span><span style="color:#24292E;">: </span><span style="color:#032F62;">关于我</span></span>
<span class="line diff add"><span style="color:#22863A;">layout</span><span style="color:#24292E;">: </span><span style="color:#032F62;">about</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#22863A;">date</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2019-11-20 10:16:09</span></span>
<span class="line"><span style="color:#24292E;">---</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-diff vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">	themeConfig: {</span></span>
<span class="line diff add"><span style="color:#E1E4E8;">		about: {  </span></span>
<span class="line diff add"><span style="color:#E1E4E8;">			title: </span><span style="color:#9ECBFF;">&quot;如果一切都是镜花水月，那就让这万物走向终结。如果一切皆是命中注定，那就让这世界消失殆尽。&quot;</span><span style="color:#E1E4E8;">,  </span></span>
<span class="line diff add"><span style="color:#E1E4E8;">			introduction: </span><span style="color:#9ECBFF;">&quot;大家好，我是 &lt;strong&gt;Async&lt;/strong&gt;，很高兴您能在浩瀚如烟的互联网世界里发现这个博客，更感谢您能够饶有兴致地浏览这个页面。建立这个 Blog 是出于兴趣爱好，我将在此分会分享一些学习笔记，可能还会分享少许图片、视频以及其他有趣东西的链接。&quot;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line diff add"><span style="color:#E1E4E8;">			blog: </span><span style="color:#9ECBFF;">\`&lt;ul class=&quot;trm-list&quot;&gt; &lt;li&gt;程序：Vitepress &lt;/li&gt; &lt;li&gt;主题：vitepress-theme-async &lt;/li&gt; &lt;/ul&gt;\`</span><span style="color:#E1E4E8;">, </span></span>
<span class="line diff add"><span style="color:#E1E4E8;">			privacy: </span><span style="color:#9ECBFF;">&quot;本网站不会追踪访客行为，且不要求访客提供任何敏感信息（比如真实姓名、身份证号码、手机号等），因而也不存在任何隐私泄漏问题。访客参与评论，必须遵守法律法规和基本道德规范，文明礼貌。严禁发布任何有关淫秽、反动、暴力、博彩、恐吓、低俗的内容或违法信息，在尊重言论自由的同时请保持和平与理性。请勿对他人采取不友好的评论或其它过激行为。&quot;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line diff add"><span style="color:#E1E4E8;">		}, </span></span>
<span class="line"><span style="color:#E1E4E8;">	},</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">	themeConfig: {</span></span>
<span class="line diff add"><span style="color:#24292E;">		about: {  </span></span>
<span class="line diff add"><span style="color:#24292E;">			title: </span><span style="color:#032F62;">&quot;如果一切都是镜花水月，那就让这万物走向终结。如果一切皆是命中注定，那就让这世界消失殆尽。&quot;</span><span style="color:#24292E;">,  </span></span>
<span class="line diff add"><span style="color:#24292E;">			introduction: </span><span style="color:#032F62;">&quot;大家好，我是 &lt;strong&gt;Async&lt;/strong&gt;，很高兴您能在浩瀚如烟的互联网世界里发现这个博客，更感谢您能够饶有兴致地浏览这个页面。建立这个 Blog 是出于兴趣爱好，我将在此分会分享一些学习笔记，可能还会分享少许图片、视频以及其他有趣东西的链接。&quot;</span><span style="color:#24292E;">, </span></span>
<span class="line diff add"><span style="color:#24292E;">			blog: </span><span style="color:#032F62;">\`&lt;ul class=&quot;trm-list&quot;&gt; &lt;li&gt;程序：Vitepress &lt;/li&gt; &lt;li&gt;主题：vitepress-theme-async &lt;/li&gt; &lt;/ul&gt;\`</span><span style="color:#24292E;">, </span></span>
<span class="line diff add"><span style="color:#24292E;">			privacy: </span><span style="color:#032F62;">&quot;本网站不会追踪访客行为，且不要求访客提供任何敏感信息（比如真实姓名、身份证号码、手机号等），因而也不存在任何隐私泄漏问题。访客参与评论，必须遵守法律法规和基本道德规范，文明礼貌。严禁发布任何有关淫秽、反动、暴力、博彩、恐吓、低俗的内容或违法信息，在尊重言论自由的同时请保持和平与理性。请勿对他人采取不友好的评论或其它过激行为。&quot;</span><span style="color:#24292E;">, </span></span>
<span class="line diff add"><span style="color:#24292E;">		}, </span></span>
<span class="line"><span style="color:#24292E;">	},</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 关于页 || About page config</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">interface</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">AboutPageConfig</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">	 * 标题</span></span>
<span class="line"><span style="color:#6A737D;">	 */</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#FFAB70;">title</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">	 * 个人简单描述</span></span>
<span class="line"><span style="color:#6A737D;">	 */</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#FFAB70;">introduction</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">	 * 博客信息</span></span>
<span class="line"><span style="color:#6A737D;">	 */</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#FFAB70;">blog</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">	 * 隐私权说明</span></span>
<span class="line"><span style="color:#6A737D;">	 */</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#FFAB70;">privacy</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 关于页 || About page config</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">AboutPageConfig</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">	 * 标题</span></span>
<span class="line"><span style="color:#6A737D;">	 */</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#E36209;">title</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">	 * 个人简单描述</span></span>
<span class="line"><span style="color:#6A737D;">	 */</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#E36209;">introduction</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">	 * 博客信息</span></span>
<span class="line"><span style="color:#6A737D;">	 */</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#E36209;">blog</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">	 * 隐私权说明</span></span>
<span class="line"><span style="color:#6A737D;">	 */</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#E36209;">privacy</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div></div></div><h2 id="_404-not-found" tabindex="-1">404 Not Found <a class="header-anchor" href="#_404-not-found" aria-label="Permalink to &quot;404 Not Found&quot;">​</a></h2><p>404 页面不需要额外配置即生效，可在配置中替换 404 文案和跳转信息。</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-8e_LV" id="tab-EFzrILH" checked="checked"><label for="tab-EFzrILH">config.ts</label><input type="radio" name="group-8e_LV" id="tab-UmE6ASy"><label for="tab-UmE6ASy">theme.d.ts</label></div><div class="blocks"><div class="language-ts vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-diff vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">	themeConfig: {</span></span>
<span class="line"><span style="color:#E1E4E8;">		notFound: {</span></span>
<span class="line diff add"><span style="color:#E1E4E8;">			text: </span><span style="color:#9ECBFF;">&#39;从前有座山，山里有座庙，庙里有个页面，现在找不到...&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">		},</span></span>
<span class="line"><span style="color:#E1E4E8;">	},</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">	themeConfig: {</span></span>
<span class="line"><span style="color:#24292E;">		notFound: {</span></span>
<span class="line diff add"><span style="color:#24292E;">			text: </span><span style="color:#032F62;">&#39;从前有座山，山里有座庙，庙里有个页面，现在找不到...&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">		},</span></span>
<span class="line"><span style="color:#24292E;">	},</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 404 文案配置</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">interface</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">NotFoundConfig</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">	 * 标题文案</span></span>
<span class="line"><span style="color:#6A737D;">	 */</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#FFAB70;">title</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">	 * 提示文案</span></span>
<span class="line"><span style="color:#6A737D;">	 */</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#FFAB70;">text</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">	 * 点击按钮跳转地址</span></span>
<span class="line"><span style="color:#6A737D;">	 */</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#FFAB70;">path</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">	 * 按钮显示文案</span></span>
<span class="line"><span style="color:#6A737D;">	 */</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#FFAB70;">name</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * 404 文案配置</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">NotFoundConfig</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">	 * 标题文案</span></span>
<span class="line"><span style="color:#6A737D;">	 */</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#E36209;">title</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">	 * 提示文案</span></span>
<span class="line"><span style="color:#6A737D;">	 */</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#E36209;">text</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">	 * 点击按钮跳转地址</span></span>
<span class="line"><span style="color:#6A737D;">	 */</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#E36209;">path</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">	 * 按钮显示文案</span></span>
<span class="line"><span style="color:#6A737D;">	 */</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#E36209;">name</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div></div></div><h2 id="自定义页面-customize-page" tabindex="-1">自定义页面 Customize Page <a class="header-anchor" href="#自定义页面-customize-page" aria-label="Permalink to &quot;自定义页面 Customize Page&quot;">​</a></h2><p>像上面 友链、关于等页面也属于自定义页面，主要区别是它们可以通过约定配置，就可以输出主题内置页面样式，当然如果您想要个性化这些页面，也可以通过自定也页面覆盖主题的默认行为。</p><p>在 <code>layout</code> 为 <code>custom</code> 时为自定页面，内容区域根据 <code>.md</code> 内容直接生成，但是会保留顶部、侧栏、横幅、页脚等位置信息。如果不想要侧栏信息可以设置 <code>singleColumn</code>。</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark has-diff vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">---</span></span>
<span class="line"><span style="color:#85E89D;">title</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">自定义页面</span></span>
<span class="line diff add"><span style="color:#85E89D;">layout</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">custom</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#85E89D;">date</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2019-11-20 10:16:09</span></span>
<span class="line diff add"><span style="color:#85E89D;">singleColumn</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">---</span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line"><span style="color:#24292E;">---</span></span>
<span class="line"><span style="color:#22863A;">title</span><span style="color:#24292E;">: </span><span style="color:#032F62;">自定义页面</span></span>
<span class="line diff add"><span style="color:#22863A;">layout</span><span style="color:#24292E;">: </span><span style="color:#032F62;">custom</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#22863A;">date</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2019-11-20 10:16:09</span></span>
<span class="line diff add"><span style="color:#22863A;">singleColumn</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">---</span></span></code></pre></div><h3 id="相册页" tabindex="-1">相册页 <a class="header-anchor" href="#相册页" aria-label="Permalink to &quot;相册页&quot;">​</a></h3><p><code>TrmPortfolio</code> 相册组件，<code>TrmPortfolio</code> 为主题内置 <a href="https://vitepress-theme-async.imalun.com/guide/config#%E5%85%A8%E5%B1%80%E7%BB%84%E4%BB%B6" target="_blank" rel="noreferrer">全局组件</a>，默认未开启。</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark has-diff vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">---</span></span>
<span class="line"><span style="color:#85E89D;">title</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">相册库</span></span>
<span class="line diff add"><span style="color:#85E89D;">layout</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">custom</span><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#85E89D;">single_column</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">---</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;div class=&quot;row&quot;&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	&lt;div class=&quot;col-lg-4&quot;&gt;</span></span>
<span class="line diff add"><span style="color:#E1E4E8;">		&lt;TrmPortfolio src=&quot;/gallery/wallpaper&quot; cover=&quot;https://img1.wallspic.com/previews/5/0/1/6/6/166105/166105-pang_ke-zi_se_de-zi_luo_lan_se-fen_hong_se-pin_hong_se-500x.jpg&quot; title=&quot;壁纸&quot; desc=&quot;收藏的一些壁纸&quot;/&gt;  </span></span>
<span class="line"><span style="color:#E1E4E8;">	&lt;/div&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	&lt;div class=&quot;col-lg-4&quot;&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;TrmPortfolio src=&quot;/gallery/wallpaper&quot; cover=&quot;https://img1.wallspic.com/previews/8/8/8/0/7/170888/170888-de_fang_zi-chuang_kou-zhu_zhai_qu-mu-wu_ding-500x.jpg&quot; title=&quot;壁纸&quot; desc=&quot;收藏的一些壁纸&quot;/&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	&lt;/div&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	&lt;div class=&quot;col-lg-4&quot;&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;TrmPortfolio src=&quot;/gallery/wallpaper&quot; cover=&quot;https://img3.wallspic.com/previews/7/4/8/8/6/168847/168847-man_de_nu_hai-ka_tong-ren_men_zai_zi_ran_jie-kuai_le_de-yang_guang-500x.jpg&quot; title=&quot;壁纸&quot; desc=&quot;收藏的一些壁纸&quot;/&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	&lt;/div&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/div&gt;</span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line"><span style="color:#24292E;">---</span></span>
<span class="line"><span style="color:#22863A;">title</span><span style="color:#24292E;">: </span><span style="color:#032F62;">相册库</span></span>
<span class="line diff add"><span style="color:#22863A;">layout</span><span style="color:#24292E;">: </span><span style="color:#032F62;">custom</span><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#22863A;">single_column</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">---</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;div class=&quot;row&quot;&gt;</span></span>
<span class="line"><span style="color:#24292E;">	&lt;div class=&quot;col-lg-4&quot;&gt;</span></span>
<span class="line diff add"><span style="color:#24292E;">		&lt;TrmPortfolio src=&quot;/gallery/wallpaper&quot; cover=&quot;https://img1.wallspic.com/previews/5/0/1/6/6/166105/166105-pang_ke-zi_se_de-zi_luo_lan_se-fen_hong_se-pin_hong_se-500x.jpg&quot; title=&quot;壁纸&quot; desc=&quot;收藏的一些壁纸&quot;/&gt;  </span></span>
<span class="line"><span style="color:#24292E;">	&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292E;">	&lt;div class=&quot;col-lg-4&quot;&gt;</span></span>
<span class="line"><span style="color:#24292E;">		&lt;TrmPortfolio src=&quot;/gallery/wallpaper&quot; cover=&quot;https://img1.wallspic.com/previews/8/8/8/0/7/170888/170888-de_fang_zi-chuang_kou-zhu_zhai_qu-mu-wu_ding-500x.jpg&quot; title=&quot;壁纸&quot; desc=&quot;收藏的一些壁纸&quot;/&gt;</span></span>
<span class="line"><span style="color:#24292E;">	&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292E;">	&lt;div class=&quot;col-lg-4&quot;&gt;</span></span>
<span class="line"><span style="color:#24292E;">		&lt;TrmPortfolio src=&quot;/gallery/wallpaper&quot; cover=&quot;https://img3.wallspic.com/previews/7/4/8/8/6/168847/168847-man_de_nu_hai-ka_tong-ren_men_zai_zi_ran_jie-kuai_le_de-yang_guang-500x.jpg&quot; title=&quot;壁纸&quot; desc=&quot;收藏的一些壁纸&quot;/&gt;</span></span>
<span class="line"><span style="color:#24292E;">	&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/div&gt;</span></span></code></pre></div><h3 id="相册详情页" tabindex="-1">相册详情页 <a class="header-anchor" href="#相册详情页" aria-label="Permalink to &quot;相册详情页&quot;">​</a></h3><p><code>TrmGallery</code> 相册详情组件，可以通过 <code>srcs</code> 传入图片列表。<code>TrmGallery</code> 为主题内置 <a href="https://vitepress-theme-async.imalun.com/guide/config#%E5%85%A8%E5%B1%80%E7%BB%84%E4%BB%B6" target="_blank" rel="noreferrer">全局组件</a>，默认未开启。</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark has-diff vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">---</span></span>
<span class="line"><span style="color:#85E89D;">title</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">壁纸</span></span>
<span class="line"><span style="color:#85E89D;">layout</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">custom</span></span>
<span class="line"><span style="color:#85E89D;">single_column</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">---</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">const list = [</span></span>
<span class="line"><span style="color:#E1E4E8;">	&#39;https://img2.wallspic.com/previews/7/6/8/1/7/171867/171867-wu_kong-chao_ji_sai_ya_ren-sai_ya_ren-zamasu-long_zhu-500x.jpg&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">	&#39;https://img3.wallspic.com/previews/2/0/1/8/6/168102/168102-yi_shu-ka_tong-mian_bu_biao_qing-kuai_le_de-ji_qie-500x.jpg&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">	&#39;https://img2.wallspic.com/previews/2/6/4/3/7/173462/173462-qi_fen-zi_se_de-zi_ran_jing_guan-yu_hui-de_ping_xian-500x.jpg&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">	&#39;https://img2.wallspic.com/previews/3/3/9/1/3/131933/131933-mo_xing-xiao_jie-huang_se_de-nu_hai-fa_xing-500x.jpg&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">	&#39;https://img1.wallspic.com/previews/8/3/4/6/2/126438/126438-wei_lai_zhu_yi-shu_ma_yi_shu-jie_duan-zi_ben_shi-yi_shu-500x.jpg&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">	&#39;https://img2.wallspic.com/previews/0/1/5/0/7/170510/170510-guang-azure-zi_se_de-zi_ran_huan_jing-zi_ran_jing_guan-500x.jpg&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">	&#39;https://img2.wallspic.com/previews/3/6/9/6/5/156963/156963-yi_shu-qi_fen-yu_hui-shou_shi-ren_men_zai_zi_ran_jie-500x.jpg&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">	&#39;https://img1.wallspic.com/previews/0/9/3/5/6/165390/165390-qi_fen-zi_se_de-zi_ran_huan_jing-zi_ran_jing_guan-tian_wen_xue_dui_xiang-500x.jpg&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">	&#39;https://img3.wallspic.com/previews/2/8/6/1/7/171682/171682-yi_kuai-xing_zhi-ye_ti-yi_shu-shui_xia-500x.jpg&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">	&#39;https://img1.wallspic.com/previews/7/1/9/9/89917/89917-bo_xi_ta_nuo-an_zhuang_de_feng_jing-cheng_shi-suo_lun_tuo-shan_zhan-500x.jpg&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">	&#39;https://img1.wallspic.com/previews/6/2/3/5/6/165326/165326-pang_ke2077-pang_ke-qi_fen-xing_zhi-zi_se_de-500x.jpg&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">	&#39;https://img2.wallspic.com/previews/8/9/4/5/6/165498/165498-ka_tong-tao-pin_hong_se-zhang_zhang_de_tou_fa-ji_qie-500x.jpg&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">	&#39;https://img3.wallspic.com/previews/5/7/4/2/7/172475/172475-yi_shu-tao-tou_fa-ka_tong-500x.jpg&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">	&#39;https://img2.wallspic.com/previews/5/0/9/0/70905/70905-hai_yang-ma_er_dai_fu-tian_kong-du_jia_cun-huan_jiao-500x.jpg&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">	&#39;https://img3.wallspic.com/previews/4/3/4/8/6/168434/168434-xing_zhi-zi_ran_jing_guan-dan_huang-shui_dao-zhi_bei-500x.jpg&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">	&#39;https://img2.wallspic.com/previews/6/5/4/5/6/165456/165456-giy_fu_gang-e_mo_sha_shoukimetsu_no_yaiba-shan_zi_de_yi_shu-zi_se_de-dian_lan_se_de-500x.jpg&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">	&#39;https://img1.wallspic.com/previews/5/4/0/4/7/174045/174045-jian_ying-qi_fen-ren_men_zai_zi_ran_jie-tian_wen_xue_dui_xiang-yi_shu-500x.jpg&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">	&#39;https://img1.wallspic.com/previews/9/3/1/6/5/156139/156139-feng_jing_hua-yi_shu-shu_ma_yi_shu-qi_fen-sheng_tai_qu-500x.jpg&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">	&#39;https://img2.wallspic.com/previews/7/6/4/5/7/175467/175467-wo_de_xue_shu_jie_de_ying_xiong-tao-yi_shu-ka_tong-azure-500x.jpg&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">	&#39;https://img1.wallspic.com/previews/3/7/0/0/7/170073/170073-liang_ge_ling-ka_tong-shou_shi-chuang_zao_xing_de_yi_shu-hong_se_de-500x.jpg&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">	&#39;https://img1.wallspic.com/previews/1/8/3/6/6/166381/166381-shi_zi-xin_ba-bai_se_shi_zi-hu_xu-mao_ke-500x.jpg&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">	&#39;https://img3.wallspic.com/previews/4/2/2/3/7/173224/173224-ri_luo-shui_zi_yuan-qi_fen-yu_hui-zi_se_de-500x.jpg&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">	&#39;https://img1.wallspic.com/previews/7/5/7/9/6/169757/169757-ji_bo_li_de_bo_wu_guan-zi_ran_jing_guan-yi_shu-ji_yun-500x.jpg&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">	&#39;https://img1.wallspic.com/previews/5/2/0/6/7/176025/176025-qi_fen-tian_wen_xue_dui_xiang-yi_shu-dian_lan_se_de-yuan_quan-500x.jpg&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">	&#39;https://img3.wallspic.com/previews/6/5/8/1/4/141856/141856-hen_ku_de-hui_hua-yu_yan_jing_tou-zhai_nan-tu_xing_she_ji-500x.jpg&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">	&#39;https://img1.wallspic.com/previews/2/1/6/5/6/165612/165612-kimetsu_no_yaiba-e_mo_sha_shoukimetsu_no_yaiba-tao-tou_fa-wai_tao-500x.jpg&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">	&#39;https://img3.wallspic.com/previews/5/1/0/2/4/142015/142015-feng_ge-ka_ka_xi_qi_mu-huo_ying_ren_zhe-tu_xing_she_ji-shi_jue_yi_shu-500x.jpg&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">	&#39;https://img1.wallspic.com/previews/8/8/7/8/5/158788/158788-e_mo_sha_shoukimetsu_no_yaiba-shnen_man_hua-tao-ka_tong-azure-500x.jpg&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/script&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;div class=&quot;trm-card&quot;&gt;</span></span>
<span class="line diff add"><span style="color:#E1E4E8;">	&lt;TrmGallery :srcs=&quot;list&quot; /&gt;  </span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/div&gt;</span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line"><span style="color:#24292E;">---</span></span>
<span class="line"><span style="color:#22863A;">title</span><span style="color:#24292E;">: </span><span style="color:#032F62;">壁纸</span></span>
<span class="line"><span style="color:#22863A;">layout</span><span style="color:#24292E;">: </span><span style="color:#032F62;">custom</span></span>
<span class="line"><span style="color:#22863A;">single_column</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">---</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#24292E;">const list = [</span></span>
<span class="line"><span style="color:#24292E;">	&#39;https://img2.wallspic.com/previews/7/6/8/1/7/171867/171867-wu_kong-chao_ji_sai_ya_ren-sai_ya_ren-zamasu-long_zhu-500x.jpg&#39;,</span></span>
<span class="line"><span style="color:#24292E;">	&#39;https://img3.wallspic.com/previews/2/0/1/8/6/168102/168102-yi_shu-ka_tong-mian_bu_biao_qing-kuai_le_de-ji_qie-500x.jpg&#39;,</span></span>
<span class="line"><span style="color:#24292E;">	&#39;https://img2.wallspic.com/previews/2/6/4/3/7/173462/173462-qi_fen-zi_se_de-zi_ran_jing_guan-yu_hui-de_ping_xian-500x.jpg&#39;,</span></span>
<span class="line"><span style="color:#24292E;">	&#39;https://img2.wallspic.com/previews/3/3/9/1/3/131933/131933-mo_xing-xiao_jie-huang_se_de-nu_hai-fa_xing-500x.jpg&#39;,</span></span>
<span class="line"><span style="color:#24292E;">	&#39;https://img1.wallspic.com/previews/8/3/4/6/2/126438/126438-wei_lai_zhu_yi-shu_ma_yi_shu-jie_duan-zi_ben_shi-yi_shu-500x.jpg&#39;,</span></span>
<span class="line"><span style="color:#24292E;">	&#39;https://img2.wallspic.com/previews/0/1/5/0/7/170510/170510-guang-azure-zi_se_de-zi_ran_huan_jing-zi_ran_jing_guan-500x.jpg&#39;,</span></span>
<span class="line"><span style="color:#24292E;">	&#39;https://img2.wallspic.com/previews/3/6/9/6/5/156963/156963-yi_shu-qi_fen-yu_hui-shou_shi-ren_men_zai_zi_ran_jie-500x.jpg&#39;,</span></span>
<span class="line"><span style="color:#24292E;">	&#39;https://img1.wallspic.com/previews/0/9/3/5/6/165390/165390-qi_fen-zi_se_de-zi_ran_huan_jing-zi_ran_jing_guan-tian_wen_xue_dui_xiang-500x.jpg&#39;,</span></span>
<span class="line"><span style="color:#24292E;">	&#39;https://img3.wallspic.com/previews/2/8/6/1/7/171682/171682-yi_kuai-xing_zhi-ye_ti-yi_shu-shui_xia-500x.jpg&#39;,</span></span>
<span class="line"><span style="color:#24292E;">	&#39;https://img1.wallspic.com/previews/7/1/9/9/89917/89917-bo_xi_ta_nuo-an_zhuang_de_feng_jing-cheng_shi-suo_lun_tuo-shan_zhan-500x.jpg&#39;,</span></span>
<span class="line"><span style="color:#24292E;">	&#39;https://img1.wallspic.com/previews/6/2/3/5/6/165326/165326-pang_ke2077-pang_ke-qi_fen-xing_zhi-zi_se_de-500x.jpg&#39;,</span></span>
<span class="line"><span style="color:#24292E;">	&#39;https://img2.wallspic.com/previews/8/9/4/5/6/165498/165498-ka_tong-tao-pin_hong_se-zhang_zhang_de_tou_fa-ji_qie-500x.jpg&#39;,</span></span>
<span class="line"><span style="color:#24292E;">	&#39;https://img3.wallspic.com/previews/5/7/4/2/7/172475/172475-yi_shu-tao-tou_fa-ka_tong-500x.jpg&#39;,</span></span>
<span class="line"><span style="color:#24292E;">	&#39;https://img2.wallspic.com/previews/5/0/9/0/70905/70905-hai_yang-ma_er_dai_fu-tian_kong-du_jia_cun-huan_jiao-500x.jpg&#39;,</span></span>
<span class="line"><span style="color:#24292E;">	&#39;https://img3.wallspic.com/previews/4/3/4/8/6/168434/168434-xing_zhi-zi_ran_jing_guan-dan_huang-shui_dao-zhi_bei-500x.jpg&#39;,</span></span>
<span class="line"><span style="color:#24292E;">	&#39;https://img2.wallspic.com/previews/6/5/4/5/6/165456/165456-giy_fu_gang-e_mo_sha_shoukimetsu_no_yaiba-shan_zi_de_yi_shu-zi_se_de-dian_lan_se_de-500x.jpg&#39;,</span></span>
<span class="line"><span style="color:#24292E;">	&#39;https://img1.wallspic.com/previews/5/4/0/4/7/174045/174045-jian_ying-qi_fen-ren_men_zai_zi_ran_jie-tian_wen_xue_dui_xiang-yi_shu-500x.jpg&#39;,</span></span>
<span class="line"><span style="color:#24292E;">	&#39;https://img1.wallspic.com/previews/9/3/1/6/5/156139/156139-feng_jing_hua-yi_shu-shu_ma_yi_shu-qi_fen-sheng_tai_qu-500x.jpg&#39;,</span></span>
<span class="line"><span style="color:#24292E;">	&#39;https://img2.wallspic.com/previews/7/6/4/5/7/175467/175467-wo_de_xue_shu_jie_de_ying_xiong-tao-yi_shu-ka_tong-azure-500x.jpg&#39;,</span></span>
<span class="line"><span style="color:#24292E;">	&#39;https://img1.wallspic.com/previews/3/7/0/0/7/170073/170073-liang_ge_ling-ka_tong-shou_shi-chuang_zao_xing_de_yi_shu-hong_se_de-500x.jpg&#39;,</span></span>
<span class="line"><span style="color:#24292E;">	&#39;https://img1.wallspic.com/previews/1/8/3/6/6/166381/166381-shi_zi-xin_ba-bai_se_shi_zi-hu_xu-mao_ke-500x.jpg&#39;,</span></span>
<span class="line"><span style="color:#24292E;">	&#39;https://img3.wallspic.com/previews/4/2/2/3/7/173224/173224-ri_luo-shui_zi_yuan-qi_fen-yu_hui-zi_se_de-500x.jpg&#39;,</span></span>
<span class="line"><span style="color:#24292E;">	&#39;https://img1.wallspic.com/previews/7/5/7/9/6/169757/169757-ji_bo_li_de_bo_wu_guan-zi_ran_jing_guan-yi_shu-ji_yun-500x.jpg&#39;,</span></span>
<span class="line"><span style="color:#24292E;">	&#39;https://img1.wallspic.com/previews/5/2/0/6/7/176025/176025-qi_fen-tian_wen_xue_dui_xiang-yi_shu-dian_lan_se_de-yuan_quan-500x.jpg&#39;,</span></span>
<span class="line"><span style="color:#24292E;">	&#39;https://img3.wallspic.com/previews/6/5/8/1/4/141856/141856-hen_ku_de-hui_hua-yu_yan_jing_tou-zhai_nan-tu_xing_she_ji-500x.jpg&#39;,</span></span>
<span class="line"><span style="color:#24292E;">	&#39;https://img1.wallspic.com/previews/2/1/6/5/6/165612/165612-kimetsu_no_yaiba-e_mo_sha_shoukimetsu_no_yaiba-tao-tou_fa-wai_tao-500x.jpg&#39;,</span></span>
<span class="line"><span style="color:#24292E;">	&#39;https://img3.wallspic.com/previews/5/1/0/2/4/142015/142015-feng_ge-ka_ka_xi_qi_mu-huo_ying_ren_zhe-tu_xing_she_ji-shi_jue_yi_shu-500x.jpg&#39;,</span></span>
<span class="line"><span style="color:#24292E;">	&#39;https://img1.wallspic.com/previews/8/8/7/8/5/158788/158788-e_mo_sha_shoukimetsu_no_yaiba-shnen_man_hua-tao-ka_tong-azure-500x.jpg&#39;,</span></span>
<span class="line"><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">&lt;/script&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;div class=&quot;trm-card&quot;&gt;</span></span>
<span class="line diff add"><span style="color:#24292E;">	&lt;TrmGallery :srcs=&quot;list&quot; /&gt;  </span></span>
<span class="line"><span style="color:#24292E;">&lt;/div&gt;</span></span></code></pre></div>`,41),e=[o];function t(c,i,r,y,E,d){return a(),n("div",null,e)}const _=s(p,[["render",t]]);export{u as __pageData,_ as default};
