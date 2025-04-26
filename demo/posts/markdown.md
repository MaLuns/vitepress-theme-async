---
title: Markdown
date: 2022-09-21 15:25:29
categories: 测试分类
katex: true
---

主题 Vitepress-theme-async 文章页面适配预览。

<!--more-->

## Markdown 基础语法

### 标题

## 二级标题

### 三级标题

#### 四级标题

##### 五级标题

###### 六级标题

### 字体

粗体、斜体、粗体和斜体，删除线，需要在文字前后加不同的标记符号。如下：

**这个是粗体**

_这个是斜体_

**_这个是粗体加斜体_**

~~这里想用删除线~~

注：如果想给字体换颜色、字体或者居中显示，需要使用内嵌HTML来实现。

### 无序列表

无序列表的使用，在符号`-`后加空格使用。如下：

- 无序列表 1
- 无序列表 2
- 无序列表 3

多层嵌套效果。如下：

- 无序列表 1
- 无序列表 2
  - 无序列表 2.1
  - 无序列表 2.2
    - 无序列表 2.2.1
    - 无序列表 2.2.2

### 有序列表

有序列表的使用，在数字及符号`.`后加空格后输入内容，如下：

1. 有序列表 1
2. 有序列表 2
3. 有序列表 3

### 引用

引用的格式是在符号`>`后面书写文字。如下：

> 读一本好书，就是在和高尚的人谈话。 ——歌德

> 雇用制度对工人不利，但工人根本无力摆脱这个制度。 ——阮一峰

### 链接

