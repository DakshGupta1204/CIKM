import React from "react";
import '/Users/dakshgupta/Desktop/cikm-2024/src/components/call.css'
import Image2 from '/Users/dakshgupta/Desktop/cikm-2024/src/Images/web2.jpeg'
function Call() {
  return (
    <div className="call-main">
        <img className="call-image" src={Image2} alt="image"/>
      <h1>Call For Papers</h1>
      <p>
        We invite quality research contributions, position and opinion papers
        addressing relevant challenges in the domain of eCommerce. We invite
        submission of papers and posters representing original research,
        preliminary research results, proposals for new work, position and
        opinion papers. All submitted papers and posters will be single-blind
        and will be peer reviewed by an international program committee of
        researchers of high repute. Accepted submissions will be presented at
        the workshop.
      </p>
      <h1>Topics</h1>
      <p>
        Topics of interest include, but are not limited to:
        <br />
        <b>eCommerce search in the age of Generative AI and LLMs (2024 special theme)</b>
        <br />
        <b>Ranking and Whole Page Relevance</b>
        <br />
        - Optimization for IR and business metrics
        <br />
        - Diversity in product search and recommendations
        <br />
        - Relevance models for multi-faceted entities
        <br />
        - The balance between business requirements and customer requirements (revenue vs. relevance)
        <br />
        - Ranking features and learning mechanisms (textual, image, structured data, customer behavior, reviews, ratings, social signals, etc.)
        <br />
        - Deterministic sorts (e.g. price low to high)
        <br />
        - Temporal dynamics and seasonality
        <br />
        <b>Query Understanding</b>
        <br />
        - Query intent, query suggestions, and auto-completion
        <br />
        - Strategies for resolving low or zero recall queries
        <br />
        - Converting across modalities (e.g. text, structured data, images)
        <br />
        <b>Document Understanding</b>
        <br />
        - Categorization and facets
        <br />
        - Reviews and sentiment analysis
        <br />
        <b>Recommendation and Personalization</b>
        <br />
        - Personalization & contextualization, including the use of personal facets such as age, gender, location
        <br />
        - Blending recommendations and search results
        <br />
        <b>Representations and Data</b>
        <br />
        - Semantic representation of products, queries, and customers
        <br />
        - Construction and use of knowledge graphs for eCommerce
        <br />
        - Foundation models in eCommerce
        <br />
        <b>IR Fundamentals for eCommerce</b>
        <br />
        - Cross-lingual search and machine translation
        <br />
        - Machine learning techniques for eCommerce applications
        <br />
        - Indexing and search in rapidly changing environments (e.g. auction sites)
        <br />
        - Experimentation techniques including AB testing and Multi-armed bandits
        <br />
        <b>Other Topics</b>
        <br />
        - Trust and fairness in eCommerce
        <br />
        - UX for eCommerce
        <br />
        - The role of search in trust and security for marketplaces
        <br />
        - Question answering and chat bots for eCommerce
      </p>
    </div>
  );
}

export default Call;
