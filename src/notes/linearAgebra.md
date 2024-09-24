---
title: 线性代数
star: true
icon: page
order: 99
cover: /home/sky.jpg
category:
    - 线性代数
tag: 
    - 线性代数
---



## 行列式

### 行列式的性质

- 行列互换，其值不变，即$|A|=|A^T|$.

- 若行列式中某行（列）元素全为零，则行列式为零.
- 若行列式中某行（列）元素有公因子$k(k \not=0)$，则$k$可以提取到外面，即

$$
\begin{vmatrix}
a_{11} & a_{12} &{\cdots}&a_{1n}\\
{\vdots}&{\vdots}&&{\vdots}\\
ka_{i1}&ka_{i2}&{\cdots}&ka_{in}\\
{\vdots}&{\vdots}&&{\vdots}\\
a_{n1}&a_{n2}&{\cdots}&a_{nn}
\end{vmatrix}
=k
\begin{vmatrix}
a_{11} & a_{12} &{\cdots}&a_{1n}\\
{\vdots}&{\vdots}&&{\vdots}\\
a_{i1}&a_{i2}&{\cdots}&a_{in}\\
{\vdots}&{\vdots}&&{\vdots}\\
a_{n1}&a_{n2}&{\cdots}&a_{nn}
\end{vmatrix}.
$$

- 行列式中某行（列）元素均是两个元素之和，则可以拆成两个行列式之和，即

$$
\begin{vmatrix}
a_{11} & a_{12} &{\cdots}&a_{1n}\\
{\vdots}&{\vdots}&&{\vdots}\\
a_{i1}+b_{i1}&a_{i2}+b_{i2}&{\cdots}&a_{in}+b_{in}\\
{\vdots}&{\vdots}&&{\vdots}\\
a_{n1}&a_{n2}&{\cdots}&a_{nn}
\end{vmatrix}
=
$$

$$
\begin{vmatrix}
a_{11} & a_{12} &{\cdots}&a_{1n}\\
{\vdots}&{\vdots}&&{\vdots}\\
a_{i1}&a_{i2}&{\cdots}&a_{in}\\
{\vdots}&{\vdots}&&{\vdots}\\
a_{n1}&a_{n2}&{\cdots}&a_{nn}
\end{vmatrix}
+
\begin{vmatrix}
a_{11} & a_{12} &{\cdots}&a_{1n}\\
{\vdots}&{\vdots}&&{\vdots}\\
b_{i1}&b_{i2}&{\cdots}&b_{in}\\
{\vdots}&{\vdots}&&{\vdots}\\
a_{n1}&a_{n2}&{\cdots}&a_{nn}
\end{vmatrix}.
$$

- 行列式中的两行（列）互换，行列式变号.
- 行列式中两行（列）元素相等或对应成比例，行列式为零.
- 行列式中的某行（列）的$k$倍加到另外一行（列），行列式不变.

### 行列式的展开式

- 行列式中除去元素$a_{ij}$所在行和列剩余的$n-1$阶行列式称为$a_{ij}$的余子式.
- 余子式$M_{ij}$乘$-1^{i+j}$后称为$a_{ij}$的代数余子式，记作$A_{ij}$，即

$$
A_{ij}=(-1)^{i+j}M_{ij}.
$$

- 行列式等于行列式中的某行（列）元素分别乘其对应的代数余子式之后再求和.
- 行列式的某行（列）元素分别乘另一行（列）元素的代数余子式后求和，结果为零.

### 几个重要的行列式

- 主对角线行列式

$$
\begin{vmatrix}
a_{11} & 0 &\cdots  &  0\\
0     &a_{22}&\cdots & 0\\
{\vdots}&{\vdots}&&{\vdots}\\
0     &0&{\cdots}&a_{nn}
\end{vmatrix}
=
\begin{vmatrix}
a_{11} & a_{12} & \cdots& a_{1n} \\
0  &a_{22}&\cdots & a_{2n}\\
{\vdots}&{\vdots}&&{\vdots}\\
0  &0&{\cdots}&a_{nn}
\end{vmatrix}
=
\begin{vmatrix}
a_{11} & 0 &  \cdots &  0\\
a_{21}    &a_{22}&\cdots & 0\\
{\vdots}&{\vdots}&&{\vdots}\\
a_{n1} &a_{n2}&{\cdots}&a_{nn}
\end{vmatrix}
$$

$$
=\prod_{i=1}^na_{ii}.
$$

- 副对角线行列式，次方值为$1+2+3+\cdots+(n-1)$，即主对角线行列式和副对角线行列式转化过程：$主=(-1)^{\frac{n(n-1)}{2}}副$.

$$
\begin{vmatrix}
0 & \cdots &0& a_{1n}\\
0    &\cdots&a_{2,n-1}& 0\\
{\vdots}&&\vdots&{\vdots}\\
a_{n1}   &\cdots&0 &0
\end{vmatrix}


\begin{vmatrix}
0 & \cdots &0& a_{1n}\\
0    &\cdots&a_{2,n-1}& a_{2n}\\
{\vdots}&&\vdots&{\vdots}\\
a_{n1}   &\cdots&a_{n,n-1}  &a_{n,n} 
\end{vmatrix}
=
\begin{vmatrix}
a_{11} & a_{12} &\cdots  &  a_{1n}\\
a_{21}    &a_{22}&\cdots & 0\\
{\vdots}&{\vdots}&&{\vdots}\\
a_{n1}    &0&{\cdots}&0
\end{vmatrix}
$$

$$
=(-1)^{\frac{n(n-1)}{2}}a_{1n}a_{2,n-1}\cdots a_{n1}.
$$

