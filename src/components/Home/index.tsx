import { useState } from "react";
import useDictionary from "../../hooks/useDictionary";
import Layout from "../common/Layout";
import Input from "../../ui/Input";
import Button from "../../ui/Button";

const Index = () => {
  const { getWord } = useDictionary();
  const [search, setSearch] = useState("");
  const [definition, setDefination] = useState("");

  const handleClick = () => {
    const res = getWord(search);
    if (res.length > 0) {
      setDefination(res[0].meaning);
    }
  };
  return (
    <Layout>
      <div className="search_section">
        <Input
          id="search"
          name="search"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for a word..."
        />
        <Button onClick={handleClick} label="Search" />
      </div>
      <h3 className="word_text">Definition:</h3>
      <p className="definition">
        {definition ? definition : "Word not found in the dictionary."}
      </p>
    </Layout>
  );
};

export default Index;
