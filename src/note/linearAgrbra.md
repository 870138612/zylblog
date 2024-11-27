---
title: 线性代数
star: true
icon: page
category:
    - 线性代数
tag: 
    - 线性代数
---



## 行列式

### 行列式的性质

- 行列互换，其值不变，即$|A|=|A^T|$.

- 若行列式中某行（列）元素全为$0$，则行列式为$0$.
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

- 范德蒙德行列式，若每行（列）呈等比数列，且每行（列）为$1$，则值从第二行看，将靠后的元素减去靠前的元素的全排列相乘.

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
-1\\
2\\
-2\\
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
        ka_{11} & ka_{12} & \cdots& ka_{1n} \\
        ka_{21} & ka_{22} & \cdots& ka_{2n} \\
        \vdots&\vdots&&\vdots\\
        ka_{n1} & ka_{n2} & \cdots& ka_{nn} \\
        \end{bmatrix}
        =
        (ka_{ij})_{m\times n}.
        $$
        即每一个元素都乘$k$.

    - 乘法：即矩阵$A$的行乘矩阵$B$的列，得到的值之和
      
        $$
        c_{ij}=\sum_{k=1}^{s}a_{ik}b_{kj}.
        $$
      
        矩阵乘法不满足交换律.

    - 转置矩阵，将矩阵$A$行列互换得到的矩阵称为转置矩阵，记$A^T$.

        转置矩阵满足：
        
        $$
        (A^T)^T=A；
        $$
      
        $$
        (kA)^T=kA^T；
        $$
        
        $$
        (A+B)^T=A^T+B^T.
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
        |A^T|=|A|.
        $$
        设$A$，$B$是同阶方阵，则$|AB|=|A||B|$.
    
    - 几种重要矩阵
    
        单位矩阵：主对角线元素均为$1$，其余全为$0$的方阵称为单位矩阵，记$E$，单位矩阵能与任何同阶矩阵进行交换.
    
        对称矩阵：$A^T=A$.
    
        反对称矩阵：$A^T=-A\Leftrightarrow\begin{cases}a_{ij}=-a_{ji}，i\not= j\\a_{ii}=0. \end{cases}$
    
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
        \begin{bmatrix}
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

    - 分块矩阵的逆，主对角三角矩阵中，主副对角元素不交换位置；副对角三角矩阵中，所有元素都交换位置.
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
        -C^{-1}BA^{-1}&C^{-1} \\
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

- 定义，将行列式$|A|$的代数余子式进行如下排列，形成的矩阵称为$A$的伴随矩阵，$A_{ij}$在$A^*$中的位置：$A$的第$i$行元素在$A^*$的第$i$列上.
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
    A_{1n}&A_{2n}&\cdots &A_{nn}
    \end{bmatrix}.
    $$

    - 对于二阶矩阵求$A^*$， 主对角对调，副对角变号，因此对于二阶矩阵有$(A^*)^*=A$.


### 初等变换与初等矩阵

- 初等变换：倍乘，互换，倍加.

- 初等矩阵：经过初等变换得到的矩阵.

- 初等矩阵的性质和公式

    - 初等矩阵的转置仍然是初等矩阵.

    - $E_i(k)$表示单位矩阵第$i$行乘以非零常数得到的初等矩阵.

    - $E_{ij}$表示单位矩阵交换第$i$，$j$行得到的初等矩阵.

    - $E_{ij}(k)$表示单位矩阵第$j$行的$k$倍加到第$i$行（或是第$j$列的$k$倍添加到第$i$列）所得到的初等矩阵.

    - 初等矩阵都是可逆矩阵，且
        $$
        [E_i(k)]^{-1}=E_i(\cfrac{1}{k})，\\
        E_{ij}^{-1}=E_{ij}，\\
        [E_{ij}(k)]^{-1}=E_{ij}(-k).
        $$

    - 可逆矩阵可以表示成有限个初等矩阵的乘积.

    - 对矩阵进行初等行变换，等于对矩阵左乘相应的初等矩阵；同样对矩阵进行列初等变换，等于对矩阵进行右乘相应的初等矩阵（左乘行变换，右乘列变换）.

