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
    - 若系数行列式$D\not = 0$，则方程有唯一解，且解为
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
    - 若系数行列式$D\not = 0$，则方程仅有零解；若$D=0$，则齐次方程组有非零解，反之也成立.

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
      
        矩阵乘法不满足交换律.
      
        $$
          (A+B)^2=(A+B)(A+B)=A^2+AB+BA+B^2 \not = A^2+2AB+B^2，
        $$
        $$
          (A-B)^2=(A-B)(A-B)=A^2-AB-BA+B^2 \not = A^2-2AB+B^2，
        $$
        $$
          (A+B)(A-B)=A^2+BA-AB-B^2\not = A^2-B^2，
        $$
        $$
          (AB)^m=(AB)(AB)\cdots (AB)\not = A^mA^N.
        $$
      
        若$f(x)=a_0+a_1x+\cdots+a_mx^m$，则
      
        $$
          f(A)=a_0E+a_1A+\cdots +a_mA^m.
        $$

    - 转置矩阵，将矩阵$A$行列互换得到的矩阵称为转置矩阵，记$A^T$.

        转置矩阵满足：
    
        $$
        (A^T)^T=A；
        $$
        (kA)^T=kA^T；
        $$
        
        $$
        (A+B)^T=A^T+B^T；
        $$
        
        $$
        (AB)^T=B^TA^T（穿脱原则）；
        $$
    
    - 方阵的行列式
    
        当使用$n$阶方阵$A$计算行列式时，记$|A|$.
        $$
        |A+B|\not = |A|+|B|；\\
        A\not = O \not \Rightarrow |A|\not = 0；\\
        A\not = B \not \Rightarrow |A|\not = |B|；
        |A^T|=|A|；
        $$
        设$A$，$B$是同阶方阵，则$|AB|=|A||B|$.
    
    - 几种重要矩阵
    
        - 单位矩阵：主对角线元素均为$1$，其余全为$0$的方阵称为单位矩阵，记$E$，单位矩阵能与任何同阶矩阵进行交换.
    
        - 对称矩阵：$A^T=A$.
    
        - 反对称矩阵：$A^T=-A\Leftrightarrow\begin{cases}a_{ij}=-a_{ij}，i\not= j\\a_{ii}=0. \end{cases}$
    
    - 分块矩阵的运算
        $$
        \begin{bmatrix}
        A_1&A_2\\
        A_3&A_4\\
        \end{bmatrix}
        +
        \begin{bmatrix}
        B_1&B_2\\
        B_3&B_4\\
        \end{bmatrix}
        =
        \begin{bmatrix}
        A_1+B_1&A_2+B_2\\
        A_3+B_3&A_4+B_4\\
        \end{bmatrix}
        $$
    
        $$
        k\begin{bmatrix}
        A&B\\
        C&D\\
        \end{bmatrix}
        =
        k\begin{bmatrix}
        kA&kB\\
        kC&kD\\
        \end{bmatrix}
        $$
    
        $$
        \begin{bmatrix}
        A&B\\
        C&D\\
        \end{bmatrix}
        \begin{bmatrix}
        X&Y\\
        Z&W\\
        \end{bmatrix}
        =
        \begin{bmatrix}
        AX+BZ&AY+BW\\
        CX+DZ&CY+DW\\
        \end{bmatrix}
        $$
    
        $$
        \begin{bmatrix}
        A&O\\
        O&B\\
        \end{bmatrix}^n
        =
        \begin{bmatrix}
        A^n&O\\
        O&B^n\\
        \end{bmatrix}
        $$

### 矩阵的逆

- 逆矩阵的定义

    - $A$，$B$是$n$阶方阵，$E$是$n$阶单位矩阵，若$AB=BA=E$，则称$A$是可逆矩阵，$B$是$A$的逆矩阵，且唯一，记为$A^{-1}$.

    - 矩阵可逆的充分必要条件是$|A|\not = 0$.

- 重要公式，若$A$，$B$是同阶可逆矩阵.
    $$
    (A^{-1})^{-1}=A；
    $$
    $$
    (kA)^{-1}=\frac{1}{k}A^{-1}，k\not = 0；
    $$
    $$
    AB也可逆，且(AB)^{-1}=B^{-1}A^{-1}；
    $$
    $$
    A^T也可逆，且(A^T)^{-1}=(A^{-1})^T；
    $$
    $$
    |A^{-1}|=|A|^{-1}，
    $$

    $$
    |kA|=k^n|A|.
    $$
    
