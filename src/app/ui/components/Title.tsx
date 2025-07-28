export default function Title({ title }: { title: string }) {
	return (
		<div className="mb-8">
			<h3 className="text-2xl font-bold text-slate-900 mb-2">{title}</h3>
			<div className="w-20 h-1 bg-slate-800"></div>
		</div>
	);
}
