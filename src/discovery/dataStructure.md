## 线性表
### 顺序表和链表的对比

- 循环内的条件变量是线性变化，$O(n)$，次方变化是$O(\log n)$

- 顺序表和链表的对比：

  - 顺序表支持随机访问，链表支持顺序访问.
  
  - 顺序表的存储密度等于$1$，链表的存储密度$<1$.
  
  - 顺序表初始化需要给定大小，数组是连续存储，分配的时候需要一次性给定对应的连续长度，链表不需要，每个元素都是离散的.
  
  - 顺序表利于访问，不利于插入和删除，链表利于插入和删除不利于访问.
  
  - 顺序表如果有序，使用折半查找时间复杂度为$O(\log n)$.

### 顺序表

#### 插入、删除、查找时间复杂度
- 顺序表插入的最好移动元素次数是$0$次（插入尾部），最坏情况下需要移动$n$次（插入头部），能够插入的位置有$n+1$个，平均$n/2$.

- 顺序表的删除的最好情况下移动元素次数是$0$次，最坏情况下需要移动$n-1$次（删除第一个元素），能够删除的位置有$(n-1)/2$个.

- 顺序表的查找，采用顺序查找，假设查找成功，最好的情况查找$1$次（查询的元素在表头），最坏情况下$n$次（查询的元素在表尾），平均查找次数$(n+1)/2$，假设查找失败，平均时间复杂度$O(n)$.

### 链表

#### 基本特性
- 非随机存取，只能从头开始访问元素，不能通过下标访问元素.

- 单链表访问结束的条件：`p == null`.

- 头结点的作用：便于删除头结点后面的结点，便于在头结点后插入结点.

#### 插入和删除

- 插入操作先连接尾部再连接头部，插入元素需要得到前一个元素的位置，`s.next = pre.next;pre.next = s. `

```java
void listNodeInsert(ListNode list, int data, int index) {
    ListNode pre = list;
    index--;
    while (index != 0) {
        index--;
        pre = pre.next;
    }
    ListNode s = new ListNode();
    s.data = data;

    s.next = pre.next;
    pre.next = s;
}
```

- 删除元素，找到要删除元素的前一个位置`pre`，执行`pre.next = pre.next.next`.

```java
void listNodeDelete(ListNode list, int index) {
    ListNode pre = list;
    index--;
    while (index != 0) {
        index--;
        pre = pre.next;
    }
    pre.next = pre.next.next;
}
```

### 头插法和尾插法

- 头插法：每次从头结点的后面一个位置进行插入元素，创建出来的链表是倒序的.

```java
ListNode headCreateList(int[] nums) {
    ListNode head = new ListNode();
    for (int i = 0; i < nums.length; i++) {
        int data = nums[i];
        ListNode s = new ListNode();
        s.data = data;
        s.next = head.next;
        head.next = s;
    }
    return head;
}
```

- 尾插法：每次从链表的尾部进行插入，创建出来的链表是顺序的.

```java
ListNode rearCreateList(int[] nums) {
    ListNode head = new ListNode();
    ListNode pre = head;
    for (int i = 0; i < nums.length; i++) {
        int data = nums[i];
        ListNode s = new ListNode();
        s.data = data;
        pre.next = s;
        pre = pre.next;
    }
    return head;
}
```

### 双链表

- 可以从当前元素访问到前面一个元素.

- 插入和删除更加简便，存储空间增大了.

- 判断链表为空：`head.prior == null && head.next == null`.

### 循环链表

- 判断单循环链表为空：`head.next == head`.

- 判断双循环链表为空：`head.prior == head && head.next == head`.

### 静态链表

- 使用顺序存储结构实现逻辑上的离散存储结构.

- `next == -1`表示结束标志.

### 两个有序链表合成一个新的有序链表

```java
ListNode merge(ListNode list1, ListNode list2) {
    ListNode c = new ListNode();
    ListNode pre = c;//用于指向最后一个结点
    ListNode p1 = list1.next;
    ListNode p2 = list2.next;
    ListNode s;
    while (p1 != null && p2 != null) {
        if (p1.data < p2.data) {
            s = p1;
            p1 = p1.next;
            pre.next = s;
            pre = pre.next;
        } else {
            s = p2;
            p2 = p2.next;
            pre.next = s;
            pre = pre.next;
        }
        pre.next = null;
    }
    if (p1 != null) {
        pre.next = p1; 
    }else {
        pre.next = p2; 
    }
    return c;
}
```

