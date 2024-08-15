export const dateAgoCalculation = (date) => {
    if (!date) return "Invalid Date"; 
    try {
        const createdAt = new Date(date);
        const currentTime = new Date();
        const timeDifference = currentTime - createdAt;

        if (isNaN(timeDifference)) return "Invalid Date";

        const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        return daysAgo;
    } catch (error) {
        console.error("Error calculating date ago:", error);
        return "Invalid Date";
    }
};