关于 `Vitepress-theme-async` 的使用文档可以[点击这里](https://vitepress-theme-async.imalun.com)查看

### 图片

插入图片，格式如下：

![这里写图片描述](https://vitepress-theme-async.imalun.com/github_star.png)

![](https://markdown.com.cn/images/i-am-svg.svg)

<div class="row">
  <div class="col-lg-4">

![这里写图片描述](https://www.imalun.com/images/posts/grid_layout/demo.png){class=trm-light-icon}

  </div>
  <div class="col-lg-4">

![这里写图片描述](https://www.imalun.com/images/posts/grid_layout/resize_demo.png){class=trm-light-icon}

  </div>
  <div class="col-lg-4">

![这里写图片描述](https://www.imalun.com/images/posts/grid_layout/resize.png){class=trm-dark-icon}

  </div>
</div>

### 分割线

可以在一行中用三个以上的减号来建立一个分隔线，同时需要在分隔线的上面空一行。如下：

---

### 表格

可以使用冒号来定义表格的对齐方式，如下：

| 姓名       | 年龄 |         工作 |
| :--------- | :--: | -----------: |
| 小可爱     |  18  |     吃可爱多 |
| 小小勇敢   |  20  |   爬棵勇敢树 |
| 小小小机智 |  22  | 看一本机智书 |

## 特殊语法

### 脚注

Here's a sentence with a footnote. [^1]
[^1]: This is the footnote.

### 代码块

如果在一个行内需要引用代码，只要用反引号引起来就好，如下：

Use the `printf()` function.

在需要高亮的代码块的前一行及后一行使用三个反引号，同时**第一行反引号后面表示代码块所使用的语言**，如下：

```java
// FileName: HelloWorld.java
public class HelloWorld {
  // Java 入口程序，程序从此入口
  public static void main(String[] args) {
    System.out.println("Hello,World!"); // 向控制台打印一条语句
  }
}
```

diff 不能同时和其他语言的高亮同时显示，使用效果如下:

```diff
+ 新增项
- 删除项
```

### 数学公式

行内公式使用方法：\\(ce{Hg^2+ ->[I-] HgI2 ->[I-] [Hg^{II}I4]^2-}\\)

块公式使用方法如下：

$$H(D_2) = -\left(\frac{2}{4}\log_2 \frac{2}{4} + \frac{2}{4}\log_2 \frac{2}{4}\right) = 1$$

### 定义列表

First Term
: This is the definition of the first term.

Second Term
: This is one definition of the second term.
: This is another definition of the second term.

### 任务列表

- [x] Write the press release
- [ ] Update the website
  - [ ] Contact the media
  - [ ] Contact the media
  - [ ] Contact the media
- [ ] Contact the media

## HTML

### 注音标签

<ruby>喜大普奔<rt>hē hē hē hē</rt></ruby>

```html
<ruby>
	喜大普奔
	<rt>hē hē hē hē</rt>
</ruby>
```

### details

<details>
  <summary>Async 安装方法</summary>

进入您的 vitepress 博客根目录，执行：

```bash
npm i vitepress-theme-async@latest
```

</details>

## 图片排版

<TrmGallery>

![](https://img2.wallspic.com/previews/7/6/8/1/7/171867/171867-wu_kong-chao_ji_sai_ya_ren-sai_ya_ren-zamasu-long_zhu-500x.jpg)
![](https://img3.wallspic.com/previews/2/0/1/8/6/168102/168102-yi_shu-ka_tong-mian_bu_biao_qing-kuai_le_de-ji_qie-500x.jpg)
![](https://img2.wallspic.com/previews/2/6/4/3/7/173462/173462-qi_fen-zi_se_de-zi_ran_jing_guan-yu_hui-de_ping_xian-500x.jpg)
![](https://img2.wallspic.com/previews/3/3/9/1/3/131933/131933-mo_xing-xiao_jie-huang_se_de-nu_hai-fa_xing-500x.jpg)
![](https://img1.wallspic.com/previews/8/3/4/6/2/126438/126438-wei_lai_zhu_yi-shu_ma_yi_shu-jie_duan-zi_ben_shi-yi_shu-500x.jpg)
![](https://img2.wallspic.com/previews/0/1/5/0/7/170510/170510-guang-azure-zi_se_de-zi_ran_huan_jing-zi_ran_jing_guan-500x.jpg)
![](https://img2.wallspic.com/previews/3/6/9/6/5/156963/156963-yi_shu-qi_fen-yu_hui-shou_shi-ren_men_zai_zi_ran_jie-500x.jpg)
![](https://img1.wallspic.com/previews/0/9/3/5/6/165390/165390-qi_fen-zi_se_de-zi_ran_huan_jing-zi_ran_jing_guan-tian_wen_xue_dui_xiang-500x.jpg)
![](https://img3.wallspic.com/previews/2/8/6/1/7/171682/171682-yi_kuai-xing_zhi-ye_ti-yi_shu-shui_xia-500x.jpg)
![](https://img1.wallspic.com/previews/7/1/9/9/89917/89917-bo_xi_ta_nuo-an_zhuang_de_feng_jing-cheng_shi-suo_lun_tuo-shan_zhan-500x.jpg)
![](https://img1.wallspic.com/previews/6/2/3/5/6/165326/165326-pang_ke2077-pang_ke-qi_fen-xing_zhi-zi_se_de-500x.jpg)
![](https://img2.wallspic.com/previews/8/9/4/5/6/165498/165498-ka_tong-tao-pin_hong_se-zhang_zhang_de_tou_fa-ji_qie-500x.jpg)
![](https://img3.wallspic.com/previews/5/7/4/2/7/172475/172475-yi_shu-tao-tou_fa-ka_tong-500x.jpg)
![](https://img2.wallspic.com/previews/5/0/9/0/70905/70905-hai_yang-ma_er_dai_fu-tian_kong-du_jia_cun-huan_jiao-500x.jpg)
![](https://img3.wallspic.com/previews/4/3/4/8/6/168434/168434-xing_zhi-zi_ran_jing_guan-dan_huang-shui_dao-zhi_bei-500x.jpg)
![](https://img2.wallspic.com/previews/6/5/4/5/6/165456/165456-giy_fu_gang-e_mo_sha_shoukimetsu_no_yaiba-shan_zi_de_yi_shu-zi_se_de-dian_lan_se_de-500x.jpg)
![](https://img1.wallspic.com/previews/5/4/0/4/7/174045/174045-jian_ying-qi_fen-ren_men_zai_zi_ran_jie-tian_wen_xue_dui_xiang-yi_shu-500x.jpg)
![](https://img1.wallspic.com/previews/9/3/1/6/5/156139/156139-feng_jing_hua-yi_shu-shu_ma_yi_shu-qi_fen-sheng_tai_qu-500x.jpg)
![](https://img2.wallspic.com/previews/7/6/4/5/7/175467/175467-wo_de_xue_shu_jie_de_ying_xiong-tao-yi_shu-ka_tong-azure-500x.jpg)
![](https://img1.wallspic.com/previews/3/7/0/0/7/170073/170073-liang_ge_ling-ka_tong-shou_shi-chuang_zao_xing_de_yi_shu-hong_se_de-500x.jpg)
![](https://img1.wallspic.com/previews/1/8/3/6/6/166381/166381-shi_zi-xin_ba-bai_se_shi_zi-hu_xu-mao_ke-500x.jpg)
![](https://img3.wallspic.com/previews/4/2/2/3/7/173224/173224-ri_luo-shui_zi_yuan-qi_fen-yu_hui-zi_se_de-500x.jpg)
![](https://img1.wallspic.com/previews/7/5/7/9/6/169757/169757-ji_bo_li_de_bo_wu_guan-zi_ran_jing_guan-yi_shu-ji_yun-500x.jpg)
![](https://img1.wallspic.com/previews/5/2/0/6/7/176025/176025-qi_fen-tian_wen_xue_dui_xiang-yi_shu-dian_lan_se_de-yuan_quan-500x.jpg)
![](https://img3.wallspic.com/previews/6/5/8/1/4/141856/141856-hen_ku_de-hui_hua-yu_yan_jing_tou-zhai_nan-tu_xing_she_ji-500x.jpg)
![](https://img1.wallspic.com/previews/2/1/6/5/6/165612/165612-kimetsu_no_yaiba-e_mo_sha_shoukimetsu_no_yaiba-tao-tou_fa-wai_tao-500x.jpg)
![](https://img3.wallspic.com/previews/5/1/0/2/4/142015/142015-feng_ge-ka_ka_xi_qi_mu-huo_ying_ren_zhe-tu_xing_she_ji-shi_jue_yi_shu-500x.jpg)
![](https://img1.wallspic.com/previews/8/8/7/8/5/158788/158788-e_mo_sha_shoukimetsu_no_yaiba-shnen_man_hua-tao-ka_tong-azure-500x.jpg)

</TrmGallery>
