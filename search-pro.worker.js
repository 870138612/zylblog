const d=(o,a)=>{const i=o.toLowerCase(),e=a.toLowerCase(),s=[];let n=0,l=0;const c=(t,p=!1)=>{let r="";l===0?r=t.length>20?`… ${t.slice(-20)}`:t:p?r=t.length+l>100?`${t.slice(0,100-l)}… `:t:r=t.length>20?`${t.slice(0,20)} … ${t.slice(-20)}`:t,r&&s.push(r),l+=r.length,p||(s.push(["strong",a]),l+=a.length,l>=100&&s.push(" …"))};let h=i.indexOf(e,n);if(h===-1)return null;for(;h>=0;){const t=h+e.length;if(c(o.slice(n,h)),n=t,l>100)break;h=i.indexOf(e,n)}return l<100&&c(o.slice(n),!0),s},g=Object.entries,y=Object.keys,f=o=>o.reduce((a,{type:i})=>a+(i==="title"?50:i==="heading"?20:i==="custom"?10:1),0),$=(o,a)=>{var i;const e={};for(const[s,n]of g(a)){const l=((i=a[s.replace(/\/[^\\]*$/,"")])==null?void 0:i.title)||"",c=`${l?`${l} > `:""}${n.title}`,h=d(n.title,o);h&&(e[c]=[...e[c]||[],{type:"title",path:s,display:h}]),n.customFields&&g(n.customFields).forEach(([t,p])=>{p.forEach(r=>{const u=d(r,o);u&&(e[c]=[...e[c]||[],{type:"custom",path:s,index:t,display:u}])})});for(const t of n.contents){const p=d(t.header,o);p&&(e[c]=[...e[c]||[],{type:"heading",path:s+(t.slug?`#${t.slug}`:""),display:p}]);for(const r of t.contents){const u=d(r,o);u&&(e[c]=[...e[c]||[],{type:"content",header:t.header,path:s+(t.slug?`#${t.slug}`:""),display:u}])}}}return y(e).sort((s,n)=>f(e[s])-f(e[n])).map(s=>({title:s,contents:e[s]}))},m=JSON.parse("{\"/\":{\"/intro.html\":{\"title\":\"关于我\",\"contents\":[{\"header\":\"\",\"slug\":\"\",\"contents\":[\"杭州某电专计算机专业研二学生\",\"科研狗混子，摸鱼王者，摄影爱好者\",\"网站基于开源项目vuepress-theme-hope\",\"图片采用腾讯对象存储\"]}]},\"/database/\":{\"title\":\"数据库\",\"contents\":[]},\"/framework/\":{\"title\":\"框架\",\"contents\":[]},\"/home/\":{\"title\":\"欢迎\",\"contents\":[]},\"/java/\":{\"title\":\"Java\",\"contents\":[]},\"/middleware/1nginx.html\":{\"title\":\"Nginx\",\"contents\":[],\"customFields\":{\"0\":[\"中间件\"],\"1\":[\"Nginx\",\"中间件\"]}},\"/middleware/2rabbitmq.html\":{\"title\":\"RabbitMq\",\"contents\":[],\"customFields\":{\"0\":[\"中间件\"],\"1\":[\"Nginx\",\"中间件\"]}},\"/middleware/\":{\"title\":\"中间件\",\"contents\":[]},\"/photo/99%E5%B9%B3%E6%BD%AD.html\":{\"title\":\"平潭四月\",\"contents\":[{\"header\":\"2023年四月\",\"slug\":\"_2023年四月\",\"contents\":[\" 去年八月去平潭看海，大太阳晒的掉皮，不过风景是真滴好看 对于特别喜欢看海的人不会放过每一次机会，于是今年四月我又来平潭了。\",\" ⭐猴研岛，68海里景区，大风下的猴研岛\",\" ⭐去北线的路上，照片裁成宽幅，挺有回忆的感觉，偶遇安徽老乡\",\" ⭐仙人井景区，后面的天气稍微好了一点，不过还是很大的风\",\" ⭐环岛路旁随便一拍都很好看\",\" ⭐长江澳风车田，看着大海就很爽\",\" ⭐北部湾生态长廊落日\",\" ⭐有新人在拍婚纱照\",\" ⭐晚霞映在海面上\",\"☀️下次还来！\"]}],\"customFields\":{\"0\":[\"摄影\"],\"1\":[\"平潭\",\"旅拍\"]}},\"/photo/\":{\"title\":\"拍拍\",\"contents\":[]},\"/java/1java/1java.html\":{\"title\":\"Java基础(上)\",\"contents\":[{\"header\":\"\",\"slug\":\"\",\"contents\":[\"提示\",\"知识点都是来自网络整理的，不保证完全正确\"]},{\"header\":\"JVM JRE JDK\",\"slug\":\"jvm-jre-jdk\",\"contents\":[\"JVM是java虚拟机，针对不同系统有不同的实现，常用的为HotSpot VM。\",\"JDK是功能齐全的SDK，包含JRE和一些其他的工具，例如javac，java等。\",\"JRE是Java运行时环境，仅包含Java应用程序运行时的必要环境。\"]},{\"header\":\"什么是字节码？采用字节码的好处？\",\"slug\":\"什么是字节码-采用字节码的好处\",\"contents\":[\"JVM能理解的代码就是字节码，字节码解决了传统解释语言运行效率低的问题，还具有很好的可移植性，一次编译，任何地方运行。\",\".java文件经过javac编译之后变成.class文件，.class通过解释器和JIT（运行时编译器）编译成机器可以理解的代码，JIT完成一次编译之后，就会将对应的机器码保存下来，之后复用，其中编译的是热点代码。所以Java也是编译与解释共存的语言。\"]},{\"header\":\"Java 和 C++ 的区别\",\"slug\":\"java-和-c-的区别\",\"contents\":[\"Java和C++都是面向对象的语言，都支持封装继承多态。\",\"Java不支持通过指针来直接访问内存，程序内存更加安全。\",\"Java的类是单继承的，C++支持多继承。\",\"Java有自动的垃圾回收机制，不需要手动释放内存。\"]},{\"header\":\"基本数据类型\",\"slug\":\"基本数据类型\",\"contents\":[\"Java有8种基本数据类型\",\"6种数字类型 \",\"4种整数类型：byte、short、int、long\",\"2种浮点数类型：float、double\",\"1种字符类型：char\",\"1种布尔类型：boolean\"]},{\"header\":\"基本类型和包装类型\",\"slug\":\"基本类型和包装类型\",\"contents\":[\"包装类型能用于泛型，而基本类型不可以。\",\"基本数据类型的局部变量存放在Java虚拟机栈中的局部变量表中（线程私有），基本数据类型的成员变量没有被static修饰的话放在堆中。而包装类型属于对象类型。\",\"包装类型占用的空间比基本类型要大。\",\"成员包装类型不赋值就是null，而基本类型有默认值并且不是null\",\"基本数据类型使用==进行比较，而包装类型通过equals()进行比较\",\"在HotSpot虚拟机中引入JIT优化之后，会对对象进行逃逸分析，如果对象的作用范围没有超过当前方法，则可能通过标量替换来实现栈（线程私有）上分配，避免堆上分配对象。\"]},{\"header\":\"包装类的缓存机制\",\"slug\":\"包装类的缓存机制\",\"contents\":[\"Byte,Short,Integer,Long 这 4 种包装类默认创建了数值 [-128，127] 的相应类型的缓存数据，8位补码的表示范围。\",\"Character创建了**[0，127] **范围的缓存数据，7位无符号数的表示范围，Boolean直接返回True或者是False。\"]},{\"header\":\"自动拆装箱\",\"slug\":\"自动拆装箱\",\"contents\":[\"装箱就是使用包装类的valueOf方法，拆箱就是使用xxValue方法。\",\"Integer i=10等价于Integer i = Integer.valueOf(10)\",\"int n = i 等价于int n = i.intValue()\"]},{\"header\":\"浮点数运算的时候会有精度丢失的风险？\",\"slug\":\"浮点数运算的时候会有精度丢失的风险\",\"contents\":[\"计算机组成原理第二章浮点加减法\"]},{\"header\":\"如何解决浮点数运算的时候精度丢失问题？\",\"slug\":\"如何解决浮点数运算的时候精度丢失问题\",\"contents\":[\"使用BigDecimal类进行浮点数运算，不会造成精度丢失问题\"]},{\"header\":\"超过long 64位补码的范围数字应该如何表示？\",\"slug\":\"超过long-64位补码的范围数字应该如何表示\",\"contents\":[\"通过BigInteger存储，BigInteger内部使用int[]存储任意大小的整型数据。\"]},{\"header\":\"变量\",\"slug\":\"变量\",\"contents\":[]},{\"header\":\"静态变量\",\"slug\":\"静态变量\",\"contents\":[\"静态变量就是被static修饰的变量，被static修饰的变量为类所共享的，无论创建了多少个类实例，这个变量都是共享的，只会分配一次内存，静态变量通过类名.进行访问。\",\"通常情况下被final修饰的static变量会成为常量。\"]},{\"header\":\"方法\",\"slug\":\"方法\",\"contents\":[]},{\"header\":\"静态方法为什么不能调用非静态成员？\",\"slug\":\"静态方法为什么不能调用非静态成员\",\"contents\":[\"静态方法属于类，在类加载的时候就会分配内存，通过类名直接访问，非静态方法属于实例对象，需要通过类的实例对象去调用。\",\"在类的非静态成员不存在的时候静态方法就已经存在，此时调用内存中不存在的非静态成员不合法。\"]},{\"header\":\"重载和重写\",\"slug\":\"重载和重写\",\"contents\":[\"重载就是对同一个方法根据输入的不同作出不同的方法处理。\",\"重写一般在子类继承父类，输入的数据一样，但是方法内的代码不同。\",\"重载\",\"重写\",\"重写发生在运行时，是子类对父类方法的实现过程重新编写\",\"方法名，参数列表必须相同，子类方法返回值类型比父类方法返回值类型更小或者是相等，子类抛出的异常应该小于或者等于父类，访问修饰符范围大于等于父类\",\"如果父类方法访问修饰符是private/final/static则子类不能重写方法，被static修饰的方法能被再次声明。\",\"构造方法无法被重写\"]}],\"customFields\":{\"0\":[\"Java\"],\"1\":[\"Java基础\",\"八股\"]}},\"/java/1java/\":{\"title\":\"Java基础\",\"contents\":[]}}}");self.onmessage=({data:o})=>{self.postMessage($(o.query,m[o.routeLocale]))};
//# sourceMappingURL=original.js.map
