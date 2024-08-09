---
title: 高等数学
icon: page
cover: /home/sky.jpg
---

## 高等数学

### 数列极限与连续

- 若$\lim{f(x)}$存在，$\lim{g(x)}$不存在，则$\lim{[f(x)}\pm{g(x)}]$必不存在.
- 若$\lim{f(x)}$不存在，$\lim{g(x)}$不存在，则$\lim{[f(x)}\pm{g(x)}]$不一定存在.
- 若$\lim{f(x)}=A\not=0$，$\lim{f(x)g(x)}=A\lim{g(x)}$，即乘除法中非零因子可以先提出.



- 泰勒公式

$$
\sin x = x -\frac{x^3}{6} + o(x^3)
$$
$$
\arcsin x = x+\frac{x^3}{6}+o(x^3)
$$
$$
\cos x =1-\frac{x^2}{2}+\frac{x^4}{24}+o(x^4)
$$
$$
\tan x=x+\frac{x^3}{3}+o(x^3)
$$
$$
\arctan x=x-\frac{x^3}{3}+o(x^3)
$$
$$
\ln(1+x) =x-\frac{x^2}{2}+\frac{x^3}{3}+o(x^3)
$$
$$
e ^x=1+x+\frac{x^2}{2!}+\frac{x^3}{3!}+o(x^3)
$$
$$
(1+x)^a=1+ax+\frac{a(a-1)}{2!}x^2+o(x^2)
$$
$$
\frac{1}{1-x}=1+x+x^2+x^3...
$$
$$
\frac{1}{1+x}=1-x+x^2-x^3...
$$

### 数列极限

- 等比数列前$n$项的和$S_n=\begin{cases} na_1 &r=1\\ \frac{a_1(1-r^n)}{1-r} & r\not=1\end{cases}$.
- $\sqrt{ab} \le {\frac{a+b}{2}} \le\sqrt{\frac{a^2+b^2}{2}},(a,b\ge0)$.

### 一元函数微分学

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
\sin'x=cosx
$$
$$
\cos'x=-sinx
$$
$$
\tan'x=sec^2x
$$
$$
\cot'x=-csc^2x
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
\sec'x=secx\cdot{tanx}
$$
$$
\cot'x=-cscx\cdot{cotx}
$$
$$
\ln'(x+\sqrt{x^2+1})=\frac{1}{\sqrt{x^2+1}}
$$
$$
\ln'(x+\sqrt{x^2-1})=\frac{1}{\sqrt{x^2-1}}
$$

- 反函数的导数
    - 设$y=f(x)$为单调，可导函数，且$f'(x)\not=0$，则存在反函数$x=\varphi(y)$，且$\frac{dx}{dy}=\frac{1}{\frac{dy}{dx}}$，即$\varphi'=\frac{1}{f'(x)}$.
    - 记$f'(x)=y'_x$，$\varphi'(y)=x'_y$，则

$$
y''_{xx}=-\frac{x'_{yy}}{(x'_y)^3}
$$



- 参数方程确定的函数的导数
    - 设函数$y=y(x)$由参数方程为$\begin{cases}x=\varphi(t)\\y=\psi(t) \end{cases}$确定，$t$是参数，$\varphi(t)$，$\psi(t)$均可导，$\varphi'(x)\not=0$则

$$
\frac{dy}{dx}=\frac{\frac{dy}{dt}}{\frac{dx}{dt}}=\frac{\psi'(t)}{\varphi'(t)}
$$

- 若$\varphi$，$\psi$二阶均可导，$\varphi'(x)\not=0$则

$$
\frac{d^2y}{dx^2}=
\frac{d(\frac{dy}{dx})/dt}{dx/dt}=
\frac{\psi''(t)\varphi'(t)-\psi'(t)\varphi''(t)}{[\varphi'(t)]^3}
$$

- 莱布尼茨公式
    - 设$u=u(x)$，$v=v(x)$均$n$阶导，则

$$
(uv)^{(n)}=u^{(n)}v+C_n^1u^{(n-1)}v'+C_n^2u^{(n-2)}v''+...+C_n^{n-1}u'v^{(n-1)}+uv^{(n)}
$$

### 一元函数微分学的应用-几何应用

- 设函数$f(x)$二阶可导，在$x=x_0$处取得最大值，则有$f''(x_0)\le0$.
- 二阶可导点是拐点的必要条件：设$f''(x_0)$存在，且点$(x_0,f(x_0))$为曲线的拐点，则$f''(x_0)=0$.
- 二阶可导点是拐点的充分条件
    - 在某点去心领域内二阶导数存在，在该点的左右两边$f''(x_0)$变号，则为拐点.
    - $f(x)$在$x=x_0$的某邻域内三阶可导，$f''(x_0)=0$，$f'''(x_0)\not = 0$，则为拐点.
    - 设$f(x)$在$x_0$处三阶导可导，且$f^{(m)}(x_0)=0(m=2,...,n-1)$，$f^{(n)}(x_0) \not = 0(n\ge3)$，则当$n$为奇数时，点$(x_0,f(x_0))$为曲线的拐点.

- 设多项式$f(x)=(x-a)^ng(x)(n>1)$，且$g(a) \not = 0$，则当$n$为偶数时，$x=a$是$f(x)$的极值点，则当$n$为奇数时，$x=a$是$f(x)$的拐点.
- 设多项式$f(x)=(x-a_1)^{n_1}(x-a_2)^{n_2}...(x-a_k)^{n_k}$，其中$n_i$是正整数，$a_i$是实数，且互不相等，记$k_1$为$n_i=1$的个数，$k_2$为$n_i>1$且$n_i$为偶数的个数，$k_3$为$n_i>1$且$n_i$为奇数个数，则极值点的个数为$k_1+2k_2+k_3-1$，拐点个数为$k_1+2k_2+3k_3-2$.

### 一元函数微分学应用-中值定理、微分等式和微分不等式
