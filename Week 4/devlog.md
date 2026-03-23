# Weekly Reflection

## What I Worked On

- Read the paper "ImageNet Classification with Deep Convolutional Neural Networks"
- Practiced binary search problems
- Figured out how I want to approach logging
- Worked through fast.ai Lesson 4 on NLP
- Fine-tuned a Fast-FLUX model on Replicate using LoRA and generated a couple of cool pictures

---

## What I Learned

### NLP (Natural Language Processing)

I learned more about what happens under the hood in NLP. Text is first split into tokens through tokenization, and then those tokens are converted into numbers through numericalization. Those numbers are then passed into the model so it can learn patterns and fine-tune itself for a task.

One big takeaway for me is that whatever you give a model — whether it is text or an image — it eventually gets broken down into numbers, because computers work best with numeric data. Based on what we have learned so far, I assume something similar also happens with audio and video.

### LoRA (Low-Rank Adaptation)

LoRA is a way to fine-tune a model efficiently without changing all of its weights. Instead of retraining the entire model or making huge changes, LoRA allows you to train a smaller set of changes that can customize the model for your specific use case.

### Image Classification

I learned that images are converted into tensors of pixel values, which is similar to the matrices we learned about last week.

I also learned about data augmentation. Data augmentation is when you take a training image and make small changes that do not affect its label, then train the model on those altered versions as well. This helps the model learn the object itself instead of memorizing one exact image.

For example, if there is a picture of a dog on the left side of an image, you would still want the model to recognize a dog if it appears in the center or on the right side. This matters because if the model only recognizes dogs in one specific position, then it has learned the training data too specifically and is overfitting instead of generalizing.

---

## What Went Well

- I made it through another academic paper, and I am getting more comfortable with the fact that it takes a lot of time to work through these papers well
- I am getting better about asking myself questions and using ChatGPT to help me understand difficult parts of what I am reading
- I know exactly how I want to implement my ticket
- One thing I learned this week is that models are good with numbers, and if you can convert something into numbers, it becomes easier for a model to process
- I took the web app off Replicate and moved it into a Node app, and I also learned the difference between a buffer and a stream
  -I feel really comfortable with Binary Search

---

## What I Could Do Better

- Set aside more time than I think I will need for coding tasks
- Be more intentional about leaving time for networking and reflection during the week

---

## Networking

I did not get to do much networking outside of sending cold messages on LinkedIn this week.
