import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as s,e as c,a,f as o}from"./app-c3867e4b.js";const t={},d=a("p",null,"Docker是一个应用打包、分发、部署的工具。",-1),r=a("p",null,"可以把它理解为一个轻量级的虚拟机，它只虚拟软件需要运行的环境，多余的不要，而普通的虚拟机则是一个完整而庞大的系统。",-1),i=o(`<h3 id="打包、分发、部署" tabindex="-1"><a class="header-anchor" href="#打包、分发、部署" aria-hidden="true">#</a> 打包、分发、部署</h3><p><strong>打包</strong>：把软件运行需要的依赖、第三方库、软件打包在一起成为一个安装包。</p><p><strong>分发</strong>：可以把打包好的文件上传到一个镜像仓库，其他用户可以轻松获取。</p><p><strong>部署</strong>：使用安装包就能通过一个命令运行应用，不管是在Win/Mac/Linux环境中。</p><h3 id="docker部署的优势" tabindex="-1"><a class="header-anchor" href="#docker部署的优势" aria-hidden="true">#</a> Docker部署的优势</h3><p>确保了应用能在不同的机器上使用相同的环境运行，不会出现从开发到部署环境不兼容的问题。</p><h3 id="镜像、容器" tabindex="-1"><a class="header-anchor" href="#镜像、容器" aria-hidden="true">#</a> 镜像、容器</h3><p><strong>镜像</strong>：可以理解为软件安装包，方便传播和安装。</p><p><strong>容器</strong>：软件安装之后的状态，每个软件在docker中的运行环境都是独立的、隔离的，称之为容器。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">6379</span>:6379 <span class="token parameter variable">--name</span> redis redis:latest<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>运行上述命令会先去下载镜像<code>redis:latest</code>，之后在<code>6379</code>端口运行，本机的<code>6379</code>端口映射到docker中的<code>6379</code>端口，容器的名称为<code>redis</code>。</p><h3 id="docker挂载目录" tabindex="-1"><a class="header-anchor" href="#docker挂载目录" aria-hidden="true">#</a> Docker挂载目录</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">80</span>:80 <span class="token parameter variable">--name</span> nginx <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /mydata/nginx/html:/usr/share/nginx/html <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /mydata/nginx/logs:/var/log/nginx <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /mydata/nginx/conf:/etc/nginx <span class="token punctuation">\\</span>
<span class="token parameter variable">-d</span> nginx:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>nginx:latest</code>拉去最新的nginx镜像，<code>-p</code>映射本机端口80到容器中。<code>-v</code>表示挂载目录，将目录<code> /mydata/nginx/html</code>映射到<code>/usr/share/nginx/html</code>，这样在目录<code> /mydata/nginx/html</code>中添加文件，nginx容器就能直接读取，其他同理。</p><h3 id="docker-compose" tabindex="-1"><a class="header-anchor" href="#docker-compose" aria-hidden="true">#</a> Docker-Compose</h3><p>如果每个虚拟机中需要创建很多的容器，一个一个运行命令很麻烦。</p><p>可以使用docker-compose把项目的多个服务集合到一起，一键运行。</p><p>创建<code>docker-compose.yml</code>文件，写入：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">services</span><span class="token punctuation">:</span>
	<span class="token key atrule">redis</span><span class="token punctuation">:</span>
		<span class="token key atrule">image</span><span class="token punctuation">:</span> redis<span class="token punctuation">:</span>latest
		<span class="token key atrule">volumes</span><span class="token punctuation">:</span>
			<span class="token punctuation">-</span> <span class="token key atrule">redis</span><span class="token punctuation">:</span> /data
        <span class="token key atrule">environment</span><span class="token punctuation">:</span>
        	<span class="token punctuation">-</span> TZ=Asia/Shanghai
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在<code>docker-compose.yml</code>文件所在目录，执行<code>docker-compose up</code>就能运行安装。</p><p>关于查看运行状态，停止，重启docker-compose命令和docker命令结构是相同的。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,22);function p(l,u){return n(),s("div",null,[d,r,c(" more "),i])}const v=e(t,[["render",p],["__file","3docker.html.vue"]]);export{v as default};