## 栈和队列

### 栈基本概念

- 假设有$n$个元素以任意的顺序进行入栈和出栈，最后访问元素的总排列数为$C_{2n}^n\cfrac{1}{n+1}$.

- 共享栈：使用一片连续空间创建两个栈，注意入栈和出栈操作的`top`指针移动情况.

- 创建基本的栈：`int[] stack = new int[100]; int top = -1;`.

- 入栈先移动指针再入栈，出栈是先出栈再移动指针.

### 队列基本概念

- 包含头部和尾部 `front, rear`.

- 创建一个基本的队列：`int[] queue = new int[maxSize]; int front = 0; int rear = 0;`，元素空间个数为`maxSize - 1`.

- 队列的入队和出队操作：`rear = (rear + 1) % maxSize; queue[rear] = e`，`front = (front + 1) % maxSize; int e = queue[front]`.
- 队列出队和入队操作都是先移动指针.
- 队列里面的元素个数`(rear - front + maxSize) % maxSize`.
- 队空条件：`fornt == rear`，队满条件：`(rear + 1) % maxSize == front`.

### 栈的应用

- 括号匹配

```java
boolean pipei(char[] chars) {
    int top = -1;
    for (int i = 0; i < chars.length; i++) {
        char c = chars[i];
        if (c == '(') {
            top++;
        } else {
            //右括号
            if (top == -1) {
                //右括号太多
                return false;
            } else {
                top--;
            }
        }
    }
    return top == -1;
}
```

- 后缀表达式的计算

 ```java
 int compute(char[] chars) {
     int[] stack = new int[100];
     int top = -1;
     for (int i = 0; i < chars.length; i++) {
         char c = chars[i];
         if (c >= '0' && c <= '9') {
             top++;
             // '1'
             stack[top] = c - '0';
         } else {
             switch (c) {
                 case '+':{
                     int b = stack[top];
                     top--;
                     int a = stack[top];
                     top--;
                     int d = a + b;
                     top++;
                     stack[top] = d;
                     break;
                 }
                 case '-':{
                     int b = stack[top];
                     top--;
                     int a = stack[top];
                     top--;
                     int d = a - b;//注意下操作数顺序
                     top++;
                     stack[top] = d;
                     break;
                 }
             }
         }
     }
     return stack[0];
 }
 ```

## 串

### 串的暴力匹配模式

- 每次在匹配失败时，子串需要回到起点，主串进行回溯.

### KMP算法

- 取消主串回溯，减少子串部分回溯.

- `next`数组的计算：从下标$1$开始，`next[1] = 0,next[2] = 1`，从$3$号下标开始，计算匹配前后缀的长度，当前位置的`next`数组值就是长度$+1$.

- ```java
  int kmp(String zhu, String zi,int[] next) {
      int i = 1;
      int j = 1;
      while (i < zhu.length() && j < zi.length()) {
          if (j == 0 || zhu.charAt(i) == zi.charAt(j)) {
              j++;
              i++;
          } else {
              j = next[j];
          }
      }
      if (j >= zi.length()) {
          return i - zi.length();
      }
      return -1;
  }
  ```

- 改进的$kmp$数组，作用除去了子串的逐步回溯，等于就抄改进数组，否则抄原本数组.

```java
if(sub[j] == sub[next[j]]){
	nextval[j] = nextval[next[j]];
}else{
	nextval[j] = next[j];
}
```

## 树

- 树的结点数$n$等于所有结点数的度之和$+1$，因为根结点没有度指向它.

- 二叉树中有$n_1$$n_2$$n_0$，分别代表单分支结点，双分支结点，叶子结点.叶子结点数等于双分支结点数$+1$.

    - $n_1+n_2+n_0=n_1+2*n_2+0*n_0+1$
    
    - $n_0=n_2+1$
    
- 满二叉树的结点数为$2^k-1$，其中$k$为高度.

- 高度为$k$的完全二叉树，结点最多为$2^k-1$，最少有$2^{k-1}$个.

- 对完全二叉树从上到下，从左到右进行编号，从$1$开始，则编号为$i$结点的左孩子编号为$2*i$，右孩子$2*i+1$.

### 递归的经典问题$n!$

```java
//有出口，之后再处理数据
int jiecheng(int n) {
    if (n == 1) {
        return 1;
    }
    return n * jiecheng(n - 1);
}
```

