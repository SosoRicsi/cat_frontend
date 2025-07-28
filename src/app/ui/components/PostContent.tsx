"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function PostContent({ content }: { content: string }) {
	useEffect(() => {
		AOS.init();
	}, []);

	return <div id="post_content" dangerouslySetInnerHTML={{ __html: content }} />;
}
