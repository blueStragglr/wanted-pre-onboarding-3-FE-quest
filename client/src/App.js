import PagesContext from "./contexts/PagesContext";
import Router from "./router/Router";

function App() {
  const pagesContext = require.context("./pages/products", true, /\.jsx$/);

  // 가져온 페이지들을 반복문으로 순회
  let pageComponents = [];
  pagesContext.keys().forEach((pagePath) => {
    pageComponents.push(pagesContext(pagePath).default);
  });

  return (
    <PagesContext.Provider value={{ pageComponents }}>
      <Router />
    </PagesContext.Provider>
  );
}

export default App;
