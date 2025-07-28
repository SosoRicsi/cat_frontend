const { spawn } = require("child_process");

console.log("💡 Next.js szerver indtása...");

const next = spawn("npm", ["start"], {
	stdio: "inherit", // Ez a kulcs: örökli a parent stdout/stderr-t
	shell: true
});

next.on("exit", (code) => {
	console.log(`⚠️ Next.js leállt a(z) ${code} kilépési kóddal.`);
});

next.on("error", (err) => {
	console.error("❌ Nem sikerült elindítani a Next.js-t:", err);
});
