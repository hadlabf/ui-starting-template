import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import { Page } from "./pages/Page/Page";

const queryClient = new QueryClient();

const App = () => (
	<QueryClientProvider client={queryClient}>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Page />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	</QueryClientProvider>
);

export default App;
