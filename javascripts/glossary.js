/* Mathematics glossary: expand only stable abbreviations, never conceptual
   terms. Skips headings, code, links, tables, formulas and the glossary pages. */
const MATH_GLOSSARY = {
  "ZF": {
    full: "Zermelo–Fraenkel set theory",
    zh: "不含选择公理的集合论公理系统",
    en: "the Zermelo–Fraenkel axioms without Choice"
  },
  "ZFC": {
    full: "Zermelo–Fraenkel set theory with Choice",
    zh: "加入选择公理的 ZF",
    en: "Zermelo–Fraenkel set theory with the Axiom of Choice"
  },
  "AC": {
    full: "Axiom of Choice",
    zh: "选择公理",
    en: "the axiom that every family of nonempty sets admits a choice function"
  },
  "CH": {
    full: "Continuum Hypothesis",
    zh: "连续统假设",
    en: "the hypothesis that \(2^{\\aleph_0}=\\aleph_1\)"
  },
  "PMI": {
    full: "Principle of Mathematical Induction",
    zh: "数学归纳法原理",
    en: "the principle of mathematical induction"
  },
  "WOP": {
    full: "Well-Ordering Principle",
    zh: "良序原理",
    en: "the principle that every nonempty set of natural numbers has a least element"
  },
  "LUB": {
    full: "Least Upper Bound",
    zh: "上确界",
    en: "the least upper bound (supremum)"
  },
  "IVT": {
    full: "Intermediate Value Theorem",
    zh: "介值定理",
    en: "the intermediate value theorem"
  },
  "EVT": {
    full: "Extreme Value Theorem",
    zh: "极值定理",
    en: "the extreme value theorem"
  },
  "MVT": {
    full: "Mean Value Theorem",
    zh: "中值定理",
    en: "the mean value theorem"
  },
  "FTC": {
    full: "Fundamental Theorem of Calculus",
    zh: "微积分基本定理",
    en: "the fundamental theorem of calculus"
  },
  "MCT": {
    full: "Monotone Convergence Theorem",
    zh: "单调收敛定理",
    en: "the monotone convergence theorem"
  },
  "DCT": {
    full: "Dominated Convergence Theorem",
    zh: "控制收敛定理",
    en: "the dominated convergence theorem"
  },
  "LDCT": {
    full: "Lebesgue Dominated Convergence Theorem",
    zh: "Lebesgue 控制收敛定理",
    en: "the Lebesgue dominated convergence theorem"
  },
  "PID": {
    full: "Principal Ideal Domain",
    zh: "主理想整环",
    en: "a principal ideal domain"
  },
  "UFD": {
    full: "Unique Factorization Domain",
    zh: "唯一分解整环",
    en: "a unique factorization domain"
  },
  "CRT": {
    full: "Chinese Remainder Theorem",
    zh: "中国剩余定理",
    en: "the Chinese remainder theorem"
  },
  "DLP": {
    full: "Discrete Logarithm Problem",
    zh: "离散对数问题",
    en: "the discrete logarithm problem"
  },
  "TVS": {
    full: "Topological Vector Space",
    zh: "拓扑向量空间",
    en: "a topological vector space"
  },
  "BCT": {
    full: "Baire Category Theorem",
    zh: "Baire 纲定理",
    en: "the Baire category theorem"
  },
  "RKHS": {
    full: "Reproducing Kernel Hilbert Space",
    zh: "再生核 Hilbert 空间",
    en: "a reproducing kernel Hilbert space"
  },
  "ODE": {
    full: "Ordinary Differential Equation",
    zh: "常微分方程",
    en: "an ordinary differential equation"
  },
  "PDE": {
    full: "Partial Differential Equation",
    zh: "偏微分方程",
    en: "a partial differential equation"
  }
};

(function () {
  function esc(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }

  function expand() {
    var path = location.pathname;
    if (path === "/Mathematics/" || path === "/Mathematics" || path === "/Mathematics/en/" || path === "/Mathematics/en") return;
    if (/\/(glossary|abbreviations|sources)\//.test(path)) return;

    var root = document.querySelector(".md-typeset");
    if (!root || root.dataset.glossaryDone || !root.querySelector("h1, p")) return;
    root.dataset.glossaryDone = "1";

    var lang = (document.documentElement.lang || "zh").toLowerCase().indexOf("en") === 0 ? "en" : "zh";
    var skip = {CODE: 1, PRE: 1, H1: 1, H2: 1, H3: 1, H4: 1, H5: 1, H6: 1, A: 1, TD: 1, TH: 1, BLOCKQUOTE: 1, SCRIPT: 1, STYLE: 1, "MJX-CONTAINER": 1};

    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (node) {
        var p = node.parentElement;
        while (p && p !== root) {
          if (skip[p.tagName] || (p.classList && p.classList.contains("arithmatex"))) return NodeFilter.FILTER_REJECT;
          p = p.parentElement;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    });

    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);

    var terms = Object.keys(MATH_GLOSSARY).sort(function (a, b) { return b.length - a.length; });
    var rx = new RegExp("(?<![A-Za-z0-9])(" + terms.map(esc).join("|") + ")(?![A-Za-z0-9])", "g");
    var done = Object.create(null);

    nodes.forEach(function (node) {
      var text = node.nodeValue;
      if (!text || text.length < 2) return;
      var out = "", last = 0, m;
      rx.lastIndex = 0;
      while ((m = rx.exec(text)) !== null) {
        var term = m[1];
        if (done[term] || !MATH_GLOSSARY[term]) continue;
        var start = m.index, end = start + term.length;
        var before = text.slice(0, start), after = text.slice(end);
        if (/^\s*[（(]/.test(after) || /[（(]\s*$/.test(before)) continue;
        // Already inside an explanatory parenthesis, e.g. "（Axiom of Choice, AC）".
        var zhOpen = before.lastIndexOf("（"), zhClose = before.lastIndexOf("）");
        var enOpen = before.lastIndexOf("("), enClose = before.lastIndexOf(")");
        if (zhOpen > zhClose || enOpen > enClose) continue;
        var info = MATH_GLOSSARY[term];
        if (lang === "zh") {
          out += text.slice(last, start) + term + "（" + info.full + "，" + info.zh + "）";
        } else {
          out += text.slice(last, start) + term + " (" + info.full + ", " + info.en + ")";
        }
        last = end;
        done[term] = true;
      }
      if (last) {
        out += text.slice(last);
        node.nodeValue = out;
      }
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", expand);
  else setTimeout(expand, 0);
  window.addEventListener("load", expand);
  if (typeof document$ !== "undefined") document$.subscribe(expand);
})();
