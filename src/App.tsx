import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SpaDetailPage from "src/components/SpaDetailPage";
import SpaEntryPage from "src/components/SpaEntryPage";
import { ApolloProvider } from "@apollo/client";
import client from "src/apollo-client";
import { Spas } from "src/components/spa/Spas";
import { DefaultHeader } from "src/components/commons/Header";

const App = () => {
  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <DefaultHeader />

          <Routes>
            <Route path="/" element={<Spas />} />
            <Route path="createNewSpa/*" element={<SpaEntryPage />} />
            <Route path="spadetail/*" element={<SpaDetailPage />} />
          </Routes>
        </Router>
      </ApolloProvider>
    </>
  );
};

export default App;
