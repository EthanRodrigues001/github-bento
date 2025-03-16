interface FetchResponse {
  ok: boolean;
  statusText: string;
  arrayBuffer: () => Promise<ArrayBuffer>;
  headers: {
    get: (name: string) => string | null;
  };
}

export async function getImageBase64(url: string): Promise<string> {
  try {
    const response: FetchResponse = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.statusText}`);
    }
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const base64Image = buffer.toString("base64");
    return `data:${response.headers.get("content-type")};base64,${base64Image}`;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