### 获取二叉树的深度

```java
int getDepth(TreeNode tree) {
    if (tree == null) {
        return 0;
    }
    int l = getDeepth(tree.lchild);
    int r = getDeepth(tree.rchild);
    return (l > r ? l : r) + 1;
}
```

### 层次遍历，队列

```java
void BFS(TreeNode tree) {
    if (tree == null) {
        return;
    }
    //offer放入  poll出队
    Queue<TreeNode> queue = new LinkedList<>();
    queue.offer(tree);
    while (!queue.isEmpty()) {
        TreeNode t = queue.poll();
        System.out.println(t.data);
        if (t.lchild != null) {
            queue.offer(t.lchild);
        }
        if (t.rchild != null) {
            queue.offer(t.rchild);
        }
    }
}
```

- 求树中最宽的层次结点个数

```java
int  getMaxWidth(TreeNode treeNode) {
    if (treeNode == null) {
        return 0;
    }
    int max = 1;
    //offer放入  poll出队
    int maxSize = 20;
    TreeNode[] queue = new TreeNode[maxSize];
    int front = 0, rear = 0;

    rear = (rear + 1) % maxSize;
    queue[rear] = treeNode;

    while (!(front==rear)) {
        //队列中的元素个数
        int size = (rear - front + maxSize) % maxSize;
        max = Math.max(max, size);
        for (int i = 0; i < size; i++) {
            front = (front + 1) % maxSize;
            TreeNode t = queue[front];
            //System.out.println(t.data);

            if (t.lchild != null) {
                rear = (rear + 1) % maxSize;
                queue[rear] = t.lchild;
            }
            if (t.rchild != null) {
                rear = (rear + 1) % maxSize;
                queue[rear] = t.rchild;
            }
        }
    }
    return max;
}
```

- 通过先序遍历序列+中序遍历序列，或者是中序遍历序列+后续遍历序列构造二叉树.

```java
public class Test {
	public static void main(String[] args) {
		int[] preNums = {1, 2, 3, 4, 5, 6, 7};
		int[] inNums = {3, 2, 4, 1, 6, 7, 5};
		int[] postNums = {3, 4, 2, 7, 6, 5, 1};
//		TreeNode treeByPreAndIn = createTreeByPreAndIn(preNums, 0, preNums.length - 1, inNums, 0, inNums.length - 1);
		TreeNode treeByInAndPost = createTreeByInAndPost(inNums, 0, inNums.length - 1, postNums, 0, postNums.length - 1);
		System.out.println(1);
	}

	public static TreeNode createTreeByInAndPost(int[] inNums, int inL, int inR
			,int[] postNums, int postL, int postR) {
		if (inL > inR || postL > postR) {
			return null;
		}
		if (inL == inR) {
			TreeNode treeNode = new TreeNode();
			treeNode.data = postNums[postR];
			return treeNode;
		}
		TreeNode root = new TreeNode();
		root.data = postNums[postR];
		int index = inL;
		while (inNums[index] != root.data) {
			index++;
		}
		int leftSize = index - inL;
		root.lchild = createTreeByInAndPost(inNums, inL, index - 1
				, postNums, postL, postL + leftSize - 1);
		root.rchild = createTreeByInAndPost(inNums, index + 1, inR
				, postNums, postL + leftSize, postR - 1);
		return root;
	}

	public static TreeNode createTreeByPreAndIn(int[] preNums,int preL,int preR
			, int[] inNums,int inL,int inR) {
		if (preL > preR || inL > inR) {
			return null;
		}
		if (preL == preR) {
			TreeNode treeNode = new TreeNode();
			treeNode.data = preNums[preL];
			return treeNode;
		}
		TreeNode root = new TreeNode();
		root.data = preNums[preL];
		int index = inL;
		while (inNums[index] != root.data) {
			index++;
		}
		int leftSize = index - inL;
		root.lchild = createTreeByPreAndIn(preNums, preL + 1, preL + leftSize,
				inNums, inL, index - 1);
		root.rchild = createTreeByPreAndIn(preNums, preL + leftSize + 1, preR,
				inNums, index + 1, inR);
		return root;
	}
}
```

### 线索二叉树

- 添加了两个属性，`ltag`，`rtag`，`ltag/rtag = 0`表示是正常的左子树/右子树，是$1$表示是线索.

### 树/森林与二叉树的转换

