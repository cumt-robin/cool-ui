import{o as t,c as n,a}from"./app.5710c3d0.js";const s=a(`<h2 id="\u7EC4\u4EF6\u4ECB\u7ECD" tabindex="-1">\u{1F4D3}\u7EC4\u4EF6\u4ECB\u7ECD <a class="header-anchor" href="#\u7EC4\u4EF6\u4ECB\u7ECD" aria-hidden="true">#</a></h2><p><code>cl-button</code>\u662F\u5BF9<code>a-button</code>\u7684\u4E8C\u6B21\u5C01\u88C5\u3002\u57FA\u4E8E<code>cl-button</code>\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528\u81EA\u5B9A\u4E49\u7684<code>iconfont</code>\u56FE\u6807\u3002</p><h2 id="\u4EE3\u7801\u6F14\u793A" tabindex="-1">\u2328\uFE0F\u4EE3\u7801\u6F14\u793A <a class="header-anchor" href="#\u4EE3\u7801\u6F14\u793A" aria-hidden="true">#</a></h2><h3 id="\u57FA\u672C\u4F7F\u7528" tabindex="-1">\u57FA\u672C\u4F7F\u7528 <a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a></h3><div class="language-vue line-numbers-mode"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cl-button</span><span class="token punctuation">&gt;</span></span>\u4E00\u4E2A\u6309\u94AE<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cl-button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-vue line-numbers-mode"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cl-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>truck<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ghost</span><span class="token punctuation">&gt;</span></span>\u4E00\u4E2A\u6309\u94AE<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cl-button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-vue line-numbers-mode"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cl-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>truck<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ghost</span> <span class="token attr-name">:iconSize</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>12<span class="token punctuation">&quot;</span></span> <span class="token attr-name">iconColor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#ff7875<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u4E00\u4E2A\u6309\u94AE<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cl-button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="\u6CE8\u610F\u4E8B\u9879" tabindex="-1">\u{1F4A1}\u6CE8\u610F\u4E8B\u9879 <a class="header-anchor" href="#\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a></h2><h3 id="iconfont\u56FE\u6807\u7684\u4F7F\u7528" tabindex="-1">iconfont\u56FE\u6807\u7684\u4F7F\u7528 <a class="header-anchor" href="#iconfont\u56FE\u6807\u7684\u4F7F\u7528" aria-hidden="true">#</a></h3><p>\u4F7F\u7528 iconfont \u56FE\u6807\u65F6\uFF0C\u5FC5\u987B\u63D0\u4F9B\u4E00\u4E2A iconfont \u7684 js \u94FE\u63A5\uFF0C\u7528\u4E8E\u751F\u6210<code>svg symbol</code>\u6E05\u5355\u3002</p><p>\u8FD9\u4E2A js \u94FE\u63A5\u53EF\u4EE5\u901A\u8FC7<code>ConfigProvider</code>\u7EC4\u4EF6\u6CE8\u5165\uFF0C\u901A\u5E38\u662F\u5728<code>App.vue</code>\u6A21\u677F\u7684\u6700\u5916\u5C42\u5305\u88F9\u3002</p><div class="language-vue line-numbers-mode"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cl-config-provider</span> <span class="token attr-name">svgIconScriptUrl</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://at.alicdn.com/t/font_2315902_0viez6ffofs.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cl-config-provider</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u5C5E\u6027" tabindex="-1">\u{1F4D6}\u5C5E\u6027 <a class="header-anchor" href="#\u5C5E\u6027" aria-hidden="true">#</a></h2><table><thead><tr><th style="text-align:center;">\u5C5E\u6027</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td style="text-align:center;">icon</td><td style="text-align:center;">iconfont\u7684\u56FE\u6807\u540D</td><td style="text-align:center;">string</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;">iconSize</td><td style="text-align:center;">\u56FE\u6807\u5927\u5C0F</td><td style="text-align:center;">number</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;">iconColor</td><td style="text-align:center;">\u56FE\u6807\u989C\u8272</td><td style="text-align:center;">string</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;">mainColor</td><td style="text-align:center;">\u6309\u94AE\u4E3B\u8272\u8C03\uFF0C\u5F71\u54CD\u80CC\u666F\u8272\u548Cborder\u989C\u8272</td><td style="text-align:center;">string</td><td style="text-align:center;">-</td></tr></tbody></table><p>\u5176\u4ED6\u5C5E\u6027/\u4E8B\u4EF6\u89C1<a href="https://2x.antdv.com/components/button-cn#API" target="_blank" rel="noopener noreferrer">Button Props</a>\u3002</p>`,15),e=[s],i='{"title":"\u{1F4D3}\u7EC4\u4EF6\u4ECB\u7ECD","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u{1F4D3}\u7EC4\u4EF6\u4ECB\u7ECD","slug":"\u7EC4\u4EF6\u4ECB\u7ECD"},{"level":2,"title":"\u2328\uFE0F\u4EE3\u7801\u6F14\u793A","slug":"\u4EE3\u7801\u6F14\u793A"},{"level":3,"title":"\u57FA\u672C\u4F7F\u7528","slug":"\u57FA\u672C\u4F7F\u7528"},{"level":2,"title":"\u{1F4A1}\u6CE8\u610F\u4E8B\u9879","slug":"\u6CE8\u610F\u4E8B\u9879"},{"level":3,"title":"iconfont\u56FE\u6807\u7684\u4F7F\u7528","slug":"iconfont\u56FE\u6807\u7684\u4F7F\u7528"},{"level":2,"title":"\u{1F4D6}\u5C5E\u6027","slug":"\u5C5E\u6027"}],"relativePath":"components/button/index.md","lastUpdated":1654505083000}',p={},u=Object.assign(p,{__name:"index",setup(o){return(c,l)=>(t(),n("div",null,e))}});export{i as __pageData,u as default};
