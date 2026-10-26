# 逻辑语言与证明

> **出处**：标准逻辑教材；Wikipedia: Propositional calculus、First-order logic。

> **前置**：无。  
> **本章的目标**：先学会“数学句子怎样写、怎样否定、怎样证明”，再进入具体对象。

## 1.1 命题与逻辑联结词 {#logic-propositions}

**命题**是一个有明确真值的陈述句。疑问句、命令句、含未定变量的句子本身不是命题。

| 联结词 | 符号 | 读法 | 何时为真 |
|---|---|---|---|
| 否定 | \(\neg P\) | 非 \(P\) | \(P\) 为假时 |
| 合取 | \(P \land Q\) | \(P\) 且 \(Q\) | 两者都真 |
| 析取 | \(P \lor Q\) | \(P\) 或 \(Q\) | 至少一个真（数学的“或”通常包含两者都真） |
| 蕴含 | \(P \to Q\) | 若 \(P\) 则 \(Q\) | 只有 \(P\) 真、\(Q\) 假时为假 |
| 等价 | \(P \leftrightarrow Q\) | \(P\) 当且仅当 \(Q\) | 两者真值相同 |

**易错点**

- \(P \to Q\) 不表示“\(P\) 是 \(Q\) 的原因”，只表示真值关系。
- \(P \to Q\) 与 \(Q \to P\) 不等价；前者是后者的**逆命题**。
- \(\neg(P \land Q)\) 不是 \(\neg P \land \neg Q\)，而是 \(\neg P \lor \neg Q\)（De Morgan）。

## 1.2 谓词与量词 {#logic-quantifiers}

**谓词**是含变量的陈述，例如 \(P(x)\)：“\(x\) 是偶数”。给变量指定范围后，它才成为命题。

| 量词 | 符号 | 读法 | 否定 |
|---|---|---|---|
| 全称 | \(\forall x \in S,\ P(x)\) | 对所有 \(x\) 属于 \(S\)，\(P(x)\) | \(\exists x \in S,\ \neg P(x)\) |
| 存在 | \(\exists x \in S,\ P(x)\) | 存在 \(x\) 属于 \(S\)，使 \(P(x)\) | \(\forall x \in S,\ \neg P(x)\) |

**量词顺序不能随意交换**：

\[
\forall \varepsilon>0\ \exists N\ \forall n>N:\ |a_n-a|<\varepsilon
\]

与

\[
\exists N\ \forall \varepsilon>0\ \forall n>N:\ |a_n-a|<\varepsilon
\]

含义完全不同。前者是“收敛”，后者要求“从某一项起所有项都等于 \(a\)”。

**否定练习**：否定“对每个 \(\varepsilon>0\)，存在 \(N\)，使对所有 \(n>N\)，\(|a_n-a|<\varepsilon\)”。

答案：存在 \(\varepsilon>0\)，使得对每个 \(N\)，都存在 \(n>N\)，满足 \(|a_n-a|\ge \varepsilon\)。

## 1.3 定义、公理、定理

| 词 | 作用 | 例子 |
|---|---|---|
| 原始概念 | 不定义，只约定用法 | 集合、属于 |
| 定义 | 用已有概念精确规定一个新对象 | “若 \(f(x_1)=f(x_2)\) 推出 \(x_1=x_2\)，称 \(f\) 为单射” |
| 公理 | 作为出发点的假设 | Peano 公理、选择公理 |
| 定理 | 由公理、定义和已证结论推出的命题 | 勾股定理、中值定理 |
| 引理 | 为证明主要定理服务的小结论 | Zorn 引理 |
| 推论 | 由定理直接得到的结论 | 由中值定理推出单调性判定 |

**定义必须可判定**：不能把“好的”“自然的”“足够大”写进定义而不量化。

## 1.4 基本证明方法 {#logic-proofs}