- 用初等变换求逆矩阵
    $$
    \begin{bmatrix}
    A&\vdots&E
    \end{bmatrix}{初等列变换}\xrightarrow{初等行变换}
    \begin{bmatrix}
    E&\vdots&A^{-1}
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


### 等价矩阵和矩阵的等价标准型

- 设$A$，$B$是$m\times n$矩阵，若存在可逆矩阵$P_{n\times n}$，$Q_{m\times m}$，使得$PAQ=B$，则称$A$，$B$是等价矩阵，记作$A\cong B$.

- $A$是$m\times n$矩阵，则$A$等价于形如$\begin{bmatrix}E_r& O\\O&O \end{bmatrix}$的矩阵（$E_r$中的$r$恰是$r(A)$），后者称为$A$的等价标准型，等价标准型是唯一的，即若$r(A)=r$，则存在可逆矩阵$P$，$Q$使得
    $$
    PAQ=\begin{bmatrix}E_r&O\\O&O \end{bmatrix}.
    $$

### 矩阵的秩

- 设$A$是$m\times n$矩阵，若存在$k$阶子式不为$0$，而任意$k+1$阶子式全为$0$，则$r(A)=k$，且若$A$为$m\times n$矩阵，则
    $$
    r(A_{n\times n})=n \Leftrightarrow |A|\not = 0 \Leftrightarrow A可逆，即满秩则可逆.
    $$

- 使用初等变换将$A$变为行阶梯形矩阵，其非零行数即为秩.

- 设$A$是$m\times n$矩阵，$B$是满足有关矩阵运算要求的矩阵，则
    $$
    0\le r(A)\le\min \{m,n\}；\\
    r(kA)=r(A)(k\not = 0)；\\
    r(AB)\le \min\{r(A),r(B)\}；\\
    r(A+B)\le r(A)+r(B)；\\
    $$

    $$
    r(A^*)=\begin{cases}
    n，r(A)=n；\\
    1，r(A)=n-1，其中A为n(n\ge2)阶方阵；\\
    0，r(A)<n-1.
    \end{cases}\\
    $$

    $$
    设A是 m \times n 矩阵，P，Q分别是m阶、n阶矩阵，则\\
    r(A)=r(PA)=r(AQ)=r(PAQ)；
    $$

    $$
    若A_{m\times n}B_{n\times s}=O，则r(A)+r(B)\le n；
    $$

    $$
    r(A)=r(A^T)=r(A^TA)=r(AA^T).
    $$


## 向量组

### 向量组与向量组的线性相关性

- 向量的内积和正交

    - 内积

        设$\alpha =[a_1,a_2,\cdots,a_n]^T$，$\beta=[b_1,b_2,\cdots,b_n]^T$，则称
        $$
        \alpha ^T\beta =\sum_{i=1}^{n}a_ib_i
        $$
        为向量$\alpha，\beta$的内积，记作$(\alpha,\beta)$，即$\alpha ^T\beta$.

    - 正交
        $$
        \alpha^T\beta=0时，称向量\alpha，\beta是正交向量.
        $$

    - 模
        $$
        \begin{Vmatrix}
        a 
        \end{Vmatrix}
        =\sqrt{\sum_{i=1}^{n}a_i^2}
        $$
        称为$\alpha$的模（长度），当模为$1$，则称向量为单位向量.

    - 标准正交向量组
        $$
        \alpha_i^T\alpha_j=\begin{cases}
        0，i\not = j，\\
        1，i=j，
        \end{cases}\\
        $$
        则称$\alpha_1,\alpha_2,\cdots,\alpha_s$为标准或单位正交向量组，也叫规范正交基.
    
- 正交矩阵
  
    设$A$是$n$阶方阵，满足$A^TA=E$，则称$A$是正交矩阵.
    
    $A$是正交矩阵$\Leftrightarrow$$A^TA=E$$\Leftrightarrow$$A^T=A^{-1}$$\Leftrightarrow$$A$的行（列）向量组是规范正交基.

