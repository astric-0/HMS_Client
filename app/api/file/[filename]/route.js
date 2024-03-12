import { HOME } from "@/config";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
	if (req.method == "GET") {
		try {
			console.log("Req: ", req.url);
			console.log("params: ", params);
			const { filename } = params;
			const response = await fetch(HOME.GET.FILE + filename);
			return res.sendFile(await response.blob());
		} catch (error) {
			return NextResponse.json({ error });
		}
	} else {
		console.log("not found else");
	}
}
