"use client";

import { createContext, useState, useContext, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

type LoadingContextType = {
	setLoading: (value: boolean) => void;
	loading: boolean;
};

const LoadingContext = createContext<LoadingContextType>({
	setLoading: () => {},
	loading: false,
});

export function LoadingProvider({ children }: { children: React.ReactNode }) {
	const [loading, setLoading] = useState(false);
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const query = searchParams.toString();

	// Ha változik az URL, állítsuk le a loadingot
	useEffect(() => {
		setLoading(false);
	}, [pathname, query]);

	return (
		<LoadingContext.Provider value={{ loading, setLoading }}>
			{children}
		</LoadingContext.Provider>
	);
}

export const useLoading = () => useContext(LoadingContext);