### 线性相关

- 线性相关

    对于$m$个$n$为维向量$a_1,a_2,\cdots,a_m$，若存在一组不全为$0$的数$k_1,k_2,\cdots,k_m$使得
    $$
    k_1a_1+k_2a_2+\cdots+k_ma_m=0，
    $$
    则称向量组$a_1,a_2,\cdots,a_m$线性相关.

    含有零向量或有成比例的向量的向量组必线性相关.

- 线性无关

    若不存在不全为$0$的数$k_1,k_2,\cdots,k_m$使得
    $$
    k_1a_1+k_2a_2+\cdots+k_ma_m=0，
    $$
    则称向量组$a_1,a_2,\cdots,a_m$线性无关，

    亦即只有当$k_1=k_2=\cdots=k_m=0$时，才有
    $$
    k_1a_1+k_2a_2+\cdots+k_ma_m=0，
    $$
    则称向量组$a_1,a_2,\cdots,a_m$线性无关.

    单个非零向量，两个不成比例的向量均线性无关.

- 向量组或线性相关或线性无关，两者必为其中一种状态.

- 判断线性相关性的七大定理

    - 向量组$a_1,a_2,\cdots,a_n(n\ge2)$线性相关的充要条件是向量组中至少有一个向量可以由其余的$n-1$个向量线性表示.

        其逆否命题：向量组$a_1,a_2,\cdots,a_n(n\ge2)$线性无关的充要条件是向量组$a_1,a_2,\cdots,a_n$中任一向量都不能由其余$n-1$个线性向量表示.

    - 若向量组$a_1,a_2,\cdots,a_n$线性无关，而$\beta,a_1,a_2,\cdots,a_n$线性相关，则$\beta$可由$a_1,a_2,\cdots,a_n$线性表示，且表示法唯一.

    - 如果向量组$\beta_1,\beta_2,\cdots,\beta_t$可由向量组$a_1,a_2,\cdots,a_s$线性表示，且$t\ge s$，则$\beta_1,\beta_2,\cdots,\beta_t$线性相关（以小表多，多的相关）.

        其等价命题：如果向量组$\beta_1,\beta_2,\cdots,\beta_t$可由向量组$a_1,a_2,\cdots,a_s$线性表示，且$\beta_1,\beta_2,\cdots,\beta_t$线性无关，则$t\le s$.

    - 设$m$个$b$维向量$a_1,a_2,\cdots,a_m$，其中
        $$
        \alpha_1=[a_{11},a_{21},\cdots,a_{n1}]^T，\\
        \alpha_2=[a_{12},a_{22},\cdots,a_{n2}]^T，\\
        \cdots \cdots \\
        \alpha_m=[a_{1m},a_{2m},\cdots,a_{nm}]^T，
        $$
        向量组$a_1,a_2,\cdots,a_m$线性相关$\Leftrightarrow$齐次线性方程组
        $$
        [a_1,a_2,⋯,a_m]
        \begin{bmatrix}
        x_1\\
        x_2\\
        \vdots \\
        x_m
        \end{bmatrix}
        =x_1\alpha_1+x_2\alpha_2+\cdots+x_m\alpha_m=0
        $$
        有非零解$\Leftrightarrow$$r(\alpha_1,a_2,\cdots,a_m)<m$.

        其等价命题：$a_1,a_2,\cdots,a_m$线性无关的充分必要条件是齐次线性方程组只有零解.

    - 向量$\beta$可以由向量组$a_1,a_2,\cdots,a_m$线性表示，

        等价于非齐次线性方程组
        $$
        [a_1,a_2,⋯,a_s]
        \begin{bmatrix}
        x_1\\
        x_2\\
        \vdots \\
        x_s
        \end{bmatrix}
        =x_1\alpha_1+x_2\alpha_2+\cdots+x_m\alpha_s=\beta 有解.
        $$
        等价于$r([\alpha_1,\alpha_2,\cdots,\alpha_s])=r([\alpha_1,\alpha_2,\cdots,\alpha_s,\beta])$.

        反之向量$\beta$不能由向量组$a_1,a_2,\cdots,a_m$线性表示，则对应的非齐次线性方程无解，$r([\alpha_1,\alpha_2,\cdots,\alpha_s])\not=r([\alpha_1,\alpha_2,\cdots,\alpha_s,\beta])$.

    - 如果向量组$a_1,a_2,\cdots,a_m$中有一部分线性相关，则整体也线性相关.

        逆否命题：如果向量组$a_1,a_2,\cdots,a_m$线性无关，则其中的一部分向量也线性无关.

    - 如果一组$n$维向量$a_1,a_2,\cdots,a_s$线性无关，则把这些向量各任意添加$m$个分量所得到的新向量（$n$+$m$维）组也是线性无关的.

        逆否命题：如果一组$n$维向量$a_1,a_2,\cdots,a_s$线性相关，把这些向量各去掉相同的若干分量所得到的新向量组也是线性相关的.

