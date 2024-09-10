---
title: 高等数学
star: true
icon: page
order: 99
cover: /home/sky.jpg
category:
    - 高等数学
tag: 
    - 高等数学
---


## 数列极限与连续

- 若$\lim{f(x)}$存在，$\lim{g(x)}$不存在，则$\lim{[f(x)}\pm{g(x)}]$必不存在.
- 若$\lim{f(x)}$不存在，$\lim{g(x)}$不存在，则$\lim{[f(x)}\pm{g(x)}]$不一定存在.
- 若$\lim{f(x)}=A\not=0$，$\lim{f(x)g(x)}=A\lim{g(x)}$，即乘除法中非零因子可以先提出.


- 泰勒展开式中，当$x\rightarrow 0$时，可进行等价无穷小替换，消去高阶无穷小.

$$
\sin x = x -\frac{x^3}{6} + ...,-\infty<x<+\infty
$$
$$
\arcsin x = x+\frac{x^3}{6}+...
$$
$$
\cos x =1-\frac{x^2}{2}+\frac{x^4}{24}+...,-\infty<x<+\infty
$$
$$
\tan x=x+\frac{x^3}{3}+...
$$
$$
\arctan x=x-\frac{x^3}{3}+...
$$
$$
\ln(1+x) =x-\frac{x^2}{2}+\frac{x^3}{3}+...,-1<x\le1
$$
$$
e^x=1+x+\frac{x^2}{2!}+\frac{x^3}{3!}+...,-\infty<x<+\infty
$$
$$
(1+x)^a=1+ax+\frac{a(a-1)}{2!}x^2+...,
\begin{cases}x\in(-1,1),a\le1\\
x \in (1,1],-1<a<0\\
x \in [-1,1],a>0,a\notin \rm{N}_+\\
x \in \rm{R},a\in \rm{N}_+
\end{cases}
$$
$$
\frac{1}{1-x}=1+x+x^2+x^3...,-1<x<1
$$
$$
\frac{1}{1+x}=1-x+x^2-x^3...,-1<x<1
$$

- 可去间断点和跳跃间断点统称为第一类间断点（左右极限都存在）.
- 无穷间断点和震荡间断点统称为第二类间断点（左右极限中有不存在）.

## 数列极限

- 等比数列前$n$项的和$S_n=\begin{cases} na_1 &r=1\\ \cfrac{a_1(1-r^n)}{1-r} & r\not=1\end{cases}$.
- $\sqrt{ab} \le {\cfrac{a+b}{2}} \le\sqrt{\cfrac{a^2+b^2}{2}},(a,b\ge0)$.
- 当$0<x<\cfrac{\pi}{4}$时，$x<\tan x<\cfrac{4}{\pi}x$.
- 当$0<x<\cfrac{\pi}{2}$，$\sin x>\cfrac{2}{\pi}x$.

## 一元函数微分学

- 若$f(x)$是可导的偶函数，则$f'(x)$是奇函数.
- 若$f(x)$是可导的奇函数，则$f'(x)$是偶函数.
- 若$f(x)$是可导的周期为$T$的周期函数，则$f'(x)$是以周期为$T$的周期函数.

::: info 墙外抢救

- $f(x)=(x+1)(x-1)|(x+1)(x-1)(x-2)|$，判断不可导点.

    - 让绝对值内的值等于0，求出对应的点，再计算绝对值外值等于0的点，若有重合则不属于不可导点，此点被抢救.

    - 绝对值内$f(x)$为0的点：$x=-1$，$x=1$，$x=2$，在绝对值外$f(x)$为0的点$x=-1$，$x=1$，存在重合的$x=-1$，$x=1$，因此不可导点只有一个$x=2$.
:::   

- 基本求导公式

$$
\sin'x=\cos x
$$
$$
\cos'x=-\sin x
$$
$$
\tan'x=\sec^2x
$$
$$
\cot'x=-\csc^2x
$$
$$
\arcsin'x=\frac{1}{\sqrt{1-x^2}}
$$
$$
\arccos'x=-\frac{1}{\sqrt{1-x^2}}
$$
$$
\arctan'x=\frac{1}{1+x^2}
$$
$$
\sec'x=\sec x\cdot{\tan x}
$$
$$
\csc'x=-\csc x\cdot{\cot x}
$$
$$
\ln'(x+\sqrt{x^2+1})=\frac{1}{\sqrt{x^2+1}}
$$
$$
\ln'(x+\sqrt{x^2-1})=\frac{1}{\sqrt{x^2-1}}
$$