- 拉普拉斯展开式，若$A$为$m$阶矩阵，$B$为$n$阶矩阵，则

$$
\begin{vmatrix}
A&O\\
O&B
\end{vmatrix}
=
\begin{vmatrix}
A&C\\
O&B
\end{vmatrix}
=
\begin{vmatrix}
A&O\\
C&B
\end{vmatrix}
=
|A||B|，
$$

$$
\begin{vmatrix}
O&A\\
B&O
\end{vmatrix}
=
\begin{vmatrix}
O&A\\
B&C
\end{vmatrix}
=
\begin{vmatrix}
C&A\\
A&O
\end{vmatrix}
=(-1)^{mn}
|A||B|.
$$

- 范德蒙德行列式，若每行（列）呈等比数列，且每行行（列）为$1$，则值从第二行看，将靠后的元素减去靠前的元素的全排列相乘.

$$
\begin{vmatrix}
1&1&1&1\\
a&b&c&d\\
a^2&b^2&c^2&d^2\\
a^3&b^3&c^3&d^3
\end{vmatrix}
=
\prod_{1\le i<j\le n}(x_j-x_i)
$$

$$
=(d-a)(d-b)(d-c)\\
\cdot(c-b)(c-a)\\
\cdot(b-a).
$$

### 抽象行列式的计算

- 将线性组合表示成矩阵乘积的形式.

$$
-\alpha_1+2\alpha_2-2\alpha_3=
\begin{bmatrix}
\alpha_1,\alpha_2,\alpha_3
\end{bmatrix}
\begin{bmatrix}
1\\
2\\
3\\
\end{bmatrix}
$$

### 余子式和代数余子式的线性组合计算

- 设代数余子式$A_{ij}$，则$A_{31}+A_{32}+A_{33}-A_{34}$就是将原行列式中的第三行置换为系数$[1,1,1,-1]$.

$$
A=\begin{vmatrix}
2&2&2&2\\
2&2&2&2\\
2&2&2&2\\
2&2&2&2\\
\end{vmatrix}，
A_{31}+A_{32}+A_{33}-A_{34}=
\begin{vmatrix}
2&2&2&2\\
2&2&2&2\\
1&1&1&-1\\
2&2&2&2\\
\end{vmatrix}.
$$

### 克拉默法则

- 对$n$个方程$n$个未知数的非齐次线性方程组
    $$
    \begin{cases}
    a_{11}x_1+a_{12}x_2+\cdots +a_{1n}x_n=b_1，\\
    a_{21}x_1+a_{22}x_2+\cdots +a_{2n}x_n=b_2，\\
    \cdots\\
    a_{n1}x_1+a_{n2}x_2+\cdots +a_{nn}x_n=b_n，
    \end{cases}
    $$
    若系数行列式$D\not = 0$，则方程有唯一解，且解为
    $$
    x_i=\cfrac{D_i}{D}，i=1，2，\cdots，n.
    $$
    式中，$D_i$是由常数项$b_1，b_2，\cdots，b_n$替换$D$中第$i$列元素得到的行列式，若$D=0$，则非齐次方程组无解或有无穷多解，反之也成立.

- 对$n$个方程$n$个未知数的齐次线性方程组
    $$
    \begin{cases}
    a_{11}x_1+a_{12}x_2+\cdots +a_{1n}x_n=0，\\
    a_{21}x_1+a_{22}x_2+\cdots +a_{2n}x_n=0，\\
    \cdots\\
    a_{n1}x_1+a_{n2}x_2+\cdots +a_{nn}x_n=0，
    \end{cases}
    $$
    若系数行列式$D\not = 0$，则方程仅有零解；若$D=0$，则齐次方程组有非零解，反之也成立.

## 矩阵

### 矩阵的定义以及基本运算

- 定义，由$m\times n$个数$a_{ij}$组成的矩形表格就是矩阵，记为$A$，若$m=n$，则$A$为方阵，若两个矩阵的行数和列数相同，则为同型矩阵.

- 基本运算

    - 相等：若两个矩阵为同型矩阵且元素相等则为相等矩阵.

    - 加法：两个矩阵是同型矩阵才能做加法，其中$c_{ij}=a_{ij}+b_{ij}$.
        $$
        C=A+B=(a_{ij})_{m\times n}+(b_{ij})_{m\times n}=(c_{ij})_{m\times n}
        $$

    - 数乘：一个数$k$乘以一个矩阵$A$的结果称为数乘矩阵，即
        $$
        kA=Ak=
        \begin{bmatrix}
        a_{11} & a_{12} & \cdots& a_{1n} \\
        a_{21} & a_{22} & \cdots& a_{2n} \\
        \vdots&\vdots&&\vdots\\
        a_{n1} & a_{n2} & \cdots& a_{nn} \\
        \end{bmatrix}
        =
        (ka_{ij})_{m\times n}
        $$
        即每一个元素都乘$k$.

    - 乘法：即矩阵$A$的行乘矩阵$B$的列，得到的值之和
        $$
        c_{ij}=\sum_{k=1}^{s}a_{ik}b_{kj}.
        $$
        矩阵的乘法一般不满足交换律，即$AB\not = BA$.

    - 转置矩阵，将矩阵$A$行列互换得到的矩阵称为转置矩阵，记$A^T$.

        \spadesuit 转置矩阵满足：
        $$
        (A^T)^T=A；(kA)^T=kA^T；
        \\(A+B)^T=A^T+B^T；(AB)^T=B^TA^T（穿脱原则）；
        $$



      
        