- 向量个数超过向量维度的时候，向量组必定线性相关.

### 极大线性无关组、等价向量组、向量组的秩

- 极大线性无关组

    若向量组中的任意向量均能由一组线性无关的子向量组表示，则称这个线性无关的子向量组为极大线性无关组.

    向量组的极大线性无关组一般不唯一，只由一个零向量组成的向量组不存在极大线性无关组，一个线性无关向量组的极大线性无关组就是该向量组本身.

    求极大线性无关组就是对原向量组进行初等行变换，变成行阶梯形矩阵，取其中几个线性无关的向量（$n$个），且$r(向量组)=n$.

- 等价向量组

    若存在两个向量组$(I)$和$(II)$，若$(I)$中的每个向量均能由$(II)$中的向量线性表示，则称向量组$(I)$可以由向量组$(II)$线性表示.

    反之若$(II)$中的每个向量均能由$(I)$中的向量线性表示，则称向量组$(II)$可以由向量组$(I)$线性表示.

    两者能相互表示则两个向量组是等价向量组记作$(I)\cong(II)$，等价向量组满足以下特性
    $$
    (I)\cong(I)（反身性）；\\
    若(I)\cong(II)，则(II)\cong(I)（对称性）;\\
    若(I)\cong(II)，(II)\cong(III)，则(I)\cong(III)（传递性）.
    $$
    向量组和它的极大线性无关组是等价向量组.

- 向量组的秩

    向量组中极大线性无关组包含的向量个数$r$称为向量组的秩，记做$r$，等价向量组有相同的秩，反之未必成立.

- 有关秩的公式

    - 三秩相等
        $$
        r(A)=A的行秩=A的列秩
        $$

    - 若$A\xrightarrow{初等行变换}B$，则

        $A$的行向量组和$B$的行向量组是等价向量组.

        $A$和$B$的任何相应的部分列向量组具有相同的线性相关性.

    - 向量组$\alpha_1,\alpha_2,\cdots,\alpha_s$及$\beta_1,\beta_2,\cdots,\beta_t$，若任一$\beta_i$均可由$\alpha_1,\alpha_2,\cdots,\alpha_s$线性表示，则
        $$
        r(\beta_1,\beta_2,\cdots,\beta_t)\le r(\alpha_1,\alpha_2,\cdots,\alpha_s).
        $$
        

- 一个向量组通过行初等变换得到新的向量组，则
    $$
    [\alpha_{k_1},\alpha_{k_2},\cdots,\alpha_{k_r}]\xrightarrow{初等行变换}[\beta{k_1},\beta{k_2},\cdots,\beta{k_r}]\\
    [\alpha_{k_1},\alpha_{k_2},\cdots,\alpha_{k_r}]x=0和[\beta{k_1},\beta{k_2},\cdots,\beta{k_r}]=0是同解方程组.
    $$
    且两个向量组具有相同的线性相关性.

### 等价矩阵和等价向量组

