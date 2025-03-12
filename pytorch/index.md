# torch

torch 包含了用于多维张量的数据结构，并定义了这些张量上的数学运算。此外，它还提供了许多实用工具，用于高效地序列化张量和任意类型，以及其他有用的工具。

它有一个CUDA版本，使你能够在计算能力大于等于3.0的NVIDIA GPU上运行你的张量计算。

## Tensors

* [is_tensor](./torch/is_tensor.md): 如果 obj 是一个 PyTorch 张量，则返回 True。