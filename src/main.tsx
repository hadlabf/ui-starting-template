import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import App from "./App.tsx";
import { theme } from "./lib/theme/theme.ts";
import "./lib/theme/types.ts";

createRoot(document.getElementById("root")!).render(
	<ThemeProvider theme={theme}>
		<App />
	</ThemeProvider>
);