- 矩阵等价需要同型，行数和列数都要相等，而向量组等价要同维，但是向量的个数可以不等.

- $A$，$B$同型，则
  $$
  A \cong B\Leftrightarrow r(A)=r(B)\Leftrightarrow PAQ=B(P，Q是可逆矩阵).
  $$

- $\alpha_i$，$\beta_j(i=,1,2,\cdots,s;j=1,2,\cdots,t)$同维，则
  $$
  \{\alpha_1,\alpha_2,\cdots,\alpha_s\}\cong\{\beta_1,\beta_2,\cdots,\beta_s\}\\\
  \Leftrightarrow \{\alpha_1,\alpha_2,\cdots,\alpha_s\}和\{\beta_1,\beta_2,\cdots,\beta_s\}可以相互表示\\
  \Leftrightarrow r(\alpha_1,\alpha_2,\cdots,\alpha_s)=r(\beta_1,\beta_2,\cdots,\beta_s)
  且可单方向表示\\
  \Leftrightarrow r(\alpha_1,\alpha_2,\cdots,\alpha_s)=r(\beta_1,\beta_2,\cdots,\beta_s)\\=r(\alpha_1,\alpha_2,\cdots,\alpha_s,\beta_1,\beta_2,\cdots,\beta_s)\\
  $$


## 线性方程组

### 齐次线性方程组

- 有解的条件

    - 当$r(A)=n(\alpha_1,\alpha_2,\cdots,\alpha_n线性无关)$时，方程组有唯一解.
  
    - 当$r(A)<n(\alpha_1,\alpha_2,\cdots,\alpha_n线性相关)$时，方程组有非零解，且有$n-r$个线性无关解.
- 解的性质
  
    - 若$A\xi_1=0$，$A\xi_2=0$，则$A(k_1\xi+k_2\xi_2)=0$，其中$k_1$，$k_2$是任意常数.
      
- 基础解系和解的结构
  
    - 若$\xi_1,\xi_2,\cdots,\xi_{n-r}$是方程的线性无关解，则称为基础解系.
      
    - 则$k_1\xi_1+k_2+\xi_2+\cdots+k_{n-r}\xi_{n-r}$是方程组$Ax=0$的通解.
      
- 求解的步骤
  
    - 将系数矩阵$A$通过初等行变换乘行阶梯形矩阵$B$，求解$B$的解，基础解系的个数为$n-r(A)$.

### 非齐次线性方程组

- 有解的条件
  
    - 若$r(A)\not=r([A,b])(b不能由A线性表示)$，方程组无解.
      
    - 若$r(A)=r([A,b])=n(b能由A线性表示)$，方程组有唯一解.
      
    - 若$r(A)=r([A,b])<n(b能由A线性表示)$，方程组有无穷解.
      
- 解的性质
  
    - 设$\eta_1,\eta_2,\eta$是非齐次线性方程组$Ax=b$的解，$\xi$是对应齐次线性方程组$Ax=0$的解，（1）则$\eta_1-\eta_2$是$Ax=0$的解，（2）$k\xi+\eta$是$Ax=b$的解.
      
- 求解的步骤
  
    - 首先通过齐次方程组的解法求出齐次方程的通解$k_1\xi_1+k_2\xi_2+\cdots+k_{n-r}\xi_{n-r}$.
      
    - 求出非齐次方程$Ax=b$的一个特解$\eta$.
      
    - $Ax=b$的通解是$k_1\xi_1+k_2\xi_2+\cdots+k_{n-r}\xi_{n-r}+\eta$，其中$k_1,k_2+\cdots+k_{n-r}$是任意常数.（齐次通解+非齐次特解）
      

###  两个方程组的公共解

- 齐次线性方程组$A_{m\times n}x=0$和$B_{m\times n}x=0$的公共解是方程组$\begin{bmatrix}A\\B\end{bmatrix}x=0$的解，联立求解.

### 同解方程组

- 若两个齐次线性方程组具有完全相同的解，则称为同解方程组.

