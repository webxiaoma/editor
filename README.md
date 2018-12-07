# 常见问题

1. 按钮需要用`a`标签活`button`元素才可以触发`execCommand`



2. 在` contentEditable="true"` 的富文本框中按回车会以`div`进行分隔[解决](https://www.jianshu.com/p/5997a90aab64)

3. 在使用`execCommand` 中的`formatBlock` 后，回车分隔元素又变成了`div`（未解决）



4. 当我们调用 `document.execCommand("insertUnorderedList", false, null)` 来插入一个列表的时候，新的列表会被插入<p>标签中。[解决](https://www.jianshu.com/p/5997a90aab64)