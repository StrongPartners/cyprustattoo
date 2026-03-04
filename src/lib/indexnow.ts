/**
 * IndexNow API helper for Next.js
 * Documentation: https://www.bing.com/indexnow/getstarted
 */

const INDEXNOW_KEY = "9a2a657d614a4a2d958b969e9d9451b2";
const HOST = "cyprustattoo.ink"; // Projenizin domaini

export async function submitToIndexNow(urlList: string[]) {
    const payload = {
        host: HOST,
        key: INDEXNOW_KEY,
        keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
        urlList: urlList,
    };

    try {
        // IndexNow protokolü api.indexnow.org üzerinden de çalışabilir
        const response = await fetch("https://api.indexnow.org/IndexNow", {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify(payload),
        });

        if (response.ok) {
            console.log("IndexNow successfully notified:", urlList);
            return { success: true, status: response.status };
        } else {
            const errorText = await response.text();
            console.error("IndexNow notification failed:", response.status, errorText);
            return { success: false, status: response.status, error: errorText };
        }
    } catch (error) {
        console.error("Error sending IndexNow request:", error);
        return { success: false, error };
    }
}