- $$
    Ax=0，Bx=0是同解方程组
    \\\Leftrightarrow Ax=0的解满足Bx=0，且Bx=0的解满足Ax=0
    \\\Leftrightarrow r(A)=r(B)，且Ax=0的解满足Bx=0
    \\\Leftrightarrow r(A)=r(B)=r(
    \begin{bmatrix}
    A\\B
    \end{bmatrix}
    )(三秩相同)
    $$

## 特征值和特征向量

### 矩阵的特征值和特征向量求法

- 满足$A\xi=\lambda\xi$，则称$\lambda$是$A$的特征值，$\xi$是特征值对应的特征向量.
  
- 通过$(\lambda E-A)\xi=0$有非零解，因此求特征多项式$|\lambda E-A|=0$的解即是特征值.
  
- 求出的解是基础解系，例如有基础解系$\xi_1,\xi_2$，则$k_1\xi_1+k_2\xi_2$是全部特征向量，且$k_1,k_2$不全为$0$.
  

### 特征值、特征向量的性质与重要结论

- 特征值的性质与重要结论

    - 若$\lambda_1,\lambda_2,\cdots,\lambda_n$是$A$的$n$个特征值，则
        $$
        \begin{cases}
        |A|=\lambda_1\lambda_2\cdots\lambda_n\\
        tr(A)=\lambda_1+\lambda_2+\cdots+\lambda_n(对角线元素之和)
        \end{cases}
        $$

- 特征向量的性质和重要结论
    - $\xi(\not=0)$是$A$的属于$\lambda_0$的特征向量$\Leftrightarrow$$\xi$是$(\lambda_0E-A)x=0$的非零解.

- 重要结论

    - $k$重特征值$\lambda$至多有$k$个线性无关特征向量.
      
    - 属于不同特征值的特征向量线性无关.
      
    - 若$\xi_1,\xi_2$是$A$的属于同一个特征值$\lambda$的特征向量，则非零向量$k_1\xi_1+k_2\xi_2$仍然是$A$属于特征值$\lambda$的特征向量.（$k_1,k_2$中有一个为$0$也成立）
      
    - 若$\xi_1,\xi_2$是$A$的属于不同特征值特征向量，则非零向量$k_1\xi_1+k_2\xi_2$不是任何特征值对应的特征向量.
      
    - 一个特征向量不能属于两个不同的特征值.

- 常用矩阵的特征值与特征向量

    |  矩阵  |    $A$    | $kA$       | $A^k$       | $f(A)$       | $A^{-1}$            |           $A^*$           | $P^{-1}AP$  |
    |:----:| :-------: | :-------: | :-------: | :-------: | :-------: |:-------------------------:| :---------: |
    | 特征值  | $\lambda$ | $k\lambda$ | $\lambda^k$ | $f(\lambda)$ | $\cfrac{1}{\lambda}$ | $\cfrac{\lvert A\rvert}{\lambda}$ |  $\lambda$  |
    | 特征向量 |   $\xi$   | $\xi$      | $\xi$       | $\xi$        | $\xi$               |           $\xi$           | $p^{-1}\xi$ |

### 矩阵的相似

- 设$A$，$B$是两个$n$阶方阵，若存在$n$阶可逆矩阵$P$，使得$P^{-1}AP=B$，则$A$相似于$B$，记作$A\sim B$.
  
- 若$A\sim B$则（均是必要条件）
  
    - $|A|=|B|$.
      
    - $r(A)=r(B)$.
      
    - $tr(A)=tr(B)$.
      
    - $\lambda_A=\lambda_B(或|\lambda E-A|=|\lambda E-B|)$.
      
    - $r(\lambda E-A)=r(\lambda E-B)$.
      
    - $A$，$B$各阶主子式之和分别相等.

- 重要结论
  
    - 若$A\sim B$则$A^k\sim B^k$，$f(A)\sim f(B)$.
      
    - 若$A\sim B$，且$A$可逆，则$A^{-1}\sim B^{-1}$，$f(A^{-1})\sim f(B^{-1})$.
      
    - 若$A\sim B$则$A^*\sim B^*$.
      
    - 若$A\sim B$则$A^T\sim B^T$.
      
