import{o as c,c as r,a,w as e,u as s,i as p,A as l,b as t,d as o,e as n}from"./app.24c31b42.js";const u=t('<h2 id="\u7EC4\u4EF6\u4ECB\u7ECD" tabindex="-1">\u7EC4\u4EF6\u4ECB\u7ECD <a class="header-anchor" href="#\u7EC4\u4EF6\u4ECB\u7ECD" aria-hidden="true">#</a></h2><p><code>cl-avatar</code>\u5BF9<code>a-avatar</code>\u505A\u4E86\u57FA\u672C\u7684\u5C01\u88C5\u3002</p><ol><li>\u4F18\u5316\u4E86\u9ED8\u8BA4\u5934\u50CF\u7684\u5904\u7406\u3002\u5BF9\u4E8E<code>src</code>\u4E3A\u7A7A\u6216\u8005<code>src</code>\u52A0\u8F7D\u5931\u8D25\u7684\u573A\u666F\uFF0C\u81EA\u52A8fallback\u4E3A<code>defaultUrl</code>\u3002</li><li>\u540C\u65F6\u4E5F\u7B80\u5316\u4E86<code>onError</code>\u7B49\u573A\u666F\u7684fallback\u5904\u7406\u3002</li></ol><h2 id="\u4EE3\u7801\u6F14\u793A" tabindex="-1">\u4EE3\u7801\u6F14\u793A <a class="header-anchor" href="#\u4EE3\u7801\u6F14\u793A" aria-hidden="true">#</a></h2><h3 id="\u57FA\u672C\u4F7F\u7528" tabindex="-1">\u57FA\u672C\u4F7F\u7528 <a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a></h3>',5),i=n("\u4E0D\u4F20\u4EFB\u4F55\u5C5E\u6027\uFF0C\u9ED8\u8BA4\u6548\u679C"),d=t(`<div class="language-vue line-numbers-mode"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cl-avatar</span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div>`,1),_=n("\u4F20 src \u5C5E\u6027"),k=t(`<div class="language-vue line-numbers-mode"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cl-avatar</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div>`,1),g=n("\u9ED8\u8BA4\u5934\u50CF"),b=o("p",null,[n("\u5728\u591A\u79DF\u6237\u573A\u666F\u4E2D\uFF0C\u4F18\u5148\u5C55\u793A\u7528\u6237\u5934\u50CF\uFF0C\u540C\u65F6\u83B7\u53D6\u79DF\u6237logo\uFF0C\u4F5C\u4E3A\u9ED8\u8BA4\u5934\u50CF\uFF08\u901A\u8FC7"),o("code",null,"default-url"),n("\u5C5E\u6027\u7ED1\u5B9A\uFF09\u3002")],-1),m=t(`<div class="language-vue line-numbers-mode"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cl-avatar</span> <span class="token attr-name">:default-url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tenantLogo<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>userAvatar<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">// \u8FD9\u91CC\u4EC5\u662F\u793A\u4F8B\u7528\u6CD5\uFF0C\u5B9E\u9645\u600E\u4E48\u53D6\u503C\u5E94\u8BE5\u6839\u636E\u9879\u76EE\u5B9E\u9645\u60C5\u51B5\u51B3\u5B9A</span>

<span class="token comment">// \u53D6\u79DF\u6237logo\uFF0C\u901A\u8FC7 defaultUrl \u5C5E\u6027\u4F5C\u4E3Afallback</span>
<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">useStore</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
<span class="token keyword">const</span> tenantLogo <span class="token operator">=</span> store<span class="token punctuation">.</span>getters<span class="token punctuation">[</span><span class="token string">&quot;tenant/tenantLogo&quot;</span><span class="token punctuation">]</span>

<span class="token comment">// \u53D6\u7528\u6237\u5934\u50CF</span>
<span class="token keyword">const</span> userAvatar <span class="token operator">=</span> store<span class="token punctuation">.</span>getters<span class="token punctuation">[</span><span class="token string">&quot;user/userAvatar&quot;</span><span class="token punctuation">]</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="\u5C5E\u6027" tabindex="-1">\u5C5E\u6027 <a class="header-anchor" href="#\u5C5E\u6027" aria-hidden="true">#</a></h2><table><thead><tr><th style="text-align:left;">\u5C5E\u6027</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td style="text-align:left;">defaultUrl</td><td style="text-align:left;">\u5934\u50CF src \u7684\u9ED8\u8BA4\u503C</td><td style="text-align:center;">string</td><td style="text-align:left;">-</td></tr></tbody></table><p>\u5176\u4ED6\u5C5E\u6027\u89C1<a href="https://2x.antdv.com/components/avatar-cn#API" target="_blank" rel="noopener noreferrer">Avatar Props</a>\u3002</p>`,4),A='{"title":"\u7EC4\u4EF6\u4ECB\u7ECD","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7EC4\u4EF6\u4ECB\u7ECD","slug":"\u7EC4\u4EF6\u4ECB\u7ECD"},{"level":2,"title":"\u4EE3\u7801\u6F14\u793A","slug":"\u4EE3\u7801\u6F14\u793A"},{"level":3,"title":"\u57FA\u672C\u4F7F\u7528","slug":"\u57FA\u672C\u4F7F\u7528"},{"level":2,"title":"\u5C5E\u6027","slug":"\u5C5E\u6027"}],"relativePath":"components/avatar/index.md","lastUpdated":1653894648000}',h={},y=Object.assign(h,{name:"index",setup(v){return(f,T)=>(c(),r("div",null,[u,a(s(l),null,{default:e(()=>[i]),_:1}),a(s(p)),d,a(s(l),null,{default:e(()=>[_]),_:1}),a(s(p),{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}),k,a(s(l),null,{default:e(()=>[g]),_:1}),b,a(s(p),{defaultUrl:"/logo.png"}),m]))}});export{A as __pageData,y as default};
