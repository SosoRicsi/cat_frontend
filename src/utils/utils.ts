export function shortText(htmlString: string, maxLength: number = 150): string {
	const plainText = htmlString.replace(/<[^>]+>/g, ""); // eltávolítja a tageket
	return plainText.length > maxLength
		? plainText.substring(0, maxLength) + "..."
		: plainText;
}