- 逆矩阵的求法

    - 求一个矩阵$B$，使得$AB=E$，则$A$可逆，且$A^{-1}=B$.

    - 求两个可逆矩阵$B$，$C$，使得$A=BC$，则$A$也可逆.

    - 分块矩阵的逆，主对角矩阵中，主对角元素不交换位置，副对角元素交换位置；副对角矩阵中，所有元素都交换位置.
        $$
        \begin{bmatrix}
        A&\\
        &B
        \end{bmatrix}^{-1}
        =
        \begin{bmatrix}
        A^{-1}&\\
        &B^{-1}
        \end{bmatrix}，主对角直接逆；
        $$

        $$
        \begin{bmatrix}
        &A\\
        B&
        \end{bmatrix}^{-1}
        =
        \begin{bmatrix}
        &&B^{-1}\\
        A^{-1}&
        \end{bmatrix}，副对角交换之后再逆；
        $$

        $$
        \begin{bmatrix}
        A&C\\
        &B
        \end{bmatrix}^{-1}
        =
        \begin{bmatrix}
        A^{-1}&-A^{-1}CB^{-1}\\
        &B^{-1}
        \end{bmatrix}
        ，左乘同行，右乘同列，添负号；
        $$
        
        $$
        \begin{bmatrix}
        A&\\
        C&B
        \end{bmatrix}^{-1}
        =
        \begin{bmatrix}
        A^{-1}&\\
        -B^{-1}CA^{-1}&B^{-1}
        \end{bmatrix}，左乘同行，右乘同列，添负号；
        $$

        $$
        \begin{bmatrix}
        &A\\
        C&B
        \end{bmatrix}^{-1}
        =
        \begin{bmatrix}
        -C^{-1}B^{-1}A^{-1}&C^{-1} \\
        A ^{-1}&
        \end{bmatrix}，左乘同行，右乘同列，添负号；
        $$
        
        $$
        \begin{bmatrix}
        B&A\\
        C&
        \end{bmatrix}^{-1}
        =
        \begin{bmatrix}
        &C^{-1} \\
        A ^{-1}&-A^{-1}BC^{-1}
        \end{bmatrix}，左乘同行，右乘同列，添负号.
        $$


    ​    

### 伴随矩阵

- 定义，将行列式$|A|$的代数余子式进行如下排列，形成的矩阵称为$A$的伴随矩阵，$A_{ij}$在$A*$中的位置：$A$的第$i$行元素在$A^*$的第$i$列上.
    $$
    A^*=\begin{bmatrix}
    A_{11}&A_{21}&\cdots &A_{n1}\\
    A_{12}&A_{22}&\cdots &A_{n2}\\
    \vdots&\vdots&&\vdots\\
    A_{1n}&A_{2n}&\cdots &A_{nn}\\
    \end{bmatrix}
    $$

- 重要公式
    $$
    AA^*=A^*A=|A|E；
    $$
    $$
    |A^*|=|A|^{n-1}；
    $$
    $$
    (A^T)^*=(A^*)^T，(A^{-1})^*=(A^*)^{-1}，(AB)^*=B^*A^*，(A^*)^*=|A|^{n-2}A.
    $$

    - 当$|A|\not = 0$（可逆）时有

    $$
    A^*=|A|A^{-1}，A^{-1}=\frac{1}{|A|}A^*，A=|A|(A^*)^{-1}.
    $$

- 用伴随矩阵求可逆矩阵的逆矩阵
    $$
    A^{-1}=\frac{1}{|A|}A^*=\frac{1}{|A|}\begin{bmatrix}
    A_{11}&A_{21}&\cdots &A_{n1}\\
    A_{12}&A_{22}&\cdots &A_{n2}\\
    \vdots&\vdots&&\vdots\\
    A_{1n}&A_{2n}&\cdots &A_{nn}\\
    \end{bmatrix}
    $$

    - 对于二阶矩阵求$A^*$， 主对角对调，副对角变号，因此对于二阶矩阵有$(A^*)^*=A$.


#### 初等变换与初等矩阵

- 初等变换：倍乘，互换，倍加.

- 初等矩阵：经过初等变换得到的矩阵.

- 初等矩阵的性质和公式

    - 初等矩阵的转置仍然是初等矩阵.

    - $E_i(k)$表示单位矩阵第$i$行乘以非零常数得到的初等矩阵.

    - $E_{ij}$表示单位矩阵交换第$i$，$j$行得到的初等矩阵.

    - $E_{ij}(k)$表示单位矩阵第$j$行的$k$倍加到第$i$行（或是第$j$列的$k$倍添加到第$i$行）所得到的初等矩阵.

    - 初等矩阵都是可逆矩阵，且
        $$
        [E_i(k)]^{-1}=E_i(\cfrac{1}{k})，\\
        E_{ij}^{-1}=E_{ij}，\\
        [E_{ij}(k)]^{-1}=E_{ij}(-k).
        $$

    - 可逆矩阵可以表示成有限个初等矩阵的乘积.

    - 对矩阵进行初等行变换，等于对矩阵左乘相应的初等矩阵；同样对矩阵进行列初等变换，等于对矩阵进行右乘相应的初等矩阵.

- 用初等变换求逆矩阵
    $$
    \begin{bmatrix}
    A&\vdots&E
    \end{bmatrix}{初等列变换}\xrightarrow{初等行变换}
    \begin{bmatrix}
    E&\vdots&A
    \end{bmatrix}
    $$

    $$
    \begin{bmatrix}
    A\\
    E
    \end{bmatrix}{初等列变换}
    \begin{bmatrix}
    E\\
    A^{-1}
    \end{bmatrix}
    $$

    