- 两个矩阵相似的判别方法
  
    - 定义法，存在可逆矩阵$P$，使得$P^{-1}AP=B$.
      
    - 传递性，若$A\sim \Lambda$，$\Lambda \sim B$，则$A \sim B$.
      
    - 性质，$A\sim B$，则$r(A)=r(B)$，$|A|=|B|$，$tr(A)=tr(B)$，$\lambda_A=\lambda_B(或|\lambda E-A|=|\lambda E-B|)$，$A$，$B$各阶主子式之和分别相等.
      

### 矩阵的相似对角化

- 设$A$为$n$阶矩阵，若存在$n$阶可逆矩阵，使得$P^{-1}AP=\Lambda$，$\Lambda$是$A$的相似标准型.
  
- 重要结论
  
    - 若$A$可相似对角化矩阵$\Leftrightarrow A$对应于每个$k_i$重特征值都有$k_i$个线性无关特征向量.
      
    - $n$阶矩阵$A$有$n$个不同的特征值$\Rightarrow$$A$可相似对角化.
      
    - $n$阶矩阵$A$为实对称矩阵$\Rightarrow$$A$可相似对角化.
      
- 求可逆矩阵$P$，使得$P^{-1}AP=\Lambda$
  
    - 求$A$的特征值$\lambda_1,\lambda_2,\cdots,\lambda_n$.
      
    - 求特征值对应的特征向量$\xi_1,\xi_2,\cdots,\xi_n$.
      
    - 令$P=[\xi_1,\xi_2,\cdots,\xi_n]$，则$P^{-1}AP=\Lambda=\begin{bmatrix}\lambda_1&&&\\&\lambda_2&&\\&&\ddots \\&&&\lambda_n\end{bmatrix}$，注意特征值和特征矩阵的对应顺序.

### 实对称矩阵相似对角化

- 若$A^T=A$则称为$A$是对称矩阵，若所有元素都是实数，则是实对称矩阵，其对应的特征值也是实数，特征向量是实向量.

- 实对称矩阵相似对角化的基本步骤
  
    - 若$A$为$n$实对称矩阵，则其用正交矩阵$Q$相似对角化的基本步骤如下.
      
    - 求$A$的特征值$\lambda_1,\lambda_2,\cdots,\lambda_n$.
      
    - 求特征值对应的特征向量$\xi_1,\xi_2,\cdots,\xi_n$.
      
    - 将$\xi_1,\xi_2,\cdots,\xi_n$正交化，单位化得到$\eta_1,\eta_2,\cdots,\eta_n$.
      
    - 令$Q=[\eta_1,\eta_2,\cdots,\eta_n]$，则$Q$为正交矩阵，且$Q^{-1}AQ=Q^TAQ=\Lambda$.（正交矩阵有$Q^{-1}=Q^T$）
      
- 施密特正交化
        $$
        设\alpha_1,\alpha_2,\alpha_3线性无关但不正交，令\\
        \beta_1=\alpha_1,\\
        \beta_2=\alpha_2-\cfrac{(\beta_1,\alpha_2)}{(\beta_1,\beta_1)}\beta_1,\\
        \beta_3=\alpha_3-\cfrac{(\beta_1,\alpha_3)}{(\beta_1,\beta_1)}\beta_1-\cfrac{(\beta_2,\alpha_3)}{(\beta_2,\beta_2)}\beta_2.
        $$

## 二次型

### 二次型，合同变换，标准型，规范型

- $f(x)=x^TAx$是二次型$f(x_1,x_2,\cdots,x_n)$的矩阵表达式，$A$是二次型的矩阵.

- 若线性变换矩阵$C$可逆，即$|C|\not=0$，则称为可逆线性变换，现给出$f(x)=x^TAx$，令$x=Cy$，则
    $$
    f(x)=(Cy)^TA(Cy)=y^T(C^TAC)y.
    $$
    记$B=C^TAC$，则$f(x)=y^TBy=g(y)$.

