# AI Powered ChatBot AII520 Group 5

This project implements two conversational chatbot using Retrieval-Augmented Generation (RAG)- Azure OpenAI services and second model with GPT Model and bot UI using github.io . The chatbot is designed to assist users in finding information, particularly for the Stanford University dataset.

## Project Structure

- `notebooks/`
  - `RAG_ChatBot_AII520_Group5.ipynb`: Main notebook implementing the RAG chatbot.
- `standford_questioner_dataset/`
  - `dev-v1.1.json`: Development dataset.
  - `train-v1.1.json`: Training dataset.
- `README.md`: This file.

## Getting Started

### Prerequisites

- Python 3.x
- Jupyter Notebook
- Azure OpenAI API key

### Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    cd <repository-directory>
    ```
### Usage

1. Open the Jupyter Notebook:
    ```sh
    jupyter notebook notebooks/RAG_ChatBot_AII520_Group5.ipynb
    ```

2. Run the notebook cells to initialize the chatbot and start interacting with it.

### Example

```python
# Get the response from the conversational chat bot
response = conversational_rag_bot(user_input)

# Print the response
print("Bot:", response)
