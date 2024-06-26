// src/App.js
import { AuthProvider } from './contexts/authContext';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Register from './components/register/Register';
import VerifyEmail from './components/verifyEmail/verifyEmail';

function App() {
  const router = createBrowserRouter([
    {
      path: "*",
      element: <Login />,
    },
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/verify-email",
      element: <VerifyEmail />,
    },
    {
      path: "/home",
      element: <Home />,
    }
  ]);

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )

  // const [isLoading, setIsLoading] = useState(false);
  // const [allCards, setAllCards] = useState([]);
  // const [tcgCards, setTcgCards] = useState([]);

  // const handleSearch = async (searchTerm) => {
  //   setIsLoading(true);
  //   try {
  //     const tcgResponse = await fetch(`https://api.card-chasers.com/scrape_tcg_by_card_name?card_name=${encodeURIComponent(searchTerm)}`, {
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     });
  //     const tcgData = await tcgResponse.json();

  //     const allResponse = await fetch(`https://34.36.253.65/scrape_all_by_card_name?card_name=${encodeURIComponent(searchTerm)}`, {
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     });
  //     const allData = await allResponse.json();

  //     console.log('All data:', allData);
  //     console.log('TCG data:', tcgData);

  //     setAllCards(allData["results"]);
  //     setTcgCards(tcgData["results"]);

  //     // Update your state or handle the data as needed
  //   } catch (error) {
  //     console.error('Error fetching card data:', error);
  //   }
  //   setIsLoading(false);
  // };

  // return (
  //   <div className="app">
  //     <FirebaseAuth />
  //     <SearchBar onSearch={handleSearch} isLoading={isLoading} />
  //     {/* {isLoading && <span className="spinner"></span>} */}
  //     <div className="columns">
  //       <div className="column left-column">
  //         <h2>Local</h2>
  //         <CardList cards={allCards} />
  //       </div>
  //       <div className="column right-column">
  //         <h2>TCGPlayer</h2>
  //         <CardList cards={tcgCards} />
  //       </div>
  //     </div>
  //   </div>
  // );
}

export default App;
