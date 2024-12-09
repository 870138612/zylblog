import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,e as t,o as e}from"./app-B4nhIZRg.js";const a={};function p(n,i){return e(),s("div",null,i[0]||(i[0]=[t(`<h2 id="计算机系统概述" tabindex="-1"><a class="header-anchor" href="#计算机系统概述"><span>计算机系统概述</span></a></h2><h4 id="冯诺依曼计算机的特点" tabindex="-1"><a class="header-anchor" href="#冯诺依曼计算机的特点"><span>冯诺依曼计算机的特点</span></a></h4><ul><li><p>计算机由运算器，存储器，控制器，输入设备，输出设备构成，</p><ul><li><p>运算器核心是算数逻辑单元$\\text{ALU}$，加减乘除，移位操作，运算器包含了一些寄存器，用来存储中间数据，$\\text{ACC}$，运算器里面还有程序状态寄存器$\\text{PSW}$.</p></li><li><p>控制器里面有程序计数器PC，指令寄存器IR和控制单元$\\text{CU}$，$\\text{PC}$是用来表示下一条将要执行指令的地址，当存储单元的大小和指令字长相同的时候，每一条指令的执行都会伴随$\\text{PC}+1-&gt; \\text{PC}$，$\\text{IR}$用来暂存当时正在执行的程序，$\\text{CU}$用来发出控制信号.</p></li><li><p>存储器包含$\\text{MDR}$，$\\text{MAR}$，$\\text{MDR}$暂存需要传输的数据，$\\text{MAR}$用来存储地址.</p></li></ul></li><li><p>指令和数据以同等地位存放在存储器中.</p><ul><li>计算机如何区分取出的是数据还是指令：取指阶段取出的是指令，间址阶段取出的是数据，所以根据指令执行的不同阶段区分.</li></ul></li><li><p>指令和数据以二进制存储.</p></li><li><p>指令由操作码和地址码构成，操作码表示这个指令的操作（区分指令不同），地址码用来表示数据存储的位置.</p></li></ul><h4 id="计算机性能指标" tabindex="-1"><a class="header-anchor" href="#计算机性能指标"><span>计算机性能指标</span></a></h4><ul><li><p>机器字长，又叫做字长，表示计算机进行一次整数运算能处理的数据总长.</p></li><li><p>数据通路的带宽，数据线的根数，一般等于$\\text{MDR}$.</p></li><li><p>主存容量=地址总数（$2^{地址线的根数}$ $\\text{MAR}$的位数等于地址线的根数（一般情况））*每一个地址的大小（存储字长）.</p></li><li><p>吞吐量，单位时间内计算机能处理的指令条数.</p></li><li><p>响应时间，指令在创建完成之后不会被立即处理，到被调度执行的时间称为响应时间.</p></li><li><p>$\\text{CPI}$，一条指令所需要的时钟周期数.</p></li><li><p>$\\text{MIPS}$，百万$\\text{IPS}$.</p></li></ul><h2 id="数据的表示和运算" tabindex="-1"><a class="header-anchor" href="#数据的表示和运算"><span>数据的表示和运算</span></a></h2><h4 id="数据的编码" tabindex="-1"><a class="header-anchor" href="#数据的编码"><span>数据的编码</span></a></h4><ul><li><p>$\\text{BODH}$，分别表示二进制，八进制，十进制，和十六进制.</p></li><li><p>$\\text{15}$用二进制表示$\\text{111}$，对应的十六进制就是$\\text{F}$.</p></li><li><p>真值和机器数，真值就是真实值，机器数是存储在存储器上的格式.</p></li></ul><h4 id="原码反码补码" tabindex="-1"><a class="header-anchor" href="#原码反码补码"><span>原码反码补码</span></a></h4><ul><li><p>假设总共$\\text{8}$位，则最高位是符号位，$\\text{0}$表示正数，$\\text{1}$表示负数，其余是数值位.</p></li><li><p>正数的原反补相同.</p></li><li><p>大端存储就是正常顺序，从左到右，边界对齐必须以单个数据的大小的倍数作为起始地址.</p></li><li><p>负数，原码正常写，$-15$则在$\\text{8}$位的空间中，机器数为<code>1000 1111</code>.</p><ul><li><p>反码，原码的数值位全取反得到<code>1111 0000</code>.</p></li><li><p>补码，反码末尾$+1$（原码的数值位全取反，末尾再加1），得到<code>1111 0001</code>.</p></li><li><p>原码和补码之间的关系，针对负数，</p><ul><li><p>原码<code>1000 1111</code></p></li><li><p>补码<code>1111 0001</code></p></li><li><p>从右往左第一个$\\text{1}$开始，左边的数值位都是反过来的，右边都是相同的.</p></li><li><p>例如-8的原码是<code>1000 1000</code>，补码是<code>1111 1000</code>.</p></li></ul></li></ul></li><li><p>移码是补码的符号位取反，或者是真值基础上加上$2^n$（偏移量，与IEEE754中的不同），$\\text{n}$代表数值位的位数，可以看成无符号数.</p></li><li><p>对于小数来说，从最高位的右边省略了一个<code>.</code>.</p><ul><li>例如定点小数<code>0 1</code>，真实值是$\\frac{1}{2}$</li></ul></li><li><p>表示范围</p><ul><li><p>例如$\\text{8}$位的定点整数.</p><ul><li><p>原码的表示范围是<code>[-127,127]</code>，$\\text{0}$的表示方式有两种<code>0000 0000</code>，<code>1000 0000</code>，正数编码$\\text{127}$种，负数编码$\\text{127}$种，一共$\\text{256}$.</p></li><li><p>反码的表示范围是是<code>[-127,127]</code>.</p></li><li><p>补码的表示范围是<code>[-128,127]</code>，$\\text{0}$的表示方式只有一种<code>0000 0000</code>，<code>1000 0000</code>在补码当中表示最小值<code>-128</code>，在任意的补码中，如果符号位取<code>1</code>，数值位全<code>0</code>则表示最小值.</p></li></ul></li><li><p>定点小数</p><ul><li><p>原码的表示范围<code>(-1,1)</code>.</p></li><li><p>反码的表示范围<code>(-1,1)</code>.</p></li><li><p>补码的表示范围<code>[-1,1)</code>，$-1$在$\\text{2}$位的定点小数中表示形式<code>1 0</code>.</p></li></ul></li></ul></li><li><p>加法器中的标志</p><ul><li><p>溢出标志位$\\text{OF}=C_n\\bigoplus C_{n-1}$，两者相同的时候输出$\\text{0}$，否则输出$\\text{1}$.</p></li><li><p>符号位$\\text{SF}=\\text{F}_{n-1}$.</p></li><li><p>零标志位$\\text{ZF}=1$当且仅当$\\text{F}=0$.</p></li><li><p>进位/借位标志$\\text{CF}=C_{out} \\bigoplus C_{in}$.</p></li></ul></li></ul><h4 id="运算方法" tabindex="-1"><a class="header-anchor" href="#运算方法"><span>运算方法</span></a></h4><ul><li><p>移位</p><ul><li><p>逻辑移位，视为无符号数，不管左移还是右移都是补$\\text{0}$，</p></li><li><p>算数移位，符号位不参与移位，正数移位都补$\\text{0}$，正数的原反补是相同的，</p><ul><li>负数，原码仍然是补$\\text{0}$，反码补$\\text{1}$（反码的数值位和原码相反），补码由于从右往左第一个$\\text{1}$开始，左边全反，右边全相同，左移低位出现空挡，补$\\text{0}$；右移是高位出现空挡补$\\text{1}$.</li></ul></li></ul></li><li><p>加减运算</p><ul><li><p>直接从十进制开始运算，判断结果是否能表示出来，不能则溢出，能则再转成补码，就是最后的结果机器数.</p></li><li><p>补码判断溢出</p><ul><li><p>从符号位判断，正数$+$正数得到负数则溢出，负数$+$负数得到正数则溢出.</p></li><li><p>从最高数值位和符号位的进位判断，符号位和符号位是能进行计算的，数值位的进位不会影响符号位，如果两者都有进位或者都没进位则没有溢出，否则溢出，异或：两者相同的时候输出$\\text{0}$，否则输出$\\text{1}$.</p></li><li><p>双符号位，最高的符号位表示真实符号位，此时数值位和符号位同时参与运算，判断结果的符号位是否相等，不等则表示溢出，负数<code>10</code>表示负溢出，<code>01</code>正数表示正溢出.</p></li></ul></li></ul></li></ul><h4 id="浮点数的表示和运算" tabindex="-1"><a class="header-anchor" href="#浮点数的表示和运算"><span>浮点数的表示和运算</span></a></h4><ul><li><p>$\\text{IEEE754}$格式中$\\text{float}$类型分别长度为<code>1 8 23</code>，符号，阶码和尾数.</p><ul><li><p>符号位$\\text{0}$表示浮点数是正数，$\\text{1}$表示负数.</p></li><li><p>阶码$\\text{8}$位，是移码表示的，偏移量是<code>127</code>.</p><ul><li>把阶码想象成无符号数，则表示范围是<code>0~255</code>，由于偏移量是<code>127</code>，规定移码为<code>0</code>或者为<code>255</code>的时候分别表示无穷大和无穷小，去除之后剩下<code>1~254</code>；所以真实的表示范围是<code>-126~127</code>.</li></ul></li><li><p>尾数隐含了<code>1.</code>，例如尾数部分是<code>1000....</code>，则表示真正的二进制尾数是<code>1.1000...</code>.</p><ul><li><p>尾数的最小值是<code>000000...</code>，即$\\text{23}$个<code>0</code>，表示尾数<code>1</code>.</p></li><li><p>最大值是<code>11111....</code>，即$\\text{23}$个<code>1</code>，表示尾数$2-2^{-23}$.</p></li><li><p>浮点数的最大值是$2-2^{-23}*2^{127}$.</p></li></ul></li></ul></li><li><p>浮点数尾数的规格化</p><ul><li>尾数为规格化的尾数$\\cfrac{1}{2}\\le|M|&lt;1$，原码小数的最高数值位为$\\text{1}$，则规格化，否则不是规格化的；补码如果是规格化的尾数，则需要符号位和数值位相异（必要条件）.</li></ul></li><li><p>浮点数的加减法运算，跟$\\text{IEEE754}$无关</p><ul><li><p>对阶</p><ul><li>小阶向大阶对齐.</li></ul></li><li><p>尾数加减</p><ul><li>采用双符号位进行运算.</li></ul></li><li><p>规格化</p><ul><li>通过左规右规将位数变为规格化尾数.</li></ul></li><li><p>舍入</p><ul><li>通过舍入办法进行舍入尾数.</li></ul></li><li><p>溢出判断</p><ul><li>通过双符号位进行溢出判断.</li></ul></li></ul></li></ul><h2 id="存储系统" tabindex="-1"><a class="header-anchor" href="#存储系统"><span>存储系统</span></a></h2><h4 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h4><ul><li><p>按照存取方式分为$\\text{ROM}$和$\\text{RAM}$.</p><ul><li><p>$\\text{RAM}$随机存储器，断电信息会丢失，可以修改数据的.</p><ul><li><p>$\\text{SRAM}$，使用触发器，静态随机存储器，组成$\\text{cache}$.</p></li><li><p>$\\text{DRAM}$，使用电容，动态随机存储器，组成内存.</p></li></ul></li><li><p>$\\text{ROM}$只读存储器，断电信息不丢失，不可以修改数据.</p></li><li><p>串行访问存储器，磁带，光盘，顺序读取.</p></li></ul></li><li><p>存储容量$=$地址个数$*$存储字长</p></li><li><p>存取周期$\\text{T}$，进行完成读写操作需要的全部时间.</p></li><li><p>主存带宽，数据传输率.</p></li><li><p>层次结构</p><ul><li><p>$\\text{cache}$主存层，数据交互是由硬件自动完成的，不需要$\\text{OS}$参与，对程序员透明.</p></li><li><p>主存$-$辅存层，数据交互是由$\\text{OS}$和硬件共同完成的，外存的存储方式由操作系统决定.</p></li></ul></li><li><p>$\\text{BIOS}$主板出厂的时候写入，$\\text{MBR}$是创建操作系统的时候写入的，是计算机开机以后访问硬盘时所必须要读取的第一个扇区.</p></li></ul><h4 id="主存工作原理" tabindex="-1"><a class="header-anchor" href="#主存工作原理"><span>主存工作原理</span></a></h4><ul><li><p>$\\text{SRAM}$使用触发器保存数据，$\\text{cache}$原料.</p></li><li><p>$\\text{DRAM}$使用电容保存数据，主存原料.</p><ul><li><p>一般认为电容在$2ms$之后电荷会流失.</p></li><li><p>刷新方式，刷新就是一次读取和写入的过程，认为是一个存取周期，一次刷新一行.</p><ul><li><p>集中刷新，在$2ms$的最后一段时间对所有行进行刷新，会导致主存长时间不可用，死区.</p></li><li><p>分散刷新，读取一次刷新一次，总时间一半用来刷新，一半用来存取，低效率.</p></li><li><p>异步刷新，$2ms/$总行数，得到每隔多少时间刷新下一行，对于每一行正好经过$2ms$进行一次刷新.</p></li></ul></li></ul></li><li><p>$\\text{DRAM}$才用双译码地址编码方式，采用引脚复用技术，可以让地址线根数少一半.</p></li><li><p>$\\text{MDR}$的位数与数据线相同，$\\text{MAR}$的位数与地址线相同.</p></li><li><p>多体并行存储器</p><ul><li><p>高位交叉编址，存储体号是在高位的，连续取$\\text{n}$个字（存储字）所需要的时间是$t=nT$，利于地址扩充.</p></li><li><p>低位交叉编址，存储体号是在低位的，连续取$\\text{n}$个字所需要的时间是$t=T+(n-1)\\tau$，理想情况下$T=m\\tau$存储体利用率最高，$\\text{m}$是存储体的个数；$T&lt;m\\tau$，存储体利用率不足，$T&gt;m\\tau$不能形成流水线.</p></li></ul></li></ul><h4 id="外部存储器" tabindex="-1"><a class="header-anchor" href="#外部存储器"><span>外部存储器</span></a></h4><ul><li><p>记录密度，位密度是单位长度下记录二进制代码的位数，内圈的位密度较高.</p></li><li><p>磁盘的地址结构<code>磁道号，盘面号，扇区号</code>，盘面号写在磁道号后面是因为读取连续地址的数据可以不移动磁头.</p></li><li><p>$\\text{RAID0}$将两个磁盘并行传输数据，文件散列存放在两个磁盘中，可以将数据传输率增加一倍，安全性较差，一个磁盘的数据受损，另外一个不可用；$\\text{RAID1}$将一个磁盘上的数据进行备份到另外一个磁盘，安全性较高.</p></li><li><p>$\\text{SCAN}$调度，来回扫描，$\\text{C-SCAN}$单向扫描，$\\text{LOOK}$当前移动方向没有请求则直接反方向扫描，$\\text{C-LOOK}$前移动方向没有请求则返回起点继续按当前方向扫描.</p></li></ul><h4 id="cache" tabindex="-1"><a class="header-anchor" href="#cache"><span>cache</span></a></h4><ul><li>局部性原理，时间局部性：一个数据在被访问之后的不就会被再次访问，空间局部性：一个数据被访问，则周围的数据在将来也会被访问.</li></ul><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> getSum</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> a[]){</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">	int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> sum </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">	for</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> i </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">length</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> i </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">++</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">){</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">		sum </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> a[i]</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//时间局部性和空间局部性</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">	}</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">	return</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> sum</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>$\\text{cache}$和主存的映射</p><ul><li><p>直接映射方式$\\text{cache}$块号$=$主存块号 $\\mod \\text{cache}$总行数.</p><ul><li>问题：可能存在其他$\\text{cache}$没有使用的情况，部分$\\text{cache}$行一直被替换，利用率比较低，实现简单.</li><li>主存地址结构<code>主存标记，cache块号，块内地址</code>，块内地址的位数等于$\\log N$，$\\text{N}$是一个块的大小；$\\text{cache}$块号的位数等于$\\log(\\text{cache}块数)$，适合大容量$\\text{cache}$.</li></ul></li><li><p>全相联映射，允许主存块放入$\\text{cache}$中的任意一行，提高了$\\text{cache}$的利用率，但是会导致标记项的位数增加，不适合大容量$\\text{cache}$，按照内容寻址的存储器是相联存储器.</p><ul><li>主存结构<code>主存标记，块内地址</code>.</li></ul></li><li><p>组相联映射，先将$\\text{cache}$进行分组，组内使用全相联映射，组间使用直接映射.</p><ul><li><p>组号$=$ 主存块号 $\\text{mod}$组数，组内可以随意存放；当每一组只有一行的时候变为直接相联映射，当所有行为一组的时候变为全相联映射.</p></li><li><p>主存结构<code>主存标记，组号，块内地址</code>.</p></li></ul></li><li><p>替换算法</p><ul><li><p>随机算法，随机替换$\\text{cache}$行.</p></li><li><p>先进先出，类似于队列.</p></li><li><p>$\\text{LRU}$，最近最少使用算法，命中率较高，链表，集合.</p></li></ul></li></ul></li><li><p>在修改$\\text{cache}$之后写回主存的时机</p><ul><li><p>写回法，在$\\text{cache}$中存在一个脏位，表示数据是否修改，当这行被替换的时候，判断脏位，修改了则写会主存，没有修改则直接替换.</p></li><li><p>全写法，同时修改$\\text{cache}$和主存，比较影响运行效率的.</p></li></ul></li></ul><h4 id="虚拟存储器" tabindex="-1"><a class="header-anchor" href="#虚拟存储器"><span>虚拟存储器</span></a></h4><ul><li><p>基于局部性原理.</p></li><li><p>虚拟存储器就是解决内存紧张问题的，将外存中一部分区域当做内存来使用，属于进程但是暂时不用的数据会放入外存的交换区中，等需要使用的时候再进行调入，对应操作系统中级调度.</p></li><li><p>虚拟存储器采用全相联映射，采用写回法.</p></li><li><p>内存大小取决于$\\text{MAR}$的位数.</p></li></ul><h2 id="指令系统" tabindex="-1"><a class="header-anchor" href="#指令系统"><span>指令系统</span></a></h2><h4 id="指令系统-1" tabindex="-1"><a class="header-anchor" href="#指令系统-1"><span>指令系统</span></a></h4><ul><li><p>指令的基本格式，操作码和地址码，操作码（区分指令的不同）用来表示指令是做什么的，地址码表示了操作数的位置.</p></li><li><p>二地址指令中，目的操作数（第一个地址）用来保存结果.</p></li><li><p>在扩展操作码中指令格式</p></li></ul><h4 id="指令的寻址方式" tabindex="-1"><a class="header-anchor" href="#指令的寻址方式"><span>指令的寻址方式</span></a></h4><ul><li><p>数据寻址</p><ul><li><p>隐含寻址，一个操作数隐含在$\\text{ACC}$中.</p></li><li><p>立即寻址，操作数就是地址码.</p></li><li><p>直接寻址，通过地址码字段找到对应的主存单元取出数据，$\\text{EA=A}$，寻址范围受限于地址码字段.</p></li><li><p>间接寻址，两次直接寻址，通过地址码字段找到对应的主存单元，取出操作数的主存地址，再通过地址找到主存位置取出数据，$\\text{EA=(A)}$，可以通过第一次找到EA之后，寻址范围就变成了主存.</p></li><li><p>寄存器寻址，通过地址码字段找到对应的寄存器拿出数据，$\\text{EA=R}$.</p></li><li><p>寄存器间接寻址，第一次查找寄存器取出主存地址，第二次根据主存地址找到操作数，$\\text{EA=(R)}$.</p></li><li><p>偏移寻址</p><ul><li><p>相对寻址，寄存器里的值加上一个偏移量得到真实地址，$(\\text{PC})+A -&gt; \\text{PC}$.</p></li><li><p>基址寻址，$\\text{EA=(BR)+A}$，$\\text{BR}$里的值不变，$\\text{A}$可变，利于编制浮动程序和多道程序设计.</p></li><li><p>变址寻址，$\\text{EA=(IX)+A}$，$\\text{IX}$里的值会变，$\\text{A}$不变，利于处理数组问题($\\text{A}$就是每个数组元素的空间大小).</p></li></ul></li></ul></li></ul><h4 id="cisc和risc" tabindex="-1"><a class="header-anchor" href="#cisc和risc"><span>CISC和RISC</span></a></h4><ul><li><p>$\\text{CISC}$复杂指令集，$\\text{RISC}$是精简指令集。</p></li><li><p>$\\text{CISC}$和多，不固定，复杂联系在一起，$\\text{RISC}$中的寄存器较多.</p></li><li><p>$20%$的简单指令被重复使用，约占程序的百分之$80%$，$80%$的复杂指令很少被用到，约占整个程序的$20%$.</p></li></ul><h2 id="中央处理器" tabindex="-1"><a class="header-anchor" href="#中央处理器"><span>中央处理器</span></a></h2><h4 id="cpu功能和基本结构" tabindex="-1"><a class="header-anchor" href="#cpu功能和基本结构"><span>CPU功能和基本结构</span></a></h4><ul><li>对用户不透明的寄存器：通用寄存器组，程序寄存器$\\text{PC}$，程序状态字寄存器$\\text{PSW}$，累加寄存器，移位寄存器.</li></ul><h4 id="指令的执行过程" tabindex="-1"><a class="header-anchor" href="#指令的执行过程"><span>指令的执行过程</span></a></h4><ul><li><p>指令周期包含取指周期，间址周期，执行周期，中断周期.</p><ul><li><p>取指周期用来取指令的.</p></li><li><p>间址周期取操作数.</p></li><li><p>执行周期指令操作.</p></li><li><p>中断周期响应中断去执行其他的指令.</p></li></ul></li><li><p>指令的数据流，$\\text{A+B} -&gt; A$，$\\text{A}$通过地址码直接寻址获得，$\\text{B}$隐含寻址.</p></li></ul><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">取指</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(PC)</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">-&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">MAR</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">-&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">R</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">M</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(MAR)</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">-&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">MDR</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(PC)</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">-&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">PC</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">MDR</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">-&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">IR</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">间址，假设采用直接寻址</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Ad</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(IR)</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">-&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">MAR</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">M</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(MAR)</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">-&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">MDR</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">执行周期</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(MDR)</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(ACC)</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">-&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">Y</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">-&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">W</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">Y</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">-&gt;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">M</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(MAR)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">中断，保存断点到0号地址</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(PC)</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">-&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">MDR</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(MDR)</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">-&gt;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">M</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">-&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">EINT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">形成中断服务程序的入口地址</span><span style="--shiki-light:#C18401;--shiki-dark:#C678DD;">-&gt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">PC</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>单周期处理器，所有的指令都在一个时钟周期内完成，$\\text{CPI=1}$.</li></ul><h4 id="数据功能的基本功能和结构" tabindex="-1"><a class="header-anchor" href="#数据功能的基本功能和结构"><span>数据功能的基本功能和结构</span></a></h4><ul><li><p>组合逻辑元件的输出仅仅取决于当前时刻的输入，没有记忆功能.</p></li><li><p>时序逻辑电路的输出取决于当前时刻的输入和历史时刻的输入，有记忆功能.</p></li></ul><h4 id="控制器的功能和工作原理" tabindex="-1"><a class="header-anchor" href="#控制器的功能和工作原理"><span>控制器的功能和工作原理</span></a></h4><ul><li><p>硬布线控制，通过组合逻辑电路和触发器构成，实现微操作的发生，设计电路复杂，不利于修改，$\\text{RISC}$.</p></li><li><p>微程序控制器，$\\text{1}$指令$=1$微程序，$\\text{1}$微程序$=n$微指令，$\\text{1}$微指令$=n$微操作，$\\text{CISC}$.</p><ul><li><p>指令存储在主存中，微指令存储在控制存储器中.</p></li><li><p>指令以$\\text{PC}$中的值来确定指令的地址，微指令中通过上一条微指令的下地址字段决定执行的地址.</p></li><li><p>微程序的起始地址由操作码字段给出.</p></li><li><p>微指令的编码方式，微指令包含操作控制字段和地址控制字段.</p><ul><li>直接编码方式，每一位的地址控制字段表示一种操作，简单直观，但是指令的编码很少，造成控制存储器容量变大.</li><li>字段直接编码方式，有多个段，每个段产生一种信号，采用二进制编码的方式，全$\\text{0}$表示什么都不做，例如现有$\\text{8}$种微指令需要进行编码，则需要$\\text{4}$位的二进制进行编码，$(\\log(1+8))$，$\\text{1}$表示不做操作的编码个数.</li><li>在一个段内的指令，应该是相斥的微指令，相容的微指令应该放在不同的段内.</li></ul></li><li><p>水平型微指令微程序短，并行能力强，执行速度快，缺点指令长.</p></li><li><p>垂直型微指令微指令短，简单，规整，便于编写微程序，但是微程序长，执行速度慢.</p></li></ul></li></ul><h4 id="异常和中断机制" tabindex="-1"><a class="header-anchor" href="#异常和中断机制"><span>异常和中断机制</span></a></h4><ul><li><p>中断响应过程，中断隐指令</p><ul><li><p>关中断.</p></li><li><p>保存断点和程序状态，断点是$\\text{PC}$里面的内容，$\\text{PSW}$程序状态，这两者都是对程序员可见的.</p></li><li><p>形成中断服务程序入口地址.</p></li></ul></li></ul><h4 id="指令流水线" tabindex="-1"><a class="header-anchor" href="#指令流水线"><span>指令流水线</span></a></h4><ul><li><p>冒险和处理</p><ul><li><p>结构冒险，在同一个时刻有多个指令访问同一个资源</p><ul><li>让冲突指令等待.</li><li>采用不同类的部件，例如取指和访存用的不是一个存储器.</li></ul></li><li><p>数据冒险</p><ul><li>延时相关指令.</li><li>数据旁路.</li></ul></li><li><p>控制冒险</p><ul><li>分支预测.</li><li>$\\text{nop}$指令和硬件阻塞法.</li><li>遇到$\\text{jump}$指令可能会发生控制冒险.</li></ul></li></ul></li><li><p>流水线的性能指标</p><ul><li>加速比$S=\\frac{T_0}{T_k}$，不用流水线的时间除以用流水线的任务执行时间， 当任务数趋向无穷的时候加速比就等于流水段的个数.</li></ul></li><li><p>高级流水线</p><ul><li><p>超标量流水线，同一个时刻并发出多条指令，需要配置多个部件.</p></li><li><p>超长指令字，指令的取指阶段，间址阶段和中断阶段都是做同样的事情，传入的地址不同，将多条指令的执行阶段合并到一起，需要多处理器的支持.</p></li><li><p>超流水线技术，将阶梯缩短，流水线的功能段分的更多.</p></li></ul></li></ul><h2 id="总线" tabindex="-1"><a class="header-anchor" href="#总线"><span>总线</span></a></h2><h4 id="总线概述" tabindex="-1"><a class="header-anchor" href="#总线概述"><span>总线概述</span></a></h4><ul><li><p>总线的控制方式</p><ul><li><p>同步控制方式，采取统一的时钟信号进行控制.</p></li><li><p>异步控制方式，不采取统一的时钟信号进行控制.</p></li></ul></li><li><p>分类</p><ul><li><p>串行总线：只有一条双向或者单向传输的数据线，$\\text{USB}$.</p></li><li><p>并行总线：有多条双向或者单向传输的数据线，$\\text{PCI}$，$\\text{PCI-E}$.</p></li></ul></li></ul><h4 id="总线事务" tabindex="-1"><a class="header-anchor" href="#总线事务"><span>总线事务</span></a></h4><ul><li><p>异步定时方式</p><ul><li><p>不互锁，发送方和接收方之间不存在确认 ，相互之间没有制约，发送方定时将数据关闭.</p></li><li><p>半互锁，接收方接收数据之后返回确认，发送方定时将数据关闭.</p></li><li><p>全互锁，接收方接收数据之后返回确认，发送方接收到确认之后返回确认，并关闭连接.</p></li></ul></li></ul><h2 id="io" tabindex="-1"><a class="header-anchor" href="#io"><span>IO</span></a></h2><h4 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念"><span>基本概念</span></a></h4><ul><li><p>$\\text{IO}$控制方式，程序查询方式，程序中断方式，$\\text{DMA}$控制方式.</p></li><li><p>显存的计算，帧率$<em>$分辨率$</em>$灰度级.</p></li></ul><h4 id="io接口" tabindex="-1"><a class="header-anchor" href="#io接口"><span>IO接口</span></a></h4><ul><li><p>并行接口，一个字节或者一个字的所有位同时传输.</p></li><li><p>串行接口，一位一位的传输.</p></li><li><p>独立编址，对$\\text{IO}$接口进行独立的编址.</p></li><li><p>统一编址，将主存中的一部分作为$\\text{IO}$的地址.</p></li></ul><h4 id="io控制方式" tabindex="-1"><a class="header-anchor" href="#io控制方式"><span>IO控制方式</span></a></h4><ul><li><p>程序查询方式</p><ul><li><p>当遇到数据不存在时，调用$\\text{IO}$将数据传送到数据缓冲寄存器，$\\text{CPU}$轮训数据是否查询好.</p></li><li><p>效率低，$\\text{CPU}$被阻塞，数据传输效率低.</p></li><li><p>独占查询，$\\text{CPU}$一直轮训.</p></li><li><p>定时查询，没过一段时间进行一次查询.</p></li></ul></li><li><p>程序中断方式</p><ul><li><p>当遇到数据不存在时，调用$\\text{IO}$将数据传送到数据缓冲寄存器，$\\text{CPU}$做其他的事情，等到数据传送完成，$\\text{IO}$发送中断指令给$\\text{CPU}$，$\\text{CPU}$响应之后再来继续工作.</p></li><li><p>效率低，$\\text{CPU}$被解放，数据传输效率低.</p></li><li><p>多重中断屏蔽字，当前中断源的屏蔽字，某位为$\\text{1}$则表示能屏蔽该位的中断源，另外还需要屏蔽自己.</p></li></ul></li><li><p>$\\text{DMA}$方式</p><ul><li><p>由$\\text{CPU}$发送一批数据的传送指令，当这一批数据传送完成之后才会产生一次中断，需要$\\text{DMA}$总线的支持.</p></li><li><p>$\\text{DMA}$传送方式，当$\\text{CPU}$和$\\text{IO}$同时访问主存时</p><ul><li>停止$\\text{CPU}$访问，$\\text{CPU}$停止访问主存，当$\\text{IO}$设备访问完成之后$\\text{CPU}$再继续访问.</li><li>周期挪用，$\\text{CPU}$在使用的存取周期中，偶尔给出一个存取周期给$\\text{IO}$使用，$\\text{CPU}$的使用时间仍然是较长的.</li><li>交替访问，将存取周期分成两个时间片，一个给$\\text{CPU}$访问，一个给主存访问.</li></ul></li></ul></li><li><p>$\\text{DMA}$方式和中断方式的区别</p><ul><li><p>中断方式需要中断现行程序，而$\\text{DMA}$方式不需要.</p></li><li><p>中断方式只在程序的执行周期结束之后才会响应，$\\text{DMA}$方式能在任意的机器周期后响应.</p></li><li><p>$\\text{DMA}$控制方式中，传送数据过程中不需要$\\text{CPU}$干预，而中断方式中需要干预（传送一批的数据）.</p></li></ul></li></ul>`,61)]))}const d=l(a,[["render",p],["__file","2computerorganization.html.vue"]]),r=JSON.parse('{"path":"/discovery/2computerorganization.html","title":"计算机组成原理","lang":"zh-CN","frontmatter":{"title":"计算机组成原理","icon":"organization","order":1,"cover":"/discoverybackground/ocean1.jpg","category":["计算机组成原理"],"tag":["计算机组成原理"],"description":"计算机系统概述 冯诺依曼计算机的特点 计算机由运算器，存储器，控制器，输入设备，输出设备构成， 运算器核心是算数逻辑单元$\\\\text{ALU}$，加减乘除，移位操作，运算器包含了一些寄存器，用来存储中间数据，$\\\\text{ACC}$，运算器里面还有程序状态寄存器$\\\\text{PSW}$. 控制器里面有程序计数器PC，指令寄存器IR和控制单元$\\\\text...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/discovery/2computerorganization.html"}],["meta",{"property":"og:site_name","content":"Zzz"}],["meta",{"property":"og:title","content":"计算机组成原理"}],["meta",{"property":"og:description","content":"计算机系统概述 冯诺依曼计算机的特点 计算机由运算器，存储器，控制器，输入设备，输出设备构成， 运算器核心是算数逻辑单元$\\\\text{ALU}$，加减乘除，移位操作，运算器包含了一些寄存器，用来存储中间数据，$\\\\text{ACC}$，运算器里面还有程序状态寄存器$\\\\text{PSW}$. 控制器里面有程序计数器PC，指令寄存器IR和控制单元$\\\\text..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://vuepress-theme-hope-docs-demo.netlify.app/discoverybackground/ocean1.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-07T15:23:35.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://vuepress-theme-hope-docs-demo.netlify.app/discoverybackground/ocean1.jpg"}],["meta",{"name":"twitter:image:alt","content":"计算机组成原理"}],["meta",{"property":"article:tag","content":"计算机组成原理"}],["meta",{"property":"article:modified_time","content":"2024-12-07T15:23:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"计算机组成原理\\",\\"image\\":[\\"https://vuepress-theme-hope-docs-demo.netlify.app/discoverybackground/ocean1.jpg\\"],\\"dateModified\\":\\"2024-12-07T15:23:35.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Zzz\\",\\"url\\":\\"https://ylzhong.top\\"}]}"]]},"headers":[{"level":2,"title":"计算机系统概述","slug":"计算机系统概述","link":"#计算机系统概述","children":[]},{"level":2,"title":"数据的表示和运算","slug":"数据的表示和运算","link":"#数据的表示和运算","children":[]},{"level":2,"title":"存储系统","slug":"存储系统","link":"#存储系统","children":[]},{"level":2,"title":"指令系统","slug":"指令系统","link":"#指令系统","children":[]},{"level":2,"title":"中央处理器","slug":"中央处理器","link":"#中央处理器","children":[]},{"level":2,"title":"总线","slug":"总线","link":"#总线","children":[]},{"level":2,"title":"IO","slug":"io","link":"#io","children":[]}],"git":{"createdTime":1723226130000,"updatedTime":1733585015000,"contributors":[{"name":"ZYL1210","email":"870138612@qq.com","commits":13}]},"readingTime":{"minutes":20,"words":5999},"filePathRelative":"discovery/2computerorganization.md","localizedDate":"2024年8月9日","excerpt":"<h2>计算机系统概述</h2>\\n<h4>冯诺依曼计算机的特点</h4>\\n<ul>\\n<li>\\n<p>计算机由运算器，存储器，控制器，输入设备，输出设备构成，</p>\\n<ul>\\n<li>\\n<p>运算器核心是算数逻辑单元$\\\\text{ALU}$，加减乘除，移位操作，运算器包含了一些寄存器，用来存储中间数据，$\\\\text{ACC}$，运算器里面还有程序状态寄存器$\\\\text{PSW}$.</p>\\n</li>\\n<li>\\n<p>控制器里面有程序计数器PC，指令寄存器IR和控制单元$\\\\text{CU}$，$\\\\text{PC}$是用来表示下一条将要执行指令的地址，当存储单元的大小和指令字长相同的时候，每一条指令的执行都会伴随$\\\\text{PC}+1-&gt; \\\\text{PC}$，$\\\\text{IR}$用来暂存当时正在执行的程序，$\\\\text{CU}$用来发出控制信号.</p>\\n</li>\\n<li>\\n<p>存储器包含$\\\\text{MDR}$，$\\\\text{MAR}$，$\\\\text{MDR}$暂存需要传输的数据，$\\\\text{MAR}$用来存储地址.</p>\\n</li>\\n</ul>\\n</li>\\n<li>\\n<p>指令和数据以同等地位存放在存储器中.</p>\\n<ul>\\n<li>计算机如何区分取出的是数据还是指令：取指阶段取出的是指令，间址阶段取出的是数据，所以根据指令执行的不同阶段区分.</li>\\n</ul>\\n</li>\\n<li>\\n<p>指令和数据以二进制存储.</p>\\n</li>\\n<li>\\n<p>指令由操作码和地址码构成，操作码表示这个指令的操作（区分指令不同），地址码用来表示数据存储的位置.</p>\\n</li>\\n</ul>","autoDesc":true}');export{d as comp,r as data};