- 树->二叉树：亲兄弟相连留长子，顺时针旋转$45^。$.
- 森林->二叉树：森林中的每一颗树的根结点相连，视为亲兄弟，其余和上述相同.

### 哈夫曼树，最优二叉树.

- 路径长度：从根结点到某一个结点经历的边的个数.
- $WPL=$树中所有结点的带权路径长度之和，带权路径长度$=$路径长度$*$结点权值.
- 最优二叉树的构造：每次选取两个权值小的结点构成一个新的结点放入原来的元素中继续进行这个步骤.
- 最优$n$叉树的构造：最优$n$叉树的第$2$层必须是满的，每次构造少了$n-1$个元素，添加权值为$0$的元素，使得最后一次构造元素个数是$n$.

### 并查集

- 并查集中`a[i] = j`代表`i`号元素的顶层祖先结点为`j`，`i`号结点如果指向自己，则为顶层结点.

```java
int find(int i){
	while(a[i] != i){
		i = a[i];
	}
	return i;
}
```

- 将树中的每一个结点的`parent`属性设置为父结点.

```
void setParent(TreeNode tree, TreeNode parent){
	if(tree != null){
		tree.parent = parent;
		setParent(tree.lchild, tree);
		setParent(tree.rchild, tree);
	}
}
```

- 树中的每一个元素的值都不相等，找到任意两个值的第一个共同祖先（从下往上）.

```java
TreeNode getAncestor(TreeNode tree, int data1, int data2) {
	if (tree == null) {
		return null;
	}
	TreeNode l = getAncestor(tree.lchild, data1, data2);
	TreeNode r = getAncestor(tree.rchild, data1, data2);
	if (tree.data == data1 || tree.data == data2 || (l != null && r != null)) {
		return tree;
	} else if (l == null && r == null) {
		return null;
	}else if (l == null) {
		return r;
	} else {
		return l;
	}
}
```

## 图

### 图的存储结构

- 邻接矩阵

```java
class Mgraph{
	int[][] edges;//存储边关系
	VertexType[] vex;//存储结点数据
    int vexnum,edgenum;
}
VertexType{
	int data   
}
```

- 邻接表

```java
class ArcNode{
	int adjvex;//当前弧结点的编号
	ArcNode next//下指针
}

class VNode{
	int data;
	ArcNode firstArc;
}

class Agraph{   
	VNode[] adjlist;
    int vernum,arcnum;
}
```

### 图的遍历

- BFS

```java
void BFS(Agraph agraph, int i){
	visit(i);//访问的操作
	visited[i] = 1;//标记访问
	int front = 0,rear = 0;
	int maxSize = 100;
	int[] queue = new int[maxSize];
	rear = (rear + 1) % maxSize;
	queue[rear] = i;
	while(rear != front){
		front = (front + 1) % maxSize;
		int vex = queue[front];
		ArcNode firstArc = agraph.adjlist[vex].firstArc;
		while(firstArc != null){
			if(visited[firstArc.adjvex] == 0){
				visit(vex);
				visited[firstArc.adjvex] = 1;
				rear = (rear + 1) % maxSize;
				queue[rear] = firstArc.adjvex;
			}
			firstArc = firstArc.nextArc;
		}
	}
}
```

- 深度优先遍历

```java
void DFS(Agraph agraph, int i){
	visit(i)
	visited[i] = 1;
	ArcNode firstArc = agraph.adjlist[i].firstArc;
	while(firstArc != null){
		int vex = firstArc.adjvex;
		if(visited[vex] == 0){
			DFS(agraph,vex);
		}
		firstArc = firstArc.nextArc;
	}
}
```

- 最小生成树，边包含权值	
    - 普里姆算法，以顶点为考虑对象，每次并入和当前顶点集合最近的顶点(直接联通)，时间复杂度$o(V^2)$，适用于稠密图.
    - 克鲁斯卡尔算法，以边为考虑对象，每次将最短的边进行连接，用并查集解决环路问题，时间复杂度$O(e\log e)$因为排序算法的最小平均时间复杂度$O(n\log n)$，适用于稀疏图，边较少，排序算法的时间较少.

### 最短路径问题

- $Dijkstra$算法，求解一个顶点到其余各个顶点的最短路径，时间复杂度$O(n^2)$.