- 若存在矩阵$A$，$B$为$n$阶，存在可逆矩阵$C$，使得
    $$
    C^TAC=B，
    $$
    则称$A$与$B$合同，记$A\simeq B$，对应的二次型为合同二次型.

- 合同有如下性质

    - $A\simeq A$（反身）;
      
    - 若$A\simeq B$，则$B\simeq A$（对称）；
      
    - 若$A\simeq B$，$B\simeq C$，则$A\simeq C$（传递）.

- 二次型的标准型，规范型.

    - 若在二次型中只有平方项（通过配平获取，首先考虑将混合项消除），
        $$
        d_1x_1^2+d_2x_2^2+\cdots+d_nx_n^2
        $$
        则二次型称为标准型.

    - 若在标准型中系数$d_i(i=1,2,\cdots,n)$取值范围为${-1,0,1}$，则称为规范型.
      
    - $(a+b+c)^2=a^2+b^2+c^2+2ab+2ac+2ab$.

### 惯性定理

- 无论选取什么样的可逆线性变换，将二次型化成标准型或规范型，其正项个数$p$，和负项个数$q$都是不变的，分别称为正惯性指数和负惯性指数.

- 两个二次型或实对称矩阵合同的充要条件是有相同的正、负惯性指数，或有相同的秩及正（负）惯性指数，或有相同的正、负特征值个数.

- 当二次型中没有平方项时，可做线性变换
    $$
    \begin{cases}
    x_1=y_1+y_2,\\
    x_2=y_1-y_2,\\
    x_3=y_3,
    \end{cases}
    $$
    使其出现平方项，再使用配平法.

- 任何实对称矩阵$A$，必存在可逆矩阵$C$，使得$C^TAC=\Lambda$，其中$\Lambda$是对角矩阵.

- 用正交变换将二次型变为标准型，求所用的正交变换以及对应的正交矩阵，解法：
  
    - 将二次型矩阵$A$求出；
      
    - 使用$|\lambda E -A|=0$求出对应的特征值$\lambda_1,\lambda_2,\lambda_3$；
      
    - 求出对应特征值对应的特征矩阵$\xi_1,\xi_2,\xi_3$；
      
    - 将特征矩阵正交化单位化（施密特正交化），得到$\eta_1,\eta_2,\eta_3$；
      
    - 令正交矩阵$Q=[\eta_1,\eta_2,\eta_3]$；
      
    - 则$x=Qy$是所求的正交变换，有
        $$
        f=x^TAx\xrightarrow{x=Qy}y^T\begin{bmatrix}
        \lambda_1&&\\
        &\lambda_2&\\
        &&\lambda_3
        \end{bmatrix}y=\lambda_1y_1^2+\lambda_2y_2^2+\lambda_3y_3^2.
        $$

### 正定二次型

- 对于$n$元二次型$f=x^TAx$，若对任意的$x\not=0$，均有$x^TAx>0$，则称$f$为正定二次型，对应的二次型矩阵称为正定矩阵.

- 二次型正定的充要条件
    $$
    n元二次型f=x^TAx正定
    \\\Leftrightarrow 对任意x\not=0，有x^TAx>0
    \\\Leftrightarrow f的正惯性指数p=n
    \\\Leftrightarrow 存在可逆矩阵D，使得A=D^TD
    \\\Leftrightarrow A\simeq E，A合同于单位矩阵
    \\\Leftrightarrow A的特征值均大于0
    \\\Leftrightarrow A的全部顺序主子式均大于0.
    $$

- 正定的必要条件

    - $A$正定则$a_{ii}>0(i=1,2,\cdots,n)$.
      
    - $A$正定则$|A|>0$.

- 令$f=0$，可以获得平方项的联立方程，求出方程系数行列式，若行列式值不等于$0$，则仅有零解，因此当$x\not=0$，必有$f>0$，$f$是正定二次型.
