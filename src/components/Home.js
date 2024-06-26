import React from 'react'
import '/Users/dakshgupta/Desktop/cikm-2024/src/components/Home.css'
import Image1 from '/Users/dakshgupta/Desktop/cikm-2024/src/Images/web.jpeg'
function Home() {
  return (
    <div>
        <img className="home-image" src={Image1} alt='CIKM'/>
      <h1 className='head'>The 2024 CIKM Workshop on Multimodal Search and Recommendations </h1>
      <section className='overview'>
        <h2>Overview</h2>
        <p>
        With the advent of multimodal LLMs like GPT and Gemini and release of open-source multimodal
models, the potential for multimodal search and recommendations has significantly increased.
While traditional search engines often augment user queries with session and geographical data,
they primarily rely on textual queries. In contrast, multimodal systems offer next-gen customer
experience by creating a shared embedding space for text, images, audio, etc. These advancements
enable more accurate, personalized recommendations, enhancing user satisfaction and
engagement. This workshop explores the latest advancements, challenges, and applications of
multimodal search and recommendations through keynotes, presentations and a panel discussion.
        </p>
        <h2>Themes</h2>
        <p>
          <b>Theme:</b> "Transforming Search and Recommendations with Multimodal Approaches"<br />
          Topics of interest include, but are not limited to:<br />
          1. Cross-modal retrieval techniques<br />
          a. Strategies for efficiently indexing and retrieving multimodal data.<br />
          b. Approaches to ensure cross-modal retrieval systems can handle large-scale data.<br />
          c. Development of metrics to measure similarity across different data modalities.<br />
          2. Applications of Multimodal Search and Recommendations to Verticals (e.g. E-commerce,
          real estate)<br />
          a. Implementing and optimizing image-based product searches.<br />
          b. Creating multimodal conversational systems to enhance user experience and make
          search more accessible.<br />
          c. Utilizing AR to enhance product discovery and user interaction.<br />
          d. Leveraging multimodal search for efficient customer service and support.<br />
          3. User-centric design principles for multimodal search interfaces<br />
          a. Best practices for designing user-friendly interfaces that support multimodal
          search.<br />
          b. Methods for evaluating the usability of multimodal search interfaces.<br />
          c. Personalizing multimodal search interfaces to individual user preferences.<br />
          d. Ensuring multimodal search interfaces are accessible to users with disabilities.<br />
          4. Ethical Considerations and Privacy Implications of Multimodal Search and
          Recommendations<br />
          a. Strategies for ensuring user data privacy in multimodal applications.<br />
          b. Identifying and mitigating biases in multimodal algorithms.<br />
          c. Ensuring transparency in how multimodal results are generated and presented.<br />
          d. Approaches for obtaining and managing user consent for using their data.<br />
          5. Modeling for Multimodal Search and Discovery<br />
          a. Multi-modal representation learning<br />
          b. Utilizing GPT-4o, Gemini, and other advanced pre-trained multimodal LLMs<br />
          c. Dimensionality reduction techniques to reduce complexity of multimodal data.<br />
          d. Techniques for fine-tuning pre-trained vision-language models.<br />
          e. Developing and standardizing metrics to evaluate the performance of vision-
          language models in multimodal search.<br />
        </p>
      </section>
      <section className='important-dates'>
        <h2>Important Dates</h2>
        <p>
            <b>Paper submission deadline:</b>&nbsp;&nbsp;&nbsp;&nbsp;July 29, 2024 (11:59 PM AoE)<br/>
            <b>Notification of acceptance:</b> &nbsp;&nbsp;&nbsp;&nbsp;August 30, 2024<br/>
            <b>Camera Ready Version of Papers Due:</b>&nbsp;&nbsp;&nbsp;&nbsp;September 30, 2024<br/>
            <b>MMSR '24 Workshop:</b>&nbsp;&nbsp;&nbsp;&nbsp;October 25, 2024<br/>
        </p>
      </section>
    </div>
  )
}

export default Home