- $Floyd$算法，求解任意两个顶点之间的最短路径，时间复杂度$O(n^3)$.

    - ```java
        for(int i = 0;i<edges.length;i++)//遍历edges的行
        	for(int j = 0;j<edges[0].length;j++)//遍历edges的列
        		for(int k =0;k < vexnum;k++)//遍历所有顶点,作为中转结点
                	if(edges[i][j] > edges[i][k]+edges[k][j])
                        edges[i][j] = edges[i][k]+edges[k][j];	
        ```

### 拓扑排序

- 找到一个入度为$0$的结点输出，更新输出结点相联的其他结点的入度，重复上述步骤.
    - 在使用邻接表时为$O(v+e)$，在使用邻接矩阵时为$O(v^2)$.

### 关键路径

- 在$AOV$的基础上添加边权值得到$AOE$网.

- 关键路径，从起点到终点的最长路径，又是一个最短的路径
    - 最短代表了工期完成的最短时间，如果给定的时间少于最长路径，则一定有事件不能完成.
- 如果减少了最短路径上某个事件完成的时间，会不会导致关键路径长度缩短？
    - 可能不会导致，缩短了某个事件的时间，可能会导致关键路径变为其他.

## 查找

### 关键指标

- $ASL1$代表查找成功的平均比较次数.
- $ASL2$代表查找失败的成功比较次数.
    - 从一个单链表中找到一个值为k的结点，则如果找到了平均的比较次数$\cfrac{1+n}{2}$，如果没找到平均比较次数为$n$.

### 折半查找

- 查找的序列必须是有序的
    - 每次查找中心位置`mid = left + (right-left)/2`，不会产生溢出.
    - 查找的时间复杂度为$O(\log n)$.

### 树形查找

- 二叉排序树，每一个结点的值都是不同的
    - 左子树都小于根结点，右子树都大于根结点
- 查找的时间复杂度，一般为$O(\log n)$，特殊情况为$O(n)$，树只有一个分支.
- $ASL1$分母是关键字的个数，$ASL2$中分母是查找失败的位置.

### 平衡二叉树

- 二叉平衡树，左右子树的高度差的绝对值不超过$1$.
- 平衡调整
    - 每次找到发生不平衡的最小子树，一般为三个结点进行调整.
    - 具体看三个结点的走向，`LL`表示左左，其他同理

### 红黑树

- AVL树是严格的平衡二叉树，调整的频率较高.
- 红黑树是大致平衡的二叉树
    - 每个结点是红色或者黑色.
    - 根结点是黑色.
    - 叶结点(`null`节点)也是黑色.
    - 不存在相邻的红色结点.
    - 从根结点到叶子结点经过的黑色结点数目相同.

### B树和B+树

- $B$树
    - 索引结点是有效元素，可能没到叶子结点就查找成功.
    - 根结点至少有$2$个分支.
    - $m$阶$B$树非根非叶子结点至少有$\cfrac{m}{2}$向上取整个分支，$\cfrac{m}{2}-1$个关键字.
- $B+$
    - 索引结点不是有效元素，仅仅索引.
    - 有效元素放在叶子结点位置，并且通过一个链表结构进行串联.
    - 在索引结点上查找到元素不算成功，必须到叶子结点.
    - 支持顺序查找.

### 散列表

- 构造方法
    - 直接定址法$H(key)=a\cdot key+b$，关键字分布不均匀，浪费空间.
    - 除留余数法$H(key)=key \mod p$，$p$一般取小于等于表长的最大素数，例如表长15，则$p=13$，分布均匀，基本不浪费.
- 处理冲突
    - 取$key = 0,13$，$H(key)=1$，这就叫冲突。
    - 开放定址法
        - 线性探查法，从当前发生冲突的位置一直往后寻找一个空位放下，会产生堆积现象(元素放入的位置离真实的$H(key)$越来越远).
        - 平方探查法，偏移量$d=+1^2,-1^2,+2^2,-2^2...$.
        - 双散列法，将原本的$key$再次进行$hash$操作.
    - 拉链法
        - 当发生冲突的时候，将元素采用尾插法对应地址的单链表.
        - $ASL1$查找成功的平均比较次数，就是结点所在的层次之和/结点个数.
        - $ASL2$查找失败的平均比较次数，分母是查找失败的位置，一般就等于$p$，分子是每个地址到空结点的有效元素比较次数.
- 计算过程
    - 一般只给出元素的个数和装填因子，通过装填因子$a=\cfrac{n}{m}$，$n$是元素的个数，$m$是表长.
    - 在通过表长取得除留余数法中的$p$，小于等于表长的最大素数.

