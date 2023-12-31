# -*- coding: utf-8 -*-
"""LLAMA2loaded-in.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1ueWwq6ayMMu5BkrQjofnrbz5NHBBKDSb
"""

!CMAKE_ARGS="-DLLAMA_CUBLAS=on" FORCE_CMAKE=1 pip install llama-cpp-python==0.1.78 numpy==1.23.4 --force-reinstall --upgrade --no-cache-dir --verbose
!pip install huggingface_hub
!pip install llama-cpp-python==0.1.78
!pip install numpy==1.23.4

model_name_or_path = "TheBloke/Llama-2-13B-chat-GGML"
model_basename = "llama-2-13b-chat.ggmlv3.q5_1.bin"

from huggingface_hub import hf_hub_download
from llama_cpp import Llama

model_path = hf_hub_download(repo_id=model_name_or_path, filename=model_basename)

lcpp_llm = None
lcpp_llm = Llama(
    model_path=model_path,
    n_threads=2,
    n_batch=512,
    n_gpu_layers=32
    )

prompt = "What are the most common german words"
prompt_template=f'''SYSTEM: You are a language tutor that teaches german. Answer the questions of the users helpfully.

USER: {prompt}

ASSISTANT:
'''

response=lcpp_llm(prompt=prompt_template, max_tokens=256, temperature=0.5, top_p=0.95,
                  repeat_penalty=1.2, top_k=150,
                  echo=True)

print(response["choices"][0]["text"])