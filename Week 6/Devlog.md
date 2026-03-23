# Weekly Reflection

## What I Worked On

- Watched Karpathy's video on building a GPT from scratch
- Reproduced GPT-2 level performance from scratch for under $100 using the nanochat framework and cloud-hosted H100s.
- Running smaller models locally
- Linked lists

---

## What I Learned

### The code to build a model isn't thousands of lines

I remember in the beginning of the fellowship the first video we watched Karpathy said LLMs are usually a parameters file and a run file that is usually around 500 lines of code and in the video he built a GPT in it wasnt thousands of lines

### There are ways to either train, fine-tune, or run LLMs if you don't have the technology yourself and it can be done for a fraction of the cost

Most of us don't have the compute needed to do a training run but we were able to use Nebius' compute to complete the speedrun and then run the models we just trained. I was able to do all of that which just a couple of years ago would cost $43,000 for about $50 on a 2016 macbook.

### Finding compute is becoming more and more tough

Securing access to H100 GPUs has proven challenging in today's AI landscape. As demand for AI compute continues to surge, we encountered significant difficulties finding providers willing to offer these resources. The current market dynamics have created a competitive environment where companies without existing infrastructure are outbidding smaller developers and consumers for access to advanced hardware.

### Running my own models

-I had to learn how your ram ties in with what models you can run parameter wise
-The environments you can run models in Browser:WebGL, Command Line:Ollama, GUI:ML studio
-How developers are able to take these big models and compress them to be small enough to run on consumer hardware:Quantization, mamba architecture
-When and when not to use thinking mode on these smaller models

---

## What Went Well

- We eventually found a provider to give us access to their GPUS
- Went through a training run of a model
- Got a bunch of models running locally
- Learned about accessing GPU's virtually incase I need or want to do so in the future

---

## What I Could Do Better

- Didn't do any interview prep this week

---
