# NextJS-based RAG App For Flirting Text Generation

This NextJS web app, named Rizz Up, allows online users to upload files of their texts with another person and generates perfect romantic responses to engage the partner. Text files are embedded into vectors, allowing for retrieval augmented generation based on context of files. Made in submission for CloudHacks 2024. Features include:
* **User authentication and registration:** Users can sign up for an account through ClerkJS
* **User friendly interface:** Easy-to-use interface for chatting and uploading files
* **Chat feature:** Ability to talk to GPT within given context of previous texts

## Getting Started

To visit the deployed version of this website, you may check out https://nusgrapevine.netlify.app. Otherwise, to get a local copy up and running, note the prerequisites and follow these steps.

### Prerequisites

- [ ] React
- [ ] Typescript
- [ ] NPM
- [ ] Git and Github
- [ ] AWS, Pinecone and OpenAI API Keys
- [ ] Any code editor (VSC, Brackets, etc)

### Instructions
1. Open terminal
2. Navigate to your desired location to place this repository
3. Copy and paste the following code into the terminal: git clone https://github.com/jayjay19630/rizz-up
4. Run `cd rizz-up`
5. Run `npm install`
6. Run `cp .env.local.template .env.local`
7. Set up appropriate keys in `.env.local`. Setup AWS S3 buckets, Pinecone DBs if haven't already.
8. Run `npm run dev`
9. Open http://localhost:3000 to view the app
