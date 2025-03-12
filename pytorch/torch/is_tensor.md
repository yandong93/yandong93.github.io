# torch.is_tensor

`torch.is_tensor(obj, /)`

如果 obj 是一个 PyTorch 张量，则返回 True。

注意，此函数只是执行 isinstance(obj, Tensor) 操作。使用 isinstance 检查对于与 mypy 的类型检查更好，也更加明确——因此建议使用 isinstance 而不是 is_tensor。

**参数：**

* obj (object) – 需要测试的对象

**返回类型：**

* typing_extensions.TypeIs[Tensor]

示例：

```python
>>> x = torch.tensor([1, 2, 3])
>>> torch.is_tensor(x)
True
```