## 排序

- 稳定性，待排序序列中相等的值在排序完成之后的相对位置不发生变化则称为排序算法是稳定的，否则是不稳定.

### 插入排序

- 直接插入排序，时间复杂度$O(n^2)$，稳定的. 

```java
void simpleInsertSort(int[] nums) {
    for (int i = 1; i < nums.length; i++) {
        int temp = nums[i];
        int j = i - 1;
        //找到一个比temp小的数字
        while (j >= 0 && nums[j] > temp) j--;
        //待插入的位置是j+1
        for (int k = i-1; k >= j+1 ; k--) {
            nums[k+1] = nums[k];
        }
        nums[j + 1] = temp;
    }
}
```

- 折半插入排序，时间复杂度$O(n\log n)$，稳定的.

```java
void zhebanSort(int[] nums) {
    int count = 0;
    for (int i = 1; i < nums.length; i++) {
        int temp = nums[i];
        int l = 0;
        int r = i - 1;
        while (l < r) {
            int mid = l + (r - l) / 2;
            if (temp <= nums[mid]) {
                r = mid;
            } else {
                l = mid + 1;
            }
            count++;
        }
        if (nums[l] <= temp) {
            //插入l的右边  l+1
            for (int j = i - 1; j >= l + 1; j--) {
                nums[j + 1] = nums[j];
            }
            nums[l + 1] = temp;
        } else {
            //插入l的左边  l
            for (int j = i - 1; j >= l; j--) {
                nums[j + 1] = nums[j];
            }
            nums[l] = temp;
        }
    }
    System.out.println(count);
}
```

- 希尔排序，又叫做缩小增量排序，增量为 $5,3,2,1$，时间复杂度$O(n^{\frac{3}{2}})$，最坏情况下为$O(n^2)$，不稳定.

### 交换类排序

- 冒泡排序，每次选取两个相邻的元素，小的放前面，大的放后面，稳定的，每一趟排序都能确定一个元素的最终位置，时间复杂度$O(n^2)$，最好情况下元素有序，时间复杂度为$O(n)$.

```java
void bubbleSort(int [] nums) {
	int count = 0;
	for (int i = nums.length - 1; i >= 1; i--) {
		int f = 0;
		//j是两个元素的第二个元素
		for (int j = 1; j <= i; j++) {
			count++;
			if (nums[j] < nums[j-1]) {
				int temp = nums[j];
				nums[j] = nums[j-1];
				nums[j-1] = temp;
				f = 1;
			} else {
				//后面一个元素大于等于前面一个元素
			}
		}
		if (f == 0) {
			//发生了交换
			break;
		}
	}
	System.out.println(count);
}
```

- 快速排序

- 确定中轴，比中轴小的元素都放在中轴的左边，比中轴大的元素都放在中轴的右边，不稳定的算法，每趟排序都能确定一个元素的最终位置，时间复杂度$O(n\log n)$，同级别中效率最好的，最坏的情况下为元素完全有序，时间复杂度为$O(n^2)$，空间复杂度为$O(\log n)$
- 首先移动$right$指针找到一个比$temp$小的数字放入$left$位置，$left++$，再移动$left$指针找到一个比$temp$大的数字放入$right$位置，$right--$.

```java
void quickSort(int[] nums, int i, int j) {
	if (i < j) {
		int left = i;
		int right = j;
		int temp = nums[left];
		while (left < right) {
			//移动右指针找到一个比temp小的数字 nums[j]<temp成立时停止
			while (left < right && nums[right] >= temp) {
				count++;
				right--;
			}
			if (left < right) {
				nums[left] = nums[right];
				left++;
			}
			//移动左指针找到一个比temp大的数字 nums[j]>temp
			while (left < right && nums[left] <= temp) {
				count++;
				left++;
			}
			if (left < right) {
				nums[right] = nums[left];
				right--;
			}
		}
		nums[left] = temp;
		//左右分治
		quickSort(nums, i, left - 1);
		quickSort(nums, left+1, j);

	}
}
```

### 选择排序