- 反函数的导数
    - 设$y=f(x)$为单调，可导函数，且$f'(x)\not=0$，则存在反函数$x=\varphi(y)$，且$\cfrac{dx}{dy}=\cfrac{1}{\cfrac{dy}{dx}}$，即$\varphi'(y)=\cfrac{1}{f'(x)}$.
    - 记$f'(x)=y'_x$，$\varphi'(y)=x'_y$，则

$$
y''_{xx}=-\frac{x''_{yy}}{(x'_y)^3}
$$


- 参数方程确定的函数的导数
    - 设函数$y=y(x)$由参数方程为$\begin{cases}x=\varphi(t)\\y=\psi(t) \end{cases}$确定，$t$是参数，$\varphi(t)$，$\psi(t)$均可导，$\varphi'(x)\not=0$则

$$
\frac{dy}{dx}=\cfrac{\frac{dy}{dt}}{\frac{dx}{dt}}=\frac{\psi'(t)}{\varphi'(t)}
$$

- 若$\varphi$，$\psi$二阶均可导，$\varphi'(x)\not=0$则

$$
\frac{d^2y}{dx^2}=
\frac{d(\cfrac{dy}{dx})/dt}{dx/dt}=
\frac{\psi''(t)\varphi'(t)-\psi'(t)\varphi''(t)}{[\varphi'(t)]^3}
$$

- 莱布尼茨公式
    - 设$u=u(x)$，$v=v(x)$均$n$阶导，则

$$
(uv)^{(n)}=u^{(n)}v+C_n^1u^{(n-1)}v'+C_n^2u^{(n-2)}v''+...+C_n^{n-1}u'v^{(n-1)}+uv^{(n)}
$$

- 曲率公式
$$
K=\frac{|y''|}{(1+y'^2)^\frac{3}{2}}
$$

## 一元函数微分学应用-几何应用

- 设函数$f(x)$二阶可导，在$x=x_0$处取得最大值，则有$f''(x_0)\le0$.
- 二阶可导点是拐点的必要条件：设$f''(x_0)$存在，且点$(x_0,f(x_0))$为曲线的拐点，则$f''(x_0)=0$.
- 二阶可导点是拐点的充分条件
    - 在某点去心领域内二阶导数存在，在该点的左右两边$f''(x_0)$变号，则为拐点.
    - $f(x)$在$x=x_0$的某邻域内三阶可导，$f''(x_0)=0$，$f'''(x_0)\not = 0$，则为拐点.
    - 设$f(x)$在$x_0$处$n$阶可导，且$f^{(m)}(x_0)=0(m=2,...,n-1)$，$f^{(n)}(x_0) \not = 0(n\ge3)$，则当$n$为奇数时，点$(x_0,f(x_0))$为曲线的拐点.
- 设多项式$f(x)=(x-a)^ng(x)(n>1)$，且$g(a) \not = 0$，则当$n$为偶数时，$x=a$是$f(x)$的极值点，则当$n$为奇数时，$x=a$是$f(x)$的拐点.
- 设多项式$f(x)=(x-a_1)^{n_1}(x-a_2)^{n_2}...(x-a_k)^{n_k}$，其中$n_i$是正整数，$a_i$是实数，且互不相等，记$k_1$为$n_i=1$的个数，$k_2$为$n_i>1$且$n_i$为偶数的个数，$k_3$为$n_i>1$且$n_i$为奇数个数，则极值点的个数为$k_1+2k_2+k_3-1$，拐点个数为$k_1+2k_2+3k_3-2$.
- 渐近线
    - 若$\lim_{x\to x_0^+}f(x)=\infty(或\lim_{x\to x_0^-}f(x)=\infty)$，则称为$x=x_0$是一条铅直渐近线.
    - 若$\lim_{x\to+\infty}f(x)= y_1$，则称为$y=y_1$是一条水平渐近线；若$\lim_{x\to-\infty}f(x)= y_2$，则称为$y=y_2$是一条水平渐近线；若$\lim_{x\to+\infty}f(x)=\lim_{x\to-\infty}f(x)= y_0$，则称为$y=y_0$是一条水平渐近线.
    - 若$\lim_{x\to +\infty}\cfrac{f(x)}{x}=a_1$，$\lim_{x\to +\infty}f(x)-a_1x=b_1$，则$y=a_1x+b_1$是曲线的一条斜渐近线.
    - 若$\lim_{x\to -\infty}\cfrac{f(x)}{x}=a_2$，$\lim_{x\to -\infty}f(x)-a_2x=b_2$，则$y=a_2x+b_2$是曲线的一条斜渐近线.
    - 若$\lim_{x\to +\infty}\cfrac{f(x)}{x}=\lim_{x\to -\infty}\cfrac{f(x)}{x}=a$，$\lim_{x\to +\infty}f(x)-ax=\lim_{x\to -\infty}f(x)-ax=b$，则$y=ax+b$是曲线的一条斜渐近线.

## 一元函数微分学应用-中值定理、微分等式和微分不等式

- 费马定理：设$f(x)$在点$x_0$处满足$\begin{cases}可导\\ 取极值 \end{cases}$，则$f'(x)=0$.
- 罗尔定理：设$f(x)$满足$\begin{cases}在[a,b] 上连续 \\ 在(a,b)上可导 \\f(a)=f(b) \end{cases}$，则存在$\xi \in(a,b)$，使得$f'(\xi)=0$.
- 设$f(x)$在$(a,b)$内可导，$\lim_{x\rightarrow a^+} {f(x)}=\lim_{x \to b^-}{f(x)}=A$，则在$(a,b)$内至少存在一点$\xi$，使$f'(\xi)=0$.
- 使用罗尔定理需要构造辅助函数$F(x)$.
    - 见到$f'(x)+f(x)\varphi' (x)$，令$F(x)=f(x)e^{\varphi(x)}$.
    - 见到 $f'(x)+f(x)$，令$F(x)=f(x)e^x$.
    - 见到$f'(x)-f(x)$，令$F(x)=f(x)e^{-x}$.
    - 见到$f'(x)+kf(x)$，令$F(x)=f(x)e^{kx}$.
    - $(uv)''=u''v+2u'v'+uv''$.
    - 见到$f(x)f'(x)$，令$F(x)=f^2(x)$.
    - 见到 $[f'(x)]^2+f(x)f''(x)$，令$F(x)=f(x)f'(x)$.
- 拉格朗日中值定理，函数在$(a,b)$上可导，在$[a,b]$上连续

$$
f(b)-f(a)=f'(\xi)(b-a),\xi\in(a,b)
$$

- 带拉格朗日余项的$n$阶泰勒公式

$$
f(x)=f(x_0)+f'(x_0)(x-x_0)+...+\frac{1}{n!}f^{(n)}(x-x_0)^n \\
+\frac{f^{(n+1)}(\xi)}{(n+1)!}(x-x_0)^{n+1}
$$

- 柯西中值定理，条件同上

$$
\frac{f(b)-f(a)}{g(b)-g(a)}=\frac{f'(\xi)}{g'(\eta)}
$$

- 若$f(x)$在区间$I$上$n$阶可导，且$f^{(n)}(x)\not= 0$，即$f^{(n)}(x) = 0$无实根，于是$f(x)=0$至多有$n$个实根.

## 一元函数积分学的性质与概念

- 连续函数$f(x)$必有原函数$F(x)$.
- 含有第一类间断点和无穷间断点的函数$f(x)$在包含该间断点的区间内必没有原函数$F(x)$，没有原函数，则不定积分不存在.
- 区间有限，函数有界，则定积分存在.
- 可积函数必有界，即若定积分$\int_{a}^{b}f(x)dx$存在，则$f(x)$在$[a,b]$上必有界.
- $\int_{a}^{b}dx=b-a=L$，其中$L$是$[a,b]$的长度.
- 无论$a,b,c$大小如何，总有

$$
\int_{a}^{b}f(x)dx=\int_{a}^{c}f(x)dx+\int_{c}^{b}f(x)dx
$$

- 设$k_1$，$k_2$为常数，则

$$
\int_{a}^{b}k_1f(x)\pm k_2g(x)dx=k_1\int_{a}^{b}f(x)dx\pm k_2\int_{a}^{b}g(x)dx
$$

- 设$f(x)$在$[a,b]$上连续，则在$[a,b]$上至少存在一点$\xi$，使得

$$
\int_{a}^{b}f(x)dx=f(\xi)(b-a)
$$

- 变限积分的性质
    - 函数$f(x)$在$I$上可积，则函数$F(x)=\int_{a}^{x}f(t)dt$在$I$上连续.
    - 函数$f(x)$在$I$上连续，则函数$F(x)=\int_{a}^{x}f(t)dt$在$I$上可导，且$F'(x)=f(x)$.
    - 若$x=x_0\in I$是$f(x)$唯一的可去间断点，则$F(x)=\int_{a}^{x}f(t)dt$在$x_{0}$处可导，且$F'(x_0)=\lim_{x\rightarrow x_{0}}f(x)$.
    - 若$x=x_{0}\in I$是$f(x)$唯一的跳跃间断点，则$F(x)=\int_{a}^{x}f(t)dt$在$x_{0}$处不可导，且

$$
\begin{cases}F'_-(x_0)=\lim_{x\rightarrow x_0^-}f(x), 
\\\\
F'_+(x_0)=\lim_{x\rightarrow x_0^+}f(x), \end{cases}
$$

- 两个重要结论

$$
\int_{0}^{1}\frac{1}{x^p}dx\begin{cases} \text{收敛},\:0<p<1 \\
发散,\:p \ge1\end{cases}
$$
$$
\int_{1}^{+\infty}\frac{1}{x^p}dx\begin{cases} 收敛,\:p>1\\
发散,\:p\le1\end{cases}
$$
$$
当(ax+b)>k>0时,\:\int_{1}^{+\infty}\frac{1}{(ax+b)^p}dx依然满足\begin{cases}收敛，p>1\\
发散，p\le1\end{cases}
$$

- 当$f(x)$为奇函数，且$\int_{-\infty}^{+\infty}f(x)dx$收敛时

$$
\int_{-\infty}^{+\infty}f(x)dx=2\int_{0}^{+\infty}f(x)dx
$$

- 当$f(x)$为偶函数，且$\int_{-\infty}^{+\infty}f(x)dx$收敛时

$$
\int_{-\infty}^{+\infty}f(x)dx=0
$$

## 一元函数积分学的计算

- 基本积分公式，计算原函数记得加$C$

$$
\int a^xdx= \frac{a^x}{\ln a}+C
$$
$$
\int \tan x dx= -\ln |\cos x|+C
$$
$$
\int \cot x dx= \ln|\sin x| + C
$$
$$
\int \frac{1}{a^2+x^2}dx = \frac{1}{a}\arctan \frac{x}{a}+C(a>0)
$$
$$
\int \frac{1}{\sqrt{a^2-x^2}}dx = \arcsin\frac{x}{a}+C(a>0)
$$
$$
\int \sec xdx= \ln|\sec x +\tan x|+C
$$
$$
\int \csc dx= \ln|\csc x -\cot x|+C
$$
$$
\int \sec x \tan xdx= \sec x+C
$$
$$
\int \csc x \cot x dx = -\csc x+C
$$
$$
\int{\frac{1}{\sqrt{x^2+a^2}}}dx = \ln(x+\sqrt{x^2+a^2})+C
$$
$$
\int{\frac{1}{\sqrt{x^2-a^2}}}dx = \ln|x+\sqrt{x^2-a^2}|+C(|x|>|a|)
$$
$$
\int \frac{1}{x^2-a^2}dx = \frac{1}{2a}\ln{|\frac{x-a}{x+a}|}+C
$$
$$
\int \sqrt{a^2-x^2}dx = \frac{a^2}{2}\arcsin\frac{x}{a}+\frac{x}{2}\sqrt{a^2-x^2}+C
$$
$$
\int \tan^2xdx =\tan x -x +C
$$
$$
\int \cot^2xdx = -\cot x-x+C
$$
$$
\int \sec^2xdx = \tan x+C
$$

- 分部积分法，适用于对$\int vdu$积分较为容易的情景

$$
\int udv= uv - \int vdu\\
反 对 幂 三 指\\

u\leftarrow   \rightarrow v
$$

:::info 表格法求不定积分

求$\int(x^2+x)e^xdx$

作两行表格，第一行写$u$(易于求导的变量)，第二行写$v$(易于求原函数的变量)

| - | - | - | - | - |
| :-: | :--: | :-: | :-: | :-: |
| $x^2+x$ | $2x+1$ | 2 | 0 | 求导 |
| $e^x$ | $e^x$ | $e^x$ | $e^x$ | 求原函数 |

从第一列开始，与右下角项进行相乘，采用加减交替的形式算总和。
$$
\int(x^2+x)e^xdx\\
=(x^2+x)e^x-(2x+1)e^x+2e^x+C
$$
:::

- 有理函数的积分
    - 将式子因式分解，拆成若干项最简有理分式之和

:::info 有理函数积分的计算

$$
\int\frac{4x^2-6x-1}{(x+1)(2x-1)^2}dx
$$
- 先将被积函数分解为最简有理分式之和
$$
\frac{4x^2-6x-1}{(x+1)(2x-1)^2}
$$
$$
=\frac{A}{x+1}+\frac{B}{2x-1}+\frac{C}{(2x-1)^2}
$$

- 将右边进行合并
$$
4x^2-6x-1\equiv(4A+2B)x^2 + (-4A+B+C)x + (A-B+C)
$$
- 由于系数相同，因此
$$
A=1，B=0，C=-2
$$
$$
\int\frac{4x^2-6x-1}{(x+1)(2x-1)^2}dx=
$$
$$
\frac{1}{x+1}-\frac{2}{(2x-1)^2}
$$
- 最后求积分
:::                              

- 定积分的区间再现公式，令$x=a+b-t$可证

$$
\int_{a}^{b}f(x)dx =\int_{a}^{b}f(a+b-x)dx
$$

- 点火公式

$$
\int_{0}^{\frac{\pi}{2}}\sin^8x dx=\frac{7}{8} \cdot \frac{5}{6} \cdot \frac{3}{4} \cdot \frac{1}{2} \cdot \frac{\pi}{2},\:n为偶数\\
$$
$$
\int_{0}^{\frac{\pi}{2}}\sin^9x dx=\frac{8}{9} \cdot \frac{6}{7} \cdot \frac{4}{5} \cdot \frac{2}{3} \cdot 1,\:n为奇数
$$

-  使用换元法，遇到根号，需要注意开根号之后的正负问题，最后求得原函数记得换回去，下例根号内的值一定为正值，在换元之后，上下限发生变化，$|\sin t|$是正值，则$|\sin t|=-\sin t$

$$
\int_{0}^{1}\arcsin\sqrt{1-x^2}dx \xrightarrow{x=\cos t} 
\int_{-\frac{\pi}{2}}^{0}\arcsin(-\sin t)\cdot (-\sin t)dt=1\\
$$

- 设$f(x)$在$[0,1]$上连续，则

$$
\int_0^\pi xf(\sin x)dx = \frac{\pi}{2}\int_0^\pi f(\sin x)dx
$$

- 变限积分的求导

$$
F'(x)=\frac{d}{dx}[\int_{\varphi_1(x)}^{\varphi_2(x)}f(t)dt]\\
=f[\varphi_2(x)]\varphi_2'(x)-f[\varphi_1(x)]\varphi_1'(x)
$$

- 变限积分重要结论
    - $f(x)$为可积的奇函数$\Rightarrow\begin{cases}\int_0^xf(t)dt、\int_0^xf(t)dt+C皆为偶函数\\ \int_a^xf(t)dt为偶函数(a \not = 0)\end{cases}$.
    - $f(x)$为可积的偶函数$\Rightarrow\begin{cases}\int_0^xf(t)dt为奇函数\\ \int_a^xf(t)(a\not = 0)\begin{cases} 若 \int_a^xf(t)dt = \int_0^xf(t)dt，为奇函数 \\ 若\int_a^xf(t)dt \not = \int_0^xf(t)dt，为非奇非偶函数\end{cases}\end{cases}$.
    - $f(x)$是可积且以T为周期的周期函数，则$\int_0^xf(t)dt$是以$T$为周期的周期函数$\Leftrightarrow \int_0^Tf(x)dx=0$.
    - 连续的奇函数的一切原函数都是偶函数,连续的偶函数的原函数中只有一个原函数为奇函数.


- 反常积分计算时，注意识别奇点（端点，内部）
    - 例如$\int_0^2f(x)dx$的奇点为x=1，则应该拆分为$\int_0^1f(x)dx+\int_1^2f(x)dx$.
    - 奇点处的值一般使用极限求得，分别对应奇点处的左极限和右极限.
- $\Gamma$函数

$$
\Gamma(a)=\int_0^{+\infty}x^{a-1}e^{-x}dx \xrightarrow{x=t^2}2\int_0^{+\infty}t^{2a-1}e^{-t^2}dt
$$
$$
\Gamma(n+1)=n!
$$
$$
\Gamma(\frac{5}{2})=\frac{3}{2}\cdot\frac{1}{2}\cdot \Gamma(\frac{1}{2})
$$
$$
\Gamma(\frac{1}{2})=\frac{3}{4}\sqrt{\pi}
$$

## 一元函数积分学的几何应用

- 曲线$r=r_1(\theta)$与$r=r_2(\theta)$与两射线$\theta=\alpha$与$\theta=\beta(0<\beta-\alpha\le2\pi)$围成的扇形面积

$$
S=\frac{1}{2}\int_{\alpha}^{\beta}|r_1^2(\theta)-r_2^2(\theta)|d\theta 
$$
$$
S=\frac{1}{2}\int_{开始角度}^{结束角度}|外圈^2-内圈^2|d\theta 
$$

- 曲线$y=y(x)$与$x=a$，$x=b(a < b)$及$x$轴围成的曲边梯形绕$x$轴旋转一周所得到的旋转体体积，其中$dx$为柱形的高，$\pi y^2(x)$为柱形的截面积.

$$
V_x=\int_a^b\pi y^2(x)dx
$$

- 曲线$y=y(x)$与$x=a$，$x=b(0\le a < b)$及$x$轴围成的曲边梯形绕$y$轴旋转一周所得到的旋转体体积，其中$2\pi x$近似为圆柱壳的截面周长，$|y(x)|dx$为圆柱壳的竖截面长方形面积.

$$
V_y=2\pi \int_a^bx|y(x)|dx\\
$$

- 曲线$L:y=f(x)$，$a\le x\le b$，绕$Ax+By+C = 0$旋转一周所得的旋转体体积，$d$是点到直线的距离，公式同样适用于绕$x,y$轴旋转体体积.

$$
V=2\pi\int\int d dxdy
$$
$$
d=\frac{|Ax+By+C|}{\sqrt{A_2+B_2}}
$$

- 古尔金定理：旋转体的体积等于截面积乘以截面积的形心绕直线旋转得到的周长，$d$是形心到直线的距离，$s$是截面积.

$$
V=2\pi d s
$$

- 设$x\in[a,b]$，函数$f(x)$在$[a,b]$上的平均值为

$$
\overline{y}=\frac{1}{b-a}\int_{a}^{b}y(x)dx
$$

- 设平面$D=\{(x,y)|0\le y\le f(x),a\le x\le b \}$，则形心坐标

$$
\overline{x}=\frac{\int_a^bxf(x)dx}{\int_a^bf(x)dx}
$$

$$
\overline y=\frac{\frac{1}{2}\int_a^bf^2(x)dx}{\int_a^bf(x)dx}
$$

- 若平面光滑曲线由直接坐标方程$y=y(x)$给出，则弧长

$$
s=\int_a^b\sqrt{1+[y'(x)]^2}dx
$$

- 若平面光滑曲线由参数方程$\begin{cases}x=x(t)\\ y=y(t) \end{cases}$给出，则弧长

$$
s=\int_\alpha^\beta \sqrt{[x'(t)]^2+[y'(t)]^2}dt
$$

- 若平面光滑曲线由极值坐标方程$r=r(\theta)(\alpha\le\theta\le\beta)$给出，则弧长

$$
s=\int_\alpha^\beta\sqrt{[r(\theta)]^2+[r'(\theta)]^2}d\theta
$$

- 曲线$L:y=f(x)$，$a\le x\le b$，绕$x$轴旋转一周所得的曲面面积，即$2\pi \int_a^b |y|sdx$.

$$
S=2\pi\int_a^b|y|\sqrt{1+(y')^2}dx
$$

- 曲线$L:\begin{cases}x=x(t)\\ y=y(t) \end{cases}\alpha\le t\le \beta$，$x'(t)\not = 0$，绕$x$轴旋转一周所得的曲面面积

$$
S=2\pi\int_\alpha^\beta|y(t)|\sqrt{(x'_t)^2+(y'_t)^2}dt
$$

- 曲线$L:r=r(\theta)$，$\alpha\le \theta \le \beta$，绕$x$轴旋转一周所得的曲面面积

$$
S=2\pi\int_\alpha^\beta|r(\theta)|\sin \theta\sqrt{r^2(\theta)+[r'^(\theta)]^2}d\theta
$$

## 一元函数积分学-积分等式和积分不等式$

- 积分等式中用中值定理

$$
\int_a^bf(x)g(x)dx=f(\xi)\int_a^bg(x)dx
$$

- 设$f(x)$在$[0,1]$上连续，则

$$
\lim_{n\rightarrow \infty}\int_0^1x^nf(x)dx=0
$$

- 不等式证明中遇到条件$f(x)$在$[a,b]$上连续的条件，一般使用单调性证明.
- 不等式证明中遇到条件$f(x)$一阶可导，且在某一个端点处值较为简单的情况下使用拉格朗日中值定理.
- 不等式证明中遇到条件$f(x)$二阶可导，且题目中具有较为简单的函数值的情况下使用泰勒展开式.

## 一元函数积分学-物理应用

- 变力沿直线做功，设力为$F(x)$，则沿着$a$到$b$做功为

$$
W=\int_a^bF(x)dx
$$

- 抽水做功，设$\rho$为水的密度，$g$为重力加速度，则将容器中的水全部抽出做功，$a$是坐标轴低位，$b$是坐标轴高位，其中微元$dW=\rho g xA(x)dx$为位于$x$处的厚度$dx$，水平截面积 $A(x)$的水被抽出（路程为$x$）的做功.

$$
W=\rho g\int_a^bxA(x)dx
$$

- 静水压力，垂直浸在水中的平板的一侧受到的压力，$a$是坐标轴低位，$b$是坐标轴高位，其中压力微元$dP=\rho gx[f(x)-h(x)]dx$，即侧面中的一个横矩形条受到的压力，$x$表示水深，$f(x)-h(x)$是矩形条的宽度，$dx$是矩形条的高度.

$$
P=\rho g\int_a^bx[f(x)-h(x)]dx
$$

## 多元函数微分学

- 若下列极限等于0，则$z=f(x,y)$在点$(x_0,y_0)$处可微，否则不可微，其中$\Delta z$是全增量，$A$和$B$分别是$x$的偏微分、$y$的偏微分.

$$
\lim_{\Delta x_0\rightarrow0 ,\Delta y\rightarrow 0} \frac{\Delta z-(A\Delta x+B\Delta y)}{\sqrt{(\Delta x)^2+(\Delta y)^2}}
$$

- 链式求导规则，设$z=f(u,v)$，$u=\varphi(x,y)$，$v=\psi(x,y)$，则$z=f[\varphi(x,y),\psi(x,y)]$，且

$$
\frac{\partial z}{\partial x}=\frac{\partial z}{\partial u}\frac{\partial u}{\partial x}+\frac{\partial z}{\partial v}\frac{\partial v}{\partial x}
$$

$$
\frac{\partial z}{\partial y}=\frac{\partial z}{\partial u}\frac{\partial u}{\partial y}+\frac{\partial z}{\partial v}\frac{\partial v}{\partial y}
$$

- 全微分形式的不变性，设$z=f(u,v)$，$u=u(x,y)$，$v=v(x,y)$，如果$f(u,v)$，$u(x,y)$，$v(x,y)$，分别有连续偏导数，则复合函数$z=f(u,v)$在$(x,y)$处的全微分可以表示为

$$
dz=\frac{\partial z}{\partial u}du + \frac{\partial z}{\partial v}dv
$$

- 隐函数存在定理1，对于由方程$F(x,y)=0$确定的隐函数$y=f(x)$，当$F'_y(x,y)\not = 0$时，则有

$$
\frac{dy}{dx}=-\frac{F'_x(x,y)}{F'_y(x,y)}
$$

- 隐函数存在定理2，对于由方程$F(x,y,z)=0$确定的隐函数$z=f(x,y)$，当$F'(x,y,z)\not = 0$时，则有

$$
\frac{\partial z}{\partial x}=-\frac{F'_x(x,y,z)}{F'_z(x,y,z)},\:
\ \frac{\partial z}{\partial y}=-\frac{F'_y(x,y,z)}{F'_z(x,y,z)}
$$

- 二元函数取极值的必要条件，设$z=f(x,y)$在点$(x_0.y_0)$处一阶偏导数存在，且取极值，则$f'_x(x_0,y_0)=0$，$f'_y(x_0,y_0)=0$.
- 二元函数取极值的充分条件.

$$
记\begin{cases} 
f''_{xx}(x_0,y_0)=A,\\
f''_{xy}(x_0,y_0)=B,\\
f''_{yy}(x_0,y_0)=C,\\
\end{cases}
\:则\Delta=AC-B^2
\begin{cases}
>0\Rightarrow极值
\begin{cases}
A<0\Rightarrow极大值,\:\\
A>0\Rightarrow极小值,\:
\end{cases}\\
<0\Rightarrow非极值,\:\\
=0\Rightarrow 方法失效，寻找他法.
\end{cases}
$$

- 条件最值和拉格朗日乘数法，求目标函数$u=f(x,y,z)$在约束条件$\begin{cases}\varphi(x,y,z)=0\\\psi(x,y,z)=0 \end{cases}$的最值.
    - 构造辅助函数$F(x,y,z,\lambda,\mu)=f(x,y,z)+\lambda\varphi(x,y,z)+\mu\psi(x,y,z)$；
    - 令$\begin{cases}F'_x=f'_x+\lambda\varphi'_x+\mu\psi'_x=0,\\F'_y=f'_y+\lambda\varphi'_y+\mu\psi'_y=0,\\F'_z=f'_z+\lambda\psi'_z+\mu\psi'_z=0,\\F'_\lambda=\varphi(x,y,z)=0,\\F'_\mu=\psi(x,y,z)=0;\end{cases}$
    - 解上述方程，得到备选点$P_i,i=1,2,3,...,n$，并求$f(P_i)$，求得最大值和最小值.

## 二重积分

- 二重积分中值定理，设函数$f(x,y)$在有界闭区域$D$上连续，$A$为$D$的面积，则在$D$上存在一点$(\xi,\eta)$，使得（当原先的二重积分计算较为困难时使用中值定理）

$$
\iint \limits_{D}f(x,y)d \sigma=f(\xi,\eta)A
$$

- 若$D$包含了所有$f(x,y)>0$的区域，则以下二重积分可以取到最大值.

$$
max =\iint \limits_{D}f(x,y)d \sigma
$$

- 椭圆公式，其中长轴为$a$，短轴为$b$，椭圆面积为$S=\pi ab$.

$$
\frac{x^2}{a^2}+\frac{y^2}{b^2}=1
$$

- 普通对称性，设$D$关于$y$轴对称，则

$$
\iint \limits_D f(x,y)d\sigma=\begin{cases}
2\iint \limits_{D_1}f(x,y)\sigma,\:f(x,y)=f(-x,y) \\
0, f(x,y)=-f(-x,y)
\end{cases}
$$

- 轮换对称性，若在对换$x$,$y$之后，区域$D$的面积不变（或区域$D$关于$y=x$对称），则

$$
\iint \limits_Df(x,y)d\sigma = \iint \limits_Df(y,x)d\sigma = 
 \frac{1}{2}\iint \limits_Df(x,y)+f(y,x)d\sigma
$$

- 若$D_1$和$D_2$关于$y=x$轮换互对称，则

$$
\iint \limits_{D_1}f(x,y)d\sigma=\iint \limits_{D_2}f(y,x)d\sigma
$$

$$
=\frac{1}{2}[\iint \limits_{D_1}f(x,y)d\sigma+\iint \limits_{D_2}f(y,x)d\sigma]
$$

$$
=\frac{1}{2}\iint \limits_{D_1\cup D_2}f(x,y)d\sigma,\:当f(x,y)=f(y,x)时成立.
$$

