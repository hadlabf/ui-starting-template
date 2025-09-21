import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Box } from "@/components/core/layouts/Box";
import { Stack } from "@/components/core/layouts/Stack";
import { Link } from "@/components/core/buttons/Link";
import { Title2 } from "@/components/core/typography/Title2";
import { Paragraph } from "@/components/core/typography/Paragraph";

const NotFound = () => {
	const location = useLocation();

	useEffect(() => {
		console.error("404 Error: User attempted to access non-existent route:", location.pathname);
	}, [location.pathname]);

	return (
		<Box width="100%">
			<Stack gap="sm" className="text-center">
				<Title2>404</Title2>
				<Paragraph color="secondary">Oops! Page not found</Paragraph>
				<Link href="/">Return to Home</Link>
			</Stack>
		</Box>
	);
};

export default NotFound;
