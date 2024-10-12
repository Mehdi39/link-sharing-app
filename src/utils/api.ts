export async function getUserProfile() {
    try {
        const response = await fetch("/api/auth/profile", {
            method: "GET",
            credentials: "include", // Include cookies for authentication
        });

        if (!response.ok) {
            throw new Error("Failed to fetch user profile");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching user profile:", error);
        throw error;
    }
}
