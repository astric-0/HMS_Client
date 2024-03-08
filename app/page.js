import { HOME } from "@/config";
import { FileList } from "@/components/";
import FileProvider from "@/contexts/FileProvider";

export default async function Home() {
	const response = await fetch(HOME.GET.FILES);
	const { data: filenames } = await response.json();
	return (
		<main className="grid grid-cols-12 h-screen">
			<FileList {...{ filenames }} />
		</main>
	);
}