- 简单选择排序，每次从待排序的序列中找到最小值放入第一个位置（和第一个位置的元素进行交换），重复步骤，每次排序能够确定一个元素的最终位置，不稳定的排序算法，时间复杂度为$O(n^2)$.
- 堆排序，在完全二叉树中，从上到下，从左到右依次进行编号(从1开始)，则$i$号结点的左孩子编号$2*i$，右孩子是$2*i+1$，每次可以确定一个元素的最终位置.
    - 堆排序就是每次确定一个最大值在堆顶和最后一个元素进行交换，再调整树成为大根堆，重复步骤.
    - 建立初始大根堆，在一颗树中，根节点的值大于左右孩子结点则称为大根堆.
    -  时间复杂度为$O(n\log n)$，稳定性：不稳定.

```java
void heapSort(int[] nums, int n) {
	for (int i = n/2; i >=1 ; i--) {
		//从下往上，从右往左的第一个非叶子结点开始调整
		sift(nums, i, n);
	}
	for (int i = n; i >= 2 ; i--) {
		//大根堆最大值 就是下标为1的位置
		int temp = nums[1];
		nums[1] = nums[i];
		nums[i] = temp;
		sift(nums, 1, i-1);
	}
}
	//调整树成为大根堆
void sift(int[] nums,int start , int end) {
	int i = start;
	int temp = nums[i];
	int j = 2 * i;
	while (j <= end) {
		//右孩子比左孩子大
		if (j + 1 <= end && nums[j + 1] > nums[j]) {
			j++;//指向右孩子
		}
		if (nums[j] > temp) {
			//左右孩子中的最大值大于temp(当前的i结点值)
			nums[i] = nums[j];
			//向下调整
			i = j;
			j = 2 * i;			
			} else {
			break;
		}
	}
	nums[i] = temp;
}
```

### 归并排序

- 二路归并排序，将排序区间分为两个部分进行分治，时间复杂度为$o(n\log n)$，空间复杂度为$o(n)$，稳定的算法.

```java
void mergeSort(int[] nums,int l,int r) {
	if (l >= r) {
		return;
	}
	int mid = l + (r - l) / 2;
	// l ~ mid   mid+1 ~ r
	mergeSort(nums, l, mid);
	mergeSort(nums, mid+1, r);
	merge(nums, l, mid, r);
}

void merge(int[] nums, int l, int mid, int r) {
	int idx1 = l;
	int idx2 = mid + 1;
	int index = l;
    //创建了一个新的数组 所以空间复杂度为O(n)
	int[] numsNew = Arrays.copyOf(nums, nums.length);
	while (idx1 <= mid && idx2 <= r) {
		if (numsNew[idx1] < numsNew[idx2]) {
			nums[index] = numsNew[idx1];
			idx1++;
		} else {
			nums[index] = numsNew[idx2];
				idx2 ++;
			}
			index++;
		}
	if (idx1 <= mid) {
		//idx2越界了
		while (idx1 <= mid) {
			nums[index] = numsNew[idx1];
			idx1++;
			index++;
		}
	} else {
		//idx1越界了
		while (idx2 <= r) {
			nums[index] = numsNew[idx2];
			idx2++;
			index++;
		}
	}
}
```

- 基数排序
    - 将元素从个位按照数字放入桶中(队列)，拿出，再从十位重复步骤，百位...
    - 时间复杂度$O(d(n+r))$，其中$d$是关键字的最高位数，$n$是关键字个数，$r$是桶的个数，空间复杂度为$r$.

### 排序算法的比较

- 时间复杂度为$O(n\log n)$的排序算法：快速排序，堆排序，归并排序，其余都是$O(n^2)$.
- 快速排序空间复杂度为$O(\log n)$，归并排序空间复杂度为$O(n)$，基数排序空间复杂度为$O(r)$.
- 不稳定的排序算法快速排序，简单选择排序，堆排序.
- 一趟排序能确定一个元素的最终位置，简单选择，堆排序，交换类的排序（冒泡排序和快速排序）.

### 外部排序

- 内部排序需要将所有的数据放入到内存中进行排序，外部排序只需要将每个归并段的第一个元素放入内存中进行排序，解决内存紧张问题.
- 置换选择排序生成归并段，每次输出的元素一定要大于当前归并段的最后一个元素（当前归并段的最大值），如果不存在这种元素，则重新生成一个归并段.

- 最佳归并树
    - 最优n叉树，在归并的初期，尽量选择较短的归并段进行归并，这样可以减少归并的总次数.
    - 什么情况下最佳归并树是唯一的，当归并段的长度都不相等的时候，最佳归并树是惟一的.