| 方法 | 适用情形 | 结构 |
|---|---|---|
| 直接证明 | 要证 \(P \to Q\) | 假设 \(P\)，推出 \(Q\) |
| 逆否证明 | 直接推 \(Q\) 困难 | 证 \(\neg Q \to \neg P\) |
| 反证法 | 假设结论不成立会矛盾 | 假设 \(\neg Q\)，推出矛盾 |
| 分类讨论 | 对象按情形分裂 | 证明每种情形都成立，且情形穷尽 |
| 存在性证明 | 要证 \(\exists x,\ P(x)\) | 构造一个 \(x\)，或非构造地证明不能不存在 |
| 唯一性证明 | 要证“存在且唯一” | 先证存在，再证任意两个满足条件的对象相等 |

**反例**：要否定 \(\forall x,\ P(x)\)，只需给出一个 \(x\) 使 \(\neg P(x)\)。反例必须**具体**，不能只说“可能不成立”。

## 1.5 推理检查 {#logic-check}

证明写完后，检查四件事：

1. **条件用了吗？** 假设中的每个条件是否在证明中发挥作用；
2. **范围对吗？** 变量是否在正确的集合中；
3. **等号/不等号方向对吗？** 不等式两边乘负数是否变号；
4. **有没有循环？** 是否用结论证明结论，或用等价于结论的命题作为前提。

> 数学归纳法不放在这里系统展开，因为它需要先建立自然数结构；见数系。


## 1.6 常用等值式

| 等值式 | 名称 |
|---|---|
| \(\neg(P\land Q)\equiv\neg P\lor\neg Q\) | De Morgan |
| \(\neg(P\lor Q)\equiv\neg P\land\neg Q\) | De Morgan |
| \(P\to Q\equiv\neg P\lor Q\) | 蕴含的析取形式 |
| \(\neg(P\to Q)\equiv P\land\neg Q\) | 蕴含的否定 |
| \(P\to Q\equiv\neg Q\to\neg P\) | 逆否 |
| \(\neg\forall x\,P(x)\equiv\exists x\,\neg P(x)\) | 量词否定 |
| \(\neg\exists x\,P(x)\equiv\forall x\,\neg P(x)\) | 量词否定 |

**证明等值式的方法**：列真值表；或用已知等值式作代数变形。真值表是命题逻辑的判定方法，但变量多时规模指数增长。

## 1.7 可靠性与完备性

把“可证明”记为 \(\vdash\varphi\)，“在所有解释下为真”记为 \(\models\varphi\)。

- **可靠性（soundness）**：若 \(\vdash\varphi\)，则 \(\models\varphi\)。证明系统不会推出假命题。
- **完备性（completeness）**：若 \(\models\varphi\)，则 \(\vdash\varphi\)。所有逻辑有效的命题都能被证明。

命题逻辑和一阶逻辑都有可靠性与完备性定理；一阶逻辑的完备性由 Gödel 在 1929 年证明。这里只使用“可证明/有效”的区别，不展开证明系统与模型论的细节。

**本站证明状态**：命题等值式与量词否定有[完整证明](proofs.md#proof-logic)；可靠性与完备性[暂缓证明](proofs.md#proof-logic)，需证明系统与模型论。

> **注意**：完备性（completeness）与“理论对某个模型完备”（每个句子或其否定可证）不是同一个概念；后者属于模型论/不完全性定理的语境。

## 1.8 参考

- [Propositional calculus](https://en.wikipedia.org/wiki/Propositional_calculus)
- [First-order logic](https://en.wikipedia.org/wiki/First-order_logic)
- [Mathematical proof](https://en.wikipedia.org/wiki/Mathematical_proof)
- [Soundness](https://en.wikipedia.org/wiki/Soundness)
- [Completeness (logic)](https://en.wikipedia.org/wiki/Completeness_(logic))

## 检查点

- 能写出 \(P \to Q\) 的真值表，并说明“假命题蕴含任何命题”为什么不影响数学证明。
- 能正确否定带两个量词的命题。
- 能区分“逆命题”“否命题”“逆否命题”。
- 能给出一个“存在但不唯一”的例子，并说明唯一性证明缺了什么。
